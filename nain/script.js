let a=parseFloat(prompt("Enter a number"));
let b=prompt("enter your arithmatic opration(+,-,*,/)");
let c= parseFloat(prompt("Enter a number"));


let d=Math.random();
console.log(d*100);


if ((d*100) <=10.00) {

  if(b=="+"){
    console.log(a - c);
  }
  else if(b=="-"){
    console.log(a / c);
  }
  else if(b=="*"){
    console.log(a + c);
  }
  else if(b=="/"){
    console.log(a ** c);
  }
  else{
    console.log("Invalid input");
  }


}
else{

  if(b=="+"){
    console.log(a + c);
  }
  else if(b=="-"){
    console.log(a - c);
  }
  else if(b=="*"){
    console.log(a ** c);
  }
  else if(b=="/"){
    console.log(a / c);
  }
  else{
    console.log("Invalid input");
  }
}