angular.module("rat", []).factory("rat", function() {
  var template = React.createClass({
    render: function() {
      var message =
        new Date().toUTCString();

      return <p>Rat was started on {message}</p>;
    }
  });

  return template;
}).directive("rat", function(template) {
  return {
    link: function(scope, element) {
      React.renderComponent(template(scope), element[0]);
    }
  }
});
