<template>
  <div>
    <span v-if="loading"><i>Loading content...</i></span>
    <ul>
      <li v-for="film in films" :key="film.episode_id">
      <!--
      <router-link :to="{ name:'film', params:{id:film.id} }">{{ film.title }}</router-link>
      -->
      <router-link :to="'/film/'+film.id">{{ film.title }}</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
	data:function() {
		return {
			films:[],
			loading:true
		}
	},
	created:function() {
		fetch('https://swapi.dev/api/films')
		.then(res => res.json())
		.then(res => {
			/*
			there is no "id" field, just a URL one - so let's set it manually
			*/	
			this.loading = false;		
			this.films = res.results.map(film => {
				let parts = film.url.split('/');
				film.id = parts[parts.length-2];
				return film;
			});
		});
	}
}
</script>
