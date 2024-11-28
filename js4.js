//weeks massages using if statement

let task1=prompt("enter your day");
if(task1=="monday"){
    console.log("start your week happly");
}
else if(task1=="tuesday"){
    console.log("keep going");
}
else if(task1=="wednesday"){
    console.log("halfway there");
}
else if(task1=="thursday"){
    console.log("almost the weekend");
}
else if(task1=="friday"){
    console.log("happy friday");
}
else if(task1=="staurday"){
    console.log("enjoy your weekend");
}
else if(task1=="sunday"){
    console.log("happy sunday");
}
else{
    console.log("not matching");
}
//week massages using switch case
  let week=prompt("enter a day")
  switch(week){
    case "mondya":console.log("enjoy monday");
    break;
    case "tuesday":console.log("enjoy tuesday");
    break;
    case "wednesdya":console.log("enjoy wednesday");
    break;
    case "thursdya":console.log("enjoy thursday");
    break;
    case "fridya":console.log("enjoy friday");
    break;
    case "staurdya":console.log("enjoy staurday");
    break;
    case "sundya":console.log("enjoy sunday");
    break;
    default:console.log("happy days")
 
  }



//trafic signales using if statement


let sig=prompt("enter signale");
if(sig=="red"){
    console.log("stop")
}
else if(sig=="yellow"){
    console.log("ready to go");
}
else{
    console.log("go");
}

//trafic signales using switch case
let traf=prompt("enter signale");
switch(traf){
    case "red":console.log("stop");
    break;
    case "yellow":console.log("ready to go");
    break;
    case "green":console.log("go");
    break;
    default:console.log("not a signales rules ")

}


//discounts using if statement

let task3=+prompt("enter your money get your discount");
if(task3<=50){
 console.log("no discount");
}
else if(task3<=100){
    console.log("5% discount enjoy");
}

else if(task3<=200){
    console.log("10% discount enjoy");
}
else if(task3>=200){
    console.log("15% discount enjoy");
}
else{
    console.log("not valide")
}

//restaurant menu card using if statement
let task4=prompt("enter your fovrate dish");
if(task4="biriyani"){
    console.log("just 99");
}
else if(task4="shawarama"){
    console.log("just 50");
}
else if(task4="chickentikka"){
    console.log("just 69");
}
else if(task4="soup"){
    console.log("just 30");
}
else if(task4="paneer"){
    console.log("just 55");
}
else if(task4="fish"){
    console.log("just 100");
}
else if(task4="mutton"){
    console.log("just 500");
}
else{
    console.log("not avalible dish compeleted")
}
//restaurant menu card using switch case

let menu=prompt("enter your fovrate dish");
switch(menu){
    case "biriyani":
        console.log("just 99");
        break;
        case "shawarama":
            console.log("just 60");
            break;
            case "paneer":
                console.log("just 40");
                break;
                case "chickentikka":
                    console.log("just 100");
                    break;
                    case "mutton":
                        console.log("just 500");
                        break;
                        case "soup":
                            console.log("just 101");
                            break;
                            default:console.log("not avalible")
                                                            
}

//simple calculator
 let num1=2,num2=8;
let a=+prompt("enter symbol");
let opp="+"
switch(opp){
    case "+":console.log(num1+num2);
    break;
    case "-":console.log(num1-num2);
    break;
    case "/":console.log(num1/num2);
    break;
    case "%":console.log(num1%num2);
    break;
    case "*":console.log(num1*num2);
    break;
    default:console.log("not valid symbol")
}
