import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		historysong:[],
		songurl:[],
		moresong:[],
		recommendsong:[],
		cheshow:[true],
		repic:[],
		searchsongs:[],
		record:[],
		currentime:[],
		fm:[],
		cookies:[],
		duration:[],
		curridx:[]
  },
  mutations: {
		addsong(state,playload){
			state.historysong = [];
			if(playload.ar){
				state.historysong.push(playload.al.picUrl)
				state.historysong.push(playload.name)
				state.historysong.push(playload.ar[0].name)
				state.historysong.push(playload.id)
			}else{
				state.historysong.push(playload.picUrl)
				state.historysong.push(playload.name)
				state.historysong.push(playload.song.artists[0].name)
				state.historysong.push(playload.id)
			}
		},
		addurla(state,playload){
			state.songurl = [];
			state.songurl.push(playload)
		},
		addmoresong(state,playload){
			for(let item of playload){
				let arr = []
				arr.push(item.url,item.id)
				state.moresong.push(arr)
			}
		},
		addrecommendsong(state,playload){
			state.recommendsong.push(playload)
		},
		addcheshow(state,playload){
			state.cheshow = []
			state.cheshow.push(playload)
		},
		addrepic(state,playload){
			state.repic.push(playload)
		},
		addsearchsong(state,playload){
			state.searchsongs = []
			state.searchsongs.push(playload)
		},
		addrecord1(state,playload){
			state.record.push(playload)
		},
		addcurrentTime(state,playload){
			state.currentime = []
			state.currentime.push(playload)
		},
		subcurrentime(state){
			state.currentime = []
			state.currentime.push(playload)
		},
		addfm(state,playload){
			state.fm = []
			state.fm.push(playload)
		},
		addduration(state,playload){
			state.duration = [],
			state.duration.push(playload)
		},
		addcookies(state,playload){
			state.cookies.push(playload)
		},
		addcurridx(state,playload){
			state.curridx = playload
		}
  },
  actions:{
		addrecord(context,playload){
				let oldvalue = context.state.record.find(item => item==playload)
				if(!oldvalue){
					context.commit('addrecord1',playload)
				}	
		}
  },
  modules: {
  }
})
