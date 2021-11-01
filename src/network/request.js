import axios from 'axios';

export function request(config){
	const instance = axios.create({
		// headers: {'content-type': 'application/x-www-form-urlencoded'},
		withCredentials: true,
	  baseURL:'http://localhost:3000',
	  timeout:5000
  })
	return instance(config)
}
export function qingqiu(parmas){
	return axios({
		url:'http://localhost:3000/login/cellphone',
		method:'post',
		data:{
			phone:'17607249487',
			password:'358127795Hudong'
		}
	})
}
export function banner(){
	return request({
		url:'/banner',
		parmas:{
			type:2
		}
	})
}
export function playlist(cookie){
	return request({
		url:'/personalized',
		params:{
			limit:6,
			cookie:cookie
		}
	})
}
export function personalizednewsong(cookie){
	return request({
		url:'/personalized/newsong',
		params:{
			cookie:cookie
		}
	})
}
export function recommendsongs(cookie){
	return request({
		url:'/recommend/songs',
		params:{
			cookie:cookie
		}
	})
}
export function recommendsongurl(id,cookie){
	return request({
		url:'/song/url',
		params:{
			id:id,
			cookie:cookie
		}
	})
}
export function userplaylist(uid,cookie){
	return request({
		url:'/user/playlist',
		params:{
			uid:uid,
		  cookie:cookie
		}
	})
}
export function songdetail(ids,cookie){
	return request({
		url:'/song/detail',
		params:{
			ids:ids,
			cookie:cookie
		}
	})
}
export function usersongdetail(ids,cookie){
	return request({
		url:'/song/detail',
		params:{
			ids:ids,
		  cookie:cookie
		}
	})
}
export function usersongurl(id,cookie){
	return request({
		url:'/song/url',
		params:{
			id:id,
		  cookie:cookie
		}
	})
}
