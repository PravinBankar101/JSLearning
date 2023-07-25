
function swap(n1, n2) {     //n1,n2 arguments or parameters

    console.log('Inside swap function');
    console.log('Before Swap=> n1:', n1, " n2:", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After Swap=> n1:', n1, " n2:", n2);

}

var num1 = 100;
var num2 = 200;
swap(num1, num2);// Function call or invocation

console.log('=====================================================');
var sweety = "Sweety";
var cutie = "Cutey";
swap(sweety, cutie);


console.log('======================================================');
var name1 = "Virat";
var name2 = "Anushka";
swap(name1, name2);