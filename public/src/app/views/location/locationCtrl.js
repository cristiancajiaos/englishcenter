(function(){
    angular.module('app').controller('locationCtrl', locationCtrl);

    locationCtrl.$inject = ['$scope'];

    function locationCtrl($scope){
        var vm = this;
        vm.title = 'Location';
    }
})();