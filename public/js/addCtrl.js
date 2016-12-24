
var addCtrl = angular.module('addCtrl', ['ngRoute','jkuri.datepicker']);
addCtrl.controller('addCtrl', function($scope, $http, $location){

    // Initializes Variables
    // ----------------------------------------------------------------------------


    $scope.formData = {};
     var self = this;
     var la = "la";
     var el = "el";
     var asegur = "";




     $scope.createUser = function() {



       var danos = $scope.formData.danos;
       var tiposiniestro = $scope.formData.tiposiniestro;
       var causa = $scope.formData.causa;
       var origen = $scope.formData.origen;
       var ubicacion =  $scope.formData.ubicacion;
       var vivienda = $scope.formData.vivienda;
       var vivienda2 = $scope.formData.vivienda2;
        var don =  $scope.formData.don;
        var nombre =  $scope.formData.nombre;
          var cobertura =  $scope.formData.cobertura;
          var garantia =  $scope.formData.garantia;
          var riesgo =  $scope.formData.riesgo;
          var circunstancias =  $scope.formData.circunstancias;
        var circunstancias2 =  $scope.formData.circunstancias2;
        var circunstancias3 =  $scope.formData.circunstancias3;
        var circunstancias4 =  $scope.formData.circunstancias4;
        var circunstancias5 =  $scope.formData.circunstancias5;
          var reserva =  $scope.formData.reserva;
          var causadeclarada =  $scope.formData.causadeclarada;
          var cia =  $scope.formData.cia;
          var fechaencargo =  $scope.formData.fechaencargo;
          var fechacontacto = $scope.formData.fechacontacto;
          var fechavisita =  $scope.formData.fechavisita;
          var horavisita =  $scope.formData.horavisita;
          var tiposiniestro =  $scope.formData.tiposiniestro;
          var asegur = $scope.formData.asegur;
          var riesgotipo = $scope.formData.riesgotipo;
          var utilidad = $scope.formData.utilidad;
          var protecciones = $scope.formData.protecciones;
          var construccion = $scope.formData.construccion;
          var antiguedad = $scope.formData.antiguedad;
          var estado = $scope.formData.estado;
          var superficie = $scope.formData.superficie;
          var recomendaciones = $scope.formData.recomendaciones;
          var garantia1 = $scope.formData.garantia1;
          var garantia2 = $scope.formData.garantia2;
          var capitalAsegurado = $scope.formData.capitalAsegurado;
          var capitalAsegurado2 = $scope.formData.capitalAsegurado2;
          var capitalPreexistencia = $scope.formData.capitalPreexistencia;
          var capitalPreexistencia2 = $scope.formData.capitalPreexistencia2;
          var valorm2 = $scope.formData.valorm2;
          var circunstancias6 =  $scope.formData.circunstancias6;
          var cobertura = $scope.formData.cobertura;
          var afecta = $scope.formData.afecta;
          var alteracion = $scope.formData.alteracion;
          var hora = $scope.formData.hora;
          var conceptoMaterial = $scope.formData.conceptoMaterial;
          var material = $scope.formData.unidadMaterial;
          var conceptoManoObra = $scope.formData.conceptoManoObra;
          var manoObra = $scope.formData.unidadManoObra;
          var conceptoDesplazamiento = $scope.formData.conceptoDesplazamiento;
          var desplazamiento = $scope.formData.unidadDesplazamiento;
          var frases_reclama1 = $scope.formData.frases_reclama1;
          var frases_reclama2 = $scope.formData.frases_reclama2;
          var frases_reclama3 = $scope.formData.frases_reclama3;
          var pieza = $scope.formData.pieza;

        if ( circunstancia4 = true){
          circunstancias4 = "IBERDROLA";
          circunstancias5 = "Departamento de Reclamaciones, Apartado de Correos 61090 – 28080 Madrid";
          circunstancias6 = "900225235";
        }



var genero1 = "pp";


       genero(asegur);

         function genero (asegur){

          if (asegur == "el Asegurado, D."){
            genero1 = "el";

          } else if ( asegur == "la Asegurada, Dña."){
            genero1 = "la";
                  }
                else if ( asegur == "la gerente de la empresa asegurada, Dña."){
                  genero1 = "la";}
               else if ( asegur == "el gerente de la empresa asegurada, D."){
                  genero1 = "el";}
                  else if ( asegur == "el encargado, D."){
                     genero1 = "el";}
                     else if ( asegur == "la encargada, Dña."){
                        genero1 = "la";}
                  else {}


        };




     $location.url('/resultado/' + danos + '/' + causa + '/' + origen + '/' + vivienda + '/' + ubicacion + '/' + don + '/'
    + nombre+ '/' + cobertura + '/' + garantia + '/' + riesgo + '/' + circunstancias + '/' + circunstancias2 + '/'
     + circunstancias3 + '/' + circunstancias4 + '/' + circunstancias5 + '/' + reserva + '/' + causadeclarada + '/'
     + cia + '/' + fechaencargo + '/' + fechacontacto + '/' + fechavisita + '/' + horavisita + '/' + tiposiniestro + '/'
      + asegur + '/' + genero1 + '/' + riesgotipo + '/' + utilidad + '/' + protecciones + '/' + construccion  + '/' + antiguedad + '/'
       + estado + '/' + superficie + '/' + recomendaciones + '/' + garantia1 + '/' + garantia2 + '/' + capitalAsegurado + '/' + capitalAsegurado2 + '/'
        + capitalPreexistencia + '/' + capitalPreexistencia2 + '/' + valorm2 + '/' + tiposiniestro + '/' + vivienda2 + '/' + circunstancias6 + '/'
        + cobertura + '/' + afecta + '/' + alteracion + '/' + hora + '/' + conceptoMaterial + '/' + material + '/' + conceptoManoObra + '/' + manoObra + '/'
         + conceptoDesplazamiento + '/' + desplazamiento + '/' + frases_reclama1 + '/' + frases_reclama2 + '/' + frases_reclama3 + '/' + pieza  );
}

//*************************************************************************************************************************************************

$scope.createUser1 = function() {

  var danos = $scope.formData.danos;
  var tiposiniestro = $scope.formData.tiposiniestro;
  var causa = $scope.formData.causa;
  var origen = $scope.formData.origen;
  var ubicacion =  $scope.formData.ubicacion;
  var vivienda = $scope.formData.vivienda;
  var vivienda2 = $scope.formData.vivienda2;
   var don =  $scope.formData.don;
   var nombre =  $scope.formData.nombre;
     var cobertura =  $scope.formData.cobertura;
     var garantia =  $scope.formData.garantia;
     var riesgo =  $scope.formData.riesgo;
   var circunstancias2 =  $scope.formData.circunstancias2;
   var circunstancias3 =  $scope.formData.circunstancias3;
   var circunstancias4 =  $scope.formData.circunstancias4;
   var circunstancias5 =  $scope.formData.circunstancias5;
     var reserva =  $scope.formData.reserva;
     var causadeclarada =  $scope.formData.causadeclarada;
     var cia =  $scope.formData.cia;
     var fechaencargo =  $scope.formData.fechaencargo;
     var fechacontacto = $scope.formData.fechacontacto;
     var fechavisita =  $scope.formData.fechavisita;
     var horavisita =  $scope.formData.horavisita;
     var tiposiniestro =  $scope.formData.tiposiniestro;
     var asegur = $scope.formData.asegur;
     var riesgotipo = $scope.formData.riesgotipo;
     var utilidad = $scope.formData.utilidad;
     var protecciones = $scope.formData.protecciones;
     var construccion = $scope.formData.construccion;
     var antiguedad = $scope.formData.antiguedad;
     var estado = $scope.formData.estado;
     var superficie = $scope.formData.superficie;
     var recomendaciones = $scope.formData.recomendaciones;
     var garantia1 = $scope.formData.garantia1;
     var garantia2 = $scope.formData.garantia2;
     var capitalAsegurado = $scope.formData.capitalAsegurado;
     var capitalAsegurado2 = $scope.formData.capitalAsegurado2;
     var capitalPreexistencia = $scope.formData.capitalPreexistencia;
     var capitalPreexistencia2 = $scope.formData.capitalPreexistencia2;
     var valorm2 = $scope.formData.valorm2;
     var circunstancias6 =  $scope.formData.circunstancias6;
     var cobertura = $scope.formData.cobertura;
     var afecta = $scope.formData.afecta;
     var alteracion = $scope.formData.alteracion;
     var pieza = $scope.formData.pieza;


   if ( circunstancia4 = true){
     circunstancias4 = "IBERDROLA";
     circunstancias5 = "Departamento de Reclamaciones, Apartado de Correos 61090 – 28080 Madrid";
     circunstancias6 = "900225235";
   }



var genero1 = "pp";


  genero(asegur);

    function genero (asegur){

     if (asegur == "el Asegurado, D."){
       genero1 = "el";

     } else if ( asegur == "la Asegurada, Dña."){
       genero1 = "la";
             }
           else if ( asegur == "la gerente de la empresa asegurada, Dña."){
             genero1 = "la";}
          else if ( asegur == "el gerente de la empresa asegurada, D."){
             genero1 = "el";}
             else if ( asegur == "el encargado, D."){
                genero1 = "el";}
                else if ( asegur == "la encargada, Dña."){
                   genero1 = "la";}
             else {}


   };


$location.url('/resultadoInforme/' + danos + '/' + causa + '/' + origen + '/' + vivienda + '/' + ubicacion + '/'
 + don + '/' + nombre + '/' + cobertura + '/' + circunstancias2  + '/' + causadeclarada + '/' + cia + '/'
 + fechaencargo + '/' + fechacontacto + '/' + fechavisita + '/' + horavisita + '/' + tiposiniestro + '/' + asegur  + '/' + cobertura + '/' + afecta + '/' + alteracion+ '/' + vivienda2 );
}



$scope.createUser2 = function() {

var cia =  $scope.formData.cia;//*
var causa = $scope.formData.causadeclarada;//*
var tiposiniestro =  $scope.formData.tiposiniestro;//*

var fechaencargo =  $scope.formData.fechaencargo;//*
var fechacontacto = $scope.formData.fechacontacto;//*
var fechavisita =  $scope.formData.fechavisita;//*
var horavisita =  $scope.formData.horavisita;//*

var danos = $scope.formData.danos;//*
var causa = $scope.formData.causa;//*
var origen = $scope.formData.origen;//*


var vivienda = $scope.formData.vivienda;//*
var ubicacion =  $scope.formData.ubicacion;//*
var don =  $scope.formData.don;//*
var asegur = $scope.formData.asegur;//*
var nombre =  $scope.formData.nombre;//*

var circunstancias2 =  $scope.formData.circunstancias2;//*




if ( circunstancia4 = true){
  circunstancias4 = "IBERDROLA";
  circunstancias5 = "Departamento de Reclamaciones, Apartado de Correos 61090 – 28080 Madrid";
  circunstancias6 = "900225235";
}



var genero1 = "pp";


genero(asegur);

 function genero (asegur){

  if (asegur == "el Asegurado, D."){
    genero1 = "el";

  } else if ( asegur == "la Asegurada, Dña."){
    genero1 = "la";
          }
        else if ( asegur == "la gerente de la empresa asegurada, Dña."){
          genero1 = "la";}
       else if ( asegur == "el gerente de la empresa asegurada, D."){
          genero1 = "el";}
          else if ( asegur == "el encargado, D."){
             genero1 = "el";}
             else if ( asegur == "la encargada, Dña."){
                genero1 = "la";}
          else {}


};


$location.url('/resultadoAvance/' + cia + '/' + causadeclarada + '/' + tiposiniestro + '/' + fechaencargo + '/' + fechacontacto + '/' + fechavisita + '/' + horavisita + '/' + danos + '/' + causa  + '/' + origen + '/' + vivienda + '/' + ubicacion +
'/' + don + '/' + asegur + '/' + nombre + '/' + circunstancias2 );

}



} );
