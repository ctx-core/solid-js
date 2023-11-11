import { createContext, useContext } from 'solid-js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('solid-js').Context}Context */
/** @type {Context<Ctx>} */
export const ctx__Context = createContext()
export {
	ctx__Context as Context_ctx,
}
/**
 * @returns {Ctx}
 */
export function ctx__Context__use() {
	return useContext(ctx__Context)
}
export {
	ctx__Context__use as use_Context_ctx,
}
