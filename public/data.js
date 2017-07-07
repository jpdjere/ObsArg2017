
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}


var unPais = decode_utf8("1País");
var delcano = decode_utf8("Del Caño");
var nicolasdelcano = decode_utf8("Nicolás Del Caño");
var carrio = decode_utf8("Carrió");
var cabandie = decode_utf8("Cabandié");
var martinlousteau = decode_utf8("Martín Lousteau");
var evolucionciudadana = decode_utf8("Evolución Ciudadana");
var elisacarrio = decode_utf8("Elisa Carrió");
var juancabandie = decode_utf8("Juan Cabandié");

var aragon = decode_utf8("Aragón");
var analogias = decode_utf8("Analogías");

console.log(unPais);


var cand =
[
		/*---------------------------------------------------------------------------------------*/
		/*---------------------------------provincia de Buenos Aires 1 ----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/
[

  [{"cand":"Bullrich","prom":26.43909542,"desv":5.969315127,"promPROY":29.27442958,"desvPROY":5.920915754,"fotos":"images/cand/bullrich.png","nombComp":"Esteban Bullrich","partido":"Cambiemos"},
  {"cand":"C. Kirchner","prom":31.5503268,"desv":4.097283281,"promPROY":35.12912945,"desvPROY":4.791874781,"fotos":"images/cand/cfk.png","nombComp":"Cristina F. Kirchner","partido":"FPV"},
  {"cand":"Massa","prom":22.12455548,"desv":5.480603432,"promPROY":24.70393211,"desvPROY":6.536714931,"fotos":"images/cand/massa.png","nombComp":"Sergio Massa","partido":"unPais"},
  {"cand":"Randazzo","prom":6.612153009,"desv":2.381389444,"promPROY":7.381403915,"desvPROY":2.776055792,"fotos":"images/cand/randazzo.png","nombComp":"Florencio Randazzo","partido":"Cumplir-PJ"},
  {"cand":"Pitrola","prom":3.179519342,"desv":1.317132621,"promPROY":3.511104939,"desvPROY":1.397054809,"fotos":"images/cand/pitrola.png","nombComp":"Nestor Pitrola","partido":"FIT"},
  {"cand":"NS/NC:","prom":10.09434995,"desv":3.720931138,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],


[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ciudad de Buenos Aires-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"cand":carrio,"promPROY":46.5009997,"desvPROY":4.450537103,"prom":53.67929139,"desv":6.377857379,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Vamos Juntos"},
    {"cand":"Filmus","promPROY":18.8018773,"desvPROY":2.745170976,"prom":21.56916177,"desv":1.997869146,"fotos":"images/cand/filmus.png","nombComp":"Daniel Filmus","partido":"FPV"},
    {"cand":"Losteau","promPROY":15.36895248,"desvPROY":3.476908715,"prom":17.63105986,"desv":3.424060411,"fotos":"images/cand/lousteau.png","nombComp":martinlousteau,"partido":"ECO"},
    {"cand":"Zamora","promPROY":4.111507515,"desvPROY":0.789572438,"prom":4.750522642,"desv":0.948335471,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
    {"cand":"Ramal","promPROY":2.097263548,"desvPROY":1.743323286,"prom":2.369964332,"desv":1.900469594,"fotos":"images/cand/otros.png","nombComp":"Marcelo Ramal","partido":"FIT"},
    {"cand":"NS/NC:","promPROY":13.11939945,"desvPROY":4.724653389,"prom":0,"desv":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]
],

[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------Santa Fe-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		[{"cand":carrio,"prom":41.85753454,"desv":3.300704294,"promPROY":46.3520536,"desvPROY":0.5084492,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
		{"cand":cabandie,"prom":21.23124117,"desv":3.09117716,"promPROY":23.43770658,"desvPROY":2.049848496,"fotos":"images/cand/cabandie.png","nombComp":juancabandie,"partido":"FPV"},
		{"cand":"Losteau","prom":18.99679563,"desv":2.577917761,"promPROY":21.09138744,"desvPROY":2.881477908,"fotos":"images/cand/lousteau.png","nombComp":"Martín Lousteau","partido":"ECO"},
		{"cand":"Zamora","prom":4.109661913,"desv":1.392167998,"promPROY":4.591387661,"desvPROY":1.654205426,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
		{"cand":"Bregman","prom":4.07801536,"desv":0.475418996,"promPROY":4.527464718,"desvPROY":0.535604885,"fotos":"images/cand/bregman.png","nombComp":"Myriam Bregman","partido":"FIT"},
		{"cand":"NS/NC:","prom":9.726751396,"desv":6.507022135,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],

[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------Cordoba-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		[{"cand":carrio,"prom":41.85753454,"desv":3.300704294,"promPROY":46.3520536,"desvPROY":0.5084492,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
		{"cand":cabandie,"prom":21.23124117,"desv":3.09117716,"promPROY":23.43770658,"desvPROY":2.049848496,"fotos":"images/cand/cabandie.png","nombComp":juancabandie,"partido":"FPV"},
		{"cand":"Losteau","prom":18.99679563,"desv":2.577917761,"promPROY":21.09138744,"desvPROY":2.881477908,"fotos":"images/cand/lousteau.png","nombComp":"Martín Lousteau","partido":"ECO"},
		{"cand":"Zamora","prom":4.109661913,"desv":1.392167998,"promPROY":4.591387661,"desvPROY":1.654205426,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
		{"cand":"Bregman","prom":4.07801536,"desv":0.475418996,"promPROY":4.527464718,"desvPROY":0.535604885,"fotos":"images/cand/bregman.png","nombComp":"Myriam Bregman","partido":"FIT"},
		{"cand":"NS/NC:","prom":9.726751396,"desv":6.507022135,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],

[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------Entre Rios-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		[{"cand":carrio,"prom":41.85753454,"desv":3.300704294,"promPROY":46.3520536,"desvPROY":0.5084492,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
		{"cand":cabandie,"prom":21.23124117,"desv":3.09117716,"promPROY":23.43770658,"desvPROY":2.049848496,"fotos":"images/cand/cabandie.png","nombComp":juancabandie,"partido":"FPV"},
		{"cand":"Losteau","prom":18.99679563,"desv":2.577917761,"promPROY":21.09138744,"desvPROY":2.881477908,"fotos":"images/cand/lousteau.png","nombComp":"Martín Lousteau","partido":"ECO"},
		{"cand":"Zamora","prom":4.109661913,"desv":1.392167998,"promPROY":4.591387661,"desvPROY":1.654205426,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
		{"cand":"Bregman","prom":4.07801536,"desv":0.475418996,"promPROY":4.527464718,"desvPROY":0.535604885,"fotos":"images/cand/bregman.png","nombComp":"Myriam Bregman","partido":"FIT"},
		{"cand":"NS/NC:","prom":9.726751396,"desv":6.507022135,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

]




];



/*----------------------------------------------------------------RATINGS---------------------------------------------------------------------------*/


var ratings =
[];



/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------FECHAS A CARGAR---------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
var fechas = [

'2014-10-1',
'2014-11-1',
'2014-12-1',
'2015-1-1',
'2015-2-1',
'2015-3-1',
'2015-4-1',
'2015-5-1',
'2015-6-1',
'2015-7-1'/*,
'2015-8-1',
'2015-9-1',
'2015-10-1'*/
]

var fechasPost = [
/*
'2014-10-1',
'2014-11-1',
'2014-12-1',
'2015-1-1',
'2015-2-1',
'2015-3-1',
'2015-4-1',
'2015-5-1',
'2015-6-1',
'2015-7-1',*/
'2015-8-1',
'2015-8-15',
'2015-9-1',
'2015-9-15',
'2015-10-1',
'2015-10-15'
]
;

var encuestas =
[
		/*---------------------------------------------------------------------------------------*/
		/*---------------------------------PBA ----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/

    [{"nro":13,"enc":"G&V","fecha":"02/07/2017","peso":0.104455294},
    {"nro":12,"enc":"Query","fecha":"29/06/2017","peso":0.145148125},
    {"nro":11,"enc":analogias,"fecha":"27/06/2017","peso":0.212026345},
    {"nro":10,"enc":"Polldata","fecha":"13/06/2017","peso":0.050920624},
    {"nro":9,"enc":"Haime","fecha":"12/06/2017","peso":0.06840451},
    {"nro":8,"enc":aragon,"fecha":"08/06/2017","peso":0.107457918},
    {"nro":7,"enc":"Query","fecha":"01/06/2017","peso":0.050322641},
    {"nro":6,"enc":"Aresco","fecha":"31/05/2017","peso":0.133009675},
    {"nro":5,"enc":"Circuitos","fecha":"30/05/2017","peso":0.033152093},
    {"nro":4,"enc":"Polldata","fecha":"29/05/2017","peso":0.018337921},
    {"nro":3,"enc":analogias,"fecha":"23/05/2017","peso":0.040318516},
    {"nro":2,"enc":"Haime","fecha":"19/05/2017","peso":0.015368064},
    {"nro":1,"enc":aragon,"fecha":"08/05/2017","peso":0.021078274}]

	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------CIUDAD-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"nro":4,"enc":analogias,"fecha":"03/07/2017","peso":0.638130987},
    {"nro":3,"enc":"Rouvier","fecha":"31/05/2017","peso":0.270084742},
    {"nro":2,"enc":analogias,"fecha":"13/04/2017","peso":0.0650947},
    {"nro":1,"enc":aragon,"fecha":"30/03/2017","peso":0.02668957}]

		,


		/*------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------NAYARIT 3-----------------------------------------------------------*/
		/*------------------------------------------------------------------------------------------------------------*/

		[{"nro":6,"enc":"El Universal","fecha":"30/05/2017","peso":0.303935115},
		{"nro":5,"enc":"El Financiero","fecha":"28/05/2017","peso":0.227466739},
		{"nro":4,"enc":"MassiveCaller","fecha":"26/05/2017","peso":0.212158333},
		{"nro":3,"enc":"Reforma","fecha":"23/05/2017","peso":0.228848782},
		{"nro":2,"enc":"Grupo Impacto","fecha":"25/03/2017","peso":0.020745014},
		{"nro":1,"enc":"Demotecnia","fecha":"26/02/2017","peso":0.006846017}]



];











//-------------------------------------------------ENCUESTAS---------------------------------------------//
var numeros =
[
		/*---------------------------------------------------------------------------------------*/
		/*---------------------------------PBA ----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/



    {
      "12":[15.87485242,30.80897285,37.51168831,12.69988194,2.704604486,0,1987],
      "11":[26.28205128,29.05982906,31.3034188,7.692307692,5.662393162,0,1000],
      "10":[17.343044,35.02175981,25.62294887,10.96527943,5.146967895,0,2440],
      "9":[30.69196429,31.69642857,23.99553571,7.8125,5.803571429,0,855],
      "8":[26.99930151,31.51711292,17.31827707,10.97182771,5.593480792,0,809],
      "7":[31.46280088,30.30142232,23.9666302,7.496170678,3.27297593,0,3006],
      "6":[36.41304348,35.97826087,18.58695652,5.543478261,3.47826087,0,2123],
      "5":[19.42899408,26.96508876,36.3852071,12.59940828,4.121301775,0,1804],
      "4":[27.07659115,32.79395901,29.01833873,5.825242718,5.285868393,0,1000],
      "3":[30.15021459,34.7639485,21.99570815,7.618025751,5.472103004,0,720],
      "2":[28.07187113,39.37050805,19.56877323,5.241635688,1.747211896,0,2000],
      "1":[37.04103672,37.58099352,16.84665227,4.967602592,3.563714903,0,1204],
      "0":[27.17836594,33.49367089,29.43383199,5.864211738,2.029919448,0,800]
    }


	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------CABA-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		{
		  "2":[43.94726426,19.23364377,26.21792782,0.107450524,2.79371362,0,1987],
		  "1":[42.82249322,19.13075881,21.41124661,5.574525745,4.56097561,0,3000],
		  "0":[44.64524076,23.50884658,19.19529675,4.529227324,4.421388578,0,2440]
		}
	,


		/*------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------Nayarit 3-----------------------------------------------------------*/
		/*------------------------------------------------------------------------------------------------------------*/

		{
		  "5":[50,28.20512821,12.82051282,6.41025641,2.564102564,0,500],
		  "4":[45.27491409,26.16593029,11.91703486,11.05792833,5.58419244,0,770],
		  "3":[44.45652688,25.33106452,11.29216129,13.53024731,0,0,1005],
		  "2":[40.69387755,24.41632653,12.08847539,12.80660264,9.694717887,0,800],
		  "1":[44,27,9,12,8,0,800],
		  "0":[43,21.2,9.7,14.5,11.6,0,1000]
		}

];
