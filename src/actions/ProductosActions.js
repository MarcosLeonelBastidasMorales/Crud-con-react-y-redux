import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO,MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from './types';
import axios from 'axios';
import { async } from 'q';





export const mostrarProductos  = () => async dispatch => {
    const respuesta = await axios.get('https://my-json-server.typicode.com/MarcosLeonelBastidasMorales/productos/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}


export const mostrarProducto = id => async dispatch =>{
    const respuesta = await axios.get(`https://my-json-server.typicode.com/MarcosLeonelBastidasMorales/productos/productos/${id}`);
    dispatch({
        type:MOSTRAR_PRODUCTO,
        payload: respuesta.data
    })
}


export const eliminarProducto = id => async dispatch => {
    await axios.delete(`https://my-json-server.typicode.com/MarcosLeonelBastidasMorales/productos/productos/${id}`)
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}


export const agregarProducto = post => async dispatch =>{
    const respuesta = await axios.post('https://my-json-server.typicode.com/MarcosLeonelBastidasMorales/productos/productos', post);
    

    dispatch({
        type: AGREGAR_PRODUCTO,
        payload: respuesta.data
    })
}

export const editarProducto = producto => async dispatch => {
    const respuesta = await axios.put(`https://my-json-server.typicode.com/MarcosLeonelBastidasMorales/productos/productos/${producto.id}`, producto);
    dispatch({
         type: EDITAR_PRODUCTO,
         payload: respuesta.data
    })
}