(function () {
	
	function <%- directiveName %>() {
		return {
			restrict: 'E',
			scope: {},
			controllerAs: 'vm',
			controller: function () {
				
			},
			link: function (scope, element, attrs) {
			
			}
		};
	}
	
	<% include inject/directive.js %>
	
})();
