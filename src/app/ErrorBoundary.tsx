import { StatusPage } from "../shared/components/StatusPage";
import { STATUS_PAGES } from "../shared/constants/STATUS_PAGE";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // UI alternativa opcional
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Aquí podés loguear el error a un servicio externo
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza fallback si existe, sino mensaje por defecto
      return this.props.fallback || <StatusPage {...STATUS_PAGES.fetchError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
