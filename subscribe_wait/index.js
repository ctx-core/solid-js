import { promise_timeout } from '@ctx-core/function'
import { isNumber_ } from '@ctx-core/number'
import { createComputed } from 'solid-js'
export function subscribe_wait(memo, condition_fn, timeout) {
	const _subscribe_wait = new Promise(resolve=>{
		createComputed(()=>{
			if (condition_fn(memo())) {
				resolve(memo())
			}
		})
	})
	return isNumber_(timeout) ? promise_timeout(_subscribe_wait, timeout) : _subscribe_wait
}
