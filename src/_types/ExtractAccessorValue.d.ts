import type { Accessor } from 'solid-js'
export type ExtractAccessorValue<Store extends Accessor<unknown>, Else extends unknown = unknown> =
	Store extends (Accessor<infer Val>)
	? Val
	: Extract<Store, Accessor<unknown>> extends Accessor<infer O>
		? O
		: Else
