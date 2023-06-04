let welcomeContainer = document.querySelector("#welcomeContainer");
let borderFixed = document.querySelector("#signupBorder");
let borderMove = document.querySelector("#signupBorder>div");
let weightGoalContaner = document.querySelector("#weightGoalContainer");
let baselineContainer =document.querySelector("#baselineContainer");
let sexCalorieContainer = document.querySelector("#sexCalorieContainer");
let tallAndWeightContainer = document.querySelector("#tallAndWeightContainer");
let weeklyGoalContainer = document.querySelector("#weeklyGoalContainer");
let createContainer = document.querySelector("#createContainer");
let continueButton =  document.querySelector("#createContainer>div:nth-child(7)");
let createUserContainer = document.querySelector("#createUserContainer");
let congratulationContainer = document.querySelector("#congratulationContainer");

let btnContainer = document.querySelector("#btnContainer");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");
document.getElementById("continueBtn").addEventListener( "click" ,function(){
   welcomeContainer.style.display = "none";
   borderFixed.style.display = "block";
   weightGoalContaner.style.display = "block";
   btnContainer.style.display = "block";
})

let weightArrEle = document.querySelectorAll("#weightGoalContainer>div:nth-child(2)>div");
let baselineArrEle = document.querySelectorAll("#baselineContainer>div:nth-child(2)>div");
let weeklyGoalArrEle = document.querySelectorAll("#weeklyGoalContainer>div:nth-child(3)>div");

weightArrEle.forEach(function(eachWeight , index){
         eachWeight.addEventListener("click" , function(){
           document.querySelector("#weightGoalContainer>div:nth-child(2)>div.lmgweight").classList.remove("lmgweight");
           weightArrEle[index].classList.add("lmgweight");
         }) 
})

baselineArrEle.forEach(function(eachActive , index){
   eachActive.addEventListener("click" , function(){
       document.querySelector("#baselineContainer>div:nth-child(2)>div.baselineActive").classList.remove("baselineActive");
       baselineArrEle[index].classList.add("baselineActive");
     }) 
})

weeklyGoalArrEle.forEach(function(eachWeek , index){
   eachWeek.addEventListener("click" , function(){
       document.querySelector("#weeklyGoalContainer>div:nth-child(3)>div.perWeek").classList.remove("perWeek");
       weeklyGoalArrEle[index].classList.add("perWeek");
     }) 
})




let i = 1;
document.getElementById("nextBtn").addEventListener("click" , function next(){
 let birthDate = document.getElementById("birthDate").value.split("-");
 let height  = document.getElementById("inputHeight").value;
 let weight = document.getElementById("inputGoalWeight").value;
 let genderSelect = document.getElementById("genderSelect").value;

if(i == 8){
  i = 8;
}else { 
   i++;
  }
   borderMove.style.width = `${12.5*i}%`;
   borderMove.style.borderRadius = "5px";
   weightGoalContaner.style.display = "none";
   if( i == 2){  
   baselineContainer.style.display = "block";
   }
   if(i == 3){  
   baselineContainer.style.display = "none";
   sexCalorieContainer.style.display = "block";
   
   }
   if(i == 4){
   sexCalorieContainer.style.display = "none";
   tallAndWeightContainer.style.display = "block";
  
   localStorage.setItem("gender" , JSON.stringify(genderSelect));
   localStorage.setItem("birthDate" , JSON.stringify(birthDate));
   

   }
   if(i == 5){
   tallAndWeightContainer.style.display = "none";
   weeklyGoalContainer.style.display = "block";
   localStorage.setItem("goalWeight" , JSON.stringify(weight));
   localStorage.setItem("height" , JSON.stringify(height));
   }
   if(i == 6){
   weeklyGoalContainer.style.display = "none";
   createContainer.style.display = "block";
   btnContainer.style.display = "none";
   }

   
})
 let userId = 0;
let userSignup = JSON.parse(localStorage.getItem("userSignup"))||[];

document.getElementById("backBtn").addEventListener("click" , function back(){
   if(i == 1){
      i = 1
   }else { 
     i--;
   }
   
   borderMove.style.width = `${12.5*i}%`;
  
   if(i == 1){  
   weightGoalContaner.style.display = "block";
   baselineContainer.style.display = "none";
   }
   if(i == 2){  
   baselineContainer.style.display = "block";
   sexCalorieContainer.style.display = "none";
       }
  if(i == 3){
   sexCalorieContainer.style.display = "block"
   tallAndWeightContainer.style.display = "none";
    }
  if(i == 4){
   tallAndWeightContainer.style.display = "block";
   weeklyGoalContainer.style.display = "none";
    }
  if(i == 5){
   weeklyGoalContainer.style.display = "block";
   createContainer.style.display = "none";
    }
    if(i == 6){
     createContainer.style.display = "block";
     createUserContainer.style.display = "none";
     btnContainer.style.display = "none";
     document.getElementById("nextBtn").textContent = "NEXT";
     let userArr = JSON.parse(localStorage.getItem("userSignup"));
      userArr.splice(userId-1 , 1);
      localStorage.setItem("userSignup", JSON.stringify(userArr));
      window.location.reload();
    }

   
})


continueButton.addEventListener("click" , function(){
     let email = document.getElementById("email");
     let password = document.getElementById("password");
     let validEmail = document.getElementById("validEmail");
     let validPassword = document.getElementById("validPassword");
        
      let userFlag = true;
      for(let i = 0; i < userSignup.length; i++){ 
          if(userSignup[i].email == email.value){
               userFlag = false;
               break;
          }

     }
 
       if(userFlag){
         if(email.value == "" || !(email.value.includes("@gmail.com"))|| password.value == "" || password.value.length < 10){
                     if(email.value == "" || !(email.value.includes("@gmail.com"))){  
                    validEmail.style.display = "block";
                    validEmail.textContent = "Please enter a valid email address.";
                   }else {
                     validEmail.style.display = "none";
                   }
                    if(password.value == "" || password.value.length < 10){
                    validPassword.style.display = "block";
                    }else {
                     validPassword.style.display = "none";
                    }
                  }else {  
                       userId = userSignup.length + 1;
                   userObj = {
                     id : userId,
                     email : email.value,
                     password : password.value
                 }
          
                   userSignup.push(userObj);
                   localStorage.setItem("userSignup" , JSON.stringify(userSignup));
                   
                     validEmail.style.display = "none";
                     validPassword.style.display = "none";

                     i++;
                     borderMove.style.width = `${12.5*i}%`;
                     createContainer.style.display = "none";
                     createUserContainer.style.display = "block";
                     document.getElementById("nextBtn").textContent = "FINISH";
                     }
     
          }else {
             let validEmail = document.querySelector("#createContainer>div#validEmail");
             validEmail.style.display = "block";
            validEmail.textContent = "This Email address is already registered !";
            email.style.color = "red";
            email.style.border = "1px solid red";
           }
         })

         let resultGoal = 0;
document.getElementById("finishBtn").addEventListener("click" , finishBtn);
    function finishBtn(){  

     let birthDate = JSON.parse(localStorage.getItem("birthDate"));
 let gender = JSON.parse(localStorage.getItem("gender"));
 let weight = JSON.parse(localStorage.getItem("goalWeight"));
 let height= JSON.parse(localStorage.getItem("height"));

 console.log(birthDate);
  let d = new Date();
 let age = eval(d.getFullYear() - birthDate[2]);
 console.log(age);
if(gender == "male"){
 resultGoal += ((4.54*weight) + (6.25*height) - (4.92*age) + 5);
}else {
 resultGoal += ((4.54*weight) + (6.25*height) - (4.92*age) - 161);
}

 localStorage.setItem("resultGoal" , JSON.stringify(resultGoal));
 document.querySelector("#congratulationContainer>div:nth-child(3)").innerText = resultGoal;

    
     let createUser = document.getElementById("createUser");
     let validUserName = document.querySelector("#createUserContainer>div:nth-child(3)");
    
     let localUserSignup = JSON.parse(localStorage.getItem("userName"))||[];
     let userNameFlag = true;
   for(let i = 0; i < localUserSignup.length; i++){
        if(localUserSignup[i] == createUser.value){
         userNameFlag = false;
             break;
        }
   }
   if(userNameFlag){  
       if(createUser.value.length <= 5){
        validUserName.style.display = "block";
        validUserName.innerText = "Must be greater than 5 character !";

        }else {
         i++;
         borderMove.style.width = `${12.5*i}%`;
         createUserContainer.style.display = "none";
         congratulationContainer.style.display = "block";
         localUserSignup.push(createUser.value);
         localStorage.setItem("userName", JSON.stringify(localUserSignup));
        }

     }else {
       validUserName.style.display = "block";
       validUserName.innerText = "This Username is already exist !";
     }
}

document.getElementById("workout-tracker").addEventListener("click" , function(){
   window.location.href = "./homePage.html";
})