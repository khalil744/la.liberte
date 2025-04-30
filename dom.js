function red(){
    elem = document.getElementById("omletteHeart");
    if(elem.style.color === "red"){
        elem.style.color = "black";
    }else{
        elem.style.color = "red";   
    }
}
function red2(){
    elem = document.getElementById("socksHeart");
    if(elem.style.color === "red"){
        elem.style.color = "black";
    }else{
        elem.style.color = "red";   
    }
}
function red3(){
    elem = document.getElementById("bagHeart");
    if(elem.style.color === "red"){
        elem.style.color = "black";
    }else{
        elem.style.color = "red";   
    }
}
function addOMELETTE(){
    elem = document.getElementById("basketQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    quantity++;
    sum += 10;
    totalElem[0].innerText = sum;
    elem.textContent = quantity;
}

function minusOMELETTE(){
    elem = document.getElementById("basketQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    if(quantity>0){
        quantity--;
        sum -=10;
        totalElem[0].innerText = sum;
        elem.textContent = quantity;
    }
    
}            

function addcrepe(){
    elem = document.getElementById("socksQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    quantity++;
    sum += 11;
    totalElem[0].innerText = sum;
    elem.textContent = quantity;
}


function minuscrepe(){
    elem = document.getElementById("socksQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    if(quantity>0){
        quantity--;
        sum -= 11;
        totalElem[0].innerText = sum;
        elem.textContent = quantity;
    }
              
}

function addsandwitch(){
    elem = document.getElementById("bagQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    quantity++;
    sum += 12;
    totalElem[0].innerText = sum;
    elem.textContent = quantity;
}
function minussandwitch(){
    elem = document.getElementById("bagQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    var quantity = Number(elem.textContent); 
    if(quantity>0){
        quantity--;
        sum -=12;
        totalElem[0].innerText = sum;
        elem.textContent = quantity;
    }
    
}
function minus(){
    elem = document.getElementById("basketQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    quantity = Number(elem.textContent);
    sum -= quantity*10;
    totalElem[0].innerText = sum;
    quantity = 0;
    elem.textContent = 0;
}
function minus0(){
    elem = document.getElementById("socksQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    quantity = Number(elem.textContent);
    sum -= quantity*11;
    totalElem[0].innerText = sum;
    quantity = 0;
    elem.textContent = 0;
}
function minus00(){
    elem = document.getElementById("bagQuantity");
    totalElem = document.getElementsByClassName("total");
    let sum = Number(totalElem[0].innerText);
    quantity = Number(elem.textContent);
    sum -= quantity*12;
    totalElem[0].innerText = sum;
    quantity = 0;
    elem.textContent = 0;
}