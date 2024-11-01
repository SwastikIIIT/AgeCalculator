const btn=document.querySelector("button");
const inputBox=document.querySelector("#date");
const p=document.querySelector(".result");

//new Date().toISOString().split("T")[0];gives the current date
inputBox.max=new Date().toISOString().split("T")[0];


function calcAge() {
    const dateOfBirth=new Date(inputBox.value);
    const today=new Date();
    
   let d1=dateOfBirth.getDate();
   let m1=dateOfBirth.getMonth()+1;
   let y1=dateOfBirth.getFullYear();

   let d2=today.getDate();
   let m2=today.getMonth()+1;
   let y2=today.getFullYear();

   let year,month,days;
   year=y2-y1;
    if(m1<=m2)   
    month=m2-m1;
  
    else{  
    month=m2+(12-m1);
     year--;
    }

    if(d1<=d2)
    days=d2-d1;

    else{
    days=d2+(noOfDays(y2,m2-1)-d1);
    month--;
    }

    p.innerHTML=`You are <span>${year}</span> years, <span>${month}</span> months, and <span>${days}</span> days old.`
}

function noOfDays(yr,month){
    //Returns the last date of the previoous month
    return new Date(yr,month,0).getDate();
}


btn.addEventListener("click",(e)=>{
   const ansArr=calcAge();

})

