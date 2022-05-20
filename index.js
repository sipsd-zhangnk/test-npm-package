const merge = require('deepmerge')
const util = require('util')
var unflatten = require('flat').unflatten

const x = {
    displayName: { eq: "MotionDevice_1000" },
    powerTrains: {
        powerTrainIdentifier: {
            displayName: { eq: "PowerTrain_1" },
        }
    },
    and: [
        { displayName: { eq: "MotionDevice_1111" } }
    ]
}

const y = {
    powerTrains: {
        powerTrainIdentifier: {
            browseName: { eq: "PowerTrain_1" },
        }
    },
    or: { displayName: { eq: "MotionDevice_2222" } }
}

const output = merge.all([x, y]) // => output
console.log(util.inspect(output, { showHidden: false, depth: null }))

let obj = unflatten({
    a: {
        "c.d.field1": {
            relation: 'and',
            isGroup: false,
            path: '',
            operate: '',
            value: ''
        }
    }
})

console.log(util.inspect(obj, { showHidden: false, depth: null }))

