import Api  from "@/config/Axios";
 

export default {

      async listaPrecios() {
        return Api.get('/productos/precios');
  },
  
  
 
 
}
