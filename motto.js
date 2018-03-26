
	var timer = setInterval(refresh, 5000);

	var motto = [
	"Alumno de informática", 
	"Estudiando en el IES Henri Matisse",
	"Me gustan los videojuegos",
	"Por la patria",
	"Hola",
	"XD",
	"Yo 100% Chauchas",
	"Make Spain Great Again"
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
