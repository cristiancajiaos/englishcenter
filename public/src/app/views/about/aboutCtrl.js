(function(){
    angular.module('app').controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope'];

    function aboutCtrl($scope) {
        var vm = this;
        vm.title = 'About';
    }
})();