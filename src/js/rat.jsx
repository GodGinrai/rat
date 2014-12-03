angular.module("Rat", []).factory("Rat", function() {
  var template = React.createClass({
    render: function() {
      var message =
        new Date().toUTCString();

      return <p>Rat was started on {message}</p>;
    }
  });

  return React.createFactory(template);
}).directive("rat", ["Rat", function(template) {
  return {
    restrict: "E",
    link: function(scope, element) {
      React.render(template(scope), element[0]);
    }
  }
}]);
