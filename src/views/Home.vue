<template>
    <div class="flex grid justify-between">
        <!--<div class="border" v-for="(proyecto, index) in Proyectos" :key="index">-->
            <div class="border w-8 my-2 mx-3" v-for="index in 22" :key="index"><!-- TEST -->
            <div class="flex align-center">
            <iframe  scrolling="no" src="https://pbs.twimg.com/profile_images/947786051434766336/P2XB90Pb_400x400.jpg">
            </iframe>
            </div>
            <br />
            <div class="justify-between flex px-3">
                <!--<p class="title text-black">{{proyecto.Title}} </p>-->
                <p class="title text-black">Title </p>
                <div class="flex align-center px-2 btn-profile">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-4 w-4 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" 
                        />
                    </svg>
                    <span class="title">Likes</span>
                </div>
            </div>
            <div class="justify-between flex px-3">
                <!--<p class="title text-black">{{proyecto.Descripcion}}</p>-->
                <p class="title text-black">Descripcion</p>
                <div class="flex align-center px-2 btn-profile">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-4 w-4 mr-1" 
                        fill="none"
                        style="color:#5499C7" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                        />
                    </svg>
                    <!--<span class="title">{{proyecto.Visitas}}</span>-->
                    <span class="title">Visitas</span>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import response from '@/api/proyecto';
export default {
  data() {
    return {
        Proyectos : {}
    };
  },
  methods: {
    getall() {
      response.GetAll(this.form)
      .then( res =>{ console.log(res); } )
      .catch( e => { console.log(e); } );
    },
  },
};
</script>