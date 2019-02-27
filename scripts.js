const submit = document.getElementById('submit');
const result = document.getElementById('result');
let bodyParts = [];
let adjectives = [];
let words = [];
function getBodyPart(element){
   bodyParts = setData(element);
   console.log(bodyParts);
}
 function getAdjectives(element){
     adjectives = setData(element);
     console.log(adjectives);
 }
 function getWords(element){
     words = setData(element);
     console.log(words);
 }

function setData(element){
const array = element.value.split(',');
if(element.value === ''){
    element.classList.add('error');
}
else{
element.classList.remove('error');
}

return array;
}

function randomWords(array){
    const index = randomNumbers(array);
    return array[index];
}

function randomNumbers(array){
    const arraysLength = array.length - 1
return (Math.random() * arraysLength).toFixed();
}

function generator(){
    result.classList.add('load');
    setTimeout(function() {
if(bodyParts.length != 0 && adjectives.length != 0 && words.length != 0){
result.innerHTML =  `Your ${randomWords(bodyParts)} is like a ${randomWords(adjectives)} ${randomWords(words)}`;
}
else{
    console.log('Errors!');
}
result.classList.remove('load');
},3000);}

window.onload = function(){
    const bodyPartsId = document.getElementById('bodyParts');
    const adjectivesId = document.getElementById('adjectives');
    const wordsId = document.getElementById('words');

    bodyParts = bodyPartsId.value.split(',');
    adjectives = adjectivesId.value.split(',');
    words = wordsId.value.split(',');
    

submit.addEventListener('click', function(){
    generator();
});
}