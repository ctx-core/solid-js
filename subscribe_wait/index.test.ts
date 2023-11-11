import { createRoot, createSignal } from 'solid-js'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { subscribe_wait } from '../index.js'
// TODO: Why does this test fail?
test.skip('subscribe_wait', async ()=>{
	const subject = await new Promise(resolve=>{
		createRoot((dispose:()=>void)=>{
			try {
				let subject = -1
				const [subject_, subject__set]:[()=>number, ($:number)=>void] = createSignal(subject)
				subscribe_wait(subject_, $=>$ >= 0, 10_000).then(_subject=>{
					subject = _subject
					equal(_subject, 1)
					equal(subject, 1)
					resolve(_subject)
					return _subject
				})
				equal(subject, -1)
				subject__set(1)
				equal(subject, -1)
				equal(subject_(), 1)
			} finally {
				dispose()
			}
		})
	}).catch($=>console.trace($))
	equal(subject, 1)
})
test.run()
