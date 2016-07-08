var monHealth =100;
var hitpower;

var mPosition;
var pPosition = 2;

var monsterPlace = function(){
	mPosition =  Math.floor(Math.random()*3)+1;
	console.log(mPosition);
	document.getElementById("m"+mPosition).innerHTML = "Mon";
}

monsterPlace();

var hit = function() {
	if (pPosition == mPosition){
		hitpower = Math.floor(Math.random()*11);
		monHealth -= hitpower;

		if (monHealth <= 0) {
			document.getElementById('display').innerHTML = "Your monster is dead!";
			console.log(monHealth);
		} else {
			document.getElementById('display').innerHTML = "Your monster is at "  + monHealth;
		}
	} else {
		document.getElementById('display').innerHTML = "You Miss!";
	}
}
var pPosition = function(){
	pPosition = 
}
