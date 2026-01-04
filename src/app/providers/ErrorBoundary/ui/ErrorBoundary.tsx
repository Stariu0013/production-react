import React, {ErrorInfo, ReactNode, Suspense} from "react";
import {ErrorPage} from "widgets/PageError";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryState) {
        // @ts-ignore
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Suspense fallback="">
                <ErrorPage />
            </Suspense>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;