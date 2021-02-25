const button=document.getElementById('button');
function calculateBmi(){
let height=parseFloat(document.getElementById('height').value);
let weight=parseFloat(document.getElementById('weight').value);
let bmi=(weight/(height*height)).toFixed(1);
const heading=document.getElementById('heading');
if(bmi<18.5){
    heading.innerHTML=`Your BMI is ${bmi} : Under weight category.`
}
else if(18.5<bmi&&bmi<25){
    heading.innerHTML=`Your BMI is ${bmi} : Healthy weight category.`
}
else if(25<bmi&&bmi<=30){
    heading.innerHTML=`Your BMI is ${bmi} : Over weight Category`
}
else if(30<bmi&&bmi<=50){
    heading.innerHTML=`Your BMI is ${bmi} : Obese category`
}
else{
    heading.innerHTML=`Please enter valid numbers`
}
}
button.addEventListener('click',()=>{
    calculateBmi();
    })