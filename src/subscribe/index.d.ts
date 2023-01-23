import type { Accessor } from 'solid-js'
import type { ExtractAccessorValue } from '../_types'
export function subscribe<Memo extends Accessor<unknown>, V>(
	memo:Memo,
	callback:(val:ExtractAccessorValue<Memo>)=>V,
):Promise<V>
