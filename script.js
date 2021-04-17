 //Chap no 1.
//  Q1.Write a script to greet your website visitor using JS alert box?

alert("Welcome to javascrit");


// Q2: Write a script to display following message on your web page?

alert("Error! Please enter a Valid password");


// Q3:. Write a script to display following message on your webpage (Hint  Use line break)?

alert("Welcome to Js Land \nHappy coding :)");


// Q4: Write a script to display following messages in sequence:?

alert("Welcome to js land");
alert("Happy Coding.. :) \n Prevent this page from creating additional dialouge " );


// Chap no 2

// Q1: Declare a variable called username.

var username ="Areeba";

// q2. Declare a variable called myName & assign to it a string that represents your Full Name?

var Myname= "Areeba Khan";
//  document.write(Myname);

//  Q3. Write script to
//  a) Declare a JS variable, titled message.
//  b) Assign “Hello World” to variable message
//  c) Display the message in alert box


var title="Hello World";
alert(title);


// Q4:Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name="He is Jhon";
var Age="He is 19 years old";
var proff="he is Programmer";

alert(name);
alert(Age);
alert(proff);



// q5:. Write a script to display the following alert using one JS variable:

 
var pi="pizza\npizz\npiz\npi\np"
alert(pi);


// q6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com)Show the blow mentioned message in an alert box.(Hint: use string concatenation)



var email="khanareebazaheer00@gmail.com";

alert('this is my ' +email+ ' address');


// q7:. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book='A smarter way to learn JavaScript';
 alert(book);

//  8. Write a script to display this in browser through JS


 document.writeln('Yeah! I can write Html content thorugh Javascript <br><br>');


// Q9:. Store following string in a variable and show in alert and browser through JS
 
var abc="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(abc);




// Chap no 3:

// Q1:. Declare a variable called age & assign to it your age. Show your age in an alert box.
 var age=21;

 alert("I am " +age+ " years old");



 var n=0;
 var x=++n;
 alert("you Have visited " +x+ " times");


//  Q2:Declare a variable called birthYear & assign to it your  birth year. Show the following message in your browser

var birthYear=2000;

document.writeln("<br> My Birth Year is " + birthYear+ " <br>data type of my declared variable is a number <br>");


// Q3: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store"


var visname="Jhon";
var product="t-shirts";
var Quantity=15;

document.writeln("<br> <b>" + visname+ "</b> ordered  <b>" + Quantity + product+ " </b> on XYZ Clothing Store <br> <br>");




// CHAP NO 5

// Q1:. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1=5;
var num2=3;

var add=num1+num2;

document.write("The addition of " + num1 + " and " + num2 + " is " + add+ " <br>" );

// Q2: Repeat task1 for subtraction, multiplication, division & modulus.
  
var sub=num1-num2;
document.write("The subtraction of " + num1 + " and " + num2 + " is " + sub+ "<br> <br>");

var multiplication=num1*num2;
document.write("The multiplication of " + num1 + " and " + num2 + " is " + multiplication+ "<br> <br>");

var division=num1/num2;
document.write("The divisiom of " + num1 + " and " + num2 + " is " + division+ "<br> <br>");

var modulus=num1%num2;
document.write("The remainder of " + num1 + " and " + num2 + " is " + modulus+ "<br> <br>");




// Q no 3:




var a=
document.write("Value after variable declaration is "+a + "<br><br>");
 var a= 5;

 document.write("inital value is: " +a+ "<br><br>");

 var inc= ++a;
 document.write("After increment: " +inc+ "<br> <br>");

 var addition=inc+7;
 document.write("After increment the value is: " +addition+ "<br> <br>");

 var dec= --addition;
 document.write("After decrement the value is: " +dec + "<br><br>");
  var divide= dec/3;
  document.write("The remainder is: " +divide+ "<br> <br>");


//   Q4:. Cost of one movie ticket is 600 PKR. Write a script to 
//   store ticket price in a variable & calculate the cost of buying 5 
//   tickets to a movie. 


var ticket=600;
var total= ticket*5;

document.write("<h4>The total cost of tickets is <b>" + total +"PKR </b></h4>");


// Q5:5. Write a script to display multiplication table of any number in your Browser


var ar=4;
document.write("Table of: " +ar);
var i=1;
for(i=1; i <= 10; i++)
document.write("<br>"+ar+"x"+i+"="+(i*ar));

// Q6:The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var fer=70;
var cal=(fer-32)*5/9;
document.write("<br> <br>"+fer +"°F  is  "+cal + "°C<br><br>");

var cel=25;
var calc=(cel*9/5)+32;
document.write("<br> <br>"+cel +"°C  is  "+calc + "°F<br><br>");


// Q NO 7
document.write("<h1>Shopping Cart</h1>")

var item1=650;
var item2=100;
var quan1=3;
var quant2=7;
var charges=100;

var amount=item1*quan1+item2*quant2+charges;

document.write("The price of item 1 is:"+item1 +"<br>");

document.write("The Quantity of item 1 is:"+quan1 +"<br>");

document.write("The price of item 2 is:"+item2 +"<br>");

document.write("The Quantity of item 2 is:"+quant2 +"<br>");
document.write("Shipping Cahrges is:"+charges +"<br>");



document.write("Total cost of your order is:  "+amount)

// Q no 8:

document.write("<h1>Mark Sheet</h1>");

var totalmarks=980;
var obtained=804;
var per=804/980*100;
document.write("Total Marks:  "+totalmarks+ "<br>");
document.write("Obtained Marks:  "+obtained+ "<br>");
document.write("Percentage Obtained: " +per+ "<br>");

// Q no 9

document.write("<h1>Currency Convertor </h1>");


var Currency=10;
var saudia=25;

var convert=Currency*104.80+saudia*28;
document.write("The Pakistani Currency PKR: "+convert+ "<br>");

// Q no 10

document.write("<h1>Calculations </h1>");

var number=4;
var calc=number+5*10/2;

document.write("The Result is: "+calc);

// Q no 11

document.write("<h1>Age Calculator </h1>");
var currentyear=2021;
var birthyear=2000;
var agecalculation= 2021-2000;

document.write("Now, I am " +agecalculation);


// Q no 12
document.write("<h1>Radius </h1>");

var radius=20;
var circumference= 2*3.142*radius;
var area=3.142*radius*radius;

document.write("The radius :" +radius+"<br>");
document.write("The circumference of :" +circumference+"<br>");

document.write("The are of a circle is :" +area+ "<br>");

// Q NO 13

document.write("<h1>The Life Time Supply Calculator </h1>");

var sanck="Chocolate";
var maxage=65;
var perday=3;
var req=(maxage-agecalculation)*3;
document.write("Favourite Snacks: " +sanck+ "<br>");
document.write("My current age is : " +agecalculation+ "<br>");
document.write("Maximum age: " +maxage+ "<br>");
document.write("Amount of snacks per day: " +perday+ "<br>");
document.write("you will need " +req + sanck+ " to ripe you until the age of "+maxage+ "<br>");


// CHAPTER NO 6
//  Q no 1:

document.write("<h3>CHAPTER 6 Q no 1</h3>");
 

var a=10;
document.write("The value of a is :" +a+"<br> <hr>");
document.write("The value of a is ++a is :" + ++a +"<br>");
document.write("Now the value of a is " +a+"<br><br>");

document.write("Now the value of a++ is " +a++ +"<br>");
document.write("Now the value of a is " +a+"<br><br>");

document.write("The value of --a is:" + --a+"<br>");

document.write("The value of a is:" + a+"<br><br>");

document.write("The value of a-- is : " + a +"<br>"  );
document.write("The value of --a is:" + --a+"<br>");


// Q no 2
document.write("<h5> Q no 2</h5>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is "+a+"<br>");
document.write("b is "+b+"<br>");

document.write("result is  " +result);

// Q no 3

var getname=prompt("Enter your name");

alert("WELCOME "+ getname);

// Q NO 4
document.write("<h1>Default table</h1>")
var tabdef=5;
var tablenumb=prompt("Enter your number");

if(tablenumb == ""){
  for(i=1; i<=10; i++)
  document.write(tabdef+ "x" + i+ "="+ (tabdef*i)+"<br>");
}
else{
  for(i=1; i<=10; i++)

  document.write(tablenumb+ "x" + i+ "="+ (tablenumb*i)+"<br>");

}

// Q NO 5
document.write("<h1> Mark Sheet</h1>");

var sub1=prompt("Enter Subject");
var marks1=parseInt(prompt("Enter your"+ sub1+ "marks"));
var sub2=prompt("Enter Subject");
var marks2=parseInt(prompt("Enter your"+ sub2+ "marks"));
var sub3=prompt("Enter Subject");
var marks3=parseInt(prompt("Enter your"+ sub3+ "marks"));
var totallmarks=100;
var fianlmarks=100*3;
var per1=marks1/totallmarks*100;

var per2=marks2/totallmarks*100;
var per3=marks3/totallmarks*100;

var allmarks= marks1 + marks2+marks3;
var Percent=allmarks/fianlmarks*100;


document.write("<table><tr><td>Subjects</td><td>Total</td><td>Marks Obtained</td><td>Percentage</td></tr><tr><td>"+sub1+"</td><td>"+totallmarks+"</td><td>"+marks1+"</td><td>"+per1+"%</td></tr><tr><td>"+sub2+"</td><td>"+totallmarks+"</td><td>"+marks2+"</td><td>"+per2+"%</td></tr><tr><td>"+sub3+"</td><td>"+totallmarks+"</td><td>"+marks3+"</td><td>"+per3+"%</td></tr><tr><td></td><td>300</td><td>"+allmarks+"</td><td>"+Percent+"%</td></tr></table>")

// Chap no 9-10
// Q no 1:

var city=prompt("Enter Your city");

if(city=="Karachi"){
  alert("Welcome to the City of light");
}
else{
  alert("Welcome to "+ city);
}

// Q no 2

var gendeer=prompt("Who you are? Male or Female");

if(gendeer=="male"){
  alert("Welcome Sir");
}
else{
  alert("Welcome Ma'am");
}
// Q  no 3


var trafficlight=prompt("Enter traffic Signal");

if(trafficlight=="yellow"){
  alert("Ready to move");
}
else if(trafficlight=="green"){
alert("Move now");
}
else{
  alert("Must Stop");
}


// Q no 4

var fuel=+prompt("Enter your remaining fuel");
if(fuel>0.25){
  alert("Please refill the fuel in your car ");
}
else{
  alert("You have enough fuel");
}
// Q no 6


if(Percent>=80){
  remark="Excellent";
  grade="A-one";

}
else if(Percent>=70){
  remark="Good";
  grade="A";

}
else if(Percent>=60){
  remark="You need to improve";
  grade="B";

}
else{
  remark="Sorry";
  grade="fAIL";

}

document.writeln("<h1>Marksheet</h1>");
document.writeln("<h3>Total Marks: "+fianlmarks+"</h3>");
document.writeln("<h3>Obtained Marks: "+allmarks+"</h3>");
document.writeln("<h3>Percentage: "+Percent+"%</h3>");
document.writeln("<h3>Garde: "+grade+"</h3>");
document.writeln("<h3>Remarks: "+remark+"</h3>");





// Q n 7
document.writeln("<h1>Guess number</h1>")
var guess=7;
var guessnumber=+prompt("Enter a guess number");
if(guessnumber===guess ){
  document.writeln("<h4>Bingo!You guess correct number<h4>");
}
else if(guessnumber== ++guess){
  document.writeln("<h4>Close enough to the correct number<h4>");
}
else{
  document.writeln("You lose th Game");

}


// Q no 8

document.writeln("<h1> Divisible bt 3</h1>")

var enternumber1=+prompt("Enter Your  number to check ");
var divisible1=enternumber1 %3;

if(divisible1==0){
  document.writeln("<h4>Your number is divisible by 3</h4>");
}
else{
  document.writeln("<h4>Your number is not divisible by 3</dh4>");

}

// Q no 9
document.writeln("<h1> Even or Odd</h1>")

var enternumber=+prompt("Enter any number");
var divisible=enternumber/3;

if(divisible==0){
  document.writeln("<h4>Your number is odd</h4>");
}
else{
  document.writeln("<h4>Your number is even</dh4>");

}






// // Q no 10

var T=+prompt("Enter temperature");

if(T>=40){
  temp="It is too hot outside";


}
else if(T>=30){
  temp= "The Weather today is Normal";


}
else if(T>=20){
  temp="Today’s Weather is cool.";

}
else{
  temp="OMG! Today’s weather is so Cool.";

}



// q no11

document.writeln("<h1> Calculator</h1>"+one);


var one=+prompt("Enter number 1");

var two=+prompt("Enter number 2");
var sign=+prompt("What do you want", "+,-,*,/");

if(sign=='+'){
  resultt=one+two;
}
else if(sign=='-'){
  resultt=one-two;
}
else if(sign== '*'){
  resultt= one*two;
}
else if(sign=='/'){
  resultt=one/two;
}
else{
  resultt="Please Enter number"
}

document.writeln("<h4>First number: </h4>"+one);

document.writeln("<h4>Second number: </h4>"+two);

document.writeln("<h4>Result: </h4>"+"You "+sign+"="+result);


