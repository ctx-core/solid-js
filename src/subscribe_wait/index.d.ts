import type { Accessor } from 'solid-js'
import type { ExtractAccessorValue } from '../_types'
export function subscribe_wait<Store extends Accessor<unknown>>(
	store:Store,
	condition_fn:(val:ExtractAccessorValue<Store>)=>any,
	timeout?:number
):Promise<ExtractAccessorValue<Store>>
