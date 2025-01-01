// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo, resolved, rejected } from 'be-enhanced/cc.js';
import { dispatchEvent as de } from 'trans-render/positractions/dispatchEvent.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AP, BAP} from './ts-refs/be-mediating/types.d.ts' */

/**
 * @implements {Actions}
 */
class BeMediating extends BE  {
    de = de;
    
    /**
     * @type {BEConfig<BAP, Actions & IEnhancement, any>}
     */
    static config = {
        propInfo: {
            ...propInfo,
            parsedStatements:{}
        },
        compacts:{
            when_parsedStatements_changes_invoke_hydrate: 0,
        },
        positractions: [
            resolved, rejected,
            {
                do: 'warn',
                ifAllOf: ['rawStatements'],
                pass: ['`The following statements could not be parsed.`', 'rawStatements']
            }
        ]
    };


    warn=console.warn;

    /**
     * 
     * @param {BAP} self 
     */
    async hydrate(self){
        const {parsedStatements} = self;
        console.log({parsedStatements});
        return /** @type {PAP} */({
        });
    }
}

await BeMediating.bootUp();
export {BeMediating};