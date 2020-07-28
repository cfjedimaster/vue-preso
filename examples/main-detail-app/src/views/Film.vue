<template>

  <div>

  <span v-if="loading"><i>Loading content...</i></span>
  <h2>{{film.title}}</h2>
  <p v-if="film.director">
  Director: {{film.director}}<br/>
  Released: {{film.release_date}}<br/>
  </p>

  <p>
  {{film.opening_crawl}}
  </p>

  </div>

</template>

<script>
export default {
  name: 'film',
	data:function() {
		return {
			film:{},
			loading:true
		}
	},
	created:function() {
		fetch('https://swapi.dev/api/films/'+this.$route.params.id)
		.then(res => res.json())
		.then(res => {
			this.loading = false;
			this.film = res;
		});

	}
	
}
</script>
