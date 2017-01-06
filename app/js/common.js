"use strict";
//window.onload = function(){    

var input = document.getElementById('scoreboard');
var buttons = document.getElementsByTagName('button');
var buttonsCount = buttons.length;
var topBar = document.getElementById('top-bar');

var Calc = {
    result   : 0,
    memory   : 0,
    firstNum : 0,
    lastOper : "",
    secondNum: 0,
 
    add : function(){
        Calc.calculate();
        Calc.lastOper = "+";
        Calc.printResult();       
    },
    
    sub : function() {
        Calc.calculate();  
        Calc.lastOper = "-";
        Calc.printResult(); 
    },
    
    mult: function() {
        Calc.calculate(); 
        Calc.lastOper = "*";
        Calc.printResult();   
    },
    
    divide: function() {
        Calc.calculate();
        Calc.lastOper = "/";
        Calc.printResult();     
    },
    
    pow: function() {
        //Calc.calculate();
        Calc.result = +input.value * +input.value;
        Calc.lastOper = "²"; 
        Calc.printResult(); 
    },
    
    sqrt: function() {
        //Calc.calculate();
        Calc.result = Math.sqrt(+input.value,2);
        Calc.lastOper = "√";
        Calc.printResult(); 
    },
        
    calculate : function(){
        Calc.secondNum = +input.value;    
        switch (Calc.lastOper){
            case "" : Calc.result = +input.value;    break; 
            case "+": Calc.result += +Calc.secondNum;  break;
            case "-": Calc.result -= Calc.secondNum;  break;
            case "*": Calc.result *= Calc.secondNum;  break;
            case "/": Calc.result /= Calc.secondNum;  break;
            //case "²": Calc.result = +input.value * +input.value;  break;
            //case "√": Calc.result = Calc.secondNum*Calc.secondNum;  break;  
        }   
        console.log("res "+Calc.result);
        console.log("sec "+Calc.secondNum);
    },
    
    printResult: function(){
        input.value = ""; 
        if( Calc.lastOper == "²" || "√")
        topBar.value = Calc.result;    
        else      
        topBar.value = Calc.result + Calc.lastOper;  
    },
    
    equal : function(){
        switch (Calc.lastOper){
            case "+": Calc.add(); break;
            case "-": Calc.sub(); break;
            case "*": Calc.mult(); break;
            case "/": Calc.divide(); break;
            case "²": Calc.pow(); break;
            case "√": Calc.sqrt(); break;              
            default : input.value = "ERROR";
        }
        Calc.lastOper = ""; 
        topBar.value = "";
        input.value = Calc.result;
    },
    
    backspace : function(){
        input.value = input.value.slice(0, -1);    
    },
    
    sign : function(){
        input.value = input.value * -1;    
    },
    
    clean : function(){
        topBar.value = "";
        input.value = "";
        Calc.firstNum = 0;
        Calc.result = 0;
        Calc.lastOper = "";
    }
};

console.log("result " + Calc.result);


//};


for (var i = 0; i < buttonsCount; i++) {
        buttons[i].onclick = function() {
        var newInput = input.value + this.value;
        input.value = newInput;
    };
}


document.getElementById("clean").onclick =Calc.clean;
document.getElementById("sign").onclick = Calc.sign;
document.getElementById("backspace").onclick = Calc.backspace;

document.getElementById("plus").onclick = Calc.add; 
document.getElementById("sub").onclick = Calc.sub; 
document.getElementById("mult").onclick = Calc.mult; 
document.getElementById("divide").onclick = Calc.divide;
document.getElementById("pow").onclick = Calc.pow;
document.getElementById("sqrt").onclick = Calc.sqrt;

document.getElementById("equal").onclick = Calc.equal;



