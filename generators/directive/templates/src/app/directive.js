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
	
	<% if (modules === 'inject') { -%>
	<% include inject/directive.js %>
	<% } else { -%>
	<% include modules/directive.js %>
	<% } -%>
	
})();
