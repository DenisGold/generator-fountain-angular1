(function () {
	
	function <%- directiveName %>Controller(ViewService) {
		//controller implementations
		var vm = ViewService.new(this);
		
		//items
		vm.items = null;
		
		//model
		//var model = TodoService.create();
		
		//update
		vm.doUpdate = function(){
			//model.get().then(function(items){
				vm.items = items || [];
				
				vm.loaded();
			//});
		}
		
		vm.doUpdate();
	}
	
	function <%- directiveName %>() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			controller: ['ViewService', <%- directiveName %>Controller],
			link: function (scope, element, attrs) {
			
			},
			//templateUrl: '<%- templateUrl %>',
		};
	}
	
	<% include inject/directive.js %>
	
})();
