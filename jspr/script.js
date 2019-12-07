let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let p = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {  
            let data = JSON.parse(request.response),
            inputVal = inputUsd.value;

            inputVal = inputRub.value / data.usd;
            resolve(inputVal);
        }
    });
});
p.then(data=>{inputUsd.value = data;})
.catch(()=>{inputUsd.value = "Что-то пошло не так!";});
});


inputUsd.addEventListener('input', () => {
    let p = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {  
            let data = JSON.parse(request.response),
            inputVal = inputRub.value;

            inputVal = inputUsd.value / data.rub;
            resolve(inputVal);
        }
    });
});
p.then(data=>{inputRub.value = data;})
.catch(()=>{inputRub.value = "Что-то пошло не так!";});
});

