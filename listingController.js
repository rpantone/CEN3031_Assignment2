angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    
    /* NEW STUFF */
    
    $scope.finder = '';
	
    $scope.addListing = function() {
        $scope.listings.push({
	    "code": $scope.code_,
	     "name": $scope.name_,
            "address": $scope.address_
        });
    };
	
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
