// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl','ngRoute','control-parametros']);

app.controller('BookController', function($scope, $routeParams) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

// Configures Angular routing -- showing the relevant view and controller when needed.
    app.config(['$routeProvider',function($routeProvider){

        // Join Team Control Panel
        $routeProvider.

        when('/join', {
            templateUrl: 'partials/recogidadatos.html',
            controller: 'addCtrl'
            // Find Teammates Control Panel
            // All else forward to the Join Team Control Panel
        }).

        when('/resultado/:danos/:causa/:origen/:vivienda/:ubicacion/:don/:nombre/:cobertura/:garantia/:riesgo/:circunstancias/:circunstancias2/:circunstancias3/:circunstancias4/:circunstancias5/:reserva/:causadeclarada/:cia/:fechaencargo/:fechacontacto/:fechavisita/:horavisita/:tiposiniestro/:asegur/:genero1/:riesgotipo/:utilidad/:protecciones/:construccion/:antiguedad/:estado/:superficie/:recomendaciones/:garantia1/:garantia2/:capitalAsegurado/:capitalAsegurado2/:capitalPreexistencia/:capitalPreexistencia2/:valorm2/:tiposiniestro/:vivienda2/:circunstancias6/:cobertura/:afecta/:alteracion/:hora/:conceptoMaterial/:material/:conceptoManoObra/:manoObra/:conceptoDesplazamiento/:desplazamiento/:frases_reclama1/:frases_reclama2/:frases_reclama3/:pieza', {
    templateUrl: 'partials/resultado.html',
    controller: 'BookController'
    // Find Teammates Control Panel
  }).

          when('/informe', {
    templateUrl: 'partials/recogidadatosInforme.html',
    controller: 'addCtrl'

  }).

  when('/avance', {
templateUrl: 'partials/recogidadatosAvance.html',
controller: 'addCtrl'

}).

when('/resultadoInforme/:danos/:causa/:origen/:vivienda/:ubicacion/:don/:nombre/:cobertura/:circunstancias2/:causadeclarada/:cia/:fechaencargo/:fechacontacto/:fechavisita/:horavisita/:tiposiniestro/:asegur/:cobertura/:afecta/:alteracion/:vivienda2'  , {
templateUrl: 'partials/resultadoInforme.html',
controller: 'BookController'
//
}).

when('/resultadoAvance/:cia/:causadeclarada/:tiposiniestro/:fechaencargo/:fechacontacto/:fechavisita/:horavisita/:danos/:causa/:origen/:vivienda/:ubicacion/:don/:asegur/:nombre/:circunstancias2', {
templateUrl: 'partials/resultadoAvance.html',
controller: 'BookController'

}).
when('/prueba', {
templateUrl: 'partials/prueba.html',
controller: 'addCtrl'

}).


  otherwise({redirectTo:'/join'});
// /:danos/:causa/:origen/:vivienda/:ubicacion/:don/:nombre/:cobertura/:circunstancias2/:causadeclarada/:cia/:fechaencargo/:fechacontacto/:fechavisita/:horavisita/:tiposiniestro/:asegur/:cobertura/:afecta/:alteracion'

}]);
