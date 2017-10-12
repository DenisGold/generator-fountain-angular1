(function () {
	
	function <%- componentName %>Controller(ViewService) {
		//controller implementations
		var vm = ViewService.new(this);
		
		//Data of view
		vm.items = null;
		
		//update method
		vm.doUpdate = function(filters){
			filters = filters || {};
			
			//Set page
			filters = vm.setPage(filters);
			
			vm.loading();		
			
			//Get status
			//MODEL.get().then(function(data){
				//Without paginate
				//vm.items = data || {};
					
				//Set paginate
				//vm.items = vm.paginateSetup(data);
				
				//Stop loading
				vm.loaded();
			//});
		}
		
		//Create form setup
		vm.createSettings = {
			templateUrl: '<%- createFormTemplate %>',
			controller: 'Create<%- componentName %>Controller'
		}
		
		//Edit form setup
		vm.editSettings = {
			templateUrl: '<%- editFormTemplate %>',
			controller: 'Edit<%- componentName %>Controller'
		}
		
		//Destroy popup setup
		vm.destroySettings = {
			title: 'Вы действительно этот объект?',
			text: 'После удаление, объект будет полностью удален и не подлежит востановлению.'
		};
		
		//Create action
		vm.createAction = function(data){
			//return MODEL.createNew(data);
		}
		
		//Edit action
		vm.editAction = function(data){
			//return MODEL.update(data);
		}
		
		//Destroy actions
		vm.destroyAction = function(data){
			//return MODEL.destroy(data.id);
		}
		
		//Enter update data
		vm.doUpdate();
	}
	
	function Create<%- componentName %>Controller(ViewService, $mdBottomSheet, createAction) {
		//controller
		var vm = ViewService.new(this);
		
		//Create Success
		vm.createSuccess = function(){
			$mdBottomSheet.hide(true);
		}
		
		//Cancel
		vm.cancel = function(){
			$mdBottomSheet.hide(false);
		}
		
		//Create new form action
		vm.createAction = createAction;
	}
	
	function Edit<%- componentName %>Controller(ViewService, $mdBottomSheet, editItem, editAction) {
		//controller
		var vm = ViewService.new(this);
		
		//edit item
		vm.item = angular.copy(editItem);
		vm.editItem = editItem;
		
		//Edit Success
		vm.editSuccess = function(){
			$mdBottomSheet.hide(true);
		}
		
		//Cancel
		vm.cancel = function(){
			$mdBottomSheet.hide(false);
		}
		
		//Create new form action
		vm.editAction = editAction;
	}
	
	<% if (modules === 'inject') { -%>
	<% include inject/component.js %>
	<% } else { -%>
	<% include modules/component.js %>
	<% } -%>
	
})();
