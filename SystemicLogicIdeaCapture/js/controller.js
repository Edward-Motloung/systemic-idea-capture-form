//=============================//
//====== Home Controller ======//
//=============================//
ideaCapture.controller('modalControler', function($scope, IdeaService){

// ===== Create options object ===== //

		$scope.options = [{
			name: "Incremental",
			value: 1
		},
		{
			name: "Disruptive",
			value: 2
		},
		{
			name: "Radical",
			value: 3
		}];

	$scope.CategoryID = $scope.options[0];

// ===== submitIdea ===== //

	$scope.submitIdea = function(){
			var idea = {
				Title: $scope.Title,
				Email: $scope.Email,
				Category: $scope.CategoryID.value,
				Image: $scope.Image,//This isn't working
				Description: $scope.Description,
				Privacy: $scope.Privacy,
				TnC: $scope.tnc
			};

// ===== Run Validations ===== //

			if(!validateTitle(idea.Title)){
				document.getElementById('titleError').innerHTML = "Your title seems to be too short.";
				$('#titleError').css("color","red");
				return;
			} else {
				if($('#titleError').is(':visible')){
					$('#titleError').css('display','none');
				}
			}

			if(!validateEmail(idea.Email)){
				document.getElementById('emailError').innerHTML = "Please verify that your email has an '@' and '.' characters.";
				$('#emailError').css("color","red");
				return;
			} else {
				if($('#emailError').is(':visible')){
					$('#emailError').css('display','none');				
				}
			}

			if(!validateDesc(idea.Description)){
				document.getElementById('descError').innerHTML = "Your description looks to short. Please try again.";
				$('#descError').css("color","red");
				return;
			} else {
				if($('#descError').is(':visible')){
					$('#descError').css('display','none');				
				}
			}

			if(!validatePrivacy(idea.Privacy)){
				document.getElementById('privacyError').innerHTML = "Your didn't select your privacy";
				$('#privacyError').css("color","red");
				return;
			} else {
				if($('#privacyError').is(':visible')){
					$('#privacyError').css('display','none');				
				}
			}

			if(!validateTnC(idea.TnC)){
				document.getElementById('tncError').innerHTML = "Please read our terms and conditions";
				$('#tncError').css("color","red");
				return;
			} else {
				if($('#tncError').is(':visible')){
					$('#tncError').css('display','none');				
				}
			}

// ===== AJAX POST ===== //

		var url = "https://httpbin.org/post";

		$.post(url, idea, function(data, status){
		        console.log(data.form);
		        $scope.Title = "";
				$scope.Email = "";
				$scope.Image = "";
				$scope.Description = "";
				$scope.Privacy = "";
				$scope.TnC = "";
				hideRemodal();
				document.getElementById('vtitle').innerHTML = "Title: " + data.form.Title;
				document.getElementById('vemail').innerHTML = "Email: " + data.form.Email;
				document.getElementById('vimage').innerHTML = "Image: " + data.form.Image;
				document.getElementById('vdesc').innerHTML = "Description: " + data.form.Description;
				document.getElementById('vprivacy').innerHTML = "Privacy: " + data.form.Privacy;
				document.getElementById('vtnc').innerHTML = "Terms and Conditions: " + data.form.TnC;
				showResult();
		    });
		}
//====================================================================//

// ===== JQuery Animations ===== //

	$(document).ready(function(){
		$('.modal').hide();
		$('.modal').css("opacity", "0");
		$('.result').hide();
	});

	$('.openModal').on('click', function(){
		$('.modal').show();
		$('.modal').css("opacity", "0");
		$('.openModal').hide();
		$('.modal').css("position", "absolute");
		$('.modal').css("top", "10%");
		$('.modal').animate({
			opacity: 1
		}, "slow");
		$('.body').css("background-color","#262626");
		$('.title').hide();
		hideResult();
	});

	$('#close').on('click', function(){
		$('.openModal').show();
		$('.modal').hide();
		$('.title').show();
		$('.body').css("background-color","#fff");
	});

	function hideRemodal(){
		$('.openModal').show();
		$('.modal').hide();
		$('.title').show();
		$('.body').css("background-color","#fff");
	}

	function showResult(){
		$('.result').show();
	}
	function hideResult(){
		$('.result').hide();
	}

// ===== Show validations ===== //

	$('#txtIdeaTitle').on('blur', function(){
		if($scope.Title == null){
			document.getElementById('titleError').innerHTML = "Required.";
			$('#titleError').css("color","red");
		}
	});

	$('#txtEmail').on('blur', function(){
		if($scope.Email == null){
			document.getElementById('emailError').innerHTML = "Required.";
			$('#emailError').css("color","red");
		}
	});

	$('#taDesc').on('blur', function(){
		if($scope.Description == null){
			document.getElementById('descError').innerHTML = "Required.";
			$('#descError').css("color","red");
		}
	});
});

// ===== Normal Form Controller ===== //

ideaCapture.controller('formController', function($scope){
	$scope.options = [{
			name: "Incremental",
			value: 1
		},
		{
			name: "Disruptive",
			value: 2
		},
		{
			name: "Radical",
			value: 3
		}];

	$scope.CategoryID = $scope.options[0];

// ===== submitIdea ===== //

	$scope.submitIdea = function(){
			var idea = {
				Title: $scope.Title,
				Email: $scope.Email,
				Category: $scope.CategoryID.value,
				Image: $scope.Image,//This isn't working
				Description: $scope.Description,
				Privacy: $scope.Privacy,
				TnC: $scope.tnc
			};
// ===== Run Validations ===== //

			if(!validateTitle(idea.Title)){
				document.getElementById('titleError').innerHTML = "Your title seems to be too short.";
				$('#titleError').css("color","red");
				return;
			} else {
				if($('#titleError').is(':visible')){
					$('#titleError').css('display','none');
				}
			}

			if(!validateEmail(idea.Email)){
				document.getElementById('emailError').innerHTML = "Please verify that your email has an '@' and '.' characters.";
				$('#emailError').css("color","red");
				return;
			} else {
				if($('#emailError').is(':visible')){
					$('#emailError').css('display','none');				
				}
			}

			if(!validateDesc(idea.Description)){
				document.getElementById('descError').innerHTML = "Your description looks to short. Please try again.";
				$('#descError').css("color","red");
				return;
			} else {
				if($('#descError').is(':visible')){
					$('#descError').css('display','none');				
				}
			}

			if(!validatePrivacy(idea.Privacy)){
				document.getElementById('privacyError').innerHTML = "Your didn't select your privacy";
				$('#privacyError').css("color","red");
				return;
			} else {
				if($('#privacyError').is(':visible')){
					$('#privacyError').css('display','none');				
				}
			}

			if(!validateTnC(idea.TnC)){
				document.getElementById('tncError').innerHTML = "Please read our terms and conditions";
				$('#tncError').css("color","red");
				return;
			} else {
				if($('#tncError').is(':visible')){
					$('#tncError').css('display','none');				
				}
			}

// ===== AJAX POST ===== //

		var url = "https://httpbin.org/post";

		$.post(url, idea, function(data, status){
		        console.log(data.form);
		        $scope.Title = "";
				$scope.Email = "";
				$scope.Image = "";
				$scope.Description = "";
				$scope.Privacy = "";
				$scope.TnC = "";
				document.getElementById('vtitle').innerHTML = "Title: " + data.form.Title;
				document.getElementById('vemail').innerHTML = "Email: " + data.form.Email;
				document.getElementById('vimage').innerHTML = "Image: " + data.form.Image;
				document.getElementById('vdesc').innerHTML = "Description: " + data.form.Description;
				document.getElementById('vprivacy').innerHTML = "Privacy: " + data.form.Privacy;
				document.getElementById('vtnc').innerHTML = "Terms and Conditions: " + data.form.TnC;				
		    });
		}

	$('#txtIdeaTitle').on('blur', function(){
		if($scope.Title == null){
			document.getElementById('titleError').innerHTML = "Required.";
			$('#titleError').css("color","red");
		}
	});

	$('#txtEmail').on('blur', function(){
		if($scope.Email == null){
			document.getElementById('emailError').innerHTML = "Required.";
			$('#emailError').css("color","red");
		}
	});

	$('#taDesc').on('blur', function(){
		if($scope.Description == null){
			document.getElementById('descError').innerHTML = "Required.";
			$('#descError').css("color","red");
		}
	});
});

//==========================================//
//========Form Validation Functions=========//
//==========================================//

function validateTitle(title){

	if(title == null || title.length < 8){
		return false;
	} else {
		return true;
	}
}

function validateEmail(email){
	if(email == null || email.length < 8){
		return false;
	} else {
		if(email.indexOf('@') == -1){
			return false;
		} else {
			if(email.indexOf('.') == -1){
				return false;
			}
		}
	}
	return true;
}

function validateDesc(description){
	if(description == null || description.length <= 5){
		return false;
	}
	return true;
}

function validatePrivacy(privacy){
	if(privacy == null){
		return false
	}
	return true;
}

function validateTnC(tnc){
	if(tnc == false || tnc == null){
		return false
	}
	return true;
}












