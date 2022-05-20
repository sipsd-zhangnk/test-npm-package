const text=`    findTaskControl (filter: {and: [{browseName: {eq: "2"}}]}) {`
// const text=`    findTaskControl {`
// const text=`  }`
const array = /.*(?=\(.*\))?.*{/g.exec(text);
console.log(array);
