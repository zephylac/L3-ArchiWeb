var nbClicks = 0;

function createButton(t){
	var body = document.body;
	var row;

	t.forEach(function(elem,i){
		if(i % 4 == 0){
			row = document.createElement("div")
			row.className = "row";
			body.appendChild(row);
		}

		var col = document.createElement("div")
		col.className = "column"
		row.appendChild(col)
		var img = document.createElement("img");
		img.src="./Images/default.png";
		img.addEventListener("click", function(){
			nbClicks++;
			retourne(this,elem)
		});

		col.appendChild(img);
	});
}

function shuffle() {
	var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function recupImageRetourne(){
		return Array.from(document.getElementsByClassName("retourne"));
}


function retourne(img,i){
	img.src="./Images/"+ i +".jpg";
	img.className = "retourne";

	if(nbClicks == 2){
		nbClicks = 0;
		var imgs = recupImageRetourne();
		if(imgs[0].src === imgs[1].src){
			imgs.forEach(function(element){
				element.className = "ok";
				//element.addEventListener("click", function(){});
			});
		}
		else{
			imgs.forEach(function(element){
				setTimeout(function(elements){
					element.src="./Images/default.png";
					element.className = "";
				},1000);
			});
		}
	}
}









createButton(shuffle());
