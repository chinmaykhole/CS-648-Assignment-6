var int1= parseInt(window.prompt("Enter the first number"));
var int2 = parseInt(window.prompt("Enter the second number"));

if (int1 == int2){
    document.write(int1 +"and" + int2 + "are equal");
}
else if (int1 > int2){
    document.write(int1 + "is greater");
}
else{
    document.write(int2 + "is greater");
}
