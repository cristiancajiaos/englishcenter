(function () {
    angular.module('app').controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope', 'basicData'];

    function headerCtrl($scope, basicData) {
        var vm = this;
        vm.title = 'Header';

        vm.uiSrefActive = 'active';

        vm.menu = basicData.menuOptions;
    }
})();