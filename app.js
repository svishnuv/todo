(function(){
	//Injecting Module and Controller
	angular.module('ToDo',[]).
	controller('todoController',['$scope',function($scope){
		//Initializing data with sample data 
		$scope.todos=[
			{'title':'learn','done':false}
		]
		//To retain data we can use localstorage set,get track by a field other than hash

		//Adds new Tasks
		$scope.addTodo = function(){
			$scope.todos.push({'title':$scope.newTodo,'done':false})
			$scope.newTodo=[];
		}

		//Removes completed tasks on Button CLick
		$scope.removeCompleted=function(){
			$scope.todos=$scope.todos.filter(function(item){
				return !item.done;
			})
		}

		
		/*To be implemented*/
		$scope.editTodo=function(){
		}
		$scope.displayAll=function(){
		}
		$scope.displayCompleted=function(){
		}
		$scope.displayIncomplete=function(){
		}
		

	}])
})();
