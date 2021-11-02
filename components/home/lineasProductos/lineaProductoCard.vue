<template>
  <div class="relative mx-4 my-4">
    <nuxt-link to="/store/productos">
      <div class="card">
        <div class="image">
          <div
            class="relative px-10 py-10 bg-center bg-no-repeat bg-cover border-2 md:px-6 lg:px-4 md:py-8 hover:text-white img"
            :style="getImage(imagen)"
          ></div>
        </div>
        <div class="details bg-primary">
          <div class="px-2 py-2 center">
            <h2 class="text-base font-bold text-black uppercase ">
              {{ nom_linea }}
            </h2>
            <p class="text-base text-black ">
              {{ slogan }}
            </p>

            <div>
              <div
                class="inline-block px-4 py-2 mt-2 font-semibold text-white rounded-lg bg-primary"
              >
                Mas información
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "cardLineasProductos",
  props: {
    nom_linea: String,
    id_linea: Number,
    slogan: String,
    imagen: String,
  },
  methods: {
    getImage(imageName) {
      return 'background-image: url("' + imageName + '")';
    },
  },
};
</script>

<style>
.card {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 260px;
  background: #000;
}

.card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card .image .img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}

.card:hover .image .img {
  opacity: 0.5;
  /*transform: translateX(30%); /*100%**/
  transform: scale(1.2);
}


.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%; /*100%*/
  height: 100%;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}

/*.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
*/
.card .details .center {
  /* padding: 20px; */
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
