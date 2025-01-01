// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
import {Registry} from 'be-hive/Registry.js';

/** @import {EMC, EventListenerOrFn} from './ts-refs/trans-render/be/types' */
/** @import {Actions, PAP,  AP} from './ts-refs/be-mediating/types' */;

const fromOriginSpecifierToTargetSpecifiers 
    = String.raw `from (?<originPart>.*) to (?<targetPart>.*)`;

/**
 * @type {Array<[string, string]>}
 */
const dssArrayKeys = [
    ['originPart', 'originSpecifier'],
    ['targetPart', 'targetSpecifier']
];

/**
 * @type {Partial<EMC<any, AP>>}
 */
export const emc = {
    enhancedElementMatches: 'script[nomodule]',
    base: 'be-mediating',
    map: {
        '0.0':{
            instanceOf: 'Object$entences',
            objValMapsTo: '.',
            regExpExts: {
                parsedStatements: [
                    {
                        regExp: fromOriginSpecifierToTargetSpecifiers,
                        defaultVals:{},
                        dssArrayKeys,
                    }
                ]
            }
        }
    },
    enhPropKey: 'beMediating',
    importEnh: async () => (await import('./be-mediating.js')).BeMediating,
};