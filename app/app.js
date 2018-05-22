var mySampleApp = angular.module("myApp",["ngRoute"]);

mySampleApp.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{templateUrl:'temps/home.html',controller:'HomeCtrl',title:'Home'})
                  .when("/java",{templateUrl:'temps/java.html',controller:'JavaCtrl',title:'Java Course'})
                  .when("/dotnet",{templateUrl:'temps/dotnet.html',controller:'DotNetCntrl',title:'Dot Net Course'})
                  .when("/gallery",{templateUrl:'temps/gallery.html',controller:'GallertCtrl',title:'Gallery'})
                  .when("/contactus",{templateUrl:'temps/contactus.html',controller:'ContactCtrl',title:'Contact Us'})
                  .otherwise("/",{templateUrl:'temps/home.html'});
}]);

mySampleApp.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.mytitle = current.$$route.title;
    });
}]);

mySampleApp.controller("ContactCtrl",function($scope){
    $scope.init=function(){
        $scope.companyname="Saibersys";
        $scope.website="http://www.saibersys.com";
    }
});

mySampleApp.controller("JavaCtrl",function($scope){
    $scope.bgcolor="red";
    $scope.myflag=false;
    $scope.googleurl="https://www.google.com";
    $scope.hidefun=function(){
        $scope.myflag=!$scope.myflag;
    }

    

    $scope.mystatus = [{ Id: 0, Name: '--Select Status--' },
                               { Id: 1, Name: 'Available' },
                               { Id: 2, Name: 'Busy' },
                               { Id: 3, Name: 'Idle' },
                               { Id: 4, Name: 'Offline' }];
            $scope.makeSelected = $scope.mystatus[4].Id;

});


mySampleApp.controller("myCtrl",function($scope){

});