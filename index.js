// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {

 const array2 = [...array, item]
 return array2
}

// Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {

    const array2 = [item, ...array]
    return array2
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
    const array2 = [...array.slice(0,index),item,...array.slice(index)]
    return array2
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
    const array2 = [...array.slice(0,index),item,...array.slice(index+1)]
    return array2
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
    const array2 = [...array.slice(0,index),...array.slice(index+1)]
    return array2
}

//Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
    const object2 = {...object, name: newName};
    return object2;
}

// Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// should give back:
//     { name: "Abe", needsACupOfTea: true }
export function toggleTeaStatus(object) {
    const object2 = {...object,needsACupOfTea:!object.needsACupOfTea};
    return object2;
}

// Combo Time!!

// Immutably update the array as well as the object at the given position/index within the array, 
// so that the value under the "completed" property becomes the opposite of what it was.
// Any other properties in the object should be maintained.
// For example calling:
//    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// should give back:
//    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
    const object2 = {...array[index],completed:!array[index].completed}
    const array2 = [...array.slice(0,index),object2,...array.slice(index+1)]
    return array2
}
