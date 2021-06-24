let body = document.querySelector("body");
let name = document.querySelector("input:first-of-type");
let card = document.querySelector("input:nth-of-type(2)");
let username = document.querySelector(".bottom p");
let cardno = document.querySelectorAll(".num p");
let issue = document.querySelector("input:nth-of-type(3)");
let userissue = document.querySelector(".from p:last-of-type");
let expiry = document.querySelector("input:nth-of-type(4)");
let userexpiry = document.querySelector(".thru p:last-of-type");
let cvv = document.querySelector("input:last-of-type");
let usercvv = document.querySelector(".cv p");
let flag = 0;
let pay = document.querySelector(".pay > img");
let logo = document.querySelector(".logo > img");
let bottom = document.querySelector(".bottom > img");
let conn = document.querySelector(".conn > img");
let phone = window.matchMedia('(min-width: 320px) and (max-width: 480px)');
let main = document.querySelector(".main");
let back = document.querySelector(".back");
let all = document.querySelectorAll("input");
let nameexp = /^[a-zA-Z ]{3,30}$/;
let cardexp = /^[0-9]{16}$/;
let issueexp = /^[0-9]{2}\/[0-9]{2}$/;
let expiryexp = /^[0-9]{2}\/[0-9]{2}$/;
let cvvexp = /^[0-9]{3}$/;
let select = document.querySelector("select");
let options = document.querySelectorAll("select > option")
let inputs = document.querySelectorAll(".flags");
if (phone.matches) {
	name.removeAttribute("maxlength");
	name.setAttribute("maxlength","20");
	// back.style.cssText = "height:" + main.offsetHeight + ";"
}
select.onchange = function(){
	if (select.value == options[0].value) {
		body.removeAttribute("class");
		pay.setAttribute("src","amz.png");
		logo.setAttribute("src","logo.png");
		conn.setAttribute("src","contactless.png");
		bottom.setAttribute("src","unnamed.png");
	}
	else if (select.value == options[1].value) {
		body.removeAttribute("class");
		body.classList.add("sbi");
		logo.setAttribute("src","sbi.png");
		conn.setAttribute("src","simple.png");
		bottom.setAttribute("src","rupay.png");
	}
	else if (select.value == options[2].value) {
		body.removeAttribute("class");
		body.classList.add("hdfc");
		logo.setAttribute("src","hdfc.png");
		pay.setAttribute("src","hap.png");
		conn.setAttribute("src","contactless.png");
		bottom.setAttribute("src","master.png");
	}
	else{	
		body.removeAttribute("class");
		body.classList.add("citi");
		pay.setAttribute("src","indian.png");
		logo.setAttribute("src","citi.png");
		conn.setAttribute("src","contactless.png");
		bottom.setAttribute("src","master.png");
	}
}
inputs.forEach(function(current){
	current.onfocus = function(){
		if (flag == 1) {
			document.querySelector(".main").style.cssText = "transform:rotateY(360deg);transition: transform 1s;"
			document.querySelector(".back").style.cssText = "transform:rotateY(180deg);transition: transform 1s;"
			flag = 0;
		}	
	}
});
name.onkeyup = function(){
	username.innerHTML = name.value.toUpperCase();
	if (name.value == "") {
		username.innerHTML = "JOHN DOE";	
	}
}
card.onkeyup = function(){
	let val = card.value;
	let arr = Array.from(val);
	cardno.forEach(function(current){
		let slice = arr.slice(0,4);
		let join = slice.join("");
		current.innerHTML = join;
		arr = arr.slice(4);
	});
	if (card.value == "") {
		cardno.forEach(function(current){
			current.innerHTML = "XXXX";
		});	
 	}
 }	
issue.onkeyup = function(){
	userissue.innerHTML = issue.value;
	if (issue.value == "") {
		userissue.innerHTML = "MM/YY";
	}
}
expiry.onkeyup = function(){
	userexpiry.innerHTML = expiry.value;
	if (expiry.value == "") {
		userexpiry.innerHTML = "MM/YY";
	}
}
cvv.onfocus = function(){
	document.querySelector(".main").style.cssText = "transform:rotateY(180deg);transition: transform 1s;"
	document.querySelector(".back").style.cssText = "transform:rotateY(360deg);transition: transform 1s;"
	flag = 1;
}
cvv.onkeyup = function(){
	usercvv.innerHTML = cvv.value;
	if (cvv.value == "") {
		usercvv.innerHTML = "XXX";
	}
}
all.forEach(function(current,index){
	current.onblur = function(){
		if (index == 0) {
			check(current, nameexp, "*Enter Correct Name");
		}
		else if(index == 1) {
			check(current, cardexp, "*Enter Correct Card Number")
		}		
		else if(index == 2) {
			check(current, issueexp, "*Enter Correct Issue Month")
		}		
		else if(index == 3) {
			check(current, expiryexp, "*Enter Correct Expiry Month")
		}		
		else{
			check(current, cvvexp, "*Enter Correct CVV")
		}
	}
});
function check(curr, cond, msg){
	if (curr.value.match(cond)) {
		curr.nextElementSibling.nextElementSibling.innerHTML = "";
		curr.style.cssText = "border: 1px solid grey;"
	}
	else{
		console.log(curr);
		curr.nextElementSibling.nextElementSibling.innerHTML = msg;
		curr.nextElementSibling.nextElementSibling.style.cssText = "color:red; font-size:0.8rem;"
		curr.style.cssText = "border: 1px solid red;"	
	}
}