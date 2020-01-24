(function(){
    angular.module('app').service('photoService', photoService);

    photoService.$inject = ['$http'];

    function photoService($http){
        return {
            getPhotos: function(){
                return $http.get('data/photoData.json');
            }
        };
    }
})();