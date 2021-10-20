 
<script>
import { Line } from "vue-chartjs";
import Ventas from '@/models/BtcraVta';

export default {
  extends: Line,

  data: () => ({
      ventas : [],
      esteAnio: 0,
  }),

  mounted() {
/*         Ventas.VendedorUltimosDosAnios ( this.$store.state.User.IdTercLogueado)
        .then ( response => {
            console.log ( response.data );
            console.log (this.$store.state.User.IdTercLogueado );
        }); */
     

    this.renderChart(
      {
        labels: [
          "ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
        datasets: [
          {
            label: 2019 ,
            data: [0,	0,	1000,	0,	326155671,	323795817,	413916288,	314675004,	367341443.4200,	410332214.2300,	493451072.4600,	363261079.2800],
            backgroundColor: "transparent",
            borderColor: "rgba(0,201,80,0.4)",
            pointBackgroundColor: "rgba(0, 0, 0, 1)"
          },
            {
            label: "2020",
            data: [	319449598.3000,	355276935,347584575.2500	,232662470.6500	,299625593.6200,	0,	313614189.9200,	396685670.1000,	359149433.4300,	393190795.4100	,471714087.1100,	0],
            backgroundColor: "transparent",
            borderColor: "rgba(39,44,107,1)",
            pointBackgroundColor: "rgba(0,201,80,0.4)"
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