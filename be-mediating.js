// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo, resolved, rejected } from 'be-enhanced/cc.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
import { dispatchEvent as de } from 'trans-render/positractions/dispatchEvent.js';
import { set } from 'trans-render/XV/set.js';

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
     * @type {WeakRef<Element> | undefined}
     */
    #source;

    /**
     * @type {MountObserver | undefined}
     */
    #mountObserver;

    /**
     * 
     * @param {BAP} self 
     */
    async parseJS(self){
        const {enhancedElement} = self;
        const js = enhancedElement.innerHTML.trim();
        if(!js) return /** @type {PAP} */({
        });
        /**
         * @type {(e: Event) => void}
         */
        let handler;
        if(js.startsWith('({')){
            const fullExpr = `const {$} = e;
            e.r = ${js};
`;
            handler = (await import('trans-render/lib/activate.js')).activate(fullExpr);

        }else{
            handler = (await import('trans-render/lib/activate.js')).activate(js);
        }
        //TODO abort controller
        enhancedElement.addEventListener('change', handler);
        return /** @type {PAP} */({
        });
    }

    /**
     * @param {BAP} self
     * @param {Array<Element>} targets 
     */
    async updateTargets(self, targets){
        const source = this.#source?.deref();
        if(source === undefined) throw 'NI';
        const changeEvent = new ChangeEvent(source);
        const {enhancedElement} = self;
        enhancedElement.dispatchEvent(changeEvent);
        if(changeEvent.r === undefined) return;
        const {assignGingerly} = await import('trans-render/lib/assignGingerly.js');
        for(const target of targets){
            await assignGingerly(target, changeEvent.r);
        }
    }

    /**
     * 
     * @param {BAP} self 
     */
    async hydrate(self){
        const {find} = await import('trans-render/dss/find.js');
        const {parsedStatements, enhancedElement} = self;
        if(parsedStatements.length !== 1) throw 300;
        const statement = parsedStatements[0];
        const {originSpecifiers, targetCSS} = statement;
        const [originSpecifier] = originSpecifiers;
        const originEl = await find(enhancedElement, originSpecifier);
        if(!(originEl instanceof Element)) throw 404;
        this.#source = new WeakRef(originEl);
        const {evt, raps} = originSpecifier;
        if(evt === undefined) throw 300;
        originEl.addEventListener(evt, this);
        const mo = new MountObserver({
            on: targetCSS
        });
        (await import('trans-render/lib/nudge.js')).nudge(originEl);
        this.#mountObserver = mo;
        mo.addEventListener('mount', e => {
            const {mountedElement} = /** @type {any} */ (e);
            this.updateTargets(self, [mountedElement]);
        })
        mo.observe(enhancedElement.getRootNode());
        
        return /** @type {PAP} */({
            resolved: true,
        });
    }


    handleEvent() {
        const mo = this.#mountObserver;
        if(mo === undefined) return;
        const {mountedElements} = mo;
        const {setWeak} = mountedElements;
        const weakRefs = Array.from(setWeak);
        const targets = weakRefs.map(wr => wr.deref()).filter(x => !(x === undefined));
        const self = /** @type {BAP} *//** @type {any} */ (this);
        this.updateTargets(self, targets);
    }
}

await BeMediating.bootUp();
export {BeMediating};

export class ChangeEvent extends Event{
    static eventName = 'change';

    $;
    r;

    constructor($){
        super(ChangeEvent.eventName);
        this.$ = $;
    }
}