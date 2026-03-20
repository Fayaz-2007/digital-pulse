import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h3>Something went wrong</h3>
          <p>Component failed to load. Refreshing might help.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
          <style jsx>{`
            .error-boundary {
              padding: 20px;
              background: rgba(255, 0, 0, 0.1);
              border: 1px solid rgba(255, 0, 0, 0.3);
              border-radius: 8px;
              text-align: center;
              color: #ff6b6b;
            }
            button {
              margin-top: 10px;
              padding: 8px 16px;
              background: #ff6b6b;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;