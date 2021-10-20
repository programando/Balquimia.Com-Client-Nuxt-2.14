<template>
    <table class="w-full text-left">
      <thead class="flex w-full text-sm text-white border margen">
        <tr class="flex w-full">
          <th class="w-2/6 headerStyle">   Fecha         </th>
          <th class="w-2/6 headerStyle">   Factura       </th>
          <th class="w-5/6 headerStyle">   Producto      </th>
          <th class="w-2/6 headerStyle">   Presentación  </th>
          <th class="w-1/6 headerStyle">   Cantidad      </th>
          <th class="w-2/6 headerStyle">   $Base         </th>
          <th class="w-2/6 headerStyle">   Flete         </th>
          <th class="w-2/6 headerStyle">   Mayor Vr      </th>
          <th class="w-2/6 headerStyle">   Vr.Unit.      </th>
          <th class="w-1/6 headerStyle">                 </th>
        </tr>
      </thead>
      <tbody class="flex flex-col w-full overflow-y-scroll text-xs bg-grey-light" style="height: 50vh;" >
        <tr
          v-for="Producto in ProductosComprados"
          :key="Producto.id_btcra"
          class="flex w-full bg-white"
            :class="{
                    'text-red-600 italic': Producto.en_lista_precios == false
            }"
        >
          <td class="w-2/6 rowData"  >                {{ Producto.fcha_fact | FechaCorta }}                   </td>
          <td class="w-2/6 rowData"  >                {{ Producto.prfjo_rslcion}} {{ Producto.num_fact }}     </td>
          <td class="w-5/6 text-left rowData">        {{ Producto.nom_prd }}                                  </td>
          <td class="w-2/6 text-left rowData">        {{ Producto.nom_present }}                              </td>
          <td class="w-1/6 text-right rowData">       {{ Producto.cant | NumeroEntero}}                       </td>
          <td class="w-2/6 text-right rowData">       {{ Producto.vr_precio_lista | NumeroEntero}}            </td>
          <td class="w-2/6 text-right rowData">       {{ Producto.vr_flete | NumeroEntero}}                   </td>
          <td class="w-2/6 text-right rowData">       {{ Producto.vr_precio_adic  | NumeroEntero}}            </td>
          <td class="w-2/6 text-right rowData">       {{ Producto.vr_unit_real | NumeroEntero}}               </td>
 
          <td    class="w-1/6 text-center rowData"> 
            <ButtonIcon :isdisabled="!Producto.en_lista_precios" urlIcon="/images/dashboard/carrito-compras.svg"></ButtonIcon>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import ButtonIcon from '@/components/library/buttons/buttonIcon'
import BitacoraVentas from '@/models/BtcraVta';
export default {
  name: "clienteUltimasVentas",
  props: [ 'IdTercero'],
  components:{ ButtonIcon },
  
  data() {
    return {
      ProductosComprados: [
        {
          cant                  : 0,
          en_lista_precios      : false,
          fcha_fact             : "",
          id_btcra              : 0,
          id_fact               : 0,
          nom_prd               : "",
          nom_present           : "",
          num_fact              : "",
          pcje_iva_actual       : 0,
          prfjo_rslcion         : '',
          vr_flete              : 0,
          vr_precio_adic        : 0,
          vr_precio_lista       : 0,
          vr_precio_lista_actual: 0.00,
          vr_unit_real          : 0,
        }
      ]
    };
  },
  mounted() {
        this.ProductosComprados = [];
  }, 
  watch: {
            IdTercero : function(){
              this.ProductosComprados = this.clientesProductosComprados() ? this.IdTercero > 0 : [];
            }
     },

  methods : {
      clientesProductosComprados () {
          BitacoraVentas.clientesProductosComprados ( this.IdTercero)
          .then ( response=> {
              this.ProductosComprados = response.data;
          });
          
      }
  }
};
</script>

<style scope>
.margen {
  padding-right: 14px;
}

.rowData {
    @apply  align-middle   px-2 pt-1 border-t border-b border-l  border-gray-400;
    border: 0.5px solid lightgray !important;
}

.headerStyle {
  @apply flex justify-center px-2 py-1 border-t border-b border-l border-gray-700 bg-primary;
}

 

</style>
