!function(){"use strict";function e(e,t,n){var o={restrict:"A",link:function(o,l,a,c){function r(){angular.element(t).on("mouseup",s),angular.element(t).on("mousemove",g)}function i(){angular.element(t).off("mouseup",s),angular.element(t).off("mousemove",g)}function u(e){if(y){for(var t=0;t<Y.length;t++)if(angular.element(e.target).hasClass(Y[t]))return!1;o.$apply(function(){R(o)}),r(),w=!0,S=p=e.clientX,$=v=e.clientY,d(),e.preventDefault(),e.stopPropagation()}}function s(e){if(y){var t=e.target.attributes&&"drag-scroll-text"in e.target.attributes,n=e.clientX>=p-x&&e.clientX<=p+x,l=e.clientY>=v-x&&e.clientY<=v+x;w=!1,t&&n&&l&&m(e.target),o.$apply(function(){T(o)}),i()}}function g(e){y&&(w&&(X&&"x"!==X||(l[0].scrollLeft-=-S+(S=e.clientX)),X&&"y"!==X||(l[0].scrollTop-=-$+($=e.clientY))),e.preventDefault())}function f(){l.off("mousedown",u),angular.element(t).off("mouseup",s),angular.element(t).off("mousemove",g)}function m(e){var n;t.document.selection?(n=t.document.body.createTextRange(),n.moveToElementText(e),n.select()):t.getSelection&&(n=t.document.createRange(),n.selectNode(e),t.getSelection().addRange(n))}function d(){t.getSelection?t.getSelection().empty?t.getSelection().empty():t.getSelection().removeAllRanges&&t.getSelection().removeAllRanges():e.selection&&e.selection.empty()}var p,v,S,$,y=!0,x=5,w=!1,R=n(a.ondragstart),T=n(a.ondragend),X=a.axis||!1,Y=a.dragScrollExcludedClasses?a.dragScrollExcludedClasses.split(","):[];o.$watch(a.dragScroll,function(e){y=void 0===e||e}),l.on("mousedown",u),o.$on("$destroy",f)}};return o}angular.module("ng-drag-scroll",[]).directive("dragScroll",e),e.$inject=["$document","$window","$parse"]}();