import React, { Component } from 'react';


//redux
import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/ProductosActions';
    
class EditarProducto extends Component {
    

    state = { 
        nombre: '',
        precio: '',
        error: false
    }
    ///cargar el componente para obtener el ID
    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.mostrarProducto(id);
    }
    componentWillReceiveProps(nextProps, nextState){

       const {nombre, precio} = nextProps.producto;

       this.setState({
           nombre,
           precio
       });

    }
    
    nombreProducto = e => {
        this.setState({nombre: e.target.value })
    }

    precioProducto = e => {
        this.setState({precio: e.target.value })
    }


    actualizarProducto = e => {
        e.preventDefault();
        const {nombre, precio} = this.state;
        if (nombre ==='' || precio === ''){
            this.setState({error: true})
            return;
        } else {
            //si pasa la validacion
            this.setState({error: false})
        }
            

        // crear el 
        const { id } = this.props.match.params;
        
        const infoProducto= {
            id,
            nombre: this.state.nombre,
            precio: this.state.precio
        }
        console.log(infoProducto)

        //CREAER EL NUEVO PRODUCTO
        this.props.editarProducto(infoProducto)


        //REDIRECCIONAR
        this.props.history.push('/')
    }


    render() {


        const { nombre, precio, error } = this.state;


        
        

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form
                                onSubmit={this.actualizarProducto}
                            >
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input defaultValue={nombre} type="text" onChange={this.nombreProducto} className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input defaultValue={precio} type="text" onChange={this.precioProducto} className="form-control" placeholder="Precio" />
                                </div>
                                <button 
                                    
                                type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
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

const mapStateToProps = state =>({
    producto: state.productos.producto
})

export default connect(mapStateToProps, { mostrarProducto,editarProducto }) (EditarProducto);
