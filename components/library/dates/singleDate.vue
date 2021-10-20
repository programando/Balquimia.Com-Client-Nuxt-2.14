<template>
  <div class="mt-2 ">
      <label>{{textLabel}}</label>
        <Datetime class="theme-orange  my-vdatetime  { 'invalid-data': ErrorHas('fcha_dspcho')}"
          input-class = "my-vdatetime"
          type        = "date"
          v-model     = "recordSource"
          value-zone  = 'America/bogota'
          :class        = "[setBorderColor]"
          :phrases      = "{ok: 'Seleccionar', cancel: 'Salir'}"
            >
        </Datetime>
  </div>
</template>
 
 
<script>
    import { Datetime }        from 'vue-datetime';
    import 'vue-datetime/dist/vue-datetime.css'

      export default {
        name: "singleDate",
        props:{
          borderColor: String,
          textLabel  : String,
          vmodel     : String,
        },
        data () {
          return {
            recordSource: this.vmodel
          }
        },
        components: { Datetime},
        watch :{
            recordSource ( newDate ){
                this.$emit('input', newDate);
            },
            vmodel ( newDate ) {
                this.recordSource = newDate;
            },
        },
        computed: {
          setBorderColor() {
            switch (this.borderColor) {
              case 'primary':
                return 'border border-primary'
                break;
            
              case 'secondary':
                return 'border border-secondary'
                break;
              
              case 'extra':
                return 'border border-extra'
                break;
            }
          }
        }
};
</script>

<style   scoped>
    .my-vdatetime{
        /* border: 1px solid #D3500A !important; */
        border-radius: 0.25rem;
        padding-left: 10px;
    }
    .vdatetime-popup__header
    {
        background: #FF9895 !important;
    }
    
/*     .theme-orange .vdatetime-popup__header,
    .theme-orange .vdatetime-calendar__month__day--selected > span > span,
    .theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
      background: #FF9800 !important;
    } */

/*     .theme-orange .vdatetime-year-picker__item--selected,
    .theme-orange .vdatetime-time-picker__item--selected,
    .theme-orange .vdatetime-popup__actions__button {
      color: #ff9800;
    } */

</style>
