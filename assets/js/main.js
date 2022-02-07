// login and Register /////////////////////////////////////////////////////////////

var navbarList = document.querySelector('.navber-list');
var Login = document.querySelector('.login');
var Register = document.querySelector('.Register');
var authFormLogin = document.querySelector('.auth-form-login');
var authFormRegister = document.querySelector('.auth-form-Register');
console.log(authFormLogin);

/// click hiện ra login and Register
var molda = document.querySelector('.molda');
var moldaoverlay = document.querySelector('.molda-overlay');
var moldabody = document.querySelector('.molda-body');


///hiện thi form Login
Login.onclick = function(){
	molda.style.visibility = "visible";
	// Login.style.display = "block";
	authFormLogin.style.display = "block";
	authFormRegister.style.display = "none";
	if(Login)
	{
		var tranferForm = authFormLogin.querySelector('.tranfer-form');
		tranferForm.onclick = function(){
		authFormLogin.style.display = "none";
		authFormRegister.style.display = "block";
			
		}
	}
}

///hiện thi form Register
Register.onclick = function(){
	molda.style.visibility = "visible";
	authFormRegister.style.display = "block";
	authFormLogin.style.display = "none";
	if(Register){
		var tranferForm = authFormRegister.querySelector('.tranfer-form');
		tranferForm.onclick = function(){
		authFormRegister.style.display = "none";
		authFormLogin.style.display = "block";
		}
	}
}

///ân modal

moldaoverlay.onclick = function(){
	molda.style.visibility = "hidden";
	

}
////======================like category==================================///

$(document).ready(function() {
	$('.no-like').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('like-red');
		$(this).toggleClass('none-like');
	});
});





// var like = document.querySelectorAll('.like i');
// var likeRed = document.querySelectorAll('.like .like-red')
// console.log(likeRed)




// for (var i = 0; i < likeRed.length; i++) {
// 		likeRed[i].onclick = function(){
// 			// for (var j = 0; j < i; j++) {
// 			// 	likeRed[j].style.color = 'red';
				
// 			// }
// 			for (var key in likeRed[i]) {
// 				key.style.color = 'red';	
				
// 			}
		
// 		}
		
// 	}