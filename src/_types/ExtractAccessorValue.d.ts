import type { Accessor } from 'solid-js'
export type ExtractAccessorValue<Memo extends Accessor<unknown>, Else extends unknown = unknown> =
	Memo extends (Accessor<infer Val>)
	? Val
	: Extract<Memo, Accessor<unknown>> extends Accessor<infer O>
		? O
		: Else
