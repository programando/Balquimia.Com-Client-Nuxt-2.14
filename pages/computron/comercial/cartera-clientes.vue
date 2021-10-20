<template>
  <div class="font-latos">
    <div class="min-h-screen px-4 pt-24 bg-gray-100 ">
      <div class="pb-4 mx-2 bg-white border-2 rounded-lg">
        <h2
          class="items-center py-2 text-lg font-semibold text-center text-white bg-primary"
        >
           {{ nombreCliente }}
        </h2>
      </div>
      <div class="mx-2 text-sm border rounded-lg lg:grid lg:grid-cols-6">
        <div class="col-span-2 mr-1 bg-gray-300">
          <div class="container col-span-2">
            <CustomersList @facturasPorCliente="facturasPorCliente" :TotalesVendedor="TotalesVendedor"></CustomersList>
          </div>
        </div>
        <div class="col-span-4 mt-10 text-sm bg-gray-300 lg:mt-0 ">
          <div class="container">
            <InvoicesList :Facturas="Facturas" :TotalesCliente="TotalesCliente" :TotalesVendedor="TotalesVendedor"></InvoicesList>
          </div>
        </div>
      </div>
       <!-- <TableTotals :Totales="Totales"></TableTotals> -->
    </div>
  </div>
</template>

<script>
  import Terceros         from "@/models/Terceros";
  import CustomersList   from "../comercial/carteraClientesPartials/customers";
  import InvoicesList     from "../comercial/carteraClientesPartials/invoices";
  import TableTotals      from "../comercial/carteraClientesPartials/totals";

    export default {
          layout: "layoutComputron",
          name: "index",
          components: { CustomersList, InvoicesList, TableTotals },
          data: () => ({
                Facturas:[],
                nombreCliente:'Cartera Clientes',
                TotalesCliente : {'_00_30' : 0,       '_31_60'  : 0,        '_61_90' : 0,       '_91_180' : 0    },
                TotalesVendedor :{},
          }),
          mounted() {
              this.carteraTotalPorVendedor();
          },
          methods: {
              facturasPorCliente ( listadoFacturas, nombreCliente) {
                this.nombreCliente = nombreCliente;
                this.Facturas      = listadoFacturas;
                this.totalesCartera();
              },
              totalesCartera () {
                  this.TotalesCliente['_00_30']=0;
                  this.TotalesCliente['_31_60']=0;
                  this.TotalesCliente['_61_90']=0;
                  this.TotalesCliente['_91_180']=0;                  
                  this.Facturas.forEach((item) => {
                      this.TotalesCliente['_00_30']  += parseFloat(item._00_30 )    ;
                      this.TotalesCliente['_31_60']  += parseFloat(item._31_60 )    ;
                      this.TotalesCliente['_61_90']  += parseFloat(item._61_90 )    ;
                      this.TotalesCliente['_91_180'] += parseFloat(item._91_180 )    ;
                  })
              },
              carteraTotalPorVendedor() {
                  Terceros.carteraTotalPorVendedor ( this.$store.state.User.IdTercLogueado  )
                  .then( response => {
                      this.TotalesVendedor = response.data[0]
                  })
              }
        
      }
    }

</script>

<style>
    .margen {
      margin-right: 14px;
      margin-left: -1px;
      margin-bottom: -1px;
    }
</style>
