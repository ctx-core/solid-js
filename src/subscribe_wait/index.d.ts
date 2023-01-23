import type { Accessor } from 'solid-js'
import type { ExtractAccessorValue } from '../_types'
export function subscribe_wait<Memo extends Accessor<unknown>>(
	memo:Memo,
	condition_fn:(val:ExtractAccessorValue<Memo>)=>any,
	timeout?:number
):Promise<ExtractAccessorValue<Memo>>
