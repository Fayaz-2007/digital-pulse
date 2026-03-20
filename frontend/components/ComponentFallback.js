/**
 * Simple fallback component for testing
 * Displays a message when components fail to load
 */
export default function ComponentFallback({ componentName, height = 200 }) {
  return (
    <div
      className="glass-card"
      style={{
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <div style={{ fontSize: '18px', color: '#ff9f43' }}>⚠</div>
      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
        {componentName || 'Component'} temporarily unavailable
      </div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
        Check console for more details
      </div>
    </div>
  );
}