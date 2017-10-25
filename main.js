const Apify = require('apify');
const _ = require('underscore');

function extractArrays(obj){
    const arrays = {};
    for(let key in obj){
        const val = obj[key];
        if(Array.isArray(val)){
            arrays[key] = val;
            delete obj[key];
        }
    }
    return arrays;
}

function extendArray(array, name, extObj){
    const result = [];
    for(let elem of array){
        result.push(_.extend({[name]: elem}, extObj));
    }
    return result;
}

function getExtended(obj){
    let results = [];
    const arrays = extractArrays(obj);
    for(let key in arrays){
        results = results.concat(extendArray(arrays[key], key, obj));
    }
    return results;
}

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');

    let output = [];
    for(let inObj of input){
        output = output.concat(getExtended(inObj));
    }
    
    await Apify.setValue('OUTPUT', output);
});
