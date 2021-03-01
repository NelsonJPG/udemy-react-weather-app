import React, { Component } from 'react'

class ErrorBoundary extends Component {
    // previo a la renderizacion
    constructor(props) { // si tiene propiedades se las pasa al superconstructor
        super(props); // para q llegue a su componente superior HOC

        this.state = {
            hasError: false
        }
    }

    // esto es interno de React que envia al state si ocurre un error
    static getDerivedStateFromError(error) {
        return { hasError : true }
    }

    componentDidCatch(error, errorInfo){
        //console.log("error", error)
        console.log("errorInfo", errorInfo)
    }

    render() {
        return this.state.hasError? (<h2>Hubo un Error</h2>) 
        :this.props.children
    
    }
}

export default ErrorBoundary;