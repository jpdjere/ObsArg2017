
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

  [{"cand":"Bullrich","prom":30.02559961,"desv":5.419162235,"promPROY":32.25041285,"desvPROY":4.97725343,"fotos":"images/cand/bullrich.png","nombComp":"Esteban Bullrich","partido":"Cambiemos"},
  {"cand":"C. Kirchner","prom":33.55627453,"desv":3.380111226,"promPROY":36.21312234,"desvPROY":3.709532043,"fotos":"images/cand/cfk.png","nombComp":"Cristina F. Kirchner","partido":"FPV"},
  {"cand":"Massa","prom":19.43710284,"desv":4.901922573,"promPROY":21.05175562,"desvPROY":5.667680291,"fotos":"images/cand/massa.png","nombComp":"Sergio Massa","partido":unPais},
  {"cand":"Randazzo","prom":6.451518697,"desv":1.745828729,"promPROY":6.979565394,"desvPROY":1.998815016,"fotos":"images/cand/randazzo.png","nombComp":"Florencio Randazzo","partido":"Cumplir-PJ"},
  {"cand":"Pitrola","prom":3.251531955,"desv":1.198508007,"promPROY":3.505143799,"desvPROY":1.281324858,"fotos":"images/cand/pitrola.png","nombComp":"Nestor Pitrola","partido":"FIT"},
  {"cand":"NS/NC:","prom":7.277972369,"desv":3.691017082,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],


[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ciudad de Buenos Aires-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"cand":carrio,"promPROY":49.45419187,"desvPROY":4.958983716,"prom":54.45111587,"desv":5.001187028,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
    {"cand":"Filmus","promPROY":21.56222479,"desvPROY":4.835391417,"prom":23.62510095,"desv":4.51518669,"fotos":"images/cand/filmus.png","nombComp":"Daniel Filmus","partido":"FPV"},
    {"cand":"Lousteau","promPROY":14.75179072,"desvPROY":3.92783497,"prom":16.25961995,"desv":4.259277054,"fotos":"images/cand/lousteau.png","nombComp":martinlousteau,"partido":evolucionciudadana},
    {"cand":"Zamora","promPROY":2.757376402,"desvPROY":1.979239919,"prom":3.105245989,"desv":2.268591326,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
    {"cand":"Ramal","promPROY":2.35968034,"desvPROY":2.014366137,"prom":2.558917247,"desv":2.114114759,"fotos":"images/cand/otros.png","nombComp":"Marcelo Ramal","partido":"FIT"},
    {"cand":"NS/NC:","promPROY":9.114735875,"desvPROY":5.198871875,"prom":0,"desv":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]


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

    [{"nro":24,"enc":analogias,"fecha":"17/07/2017","peso":0.097603626},
    {"nro":23,"enc":"OPSM","fecha":"15/07/2017","peso":0.068843992},
    {"nro":22,"enc":"Rouvier","fecha":"13/07/2017","peso":0.098400593},
    {"nro":21,"enc":"Polldata","fecha":"11/07/2017","peso":0.04748032},
    {"nro":20,"enc":"Circuitos","fecha":"07/07/2017","peso":0.046537514},
    {"nro":19,"enc":"CIGP","fecha":"05/07/2017","peso":0.08854465},
    {"nro":18,"enc":"Synopsis","fecha":"03/07/2017","peso":0.024466466},
    {"nro":17,"enc":"Axonier","fecha":"03/07/2017","peso":0.037377339},
    {"nro":16,"enc":"G&V","fecha":"02/07/2017","peso":0.036113041},
    {"nro":15,"enc":"Rouvier","fecha":"01/07/2017","peso":0.035000398},
    {"nro":14,"enc":"M&F","fecha":"01/07/2017","peso":0.082511122},
    {"nro":13,"enc":"Opina Argentina","fecha":"30/06/2017","peso":0.085177915},
    {"nro":12,"enc":"Query","fecha":"29/06/2017","peso":0.050181661},
    {"nro":11,"enc":analogias,"fecha":"27/06/2017","peso":0.024434428},
    {"nro":10,"enc":"Polldata","fecha":"13/06/2017","peso":0.008802323},
    {"nro":9,"enc":"Haime","fecha":"12/06/2017","peso":0.023649303},
    {"nro":8,"enc":aragon,"fecha":"08/06/2017","peso":0.03715113},
    {"nro":7,"enc":"Query","fecha":"01/06/2017","peso":0.017397908},
    {"nro":6,"enc":"Aresco","fecha":"31/05/2017","peso":0.045985068},
    {"nro":5,"enc":"Circuitos","fecha":"30/05/2017","peso":0.011461582},
    {"nro":4,"enc":"Polldata","fecha":"29/05/2017","peso":0.006339919},
    {"nro":3,"enc":analogias,"fecha":"23/05/2017","peso":0.013939209},
    {"nro":2,"enc":"Haime","fecha":"19/05/2017","peso":0.005313158},
    {"nro":1,"enc":aragon,"fecha":"08/05/2017","peso":0.007287334}]

	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------CIUDAD-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"nro":7,"enc":"G&V","fecha":"08/07/2017","peso":0.106370486},
    {"nro":6,"enc":"Circuitos","fecha":"07/07/2017","peso":0.131150734},
    {"nro":5,"enc":"CIGP","fecha":"05/07/2017","peso":0.282469034},
    {"nro":4,"enc":analogias,"fecha":"03/07/2017","peso":0.306309094},
    {"nro":3,"enc":"Rouvier","fecha":"31/05/2017","peso":0.129643309},
    {"nro":2,"enc":analogias,"fecha":"13/04/2017","peso":0.031246091},
    {"nro":1,"enc":aragon,"fecha":"30/03/2017","peso":0.012811254}]

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
      "23":[15.87485242,30.80897285,37.51168831,12.69988194,2.704604486,0,1987],
      "22":[26.28205128,29.05982906,31.3034188,7.692307692,5.662393162,0,1000],
      "21":[17.343044,35.02175981,25.62294887,10.96527943,5.146967895,0,2440],
      "20":[30.69196429,31.69642857,23.99553571,7.8125,5.803571429,0,855],
      "19":[26.99930151,31.51711292,17.31827707,10.97182771,5.593480792,0,809],
      "18":[31.46280088,30.30142232,23.9666302,7.496170678,3.27297593,0,3006],
      "17":[36.41304348,35.97826087,18.58695652,5.543478261,3.47826087,0,2123],
      "16":[19.42899408,26.96508876,36.3852071,12.59940828,4.121301775,0,1804],
      "15":[27.07659115,32.79395901,29.01833873,5.825242718,5.285868393,0,1000],
      "14":[30.15021459,34.7639485,21.99570815,7.618025751,5.472103004,0,720],
      "13":[28.07187113,39.37050805,19.56877323,5.241635688,1.747211896,0,2000],
      "12":[37.04103672,37.58099352,16.84665227,4.967602592,3.563714903,0,1204],
      "11":[34.08695652,35.15217391,18.10869565,6.391304348,4.260869565,0,2017],
      "10":[28.91506229,39.59139298,18.68357871,7.562400906,3.447565119,0,1600],
      "9":[29.68616423,28.95703037,25.10303712,5.624746907,3.229021372,0,2000],
      "8":[27.17836594,33.49367089,29.43383199,5.864211738,2.029919448,0,800],
      "7":[32.39745575,34.98064159,19.37389381,6.027433628,4.520575221,0,1056],
      "6":[35.10227027,36.79394595,18.71416216,4.863567568,2.326054054,0,1605],
      "5":[40.56411145,38.5981776,11.62062467,4.919981039,2.007105235,0,1707],
      "4":[32.65888158,36.10800439,17.89232456,5.604824561,6.035964912,0,870],
      "3":[30.81648822,34.90438972,20.22987152,6.813169165,5.13608137,0,780],
      "2":[30.83036876,36.50401302,18.30553145,9.313340564,3.746746204,0,1500],
      "1":[32.91916933,34.46709265,20.01980831,7.636421725,1.857507987,0,1000],
      "0":[28.58305085,39.99322034,18.67118644,5.762711864,2.189830508,0,2700]
    }


	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------CABA-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    {
      "6":[43.94726426,19.23364377,26.21792782,0.107450524,2.79371362,0,1987],
      "5":[42.82249322,19.13075881,21.41124661,5.574525745,4.56097561,0,3000],
      "4":[44.64524076,23.50884658,19.19529675,4.529227324,4.421388578,0,2440],
      "3":[53.43898089,18.95082803,14.47796178,4.472866242,1.059363057,0,2000],
      "2":[51.7936072,26.30500296,10.11486208,0,1.346527761,0,1707],
      "1":[46.30752552,15.08832681,14.81006447,3.233183088,5.527700118,0,815],
      "0":[42.58933824,21.6682598,18.9997549,2.668504902,1.174142157,0,600]
    }
	,


		/*------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------Nayarit 3-----------------------------------------------------------*/
		/*------------------------------------------------------------------------------------------------------------*/



];
