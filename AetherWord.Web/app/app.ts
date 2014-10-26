// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the reference paths,
// then adjust the path value to be relative to this file
/// <reference path='../Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='../Scripts/typings/angularjs/angular-resource.d.ts'/>

interface IApp extends ng.IModule { }

// Create the module and define its dependencies.
var app: IApp = angular.module('app', [
    // Angular modules 
    'ngResource',       // $resource for REST queries
    'ngAnimate',        // animations
    'ngRoute',           // routing
    'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)

    // Custom modules 
    'common',           // common functions, logger, spinner
    // 'common.bootstrap', // bootstrap dialog wrapper functions

    // 3rd Party Modules
    // 'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
]);

// Execute bootstrapping code and any dependencies.
//app.run(['$q', '$rootScope', ($q, $rootScope) => {

//}]);
app.run(['$route', function ($route) {
    // Include $route to kick start the router.
}]);