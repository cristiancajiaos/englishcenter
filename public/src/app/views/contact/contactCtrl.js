(function(){
    angular.module('app').controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope'];

    function contactCtrl($scope){
        var vm = this;
        vm.title = 'Contact';
    }
})();