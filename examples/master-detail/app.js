
const List = Vue.component('List', {
template:`
<div>
	<span v-if="loading"><i>Loading content...</i></span>
	<ul>
		<li v-for="film in films" :key="film.uid">
		<router-link :to="{ name:'film', params:{id:film.uid} }">{{ film.title }}</router-link>
		</li>
	</ul>
</div>
	`,
	data:function() {
		return {
			films:[],
			loading:true
		}
	},
	created:function() {
		fetch('http://stapi.co/api/v1/rest/movie/search?sort=usReleaseDate,ASC')
		.then(res => res.json())
		.then(res => {
			this.loading = false;		
			this.films = res.movies;
		});
	}
});

const Detail = Vue.component('Detail', {
	template:`
<div>
	<span v-if="loading"><i>Loading content...</i></span>
	<div v-else>
	<h2>{{film.title}}</h2>
	<p>
	Director: {{film.mainDirector.name}}<br/>
	Released: {{film.usReleaseDate}}<br/>
	</p>

	<router-link to="/">Back</router-link>
	</div>
</div>
	`,
	data:function() {
		return {
			film:{},
			loading:true
		}
	},
	created:function() {
		fetch('http://stapi.co/api/v1/rest/movie?uid='+this.$route.params.id)
		.then(res => res.json())
		.then(res => {
			this.loading = false;
			this.film = res.movie;
		});

	}

});

const router = new VueRouter({
	routes:[
		{
			path:'/',
			component:List,
		},
		{
			path:'/film/:id',
			name:'film',
			component:Detail
		}
	]
});

const app = new Vue({
	el:'#app',
	router
});
