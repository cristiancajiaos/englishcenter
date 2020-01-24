(function(){
    angular
        .module('app')
        .service('photoService', photoService);

    photoService.$inject = ['$http', '$q'];

    function photoService($http, $q){
        return {
            getPhotos: function(){
                var deferred = $q.defer();

                $http.get('data/photoData.json').then(function(response){
                    deferred.resolve(response.data);
                }, function(error){
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        };
    }
})();