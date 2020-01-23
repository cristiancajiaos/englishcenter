(function () {
    var app = angular.module('app', [
        'ngAnimate',
        'ngTouch',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            var states = [{
                name: 'main',
                url: '/main',
                component: 'mainComponent'
            }];

            states.forEach(function(state){
                $stateProvider.state(state);
            });

            $urlRouterProvider.otherwise('/main');
        }
    ]);
})();