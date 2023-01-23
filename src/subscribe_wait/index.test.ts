import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { subscribe_wait } from '../index.js'
test('subscribe_wait', async ()=>{
	const { createRoot, createSignal } = await import('solid-js/dist/solid.js')
	const subject = await new Promise(resolve=>{
		createRoot((dispose:()=>void)=>{
			try {
				let subject = -1
				const [subject_, subject__set]:[()=>number, ($:number)=>void] = createSignal(subject)
				subscribe_wait(subject_, $=>$ >= 0, 10_000).then($=>{
					subject = $
					equal($, 1)
					equal(subject, 1)
					resolve($)
					return $
				})
				equal(subject, -1)
				subject__set(1)
				equal(subject, -1)
			} finally {
				dispose()
			}
		})
	}).catch($=>console.trace($))
	equal(subject, 1)
})
test.run()
