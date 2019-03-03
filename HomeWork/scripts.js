const submit = document.getElementById('submit');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');
const numbers2 = document.getElementById('numbers2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
let results = [];
function pictureChange()
{
    document.getElementById('img').src = "img/1.gif";
    setTimeout(function(){
        let a = getRandom();
document.getElementById('img').src = "img/"+ a +'.png';
   makingObjects(a);    
},1000);}


function makingObjects(a){
    const res = {
        name :'rv',
        question:'ve',
        answer:'no',
    };
    res.name = numbers.value;
    res.question = numbers2.value;
    results.push(res);
    console.log(results);
    if(a==1){
        res.answer = 'yes';
result.innerHTML += '<div id ="i1">'+ results[results.length-1].name+' '+ results[results.length-1].question+' '+results[results.length-1].answer+'</div>';
}
if(a==2){
res.answer='no';
    result.innerHTML += '<div id ="i1">'+ results[results.length-1].name+' '+ results[results.length-1].question+' '+results[results.length-1].answer+'</div>';
}
if(a==3){
res.answer='probably';
    result.innerHTML += '<div id="i1">'+ results[results.length-1].name+' '+ results[results.length-1].question+' '+results[results.length-1].answer+'</div>';
}
}


submit.addEventListener('click', function(){
    if(numbers.value === ''){
        numbers.classList.add('error');
        error.innerHTML ='there is no name';
        document.getElementById('img').src = "img/10.png";
    }
    if(numbers2.value === ''){
        numbers2.classList.add('error2');
        error2.innerHTML ='there is no question';
        document.getElementById('img').src = "img/10.png";
    }
    else{

        pictureChange();
}});

function getRandom(){
    return (Math.random() * 2 + 1).toFixed();

}
numbers.addEventListener('click',function(){
    numbers.classList.remove('error');
    error.innerHTML = '';
    });
    numbers2.addEventListener('click',function(){
        numbers2.classList.remove('error2');
        error2.innerHTML = '';
        });
        