<template>

<div class="chat mr-0 z-50 bottom-0 right-0 fixed">
    <a href="https://wa.me/573174322752/?text=Hola.%20Necesito%20asesoría%20personalizada%20sobre%20productos%20industriales%20Balquimia." 
    target="_blank"><img id="whatsapp" class="whatsapp w-20" :src="require('/static/whatsapp.png')" alt="whatsapp"/></a>

    <a href="https://wa.me/573174322752/?text=Hola.%20Necesito%20asesoría%20personalizada%20sobre%20productos%20industriales%20Balquimia." 
    target="_blank"><img id="" class="message" :src="require('/static/mensaje.png')" alt="Mensaje"/></a>



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
  width: 300px;
  opacity: 0;
  position: relative;
}

.chat:hover .whatsapp{
  transition: 300ms;
  right: 300px;
  top: 6px;
  bottom: 0%;
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

@media (max-width: 320px){

  .whatsapp{
    width: 20%;
  }

  .chat:hover{

    pointer-events: none;
  }

  .message{
    box-shadow: 0 -5px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
}

@media (max-width: 360px) {
  .chat:hover{

    pointer-events: none;
  }
  .message{
    opacity: 100%;
    width: 350px;
    right: 0%;
    left: 6%;
    bottom: 0%;
    margin: 0;
    padding: 0;
    box-shadow: 0 -5px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .whatsapp{
    right: 83%;
    bottom: 0%;
    transform: scale(1.3);
  }

  .chat{
    bottom: 0%;
    padding: 0;
  }
  }

  @media (max-width: 414px) {

  .message{
    opacity: 100%;
    width: 400px;
    right: 0%;
    left: 5%;
    bottom: 0%;
    margin: 0;
    padding: 0;
    box-shadow: 0 -5px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .whatsapp{
    right: 85%;
    bottom: 10%;
    transform: scale(1.5);
  }

  .chat{
    bottom: 0%;
    padding: 0;
  }


  }
</style>