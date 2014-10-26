/// <reference path="../app.ts" />
/// <reference path='../../Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='../../Scripts/typings/angularjs/angular-resource.d.ts'/>

interface ILandingScope extends ng.IScope {
    vm: Landing;
}

interface ILanding {
    greeting: string;
    // static controllerId: string;
    changeGreeting: () => void;
}

class Landing implements ILanding {
    static controllerId: string = "Landing";
    greeting = "Hello";
    
    constructor(private $scope: ILandingScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    }

    changeGreeting() {
        this.greeting = "Byeeeee";
    }
}

// Update the app1 variable name to be that of your module variable
app.controller(Landing.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
    new Landing($scope, $http, $resource)
]);
