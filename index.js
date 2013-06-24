
var name    = 'component-pageFadeIn',
    $       = require('jquery'),
    angular = require('angularjs'),
    app     = angular.module(name, []);

app.directive('pageFadeIn', [function() {
  var directiveDefinitionObject = {
    restrict: 'C',
    link: function postLink(scope, iElement, iAttrs) { 
      $(iElement).fadeIn();
    }
  };
  return directiveDefinitionObject;
}]);

/*
app.directive('pageFadeIn', [function() {
  console.log('something')
  var directiveDefinitionObject = {
    priority: 0,
    template: '<div></div>',
    templateUrl: 'directive.html',
    replace: false,
    transclude: false,
    restrict: 'C',
    scope: false,
    controller: function($scope, $element, $attrs, $transclude, otherInjectables) {
      console.log('controller');
    },
    compile: function compile(tElement, tAttrs, transclude) {
      console.log('compile');
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) {
          console.log('compile - preLink');
        },
        post: function postLink(scope, iElement, iAttrs, controller) {
          console.log('compile - postLink');
        }
      }
    },
    link: function postLink(scope, iElement, iAttrs) { 
      console.log('postLink');
    }
  };
  return directiveDefinitionObject;
}]);
/**/

module.exports = name;