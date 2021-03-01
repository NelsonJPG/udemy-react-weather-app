import React, { Component } from 'react'
import { Button } from '@material-ui/core';

class ErrorBoundary extends Component {
    // previo a la renderizacion
    constructor(props) { // si tiene propiedades se las pasa al superconstructor
        super(props); // para q llegue a su componente superior HOC

        this.state = {
            activo: false
        }
    }

    estadoActivo = () => {
        //return this.props.activo? "Activo" : "No Activo";
        return this.state.activo? "Activo" : "No Activo";
    }

    onClickHandler = () => {
        
        this.setState( (prev) =>  ({activo: !prev.activo}) ) // toggle 
    }

    // FASE DE MONTAJE
    componentDidMount() {
        console.log("FASE DE MONTAJE")
    }

    // FASE DE ACTUALIZACION - 1 RENDERIZACION INITIAL (MONTAJE) 
    componentDidUpdate(prevProps, prevState) {
        console.log("Estado Previo", prevState.activo, "Nuevo Estado", this.state.activo)
        console.log("El componente se ha actualizado")
    }

    // FASE DE DESMONTAJE
    componentWillUnmount() {
        console.log("componente desmontado")
    }

    render() {
        return (
            <div>
                <Button onClick={ this.onClickHandler }>Activo</Button>
                <h1>
                    ErrorBoundary {this.props.saludo}
                    {
                        this.estadoActivo()
                    }
                </h1>
            </div>
        )
    }
}

export default ErrorBoundary;