/*  BITACORA DE VENTAS */
import Api from "@/config/Axios";
 

export default {

      async VendedorUltimosDosAnios( idTercVendedor ) {
        return Api.get('/ventas/vendedor', { params: { idTercVendedor } } );
  },
  
        async clientesProductosComprados( id_terc ) {
        return Api.get('/terceros/clientes/productos/comprados', { params: { id_terc } } );
  },
  
 
 
}
