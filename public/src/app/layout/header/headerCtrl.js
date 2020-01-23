(function () {
    angular.module('app').controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope'];

    function headerCtrl($scope) {
        var vm = this;
        vm.title = 'Header';

        vm.uiSrefActive = 'active';

        vm.menu = [{
            name: 'Main',
            uiSref: 'main'
        }, {
            name: 'About',
            uiSref: 'about'
        }, {
            name: 'Courses',
            uiSref: 'courses'
        }, {
            name: 'Location',
            uiSref: 'location'
        }, {
            name: 'Contact',
            uiSref: 'contact'
        }];
    }
})();