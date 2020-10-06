var coinFlip;
var n;

for (n = 0; n < 10; n++){
    coinFlip = Math.round(Math.random());

    if (coinFlip){
        window.alert("Tails");
    }
    else{
        window.alert("Heads");
    }
}