import React, { Component } from 'react';


//redux
import { connect } from 'react-redux';
import { agregarProducto } from '../actions/ProductosActions';



class NuevoProducto extends Component {

    state = { 
        nombre: '',
        precio: '',
        error: false
   }
   
   nombreProducto = e => {
        this.setState({nombre: e.target.value })
   }

   precioProducto = e => {
        this.setState({precio: e.target.value })
   }


   nuevoProducto = e => {
        e.preventDefault();
        const {nombre, precio} = this.state;
        if (nombre ==='' || precio === ''){
            this.setState({error: true})
            return;
        } else {
            //si pasa la validacion
            this.setState({error: false})
        }
         

        // crear el objeto
        
        const infoProducto= {
            nombre: this.state.nombre,
            precio: this.state.precio
        }
        console.log(infoProducto)

        //CREAER EL NUEVO PRODUCTO
        this.props.agregarProducto(infoProducto)


        //REDIRECCIONAR
        this.props.history.push('/')
   }


    render() {


        const { error } = this.state;

        
        

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form
                                onSubmit={this.nuevoProducto}
                            >
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" onChange={this.nombreProducto} className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="text" onChange={this.precioProducto} className="form-control" placeholder="Precio" />
                                </div>
                                <button 
                                    
                                type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>

                            {error ? 
                                    <div className='font-weight-bold alert alert-danger text-center mt-4'>
                                        TODOS LOS CAPOS SON OBLIGATORIOS
                                    </div>
                                : ''
                                
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {agregarProducto}) (NuevoProducto);