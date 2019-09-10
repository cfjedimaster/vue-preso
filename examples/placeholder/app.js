Vue.component('image-placeholder', {
	template:`<img :src="url">`,
	computed: {
		url() {
			return `https://via.placeholder.com/${this.width}x${this.height}`;
		}
	},
	props:{
		height:{
			default: 250
		},
		width:{
			default: 250
		}
	}

});

const app = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		
	}
});