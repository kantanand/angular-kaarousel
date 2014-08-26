(function(module) {
try {
  module = angular.module('angularKaarousel');
} catch (e) {
  module = angular.module('angularKaarousel', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('angular-kaarousel.html',
    '<div class="kaarousel-actions-wrapper" ng-mouseenter="pause()" ng-mouseleave="resume()"><div kaarousel-wrapper="" class="kaarousel-wrapper"><div kaarousel-slider="" ng-transclude="" class="kaarousel-slider"></div></div><div kaarousel-nav=""><div kaarousel-prev="" ng-click="goPrev()" class="kaarousel-prev kaarousel-nav">PREV</div><div kaarousel-next="" ng-click="goNext()" class="kaarousel-next kaarousel-nav">NEXT</div></div><div kaarousel-pager="" class="kaarousel-pager"><ul><li ng-repeat="i in slides" ng-click="goTo($index)" ng-class="{selected: $index === currentIndex}">{{$index}}</li></ul></div></div>');
}]);
})();