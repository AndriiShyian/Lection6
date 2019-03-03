const submit = document.getElementById('submit');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');
const numbers2 = document.getElementById('numbers2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const results = [];
function pictureChange()
{
    document.getElementById('img').src = "img/1.gif";
    setTimeout(function(){
        let a = getRandom();
document.getElementById('img').src = "img/"+ a +'.png';
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
// result.innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ res.answer;
for(let i = 0; i < results.length;i++){
    result.innerHTML = '<div>'+ results[i].name+' '+ results[i].question+' '+results[i].answer+'</div>'
}
}
if(a==2){
    res.answer='no';
    for(let i = 0; i < results.length;i++){
        result.innerHTML = '<div>'+ results[i].name+' '+ results[i].question+' '+results[i].answer+'</div>'
    }
    // result.innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ res.answer;
}
if(a==3){
    res.answer='probably';
    for(let i = 0; i < results.length;i++){
        result.innerHTML = '<div id="i1">'+ results[i].name+' '+ results[i].question+' '+results[i].answer+'</div>'
    }
    // result.innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ res.answer;
}
},1000);}

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
        