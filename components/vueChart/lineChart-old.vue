 

<script>
import { Line } from "vue-chartjs";
import Ventas from '@/models/BtcraVta';

export default {
  extends: Line,

  data: () => ({
      VentasPorMes : [],
      esteAnio: 0,
  }),

  mounted() {
        let DatosAnio2Label = '' ;
        let DatosAnio1Label = '';
        let DatosAnio1 =  Array();
        let DatosAnio2 = Array();
        let Data;
        Ventas.VendedorUltimosDosAnios ( this.$store.state.User.IdTercLogueado )
        .then ( response => {
            Data = response.data[1] ;
            DatosAnio1Label = Data.anio;
            DatosAnio1.push ( Data.ene );
            DatosAnio1.push ( Data.feb );
            DatosAnio1.push ( Data.mar );
            DatosAnio1.push ( Data.abr );
            DatosAnio1.push ( Data.mar );
            DatosAnio1.push ( Data.abr );
            DatosAnio1.push ( Data.may );
            DatosAnio1.push ( Data.jun );
            DatosAnio1.push ( Data.jul );
            DatosAnio1.push ( Data.ago );
            DatosAnio1.push ( Data.sep );
            DatosAnio1.push ( Data.oct );
            DatosAnio1.push ( Data.nov );
            DatosAnio1.push ( Data.dic );

            Data = response.data[0] ;
            DatosAnio2Label = Data.anio;
            DatosAnio2.push ( Data.ene );
            DatosAnio2.push ( Data.feb );
            DatosAnio2.push ( Data.mar );
            DatosAnio2.push ( Data.abr );
            DatosAnio2.push ( Data.mar );
            DatosAnio2.push ( Data.abr );
            DatosAnio2.push ( Data.may );
            DatosAnio2.push ( Data.jun );
            DatosAnio2.push ( Data.jul );
            DatosAnio2.push ( Data.ago );
            DatosAnio2.push ( Data.sep );
            DatosAnio2.push ( Data.oct );
            DatosAnio2.push ( Data.nov );
            DatosAnio2.push ( Data.dic );
          console.log ( DatosAnio1 );
          console.log ( DatosAnio2 );

          /*             DataSet = this.VentasPorMes.map( function ( Fila ){       
                return Fila;
            })
              console.log( DataSet );
                this.VentasPorMes.forEach((item) => {
                      console.log ( item )  ;
                  });  
         */
        });
     

    this.renderChart(

      {
        
        labels: [
          "ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
        datasets: [
                    {
                        label: 2020 ,
                        data: DatosAnio1,
                        
                        borderColor: "rgba(0,201,80,0.4)",
                        pointBackgroundColor: "rgba(0, 0, 0, 1)"
                  },

                    {
                        label: 2021 ,
                        data: DatosAnio2,
                        
                        borderColor: "rgba(0,20,80,0.4)",
                        pointBackgroundColor: "rgba(50, 0, 0, 1)"
                  },

        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: ""
        },
  

      }
    );  

  }
};
</script>