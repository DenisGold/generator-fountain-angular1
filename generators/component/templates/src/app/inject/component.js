angular
	.module('app')
	
	.controller('Create<%- componentName %>Controller', ['ViewService', '$mdBottomSheet', 'createAction', Create<%- componentName %>Controller])
	.controller('Edit<%- componentName %>Controller', ['ViewService', '$mdBottomSheet', 'editItem', 'editAction', Edit<%- componentName %>Controller])
	
	.component('<%- componentName %>', {
		templateUrl: '<%- templateUrl %>',
		controller: ['ViewService', <%- componentName %>Controller]
	});
