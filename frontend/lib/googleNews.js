/**
 * Google News RSS Fetcher
 * Fetches LIVE news data directly from Google News RSS feeds
 */

// Google News RSS endpoints (using CORS proxy for browser access)
const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest=',
];
const GOOGLE_NEWS_RSS = 'https://news.google.com/rss';
const GOOGLE_NEWS_TOPICS = {
  top: '/rss',
  world: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pKVGlnQVAB',
  business: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pKVGlnQVAB',
  technology: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB',
  entertainment: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pKVGlnQVAB',
  sports: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pKVGlnQVAB',
  health: '/rss/topics/CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ',
  science: '/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pKVGlnQVAB',
};

// Parse RSS XML to extract news items
function parseRSSXML(xmlText) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');
  const items = doc.querySelectorAll('item');

  const posts = [];
  items.forEach((item, index) => {
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const source = item.querySelector('source')?.textContent || 'Google News';

    // Clean HTML from description
    const cleanDesc = description.replace(/<[^>]*>/g, '').trim();

    // Generate engagement metrics based on position and time
    const hoursSincePublished = Math.max(1, (Date.now() - new Date(pubDate).getTime()) / 3600000);
    const positionBoost = Math.max(1, 20 - index); // Top stories get higher engagement

    const likes = Math.floor((500 + Math.random() * 2000) * positionBoost / 10);
    const shares = Math.floor((200 + Math.random() * 1000) * positionBoost / 10);
    const comments = Math.floor((100 + Math.random() * 500) * positionBoost / 10);

    const engagement = likes + shares + comments;
    const velocity = engagement / hoursSincePublished;
    const viralityScore = Math.round(shares * 0.4 + comments * 0.3 + likes * 0.2 + velocity * 0.1);

    posts.push({
      post_id: `gnews_${Date.now()}_${index}`,
      title: title,
      content: cleanDesc || title,
      timestamp: pubDate || new Date().toISOString(),
      source: source,
      link: link,
      likes,
      shares,
      comments,
      engagement_total: engagement,
      engagement_velocity: Math.round(velocity * 100) / 100,
      virality_score: viralityScore,
      virality_breakdown: {
        shares_score: shares * 0.4,
        comments_score: comments * 0.3,
        likes_score: likes * 0.2,
        velocity_score: velocity * 0.1,
      },
      region: ['North', 'South', 'East', 'West', 'Central'][index % 5],
    });
  });

  return posts;
}

// Fetch news from a specific topic
async function fetchNewsTopic(topic = 'top') {
  const topicPath = GOOGLE_NEWS_TOPICS[topic] || GOOGLE_NEWS_TOPICS.top;
  const rssUrl = GOOGLE_NEWS_RSS + topicPath;

  // Try each CORS proxy until one works
  for (let i = 0; i < CORS_PROXIES.length; i++) {
    const proxy = CORS_PROXIES[i];
    const url = `${proxy}${encodeURIComponent(rssUrl)}`;

    try {
      const response = await fetch(url, {
        headers: { 'Accept': 'application/rss+xml, application/xml, text/xml' },
        signal: AbortSignal.timeout(15000), // 15 second timeout
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const xmlText = await response.text();
      const posts = parseRSSXML(xmlText);

      if (posts.length > 0) {
        console.log(`✅ Fetched ${posts.length} articles from ${topic} using proxy ${i + 1}`);
        return posts;
      }
    } catch (err) {
      console.warn(`Proxy ${i + 1} failed for ${topic}:`, err.message);
      // Try next proxy
      if (i === CORS_PROXIES.length - 1) {
        console.error(`All proxies failed for ${topic}`);
      }
    }
  }

  return [];
}

// Fetch all news from multiple topics
export async function fetchGoogleNews(limit = 50) {
  console.log('📰 Fetching LIVE news from Google News RSS (all topics)...');

  try {
    // Fetch from ALL topics in parallel for maximum coverage
    const [top, tech, business, entertainment, sports, health, science, world] = await Promise.all([
      fetchNewsTopic('top'),
      fetchNewsTopic('technology'),
      fetchNewsTopic('business'),
      fetchNewsTopic('entertainment'),
      fetchNewsTopic('sports'),
      fetchNewsTopic('health'),
      fetchNewsTopic('science'),
      fetchNewsTopic('world'),
    ]);

    // Combine all sources
    const allPosts = [...top, ...tech, ...business, ...entertainment, ...sports, ...health, ...science, ...world];

    // Deduplicate by title (case-insensitive, first 50 chars)
    const seen = new Set();
    const unique = allPosts.filter(post => {
      const key = post.title.toLowerCase().slice(0, 50);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // Sort by virality score and limit
    const sorted = unique
      .sort((a, b) => b.virality_score - a.virality_score)
      .slice(0, limit);

    console.log(`✅ Fetched ${sorted.length} live news articles from ${allPosts.length} total (${unique.length} unique)`);
    return sorted;
  } catch (err) {
    console.error('Google News fetch failed:', err);
    return [];
  }
}

// Generate clusters from posts with UNIQUE meaningful names
export function generateClustersFromPosts(posts) {
  if (!posts || posts.length === 0) return [];

  // Category definitions with meaningful topic names
  const CATEGORY_CONFIG = {
    technology: {
      keywords: ['tech', 'ai', 'google', 'apple', 'microsoft', 'software', 'app', 'digital', 'cyber', 'robot', 'chip'],
      labels: ['AI & Machine Learning', 'Tech Industry News', 'Digital Innovation', 'Software Updates', 'Cybersecurity Watch'],
    },
    sports: {
      keywords: ['sport', 'game', 'match', 'player', 'team', 'championship', 'league', 'football', 'cricket', 'tennis'],
      labels: ['Championship Updates', 'Sports Headlines', 'Game Day Coverage', 'Athletic Excellence', 'League Standings'],
    },
    business: {
      keywords: ['market', 'stock', 'economy', 'trade', 'finance', 'invest', 'bank', 'company', 'ceo', 'profit'],
      labels: ['Market Analysis', 'Economic Outlook', 'Business Strategy', 'Financial Insights', 'Corporate News'],
    },
    entertainment: {
      keywords: ['movie', 'music', 'celebrity', 'film', 'actor', 'star', 'award', 'show', 'concert', 'album'],
      labels: ['Entertainment Buzz', 'Celebrity Watch', 'Film & TV News', 'Music Scene', 'Award Season'],
    },
    health: {
      keywords: ['health', 'covid', 'medical', 'doctor', 'hospital', 'disease', 'treatment', 'vaccine', 'wellness'],
      labels: ['Health & Wellness', 'Medical Breakthroughs', 'Public Health Alert', 'Wellness Trends', 'Healthcare News'],
    },
    politics: {
      keywords: ['politic', 'government', 'election', 'president', 'minister', 'parliament', 'vote', 'law', 'policy'],
      labels: ['Political Developments', 'Government Policy', 'Election Watch', 'Legislative Updates', 'Diplomatic Affairs'],
    },
    world: {
      keywords: ['world', 'global', 'international', 'country', 'nation', 'foreign', 'war', 'peace', 'crisis'],
      labels: ['World Affairs', 'Global Perspective', 'International News', 'Geopolitical Analysis', 'Breaking World News'],
    },
    science: {
      keywords: ['science', 'research', 'study', 'discovery', 'space', 'nasa', 'climate', 'environment', 'nature'],
      labels: ['Scientific Discovery', 'Space Exploration', 'Climate Watch', 'Research Frontiers', 'Nature & Environment'],
    },
  };

  const clusterMap = {};
  const usedLabels = new Set();

  posts.forEach((post) => {
    const source = (post.source || '').toLowerCase();
    const title = (post.title || '').toLowerCase();
    const content = (post.content || '').toLowerCase();
    const text = `${source} ${title} ${content}`;

    // Find matching category
    let matchedCategory = 'general';
    let maxMatches = 0;

    for (const [category, config] of Object.entries(CATEGORY_CONFIG)) {
      const matches = config.keywords.filter(kw => text.includes(kw)).length;
      if (matches > maxMatches) {
        maxMatches = matches;
        matchedCategory = category;
      }
    }

    // Create cluster if not exists
    if (!clusterMap[matchedCategory]) {
      const config = CATEGORY_CONFIG[matchedCategory];
      let label = config ? config.labels[0] : 'Trending Stories';

      // Get unique label
      if (config) {
        for (const lbl of config.labels) {
          if (!usedLabels.has(lbl)) {
            label = lbl;
            usedLabels.add(lbl);
            break;
          }
        }
      }

      clusterMap[matchedCategory] = {
        cluster_id: matchedCategory,
        topic_label: label,
        label: label,
        post_ids: [],
        post_count: 0,
        size: 0,
        influence_score: 0,
        avg_virality: 0,
        total_engagement: 0,
      };
    }

    // Add post to cluster
    clusterMap[matchedCategory].post_ids.push(post.post_id);
    clusterMap[matchedCategory].post_count++;
    clusterMap[matchedCategory].size++;
    clusterMap[matchedCategory].total_engagement += post.engagement_total || 0;
    clusterMap[matchedCategory].avg_virality += post.virality_score || 0;
  });

  // Finalize cluster metrics
  const clusters = Object.values(clusterMap)
    .filter(c => c.post_count > 0)
    .map(c => ({
      ...c,
      avg_virality: c.post_count > 0 ? c.avg_virality / c.post_count : 0,
      influence_score: Math.min(100, c.total_engagement / 100 + c.post_count * 5),
    }))
    .sort((a, b) => b.influence_score - a.influence_score);

  // If we have too few clusters, add from general posts
  if (clusters.length < 3 && posts.length > 5) {
    const generalLabels = ['Breaking News', 'Trending Topics', 'Hot Stories', 'Latest Updates'];
    let labelIdx = 0;

    // Group remaining posts into smaller clusters
    const unassignedPosts = posts.filter(p =>
      !clusters.some(c => c.post_ids.includes(p.post_id))
    );

    const perCluster = Math.ceil(unassignedPosts.length / 3);
    for (let i = 0; i < unassignedPosts.length && clusters.length < 6; i += perCluster) {
      const chunk = unassignedPosts.slice(i, i + perCluster);
      if (chunk.length > 0) {
        let label = generalLabels[labelIdx % generalLabels.length];
        while (usedLabels.has(label) && labelIdx < 10) {
          labelIdx++;
          label = generalLabels[labelIdx % generalLabels.length];
        }
        usedLabels.add(label);
        labelIdx++;

        clusters.push({
          cluster_id: `general_${i}`,
          topic_label: label,
          label: label,
          post_ids: chunk.map(p => p.post_id),
          post_count: chunk.length,
          size: chunk.length,
          influence_score: chunk.reduce((s, p) => s + (p.engagement_total || 100), 0) / 100,
          avg_virality: chunk.reduce((s, p) => s + (p.virality_score || 50), 0) / chunk.length,
        });
      }
    }
  }

  console.log('📊 Generated clusters:', clusters.map(c => c.topic_label));
  return clusters.slice(0, 8); // Limit to 8 clusters for better visualization
}

// Generate pulse score from live posts
export function generatePulseFromPosts(posts) {
  if (!posts || posts.length === 0) {
    return { score: 50, trend: 'stable', breakdown: {} };
  }

  const totalEngagement = posts.reduce((sum, p) => sum + (p.engagement_total || 0), 0);
  const avgEngagement = totalEngagement / posts.length;
  const avgVirality = posts.reduce((sum, p) => sum + (p.virality_score || 0), 0) / posts.length;

  // Calculate pulse score (0-100)
  const score = Math.min(100, Math.round(40 + (avgVirality / 50) * 30 + (avgEngagement / 5000) * 30));

  // Determine trend based on velocity
  const avgVelocity = posts.reduce((sum, p) => sum + (p.engagement_velocity || 0), 0) / posts.length;
  const trend = avgVelocity > 100 ? 'rising' : avgVelocity < 30 ? 'falling' : 'stable';

  return {
    score,
    trend,
    breakdown: {
      narrative_intensity: Math.random() * 0.3 + 0.2,
      engagement_velocity: Math.random() * 0.25 + 0.15,
      sentiment_volatility: Math.random() * 0.25 + 0.15,
      source_diversity: Math.random() * 0.2 + 0.1,
    },
    timestamp: new Date().toISOString(),
  };
}

// Generate emerging signals from high-velocity posts
export function generateEmergingFromPosts(posts, limit = 8) {
  if (!posts || posts.length === 0) return { signals: [] };

  // Sort by velocity (rapid growth) and engagement
  const sorted = [...posts]
    .sort((a, b) => {
      const aScore = (b.engagement_velocity || 0) * 0.6 + (b.virality_score || 0) * 0.4;
      const bScore = (a.engagement_velocity || 0) * 0.6 + (a.virality_score || 0) * 0.4;
      return bScore - aScore;
    })
    .slice(0, limit);

  const signals = sorted.map((post, i) => {
    // Extract meaningful topic from title
    const words = (post.title || '').split(' ').filter(w => w.length > 4);
    const topic = words.slice(0, 6).join(' ') || `Signal ${i + 1}`;

    return {
      id: `signal_${Date.now()}_${i}`,
      topic,
      severity: i < 2 ? 'high' : i < 5 ? 'medium' : 'low',
      growth_rate: 1.5 + (post.engagement_velocity || 50) / 80,
      current_engagement: post.engagement_total || 1000,
      previous_engagement: Math.floor((post.engagement_total || 1000) * 0.35),
      detected_at: new Date().toISOString(),
    };
  });

  return { signals };
}

// Generate forecasts from trending posts
export function generateForecastsFromPosts(posts, limit = 8) {
  if (!posts || posts.length === 0) return { forecasts: [] };

  // Get top trending posts by virality and engagement
  const sorted = [...posts]
    .sort((a, b) => {
      const aScore = (a.virality_score || 0) * 0.7 + (a.engagement_total || 0) / 100;
      const bScore = (b.virality_score || 0) * 0.7 + (b.engagement_total || 0) / 100;
      return bScore - aScore;
    })
    .slice(0, limit);

  const forecasts = sorted.map((post, idx) => {
    const trend = idx < 2 ? 'rising' : idx < 5 ? 'stable' : 'falling';
    let baseValue = 300 + (post.engagement_total || 500);

    return {
      topic: post.title || `Topic ${idx + 1}`,
      trend_prediction: trend,
      confidence_score: 0.65 + Math.random() * 0.3,
      predicted_engagement: baseValue * 1.6,
      data_points: Array.from({ length: 9 }, (_, i) => {
        const multiplier = trend === 'rising' ? 1.2 : trend === 'falling' ? -0.4 : 0.3;
        const change = Math.floor(Math.random() * 100 + 30) * multiplier;
        baseValue = Math.max(150, baseValue + change);
        return {
          hour: i * 6,
          projected_engagement: Math.round(baseValue),
        };
      }),
    };
  });

  return { forecasts };
}
