/// <reference types="ctx-core" />
import { ctx__new } from 'ctx-core/be'
import { createMemo } from 'solid-js'
import { ctx__Context__use } from '../ctx__Context/index.js'
/**
 * @param {{ ctx?:ctx_T }}params
 * @returns {()=>ctx_T}
 * @private
 */
export function params__ctx__memo_(params) {
	return createMemo(()=>
		params.ctx
		|| ctx__Context__use()
		|| ctx__new())
}
