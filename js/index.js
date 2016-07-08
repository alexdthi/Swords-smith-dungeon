var monHealth =100;
var hitpower;

var mPosition;
var pPosition = 2;

document.getElementById("p"+pPosition).innerHTML = "Player";


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
var rightmove = function(){
	if (pPosition==3) {
		document.getElementById('display').innerHTML = "Can't move that way.";
	} else {
		document.getElementById("p"+pPosition).innerHTML = "";	
		pPosition++;
		document.getElementById("p"+pPosition).innerHTML = "Player";
	}



}




var leftmove = function(){
	if (pPosition==1) {
		document.getElementById('display').innerHTML = "Can't move that way.";
	} else {
		document.getElementById("p"+pPosition).innerHTML = "";	
		pPosition++;
		document.getElementById("p"+pPosition).innerHTML = "Player";
	}



}

