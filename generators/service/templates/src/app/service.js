(function () {
	
	function <%- serviceName %>(LaraModel, CacheFactory) {
		//Inside prototype
		function <%- serviceName %>Class(){
			//Event label
			this.eventLabel = 'crm:<%- serviceLowerCaseName %>:events:';
			
			//Cache name
			this._cache = (CacheFactory.get('crm:<%- serviceLowerCaseName %>:cache:'))? CacheFactory.get('crm:<%- serviceLowerCaseName %>:cache:') : CacheFactory('crm:<%- serviceLowerCaseName %>:cache:');
		}
		
		return {
			//return new instance of implementation
			create: function(point){
				point = point || null;
				
				var url = (point !== null)? '<%- serviceLowerCaseName %>/' + point : '<%- serviceLowerCaseName %>';
				return LaraModel.new(url, <%- serviceName %>Class);
			}
		}
	}
	
	<% if (modules === 'inject') { -%>
	<% include inject/service.js %>
	<% } else { -%>
	<% include modules/service.js %>
	<% } -%>
	
})();