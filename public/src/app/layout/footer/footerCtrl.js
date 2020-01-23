(function(){
    angular.module('app').controller('footerCtrl', footerCtrl);

    footerCtrl.$inject = ['$scope'];

    function footerCtrl($scope){
        var vm = this;
        vm.title = 'Footer';
    }
})();