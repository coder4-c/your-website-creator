export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '3rem 2.5rem',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textAlign: 'center',
          maxWidth: '420px',
        }}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔧</div>
        <h1 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#222' }}>
          Website Under Maintenance
        </h1>
        <p style={{ color: '#555', lineHeight: 1.5, marginBottom: '0.5rem' }}>
          We are currently performing scheduled maintenance and updates on this website.
        </p>
        <p style={{ color: '#555', lineHeight: 1.5 }}>
          We apologize for the inconvenience. Please check back soon.
        </p>
        <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #eee' }} />
        <p style={{ fontSize: '0.85rem', color: '#999' }}>
          The Meridian Consulting Group Coming Back Soon
        </p>
      </div>
    </div>
  );
}
