var monHealth =100;
var hitpower;
var hit = function() {
	hitpower = Math.floor(Math.random()*11);
	monHealth -= hitpower;

	if (monHealth <= 0) {

		monHealth = 0;
		document.getElementById('mondead').innerHTML = "Your monster is dead!";
		console.log(monHealth);

		document.getElementById('monalive').innerHTML = "Your monster is at "  + monHealth;
	} else {

		document.getElementById('monalive').innerHTML = "Your monster is at "  + monHealth;


	}
}

