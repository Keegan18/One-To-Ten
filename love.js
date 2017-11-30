var hero = "Keegan"; //b
var gender = "MD Helicopters MH-6 Little Bird"; //x
var age = 21; //y
var weapon = "Gewehr 98"; //z
var pronoun = "He"; //a

function MyGender(x){ //Settig the Gender
if (x === "MD Helicopters MH-6 Little Bird" || x === "Male"){
	pronoun = "He";
}
	else if (x === "M1 Abrams" || x === "Female"){
		pronoun = "She";
	}
		else{
			pronoun = "Unknown";
		}
}
MyGender(gender);
console.log(pronoun);


function MyAge(y){ //Setting the Age
if (y < 18){
	output = "is just beginning";
}

	else if (y < 21 && 40){
		output = "has seen a few battles";
	}

	else if (y > 40){
		output = "has lived through many epic battles";
	}
}
MyAge(age);
console.log(output);

//function Quote(b, y, z){
	//return = 
//}