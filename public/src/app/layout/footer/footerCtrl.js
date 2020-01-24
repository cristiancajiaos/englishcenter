(function(){
    angular.module('app').controller('footerCtrl', footerCtrl);

    footerCtrl.$inject = ['$scope', 'basicData'];

    function footerCtrl($scope, basicData){
        var vm = this;
        vm.motto = basicData.motto;
        vm.contacts = basicData.contactOptions;
    }
})();