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
				document.getElementById('titleError').innerHTML = "Enter a valid Title";
				return;
			}

			if(!validateEmail(idea.Email)){
				document.getElementById('emailError').innerHTML = "Enter a valid Enter";
				return;
			}

			if(!validateDesc(idea.Description)){
				console.log("incorrect Description");
				return;
			}

			if(!validatePrivacy(idea.Privacy)){
				console.log('please select an appropriate privacy');
				return;
			}

			if(!validateTnC(idea.TnC)){
				console.log("please accept our terms and conditions");
				return;
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
			console.log("Required");
		}
	});

	$('#txtEmail').on('blur', function(){
		if($scope.Title == null){
			console.log("Required");
		}
	});

	$('#taDesc').on('blur', function(){
		if($scope.Title == null){
			console.log("Required");
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
	if(tnc == null){
		return false
	}
	return true;
}














