describe('<%- componentName %> component', function () {
<% include inject/component.spec.js %>
  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<<%- componentName %>></<%- componentName %>>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
