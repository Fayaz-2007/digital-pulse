/**
 * Fallback Data Generator
 * Ensures dashboard always shows meaningful data even when API fails
 */

// Generate mock narratives/posts
export function generateMockNarratives(count = 10) {
  const topics = [
    'AI Technology Revolution',
    'Global Market Trends',
    'Climate Change Summit',
    'Tech Industry Updates',
    'Sports Championship Finals',
    'Entertainment Awards Show',
    'Healthcare Innovation',
    'Space Exploration News',
    'Economic Policy Changes',
    'Social Media Trends',
  ];

  const posts = Array.from({ length: count }, (_, i) => ({
    post_id: `mock_${Date.now()}_${i}`,
    title: topics[i % topics.length],
    content: `Breaking news about ${topics[i % topics.length].toLowerCase()}. This story is developing rapidly with significant implications.`,
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
    likes: Math.floor(Math.random() * 5000 + 500),
    shares: Math.floor(Math.random() * 2000 + 200),
    comments: Math.floor(Math.random() * 1000 + 100),
    source: 'demo',
    region: ['North', 'South', 'East', 'West', 'Central'][i % 5],
    virality_score: Math.floor(Math.random() * 40 + 60),
    engagement_total: Math.floor(Math.random() * 8000 + 800),
    engagement_velocity: Math.floor(Math.random() * 500 + 50),
    virality_breakdown: {
      shares_score: Math.random() * 0.4,
      comments_score: Math.random() * 0.3,
      likes_score: Math.random() * 0.2,
      velocity_score: Math.random() * 0.1,
    },
  }));

  const clusters = [
    { cluster_id: 'tech', label: 'Technology', post_ids: posts.slice(0, 3).map(p => p.post_id), size: 3 },
    { cluster_id: 'news', label: 'Breaking News', post_ids: posts.slice(3, 6).map(p => p.post_id), size: 3 },
    { cluster_id: 'social', label: 'Social Trends', post_ids: posts.slice(6, 10).map(p => p.post_id), size: 4 },
  ];

  return { posts, clusters };
}

// Generate mock pulse score
export function generateMockPulseScore() {
  return {
    score: Math.floor(Math.random() * 30 + 65),
    trend: ['rising', 'stable', 'falling'][Math.floor(Math.random() * 3)],
    breakdown: {
      narrative_intensity: Math.random() * 0.3 + 0.2,
      engagement_velocity: Math.random() * 0.25 + 0.15,
      sentiment_volatility: Math.random() * 0.25 + 0.15,
      source_diversity: Math.random() * 0.2 + 0.1,
    },
    timestamp: new Date().toISOString(),
  };
}

// Generate mock emerging signals
export function generateMockEmerging(count = 5) {
  const topics = [
    'Viral Social Challenge',
    'Breaking Tech Announcement',
    'Celebrity News Flash',
    'Market Movement Alert',
    'Weather Emergency Update',
  ];

  const signals = Array.from({ length: count }, (_, i) => ({
    id: `signal_${Date.now()}_${i}`,
    topic: topics[i % topics.length],
    severity: ['high', 'medium', 'low'][i % 3],
    growth_rate: 1.5 + Math.random() * 2,
    current_engagement: Math.floor(Math.random() * 5000 + 1000),
    previous_engagement: Math.floor(Math.random() * 2000 + 500),
    detected_at: new Date(Date.now() - i * 1800000).toISOString(),
  }));

  return { signals };
}

// Generate mock forecasts with unique topics and varied data
export function generateMockForecasts(count = 5) {
  const topics = [
    { name: 'AI Technology Trends', trend: 'rising' },
    { name: 'Global Market News', trend: 'stable' },
    { name: 'Social Media Buzz', trend: 'rising' },
    { name: 'Sports Headlines', trend: 'falling' },
    { name: 'Entertainment Updates', trend: 'rising' },
  ];

  const forecasts = topics.slice(0, count).map((t, idx) => {
    let baseValue = 200 + idx * 150;

    return {
      topic: t.name,
      trend_prediction: t.trend,
      confidence_score: 0.6 + Math.random() * 0.35,
      data_points: Array.from({ length: 9 }, (_, i) => {
        const hour = i * 6;
        const change = t.trend === 'rising'
          ? Math.floor(Math.random() * 80 + 30)
          : t.trend === 'falling'
            ? -Math.floor(Math.random() * 40 + 10)
            : Math.floor(Math.random() * 30 - 15);

        baseValue = Math.max(100, baseValue + change);

        return {
          hour,
          projected_engagement: Math.round(baseValue),
        };
      }),
    };
  });

  return { forecasts };
}

// Safe data merger - uses fallback only if real data is empty
export function ensureData(realData, fallbackFn) {
  if (!realData || (Array.isArray(realData) && realData.length === 0)) {
    console.warn('⚠️ No data received → using fallback');
    return fallbackFn();
  }
  return realData;
}
