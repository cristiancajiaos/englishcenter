(function(){
    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'photoService'];

    function mainCtrl($scope, photoService){
        var vm = this;
        vm.title = 'Main';

        vm.loadingCarousel = false;
        vm.slides = [];

        vm.getData = function(){
            vm.loadingCarousel = true;
            photoService.getPhotos().then(function(response){
                vm.slides = response;
            }, function(error){
                console.log(error);
            }).finally(function(){
                vm.loadingCarousel = false;
            });
        };

        vm.getData();
    }
})();