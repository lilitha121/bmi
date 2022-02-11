let idealBmi = document.getElementById('IdealBmi');
let comment = document.getElementById('comment');

function myBMI(){
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let ans = w/(h*2);
    ans = ans.toFixed(2);
    document.getElementById("outputBmi").value = `${ans}`
    
    let age = document.getElementById('age')

    if(document.getElementById('genderId').value == 'male'){
        let ansMale = 0.5*ans + 11.5;
        idealBmi.value = `${ansMale}`
    }else if(document.getElementById('genderId').value == 'female'){
        let ansFemale = 0.5*ans + 0.03*age.value + 11;
        idealBmi.value = `${ansFemale}`
    }


    if(ans < 18){
        comment.innerText = "You are underweight"
    }else if(ans >= 18 && ans < 25){
        comment.innerText = "You are Normal"
    }else if(ans >= 25 && ans < 30){
        comment.innerText = "You are overweight"
    }else{
        comment.innerText = "You are obese"
    }
    
}

function disableInput(){
    if(document.getElementById('genderId').value == 'male'){
        document.getElementById('age').disabled = true;
    }else{
        document.getElementById('age').disabled = false;
    }
    
}


function clear_inputs(){
    let inputs = document.getElementsByClassName('input')

    for(x of inputs){
        x.value = '';
    }

    document.getElementById('genderId').value = 'empty';
    document.getElementById("outputBmi").innerHTML = "";
    idealBmi.innerText = "";
    comment.innerText = "";
}