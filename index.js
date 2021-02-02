// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, val){
    const obj2 = {...obj}
    obj2[key] = val 

    return obj2 
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
    obj[key] = val 

    return obj
}

function deleteFromDriverByKey(obj, key){
    const obj2 = {...obj}
    delete obj2[key]

    return obj2 
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]

    return obj
}