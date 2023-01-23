import { test } from 'uvu'
import { subscribe } from '../index'
import { equal } from 'uvu/assert'
test('subscribe', async ()=>{
	const { createRoot, createSignal } = await import('solid-js/dist/solid.js')
	createRoot((dispose:()=>void)=>{
		try {
			let subject = -1
			const [subject_, subject__set]:[()=>number, ($:number)=>void] = createSignal(subject)
			const promise = subscribe(subject_, $=>subject = $)
			equal(subject, -1)
			subject__set(1)
			equal(subject, -1)
			promise.then($=>{
				equal($, 1)
				equal(subject, 1)
			})
		} finally {
			dispose()
		}
	})
})
test.run()
