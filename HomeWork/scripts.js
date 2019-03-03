const submit = document.getElementById('submit');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');
const numbers2 = document.getElementById('numbers2');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const resul4 = document.getElementById('result4');
let arrayResults = [result,result2,result3,resul4];//записую всі result в один масив
function pictureChange()
{
    document.getElementById('img').src = "img/1.gif";
    setTimeout(function(){
        let a = getRandom();
document.getElementById('img').src = "img/"+ a +'.png';
let i = 0;
    for(i; i < arrayResults.length;i++){// цикл для виводу
        if(a==1){
arrayResults[i].innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ ' yes.';
break;//якщо знайшло значення, один раз записує і виходить з циклу
}
if(a==2){
    arrayResults[i].innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ ' no.';
    break;
}
if(a==3){
    arrayResults[i].innerHTML='User with name: '+numbers.value+', asked question like: ' + numbers2.value +' and was answered: '+ ' probably.';
    break;
}
}
i++;//збільшив і на 1, щоб записати ще три result
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
        