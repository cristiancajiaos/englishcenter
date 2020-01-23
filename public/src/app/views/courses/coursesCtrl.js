(function(){
    angular.module('app').controller('coursesCtrl', coursesCtrl);

    coursesCtrl.$inject = ['$scope'];

    function coursesCtrl($scope){
        var vm = this;
        vm.title = 'Courses';
    }
})();