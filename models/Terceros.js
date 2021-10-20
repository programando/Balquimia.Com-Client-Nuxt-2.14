import Api  from "@/config/Axios";
 

export default {

  async contactoSendEmail( formData ) {
        return Api.post('contactos', formData);
  },
  
      async carteraClientes(idTercVendedor) {
         return Api.get('/cartera/clientes', { params: { idTercVendedor } } );
  },
 
   async carteraFacturasPorCliente( nitCliente ) {
         return Api.get('/cartera/cliente/facturas', { params: { nitCliente } } );
      },
   
      async carteraTotalPorVendedor( idTercVendedor ) {
         return Api.get('/cartera/vendedor/total', { params: { idTercVendedor } } );
      },
   
      async clientesActivosPorVendedor(formData) {  
         return Api.get('/terceros/clientes/busqueda/', { params:   formData   }   );
      },
       
   
 
}
