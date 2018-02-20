function initForm(){
	removeAllError();
	document.forms["form"].reset();
}

function removeAllError(){
	console.log(document.getElementsByClassName);	
	Array.from(document.getElementsByClassName("error")).forEach(e=>remove(e));
}

function remove(node){
	node.parentNode.removeChild(node);
}

function displayError(id, msg){
	const row = document.getElementById(id);
	const oldError = document.getElementById(id + "_error");

	if (oldError != null) remove(oldError);

	const error = document.createElement("td");
	error.className = "error";
	error.id = id + "_error";
	error.innerText = msg;
	row.appendChild(error);
}

function checkForm(){

	var body = document.body;
	var tab = document.getElementsByClassName("table");
	var ret = true;

	var gender = document.forms["form"]["gender"].value;
	if (gender == "") {
		displayError("gender","Gender must be choosed");
		ret = false;
	}

	var lastname = document.forms["form"]["lastname"].value;
	if (lastname.length < 2) {
		displayError("lastname","Lastname length must be > 2");
		ret = false;
	}

	var firstname = document.forms["form"]["firstname"].value;
	if (firstname.length < 2) {
		displayError("firstname","firstname length must be at least of 2");
		ret = false;
	}

	var password = document.forms["form"]["password"].value;
	if (password.length < 6) {
		displayError("password","password length must be at least of 6");
		ret = false;
	}

	var country = document.forms["form"]["country"].value;
	if (country == "") {
		displayError("country","Country must be choosed");
		ret = false;
	}

	return ret;
}
