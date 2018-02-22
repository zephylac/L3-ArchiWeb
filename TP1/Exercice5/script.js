var nbClicks = 0;

function createButton(t){
	var body = document.body;
	var container = document.getElementsByClassName("container")
	var row;

	t.forEach(function(elem,i){

		var img = document.createElement("img");
		img.className = "square rounded rounded";
		img.src="./Images/default.png";
		img.addEventListener("click", function(){
			nbClicks++;
			show(this,elem)
		});

		container[0].appendChild(img);
	});
}

//Shuffle image order
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

function retrieveShowedImage(){
		return Array.from(document.getElementsByClassName("show"));
}

function playAudio(str) {
	var audio = document.getElementById(str);
	audio.play();
}


function show(img,i){
	img.src="./Images/"+ i +".jpg";
	img.className = "square rounded show";

	if(nbClicks == 2){
		nbClicks = 0;
		var imgs = retrieveShowedImage();
		if(imgs[0].src === imgs[1].src){
			imgs.forEach(function(element){
				element.className = "square rounded ok";
				if(document.getElementsByClassName("ok").length == 16){
					playAudio("fin");
				}
				else {
					playAudio("ah");
				}
			});
		}
		else{
			imgs.forEach(function(element){
				setTimeout(function(elements){
					element.src="./Images/default.png";
					element.className = "square rounded";
				},1000);
			});
		}
	}
}

var btn = document.getElementById('btn')
btn.addEventListener('click', function(event) {
	removeAllImage();
	createButton(shuffle());
});

function removeAllImage(){
	Array.from(document.getElementsByClassName("square rounded")).forEach(e=>e.parentNode.removeChild(e));
}


createButton(shuffle());
