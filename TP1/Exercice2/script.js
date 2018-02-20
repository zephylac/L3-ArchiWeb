function affiche_tableau(t){
	var body = document.body;
	var tab = document.createElement("table");

	var tr = tab.insertRow(),
			td1 = tr.insertCell(),
			td2 = tr.insertCell();
	td1.appendChild(document.createTextNode("Index"));
	td2.appendChild(document.createTextNode("Valeur"));

	t.forEach(function(element,i){
		var tr = tab.insertRow(),
				td1 = tr.insertCell(),
				td2 = tr.insertCell();
		td1.appendChild(document.createTextNode(i));
		td2.appendChild(document.createTextNode(element));
	});
	body.appendChild(tab);
}

function affiche_moyenne(t){

	var body = document.body;
	var p = document.createElement("p");

	var moyenne = 0;
	t.forEach(function(element){
		moyenne += element;
	});

	moyenne /=  t.length;
	p.appendChild(document.createTextNode("La moyenne est de " + moyenne));
	body.appendChild(p)

}

function occurences(x,t){

	var body = document.body;
	var p = document.createElement("p");

	var occ = 0;
	t.forEach(function(element){
		if(element === x){occ++;}
	});

	p.appendChild(document.createTextNode("Le nombre d'occurences de " + x + " est de " + occ));
	body.appendChild(p)
}

function on_la_moyenne(t){

	var body = document.body;
	var p = document.createElement("p");

	var occ = 0;
	t.forEach(function(element){
		if(element >= 10){occ++;}
	});

	p.appendChild(document.createTextNode("Le nombre de personnes qui ont eu la moyenne est de " + occ));
	body.appendChild(p)
}

function recherche(x,t){

	var body = document.body;
	var p = document.createElement("p");

	var res = t.find(function(element){
		return x === element;
	});
	console.log(res);
	console.log(res === undefined);
	if(res === undefined){
		p.appendChild(document.createTextNode("Le nombre " + x + " n'existe pas"));
	}
	else{
		p.appendChild(document.createTextNode("Le nombre " + x + " existe"));
	}
	body.appendChild(p)
}

const notes = [13,11,9,4,18,3,11,17,10]
affiche_tableau(notes)
affiche_moyenne(notes)
occurences(11,notes)
on_la_moyenne(notes)
recherche(2,notes)
