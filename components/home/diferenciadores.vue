<template>
  <div >
    <div
      class="pt-20 -mb-24 bg-center bg-no-repeat bg-cover"
      style="background-image: url(/images/home/diferenciadores/girasoles2.png)"
    >
      <div
        class="bg-center bg-no-repeat bg-cover"
        style="background-image: url(/images/comunes/malla.webp)"
      >

        <div class="w-1/2 mx-6 my-10">
          <h2 class="text-2xl font-semibold text-white md:text-2xl lg:text-5xl">
            ¿Por qué elegirnos?
          </h2>
         </div>

        <div class="mt-80 -mb-96 md:grid md:grid-cols-4 lg:grid-cols-4 ">
          <div
            class="col-span-2 md:ml-4 lg:ml-0 md:col-start-1 lg:col-span-1 "
          >
            <div class="hexagon-wrapper">
              <div class="items-center hexagon">
                <div class="z-10 ">
                  <img
                    class="mx-auto mb-4 manos"
                    src="/images/home/diferenciadores/fortaleza1-elemeyer.png"
                    alt="fortaleza1"
                  />
                  <p class="z-10 px-4 leading-4 text-center">
                    Nos interesa mucho el legado que les quedará a las próximas generaciones
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 -mt-20 md:mt-0 md:mr-4 lg:col-span-1 ">
            <div class="hexagon-wrapper">
              <div class="items-center hexagon">
                <div class="z-10 my-10">
                  <img
                    class="z-10 mx-auto mb-4 saludo"
                    src="/images/home/diferenciadores/fortaleza1.png"
                    alt="fortaleza1"
                  />
                  <p class="z-10 leading-4 text-center">
                    Es por ello que nuestras formulaciones respetan las normas de la seguridad industrial y la protección al medio ambiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-span-2 -mt-20 md:mx-4 lg:mx-0 xl:mx-0 md:col-start-2 md:-mt-10 lg:mt-0 lg:col-span-1 "
          >
            <div class="hexagon-wrapper">
              <div class="items-center hexagon">
                <div class="z-10 px-2 my-10">
                  <img
                    class="z-10 mx-auto mb-4 like "
                    src="/images/home/diferenciadores/fortaleza2.png"
                    alt="fortaleza1"
                  />
                  <p class="z-10 px-4 leading-4 text-center">
                    Realizamos acompañamiento técnico para optimizar la
                    implementación de los productos.
                  </p>
                </div>
              </div>
            </div>
          </div>
                    <div
            class="col-span-2 -mt-20 md:mx-4 lg:mx-0 xl:mx-0 md:col-start-2 md:-mt-10 lg:mt-0 lg:col-span-1"
          >
            <div class="hexagon-wrapper">
              <div class="items-center hexagon">
                <div class="z-10 px-2 my-10">
                  <img
                      class="z-10 mx-auto mb-4 like "
                    src="/images/home/diferenciadores/fortaleza3.png"
                    alt="fortaleza1"
                  />
                  <p class="z-10 px-4 leading-4 text-center">
                    Somos Garantía en resultados porque conocemos las dinámicas
                    de los sectores y las necesidades de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/library/buttons/button";
export default {
  components: { AppButton}
};
</script>
<style>
.imagen {
  position: relative;
  top: 50px;
}

.hexagon-wrapper {
  margin: auto;
  display: flex;
  text-align: initial;
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.hexagon {
  position: relative;
  width: 46%;
  height: 80%;
  margin: auto;
  /*border: 1px solid black;*/
  background: linear-gradient(-180deg, transparent, transparent); 
  /*background-color: white;*/
  display: flex;
  align-content: center;
  justify-content: center;
  transition: 0.5s;
}

.hexagon i {
  z-index: 1;
  margin: auto;
  font-size: 50px;
  color: transparent;
  background: linear-gradient(45deg, #a58fe9, #e37682);
  background-clip: text;
  -webkit-background-clip: text;
}

.hexagon:before, .hexagon:after {
  position: absolute;
  content: "";
  background: inherit;
  height: 100%;
  width: 100%;
  border-radius: 0;
  transition: 0.5s;
  transform-origin: center;
}

.hexagon:before {
  transform: rotateZ(60deg);
}

.hexagon:after {
  transform: rotateZ(-60deg);
}

.manos{
  width: 80px;
}

.saludo{
  width: 80px;
}

.like{
  width: 80px;
}

@media (min-width: 360px) {
  .hexagon-wrapper {
    width: 360px;
    height: 360px;
    margin-bottom: 10%;
  }
}

@media (min-width: 600px) {
  .hexagon-wrapper {
    width: 450px;
    height: 450px;
  }
}

@media (min-width: 768px) {
  .hexagon-wrapper {
    width: 400px;
    height: 400px;
  }
}

@media (min-width: 1025px) {
  .hexagon-wrapper {
    width: 360px;
    height: 360px;
  }
}

@media (min-width: 1200px) {
  .hexagon-wrapper {
    width: 430px;
    height: 430px;
  }
}
</style>