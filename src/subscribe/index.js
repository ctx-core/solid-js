import { createEffect } from 'solid-js'
export function subscribe(fn, callback) {
	return new Promise(resolve=>{
		createEffect(()=>resolve(callback(fn())))
	})
}
