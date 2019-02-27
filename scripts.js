const timeMachine = {
    name: 'DeLorean',
    horsepower: 200,
    timeTravel: true,
    maxSpeed: 160,
    age: 36
   }

//    for(let key in timeMachine){
//      if( typeof timeMachine[key] === 'number'){
//          timeMachine[key] = timeMachine[key] * 2;
//      }
//    }

//    console.log(timeMachine);

function objectToArray(obj){
const array = [];
let i = 0;
for(let key in obj){
array[i] = obj[key];
i++;
}
return array;
}
console.log(timeMachine);
console.log(objectToArray(timeMachine));