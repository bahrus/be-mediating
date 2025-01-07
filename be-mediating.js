// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo, resolved, rejected } from 'be-enhanced/cc.js';
import { dispatchEvent as de } from 'trans-render/positractions/dispatchEvent.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AP, BAP} from './ts-refs/be-mediating/types.d.ts' */
/** @import {AbsorbingObject, SharingObject} from './ts-refs/trans-render/asmr/types.d.ts' */

/**
 * @implements {Actions}
 * @implements {EventListenerObject}
 */
class BeMediating extends BE  {
    de = de;
    
    /**
     * @type {BEConfig<BAP, Actions & IEnhancement, any>}
     */
    static config = {
        propInfo: {
            ...propInfo,
            parsedStatements:{},
            mediator: {},
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
        ],
        actions: {
            parseJS: {
                ifNoneOf: ['mediator']
            }
        }
    };


    warn=console.warn;

    /**
     * 
     * @param {BAP} self 
     */
    async parseJS(self){
        const {enhancedElement} = self;
        const js = enhancedElement.innerHTML.trim();
        if(js.startsWith('({')){
            const fullExpr = `const {f, args} = e;
            e.r = ${js};
`;
            const handler = (await import('trans-render/lib/activate.js')).activate(fullExpr);
            //TODO abort controller
            enhancedElement.addEventListener('change', handler);
        }else{
            throw 'NI';
        }
        return /** @type {PAP} */({
        });
    }

    /**
     * 
     * @param {BAP} self 
     */
    async hydrate(self){
        const {find} = await import('trans-render/dss/find.js');
        const {ASMR} = await import('trans-render/asmr/asmr.js');
        const {parsedStatements, enhancedElement} = self;
        if(parsedStatements.length !== 1) throw 300;
        const statement = parsedStatements[0];
        const {originSpecifier} = statement;
        const remoteEl = await find(enhancedElement, originSpecifier);
        if(!(remoteEl instanceof Element)) throw 404;
        const ao = await ASMR.getAO(remoteEl, {
            evt: originSpecifier.evt,
            selfIsVal: originSpecifier.path === '$0',
        });
        console.log({parsedStatements});
        return /** @type {PAP} */({
        });
    }

    handleEvent() {
    }
}

await BeMediating.bootUp();
export {BeMediating};