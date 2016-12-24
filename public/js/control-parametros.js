'use strict';



var addCtrl = angular.module('control-parametros', ['ngRoute','addCtrl']);



addCtrl.controller('companias', ['$scope', function($scope) {
   $scope.data = {
    model: null,
    availableOptions: [
      {id: 'ALLIANZ COMPAÑIA DE SEGUROS Y REASEGUROS', name: 'Allianz hogar'},
      {id: 'ALLIANZ EMPRESAS', name: 'Allianz empresas'},
      {id: 'GENERALI SEGUROS SA', name: 'Generali'},
        {id: 'AXA HOGAR', name: 'Axa hogar'},
          {id: 'AXA PARTICULARES', name: 'Axa particulares'},
            {id: 'AXA EMPRESA', name: 'Axa empresa'},
              {id: 'PELAYO MUTUA DE SEGUROS', name: 'Pelayo'},
                {id: 'PATRIA HISPANA S.A. DE SEGUROS Y SREASEGUROS', name: 'Patria hispania'},
                  {id: 'NORTHIPANIA', name: 'NortHispania'},
                  {id: 'CAJAMAR SEGUROS GENERALES S.A.DE SEG. Y REAS.', name: 'Cajamar'}
    ],
   };
}]);

addCtrl.controller('asegur', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'la Asegurada, Dña.', name: 'Asegurada'},
     {id: 'el Asegurado, D.', name: 'Asegurado'},
     {id: 'el gerente de la empresa asegurada, D.', name: 'Gerente'},
       {id: 'la gerente de la empresa asegurada, Dña.', name: 'La Gerente'},
         {id: 'el encargado,D.', name: 'Encargado'},
           {id: 'la encargada, Dña.', name: 'La Encargada'},
             {id: 'el administrador', name: 'Administrador'},
               {id: 'la administradora', name: 'Administradora'}

   ],
  };
}]);

addCtrl.controller('tiposiniestro', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'FENÓMENOS ELÉCTRICOS', name: 'Fenómenos Eléctricos'},
     {id: 'DAÑOS ELECTRICOS', name: 'Daños Eléctricos'},
     {id: 'DAÑO ELÉCTRICO', name: 'Daño Eléctrico'},
     {id: 'AVERIA EQUIPOS ELECTRÓNICOS', name: 'Avería equipos electrónicos'},
     {id: 'AVERIA DE MAQUINARIA', name: 'Avería de maquinaria'},
      {id: 'ROTURA DE MAQUINARIA', name: 'Rotura de maquinaria'},
     {id: 'AVERIA APARATOS ELECTRÓNICOS', name: 'Avería aparatos electrónicos'},
       {id: 'INCENDIO', name: 'Incendio'},
         {id: 'AGUA', name: 'Agua'},
          {id: 'PODREDUMBRE', name: 'Podredumbre'},
          {id: 'VANDALICOS', name: 'Actos vandalicos o malintencionados'}



   ],
  };
}]);



addCtrl.controller('vivienda', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Vivienda tipo piso', name: 'Piso'},
     {id: 'Vivienda adosada', name: 'Adosada'},
     {id: 'Vivienda tipo chalet', name: 'Chalet'},
       {id: 'Local comercial', name: 'Local comercial'},
         {id: 'Nave industrial', name: 'Nave industrial'},
         {id: 'Comunidad de propietarios', name: 'Comunidad de propietarios'}

   ],
  };
}]);

addCtrl.controller('ubicacion', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Urbano', name: 'Urbano'},
     {id: 'Rural', name: 'Rural'},
     {id: 'Extra-radio', name: 'Extradio'},
       {id: 'Núcleo industrial', name: 'Nucleo industrial'}

   ],
  };
}]);

addCtrl.controller('don', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Sr.D.', name: 'Señor'},
     {id: 'Sra.D.', name: 'Señora'}


   ],
  };
}]);



addCtrl.controller('pieza', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Se adjunta factura de suministro eléctrico con el fin del recobro.', name: 'Presentan factura'},
     {id: 'Dado que a fecha de cierre del informe, el Asegurado no ha presentado factura de suministro eléctrico, deberá presentarla para realizar el recobro de daños.', name: 'No presentan factura'},

   ],
  };
}]);



addCtrl.controller('circunstancias4', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Se han desecho del aparato afectado.', name: 'Se han desecho'},
     {id: '"El aparato se lo ha llevado el servicio técnico.', name: 'El servicio se lleva aparato'},
     {id: 'No ha avisado al servicio técnico, por que estaba a la espera de valoración por parte de su compañía aseguradora.', name: 'No avisa a servicio'}


   ],
  };
}]);


addCtrl.controller('circunstancias5', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Intento poner en funcionamiento el aparato, comprobando que no se pone en marcha.', name: 'No funciona'},
     {id: 'El Asegurado muestra la pieza sustituida. Compruebo que sufre daños de origen eléctrico en su etapa primaria', name: 'Muestra  pieza'},
     {id: 'Me pongo en contacto con servicio técnico y ratifican su información, señalando que los daños pueden haber sido producidos por alteración eléctrica. Se han desecho de las piezas afectadas', name: 'LLamo al servicio, deshechan'},
        {id: 'Me pongo en contacto con servicio técnico y ratifican su información, señalando que los daños pueden haber sido producidos por alteración eléctrica. Obra en su poder las piezas afectadasS las piezas afectadas', name: 'LLamo al servicio, mantienen'}


   ],
  };
}]);

addCtrl.controller('vivienda2', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'piso', name: 'piso'},
     {id: 'adosada', name: 'adosada'},
     {id: 'chalet', name: 'chalet'},
       {id: 'local comercial', name: 'local comercial'},
         {id: 'nave industrial', name: 'nave industrial'},
          {id: 'Comunidad de propietarios', name: 'comunidad de propietarios'}

   ],
  };
}]);

addCtrl.controller('utilidad', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Principal', name: 'Principal'},
     {id: 'Secundaria', name: 'Secundaria'},
     {id: 'Restaurante', name: 'Restaurante'}


   ],
  };
}]);

addCtrl.controller('frases_reclama1', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Así mismo, compruebo en inspección visual que la instalación eléctrica de la vivienda está en correcto estado de conservación y mantenimiento. Se trata de una instalación monofásica que dispone de un cuadro eléctrico general con interruptor diferencial y magneto-térmicos de protección para los diferentes circuitos eléctricos. Todos los interruptores de corte omnipolar. Disponiendo de ICP. Por lo que cumple con lo exigido por el Reglamento Electrotécnico de Baja Tensión.', name: 'Cumple la normativa vivienda'},
      {id: 'Compruebo en inspección visual que la instalación eléctrica de la nave industrial está en correcto estado de conservación y mantenimiento. Se trata de una instalación trifásica que dispone de un cuadro eléctrico general y varios auxiliares, con distintos interruptores diferenciales y magneto-térmicos de protección para los diferentes circuitos eléctricos, así como los distintos elementos de protección exigidos por el Reglamento Electrotécnico de Baja Tensión, cumpliendo de esta forma dicha normativa.', name: 'Cumple normativa nave'}
   ],
  };
}]);
addCtrl.controller('frases_reclama2', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'En opinión de este Perito, los daños que presenta el xx corresponden con daños de origen eléctrico, generados por corrientes anormales. ', name: 'A criterio de este Perito'},
      {id: 'Se detectan daños derivados de una corriente anormal, de la cual no disponemos de evidencias cotejables que permitan atribuirla a la entidad suministradora de energía eléctrica que ofrece servicio a la Asegurada. ', name: 'Sin relación con suministro'}
   ],
  };
}]);
addCtrl.controller('frases_reclama3', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Resulta probable que una alteración eléctrica, manifestada en la vivienda asegurada mediante un corte intempestivo, puede haber causado daños en el , ya que cuando se produce el corte de suministro, transitoriamente y debido al “Efecto Lenz”, todas las inductancias conectadas al circuito (transformadores incluyendo los de la Cía., motores, bobinas, etc.), generan una sobretensión instantánea que afecta a todos los receptores eléctricos conectados, tanto más intensa, como el valor de las inductancias conectadas a dicho circuito.', name: 'Ley de Lenz'}
   ],
  };
}]);

addCtrl.controller('protecciones', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Puerta blindada y rejas en ventanas a menos de 3 metros del suelo', name: 'Puerta blin y rejas'},
     {id: 'Puerta maciza', name: 'Maciza'},
     {id: 'Puerta blindada', name: 'Blindada'},
     {id: 'Puerta blindada y alarma', name: 'Blindada y alarma'},
     {id: 'Las que constan en póliza', name: 'Las que constan'}


   ],
  };
}]);

addCtrl.controller('construccion', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Sólida de ladrillo', name: 'Ladrillo'},
     {id: 'Sólida de bloque', name: 'Bloque'},
     {id: 'Madera', name: 'Madera'},
       {id: 'Sólida de hormigón', name: 'Solida de hormigón'}


   ],
  };
}]);

addCtrl.controller('estado', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Bueno', name: 'Bueno'},
     {id: 'Falta de mantenimiento', name: 'Falta mantenimiento'},
     {id: 'Malo', name: 'Malo'}



   ],
  };
}]);

addCtrl.controller('garantia1', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Mobiliario', name: 'Mobiliario'},
     {id: 'Contenido', name: 'Contenido'},
      {id: 'Ajuar', name: 'Ajuar'},
      {id: 'Enseres', name: 'Enseres'}


   ],
  };
}]);

addCtrl.controller('garantia2', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Edificación', name: 'Edificiación'},
     {id: 'Continente', name: 'Continente'},
      {id: 'Vivienda', name: 'Vivienda'}


   ],
  };
}]);

addCtrl.controller('articulo', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'FENOMENOS ELECTRICOS', name: 'Fenómenos eléctricos'},
     {id: 'DAÑOS ELETRICOS', name: 'Daños eléctricos'},
      {id: 'AVERIA DE MAQUINARIA', name: 'Avería de maquinaria'},
       {id: 'ROTURA', name: 'Rotura'},
        {id: 'INCENDIO', name: 'Incendio'},
         {id: ' AGUA', name: 'Agua'},
         {id: ' PODREDUMBRE DE ALIMENTOS', name: 'Podredumbre'},
         {id: 'ALIMENTOS REFRIGERADOS', name: 'Alimentos refrigerados'}


   ],
  };
}]);

addCtrl.controller('cobertura', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'CON COBERTURA', name: 'Con cobertura'},
     {id: 'SIN COBERTURA', name: 'Sin cobertura'}



   ],
  };
}]);

addCtrl.controller('afecta', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'contenido', name: 'Contenido'},
     {id: 'continente', name: 'Continente'},
     {id: 'mobiliario', name: 'Mobiliario'},
     {id: 'edificación', name: 'Edificación'},
     {id: 'ajuar', name: 'Ajuar'}



   ],
  };
}]);

addCtrl.controller('alteracion', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'sobretensión eléctrica', name: 'Sobretensión'},
     {id: 'corrientes anormales', name: 'Corrientes anormales'},
     {id: 'propia combustión', name: 'Propia combustión'},
     {id: 'cortocircuito', name: 'cortocircuito'},
     {id: 'causa inherente a su funcionamiento', name: 'Causa inherente'}



   ],
  };
}]);
