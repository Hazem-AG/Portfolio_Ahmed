import React from "react";

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <pre
          style={{
            color: "white",
            background: "black",
            padding: 20,
            whiteSpace: "pre-wrap",
          }}
        >
          {this.state.error?.stack}
        </pre>
      );
    }

    return this.props.children;
  }
}