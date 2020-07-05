var _length = document.getElementById("length");
var _lowercase = document.getElementById("lowercase");
var _uppercase = document.getElementById("uppercase");
var _number = document.getElementById("number");
var _symbol = document.getElementById("symbol");
var generateButton = document.getElementById("interface");

const key_strings = {
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	number: '0123456789',
	symbol: '*;<>()[]{}#$?!^|'
};


generateButton.addEventListener("click", () => {
	var length = +_length.value;
	var activeLower = _lowercase.checked;
	var activeUpper = _uppercase.checked;
	var activeNumber = _number.checked;
	var activeSymbol = _symbol.checked;
	
	generateRandomPassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
	
	
});

function generateRandomPassword(lower, upper, num, sym, length){
	let MAIN_STRING = "";
	let PASSWORD = "";
	
	const options = {
		lowercase: lower,
		uppercase: upper,
		number: num,
		symbol: sym
	};
	
	for(i=0;i<Object.keys(options).length;i++){
		MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
	}
	
	if(MAIN_STRING != "" && length > 7 && length < 129){
		for(i=0;i<length;i++){
			PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
		}
		
		document.getElementById("text").value = PASSWORD;
		
	}
	
	else{
		document.getElementById("text").value = "Check at least one box and Insert a number between 8-128!";
	}
	
    	
}