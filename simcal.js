//prompt to select an operation
var input= (prompt("Enter \"add\" \"Sub\",\"mul\", \"div\" \"to select your operation"));

//enter the argument
var x = Number(prompt("Enter the first number"));
let y = Number(prompt("Enter the second number"));

if (input =="add") {
    alert(x+y);
} 
else if (input == "sub") {
    alert(x-y);
}
else if (input =="mul"){
    alert(x*y);
}
else if  (input =="div") {
    alert(x/y)
}
else (input == "Null"){
    alert("this operation is wrong")
}
