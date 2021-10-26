<template>

<div class="chat scale-50 mr-0 z-50 bottom-0 right-0 fixed">
    <a href="https://wa.me/573174322752/?text=Hola.%20Necesito%20asesoría%20personalizada%20sobre%20productos%20industriales%20Balquimia." 
    target="_blank"><img id="whatsapp" class="whatsapp w-20" :src="require('/static/whatsapp.png')" alt=""/></a>

    <a href="https://wa.me/573174322752/?text=Hola.%20Necesito%20asesoría%20personalizada%20sobre%20productos%20industriales%20Balquimia." 
    target="_blank"><img id="" class="message" :src="require('/static/mensaje.png')" alt=""/></a>



</div>

</template>

<script>
  export default {
    
  }
</script>

<style>
.message{
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  opacity: 0;
  position: relative;
}

.chat:hover .whatsapp{
  transition: 300ms;
  right: 200px;
  top: 6px;
}

.chat{
  padding-right: 200px;
  padding-bottom: 20px;
}

.whatsapp{
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 1;
}

.chat:hover .message{
  opacity: 100%;
  transition: 300ms;
  top: 8px;
  left: 170px;

}
</style>