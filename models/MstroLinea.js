import Api  from "@/config/Axios";
 

export default {
      async activas() {
        return Api.get('lineas/activas')
        
  },

}
