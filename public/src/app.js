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
            }, {
                name: 'about',
                url: '/about',
                component: 'aboutComponent'
            }, {
                name: 'courses',
                url: '/courses',
                component: 'coursesComponent'
            }, {
                name: 'location',
                url: '/location',
                component: 'locationComponent'
            }, {
                name: 'contact',
                url: '/contact',
                component: 'contactComponent'
            }];

            states.forEach(function(state){
                $stateProvider.state(state);
            });

            $urlRouterProvider.otherwise('/main');
        }
    ]);
})();