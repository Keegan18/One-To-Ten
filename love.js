var hero = "Keegan"; //b
var gender = "MD Helicopters MH-6 Little Bird"; //x
var age = 21; //y
var weapon = "Gewehr 98"; //z
var pronoun = ""; //a

 //Settig the Gender
if (gender == "MD Helicopters MH-6 Little Bird" || gender == "Male"){
	pronoun ="His";
}
	else if (gender == "M1 Abrams" || gender == "Female"){
		pronoun ="Her";
	}
		else{
			pronoun ="Undefined";
		}

MyGender(gender);

//Setting the Age
if (age < 18){
	output = "is just beginning";
}

	else if (age > 21 && y < 40){
		output = "has seen a few battles";
	}

	else if (age > 40){
		output = "has lived through many epic battles";
	}

console.log(hero + "is our lovable hero, who" + age == 21 + "with his trusty" + weapon);


//Setting 1 Fish 2 Fish
var count;
var animal = "Goldfish";
function animalHouse(a, b){
	count = a + b;
console.log(count);
}
animalHouse(34,12);

//1 Fish 2 Fish Continue
if (count > 2){
console.log("We have too many" + animal + "s");
}

var hero = "Ant_Man";
function avengersAssemble(avengers){
	if (avengers == "Ant_Man"){
		console.log("I think we should call the Avengers.");
	}
		else if(avengers == "Hulk"){
			console.log("HULK SMASH");
		}
		else if(avengers == "Captain America"){
			console.log("Avengers Assemble");
		}
		else if(avengers == "Thor"){
			console.log("Odin's beard!");
		}
		else if(avengers == "")
}





var hero = "hulk";
function avengersAssemble(a){
 if (a == "hulk") {
   console.log("hulk smash");
 } else if (a == "ironman"){
   console.log("suit up");
 } else if (a == "hawkeye"){
   console.log("bulls eye");
 } else if (a == "captain america"){
   console.log("clean up");
 }
}
avengersAssemble(hawkeye);

var light =true;
Boolean (light);
if (light == true) {
    console.log('And then there was light');
} else {
    console.log('Lights out');
}

var carType = ["Toyota", "Lamborghini", "Tesla"];
var color = ["red", "blue", "black"];
var num = 12;
if (carType == "Toyota" && color == "blue"){
 console.log("we have " + num + " " + color [1] + " " + carType [0]);
 } if (carType == "Lamborghini" && color == "blue"){
   console.log("we have " + num + " " + color [0] + " " + carType [1]);
 } if (carType == "Tesla" && color == "black"){
   console.log("we have " + num + " " + color [2] + " " + carType [2]);
 }else {
   console.log("We dont have any in stock");
}


