var pudding = 0;
var marketPrice;
var cash = 0;
var max = 10;
var min = 2;
var hires = 0;
var slaves = 0;
var amount = 1;
var soldAmount = 1;

function marketValue() {
  marketPrice = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('price').innerHTML = marketPrice;
}
setInterval(marketValue, 5000);


function makePudding(){
  pudding = pudding + amount;
  document.getElementById('pudding').innerHTML = pudding;
  document.getElementById('event').innerHTML = 'You make pudding';
}

function sellPudding(){
  pudding = pudding - soldAmount;
  document.getElementById('pudding').innerHTML = pudding;

    if (pudding > 0){
      cash = cash + (marketPrice*soldAmount);
      document.getElementById('cash').innerHTML = cash;
      document.getElementById('event').innerHTML = 'You sell pudding';
    }
    else if (pudding < 1){
      pudding = 0;
      document.getElementById('pudding').innerHTML = pudding;
    }
}

function hireAssasins(){
  if (cash >= 1000){
  hires++; min++; max++;
  cash = cash - 1000;
  document.getElementById('cash').innerHTML = cash;
  document.getElementById('event').innerHTML = 'You hired an assasin and the price of pudding has increased!';
  }
  else if (cash <=999){
    document.getElementById('event').innerHTML = 'You need to make more pudding to afford that';
  }
}

function moreSlaves(){
  if (cash >= 2500){
  slaves++; amount = amount + 1;
  cash = cash - 2500;
  document.getElementById('cash').innerHTML = cash;
  document.getElementById('event').innerHTML = 'You smuggle in more slaves from Russia. The pudding gods are pleased';
  }
  else if (cash <=2499){
    document.getElementById('event').innerHTML = 'You need to make more pudding to afford that';
  }
}

function moreKids(){
  if (cash >= 5000){
  slaves++; soldAmount = soldAmount + 1;
  cash = cash - 5000;
  document.getElementById('cash').innerHTML = cash;
  document.getElementById('event').innerHTML = 'You hire child labour from China. The pudding gods are very pleased';
  }
  else if (cash <=4999){
    document.getElementById('event').innerHTML = 'You need to make more pudding to afford that';
  }
}
