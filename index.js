/**
 * 1. Create a new project
 * 2. Install lodash and nodemon NPM packages
 * 3. Implement each exercise in a specific function
 * 5. Each function of yours must deliver the following content when called (using 4 lines in the console):
 * 
 *  "wrapper: {your function name}"
 *  "lodash: {lodash function name}"
 *  input: {input}
 *  output: {output}
 * 4. You can use the following command to start the application and keep listening to changes
 * 
 * `nodemon ./index.js`
 * 
 * 
 * Use lodash/fp functions to achieve the results as describes
 * It might be the case when more than one function can be used to achieve the same result
 * In all cases only ONE function is needed
 */

const fp = require('lodash');
const { sortBy } = require('lodash');

function showResult(wrapper, lodashName, input, output) {
    console.log('______________________');
    console.log('\n');    
    console.log(`wrapper: ${wrapper}`);
    console.log(`lodash: ${lodashName}`);
    console.log(`input: ${JSON.stringify(input)}`);
    console.log(`output: ${JSON.stringify(output)}`);
    console.log('\n');
    console.log('______________________');
}


/**
 * input:   [1, 2, 3, 4, 5]
 * output:  [2, 4]
 */
function getEvenNumbers(input) {
    let output = fp.filter(input, function(item) { 
        if (item % 2 == 0) 
            return item 
    })
    showResult('getEvenNumbers', 'filter', input, output)
}
getEvenNumbers([1, 2, 3, 4, 5])


/**
 * input:   [5, 3, 1, 2, 4]
 * output:  [1, 2, 3, 4, 5]
 */
function reorder(input) {
    let output = fp(fp.clone(input)).sort().value() // Sem dúvida tem um jeito mais "bonito" de fazer isso
    showResult('reorder', 'clone / sort', input, output)
}
reorder([5, 3, 1, 2, 4])


 /**
 * input:   [1, 2, 3, 4, 5]
 * output:  [2, 4, 6, 8, 10]
 */
function getDoubleData(input) {
    let output = fp.map(input, function(item) { return item * 2; })
    showResult('getDoubleData', 'map', input, output)
}
getDoubleData([1, 2, 3, 4, 5])


/**
 * input:  [{ id: 1, name: 'A', age: 17 }, { id: 2, name: 'B', age: 23 }, { id: 3, name: 'C', age: 15 }]
 * output: [{ id: 2, name: 'B', age: 23 }]
 */
function getDataById(input, id) {
    let output = fp.filter(input, function(item) { return item.id == id })
    showResult('getDataById', 'filter', input, output)
}
getDataById([{ id: 1, name: 'A', age: 17 }, { id: 2, name: 'B', age: 23 }, { id: 3, name: 'C', age: 15 }], 2)


/**
* input:   [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
* output:  ['#1 - My name is A', '#2 - My name is B', '#3 - My name is C']
*/
function setMyName(input) {
    let myName = fp.spread(function(id, name) {
        return `#${id} - My name is ${name}`;
    });

    let output = fp.map(input, function(item) { 
        return myName ([item.id, item.name])
    })

    showResult('setMyName', 'map / spread', input, output)
}
setMyName([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }])


/**
 * input:   [{ id: 3, name: 'C' }, { id: 1, name: 'A' }, { id: 2, name: 'B' }]
 * output:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
 */
function sortById(input) {
    let output = fp.sortBy(input, [function(item) { return item.id; }]);

    showResult('sortById', 'sortBy', input, output)
}
sortById([{ id: 3, name: 'C' }, { id: 1, name: 'A' }, { id: 2, name: 'B' }])


/**
* input:   [1, 3, 5]
*          [2, 4, 6]
*
* output:  [1, 3, 5, 2, 4, 6]
*/
function arrayConcat(array1, array2) {
    let output = fp.concat(array1, array2);

    showResult('arrayConcat', 'concat', [[...array1], [...array2]], output)
}
arrayConcat([1, 3, 5], [2, 4, 6])


 /**
 * input:   [1, 2, 3, 4, 5, 6]
 *          [2, 4, 6]
 *
 * output:  [1, 3, 5]
 */
function getDataDifferent(array1, array2) {
    let output = fp.difference(array1, array2);

    showResult('getDataDifferent', 'difference', [[...array1], [...array2]], output)
}
getDataDifferent([1, 2, 3, 4, 5, 6], [2, 4, 6])


 /**
 * input:   [1, 2, 3, 4, 5, 6]
 *          [2, 4, 6]
 *
 * output:  [2, 4, 6]
 */
function getDataEqual(array1, array2) {
    let output = fp.intersection(array1, array2);

    showResult('getDataEqual', 'intersection', [[...array1], [...array2]], output)
}
getDataEqual([1, 2, 3, 4, 5, 6], [2, 4, 6])


 /**
 * input:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
 *         [{ id: 2, name: 'B' }]
 *
 * output: [{ id: 2, name: 'B' }]
 */
function getDataEqualById(array1, array2) {
    let output = fp.intersectionBy(array1, array2, 'id');

    showResult('getDataEqual', 'intersection', [[...array1], [...array2]], output)
}
getDataEqualById([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }], [{ id: 2, name: 'B' }])


/**
 * input:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
 *         [{ id: 2, name: 'B' }, { id: 3, name: 'C' }]
 *
 * output:  [{ id: 1, name: 'A' }] 
 */
function getDataDifferentBy(array1, array2) {
    let output = fp.differenceBy(array1, array2, 'id');

    showResult('getDataDifferentBy', 'differenceBy', [[...array1], [...array2]], output)
}
getDataDifferentBy([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }], [{ id: 2, name: 'B' }, { id: 3, name: 'C' }], 'id')


/**
 * input:  { id: 1, name: 'Test', age: 18 }
 * output: [1, 'Test', 18]
 */
function transformObjectValueToArray(object) {
    let output = fp.toArray(object);

    showResult('transformObjectValueToArray', 'toArray', object, output)
}
transformObjectValueToArray({ id: 1, name: 'Test', age: 18 })


 /**
 * input:  { id: 1, name: 'Test', age: 18 }
 * output: ['id', 'name', 'age']
 */
function transformObjectKeysToArray(object) {
    let output = fp.keys(object);

    showResult('transformObjectKeysToArray', 'keys', object, output)
}
transformObjectKeysToArray({ id: 1, name: 'Test', age: 18 })


 /**
 * input:   [1, 2, 3, 4, 5, 6]
 *          3
 *
 * output:  true
 *
 * input:   [1, 2, 3, 4, 5, 6]
 *          999
 *
 * output:  false
 */
function checkIfExist(array, number) {
    let output = fp.hasIn(array, number);


    showResult('checkIfExist', 'hasIn', [[...array], number], output)
}
checkIfExist([1, 2, 3, 4, 5, 6], 3)
checkIfExist([1, 2, 3, 4, 5, 6], 999)


/**
 * input:  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
 * output: { A: { id: 1, name: 'A' }, B: { id: 2, name: 'B' }, C: { id: 3, name: 'C' } }
 */
function transformArray(array, nameProp) {
    let output = fp.transform(array, function(result, value) {        
        result[value[nameProp]] = value
      }, {});

    showResult('transformArray', 'transform', [[...array], nameProp], output)
}
transformArray([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }], 'name')

