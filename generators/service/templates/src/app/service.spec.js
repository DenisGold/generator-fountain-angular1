describe('<%- serviceName %> service', function () {
<% include inject/service.spec.js %>
  it('should', angular.mock.inject(function (<%- serviceName %>) {
    expect(<%- serviceName %>.getData()).toEqual(3);
  }));
});
