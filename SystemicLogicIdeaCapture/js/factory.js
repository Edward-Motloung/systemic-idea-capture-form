// ideaCapture.factory('IdeaService', function ($http, $q) {

// 	var df = $q.defer();

//     return {
//         submit: function(idea) {
//             console.log(idea);
//             return $http({
//                 			// url: 'https://httpbin.org/post',
//                       url: '',
// 						          method: "POST",
// 						          data: $.param({'value':idea}),
// 		                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//             			}).success(function(a){
//                     return idea;
//                   });
//                   return df.promise;  
//                   // return Idea;
// 		}
// 	};
// });

ideaCapture.factory('IdeaService', function ($http, $q) {
return{
  send: function(idea){
    $.post('https://httpbin.org/post',
        {
          Title: idea.Title,
          Email: idea.Email,
          Category: idea.Category,
          Image: idea.Image,
          Description: idea.Description,
          Privacy: idea.Privacy,
          TnC: idea.TnC
        },
        function(data, status){
          return data;
        }
      );
  }
};
});