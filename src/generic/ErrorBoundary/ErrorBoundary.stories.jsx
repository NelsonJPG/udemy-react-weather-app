import React from 'react'
import ErrorBoundary from './ErrorBoundary';

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

export const BoundaryExample = () => <ErrorBoundary saludo="Prueba de Props" />