// declarar un array que representara lo asientos de nuestro avion con false que indican que estan vacios

var arraySeats = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
];

// contador que ayuda a rastrear el numero de asientos ocupados
var busySeats = 0; // 0 porque estan libres

var paintSeats = function(array) {
	var containerSeats = document.getElementById('seats');

	for (var i = 0; i < array.length; i++) {
		var seat = document.createElement('div'); // creando un div por asiento
		seat.className = 'seats'; // asignamos la clase seats CSS
		// del 1ero al 4to es primera clase
		if (i < 4) {
			seat.style.backgroundColor = '#1bf5db';
		} else {
			seat.style.backgroundColor = '#f272c3';
		}
		containerSeats.appendChild(seat); // se va agregar al contenedor
	}
};

var reserve = function() {
	var btn = document.getElementById('btn');
	btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
	var choice = prompt('En que zona prefieres reservar \n 1. Primera Clase  \n 2. Económica  \n \n Por favor ingresa aqui una opcion');
	if (choice == 1) {
		checkFirstClassZone();
	} else if (choice == 2) {
		checkEconomicClassZone();
	} else {
		alert("Por favor ingresa un número válido")
	}

};


var checkFirstClassZone = function() {
	var zone = 'Primera Clase';
	for (var index = 0; index < 4; index++) {
		if (arraySeats[index] == false) {
			arraySeats[index] = true;
			reserSeats(index);
      paintTickets(index,zone);
      busySeats++;
			break;
		} else if (index == 3 && arraySeats[index] == true) {
			reasignEconomic(zone);
		}
	}
};

var checkEconomicClassZone = function() {
	var zone = 'Clase Economica';
	for (var index = 4; index < 10; index++) {
		if (arraySeats[index] == false) {
			arraySeats[index] = true;
			reserSeats(index);
      paintTickets(index,zone);
      busySeats++;
			break;
		} else if (index == 9 && arraySeats[index] == true) {
			reasignFirstClass(zone);
		}
	}
};

var reserSeats = function(indextopoint) {
	var seat = document.getElementsByClassName("seats");
	seat[indextopoint].textContent = "ocupado";
}


var reasignEconomic = function(zone) {
if(busySeats ==10){
  noSeats();
  nextFlight();
}else {


	var reasign = confirm("Ya no quedan asientos disponibles" + zone + ":(\n Quieres reservar en zona Economica");

	if (reasign == true) {
		checkEconomicClassZone();
	} else {
		nextFlight();
	}
}
};

var reasignFirstClass = function(zone) {
  if(busySeats ==10){
    noSeats();
    nextFlight();
  }else {
	var reasign = confirm("Ya no quedan asientos disponibles" + zone + ":(\n Quieres reservar en Primera Clase");

	if (reasign == true) {
		checkEconomicClassZone();
	} else {
		nextFlight();
	}
}
}

var nextFlight = function() {
	alert("Nuestro proximo vuelo sale en 3 horas");
}

var paintTickets = function(index,zone){
  var containerTickets = document.getElementById("ticket");
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent ="Pase de Abordar";
  reservedSeating.textContent ="N° de asientos" +  (index+1);
  zoneClass.textContent =zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};

var noSeats =function(){
  alert("Ya no quedan asientos disponibles en el avion");
}

paintSeats(arraySeats);
reserve();
