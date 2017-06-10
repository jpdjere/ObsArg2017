
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


[{"cand":"Bullrich","prom":24.91795895,"desv":7.741694408,"promPROY":27.28053732,"desvPROY":7.705883039,"fotos":"images/cand/bullrich.png","nombComp":"Esteban Bullrich","partido":"Cambiemos"},
{"cand":"C. Kirchner","prom":29.30823501,"desv":3.981347406,"promPROY":32.29597227,"desvPROY":3.784076267,"fotos":"images/cand/cfk.png","nombComp":"Cristina F. Kirchner","partido":"FPV"},
{"cand":"Massa","prom":24.0916442,"desv":5.437913545,"promPROY":26.7886672,"desvPROY":6.973366655,"fotos":"images/cand/massa.png","nombComp":"Segio Massa","partido":unPais},
{"cand":"Randazzo","prom":8.391424128,"desv":2.354556659,"promPROY":9.342961766,"desvPROY":2.909238942,"fotos":"images/cand/randazzo.png","nombComp":"Florencio Randazzo","partido":"PJ"},
{"cand":delcano,"prom":3.88373367,"desv":1.005871905,"promPROY":4.291861448,"desvPROY":1.109688351,"fotos":"images/cand/delcano.png","nombComp":nicolasdelcano,"partido":"FIT"},
{"cand":"NS/NC:","prom":9.407004043,"desv":3.886667845,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]
],


[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ciudad de Buenos Aires-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		[{"cand":carrio,"prom":41.85753454,"desv":3.300704294,"promPROY":46.3520536,"desvPROY":0.5084492,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
		{"cand":cabandie,"prom":21.23124117,"desv":3.09117716,"promPROY":23.43770658,"desvPROY":2.049848496,"fotos":"images/cand/cabandie.png","nombComp":juancabandie,"partido":"FPV"},
		{"cand":"Losteau","prom":18.99679563,"desv":2.577917761,"promPROY":21.09138744,"desvPROY":2.881477908,"fotos":"images/cand/lousteau.png","nombComp":"Martín Lousteau","partido":"ECO"},
		{"cand":"Zamora","prom":4.109661913,"desv":1.392167998,"promPROY":4.591387661,"desvPROY":1.654205426,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
		{"cand":"Bregman","prom":4.07801536,"desv":0.475418996,"promPROY":4.527464718,"desvPROY":0.535604885,"fotos":"images/cand/bregman.png","nombComp":"Myriam Bregman","partido":"FIT"},
		{"cand":"NS/NC:","prom":9.726751396,"desv":6.507022135,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],

	[
		/*------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------NAYARIT 3-----------------------------------------------------------*/
		/*------------------------------------------------------------------------------------------------------------*/


		[{"cand":"Echeverria","prom":34.17864703,"desv":2.339683688,"promPROY":44.07777145,"desvPROY":3.473185954,"fotos":"images/cand/echeverria.jpg","nombComp":"Antonio Echeverría","partido":"PAN-PRD"},
		{"cand":"Cota","prom":18.71251592,"desv":3.251957642,"promPROY":24.14561541,"desvPROY":4.415728056,"fotos":"images/cand/cota.jpg","nombComp":"Manuel Cota","partido":"PRI"},
		{"cand":"Layin","prom":8.349093561,"desv":1.539831983,"promPROY":10.71459126,"desvPROY":1.664998895,"fotos":"images/cand/layin.jpg","nombComp":"Hilario Layín","partido":"Indepte."},
		{"cand":"Navarro","prom":10.47921727,"desv":1.194357896,"promPROY":13.48255325,"desvPROY":1.307699495,"fotos":"images/cand/navarro.jpg","nombComp":"Miguel A. Navarro","partido":"Morena"},
		{"cand":"Otros","prom":5.955461425,"desv":3.837032357,"promPROY":7.579468637,"desvPROY":4.806084547,"fotos":"images/cand/otros_baja.png","nombComp":"Otros","partido":""},
		{"cand":"NS/NC:","prom":22.32506479,"desv":4.0222105,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc_baja.png","nombComp":"NS/NC:","partido":""}]

	],

	[
		/*----------------------------------------------------------------------------------------------------------*/
		/*---------------------------------------HIDALGO 4-----------------------------------------------------------*/
		/*----------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Fayad","prom":37.19865645,"desv":1.650971194,"promPROY":53.34294236,"desvPROY":4.831325587,"fotos":"images/byn/hidalgo/fayad.jpg","nombComp":"Omar Fayad","partido":"PRI"},
{"cand":"Berganza","prom":13.0986536,"desv":1.586138326,"promPROY":18.67077121,"desvPROY":1.832108186,"fotos":"images/byn/hidalgo/berganza.png","nombComp":"Francisco Berganza","partido":"PAN"},
{"cand":"Guadarrama","prom":8.324413621,"desv":1.098825584,"promPROY":11.82548527,"desvPROY":0.370855998,"fotos":"images/byn/hidalgo/guaderrama.jpg","nombComp":"Jos� Guadarrama M�quez","partido":"PRD"},
{"cand":"Torres","prom":6.275983682,"desv":3.410675764,"promPROY":8.650294361,"desvPROY":3.739782356,"fotos":"images/byn/hidalgo/torres.jpg","nombComp":"Salvador Torres Cisneros","partido":"Morena"},
{"cand":"Otros","prom":5.43247835,"desv":2.267740211,"promPROY":7.5105068,"desvPROY":2.607145586,"fotos":"images/byn/otros.png","nombComp":"","partido":""}]


	],

	[

		/*---------------------------------------------------------------------------------------------------*/
		/*--------------------------------------------------C DE MEXICO 5-----------------------------------------*/
		/*---------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"PRI","prom":0,"desv":0,"promPROY":0,"desvPROY":0,"fotos":"images/byn/pri.png","nombComp":"PRI","partido":"PRI"},
{"cand":"PAN","prom":0,"desv":0,"promPROY":0,"desvPROY":0,"fotos":"images/byn/pan.png","nombComp":"PAN","partido":"PAN"},
{"cand":"PRD","prom":0,"desv":0,"promPROY":0,"desvPROY":0,"fotos":"images/byn/prd.png","nombComp":"PRD","partido":"PRD"},
{"cand":"Morena","prom":0,"desv":0,"promPROY":0,"desvPROY":0,"fotos":"images/byn/morena.png","nombComp":"Morena","partido":"Morena"},
{"cand":"NS/NC","prom":0,"desv":0,"promPROY":0,"desvPROY":0,"fotos":"images/byn/nsnc.png","nombComp":"NS/NC","partido":""}]

	],

	[
		/*------------------------------------------------------------------------------------------------------------*/
		/*-------------------------------------------------OAXACA 6---------------------------------------------------*/
		/*------------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Murat H.","prom":27.06692108,"desv":5.265012017,"promPROY":35.68620796,"desvPROY":7.043791158,"fotos":"images/byn/oaxaca/murat.jpg","nombComp":"Alejandro Murat Hinojosa","partido":"PRI"},
{"cand":"Estefan G.","prom":22.29852793,"desv":5.18465834,"promPROY":29.4851384,"desvPROY":7.190941178,"fotos":"images/byn/oaxaca/estefan.jpg","nombComp":"Jos� A. Estefan Garfias","partido":"Alianza PAN-PRD"},
{"cand":"Jara Cruz","prom":10.58802273,"desv":4.516346011,"promPROY":13.81974397,"desvPROY":5.368893133,"fotos":"images/byn/oaxaca/jaracruz.jpg","nombComp":"Salom�n Jara Cruz","partido":"Morena"},
{"cand":"Robles","prom":10.26265719,"desv":2.64009698,"promPROY":13.50629295,"desvPROY":3.369224254,"fotos":"images/byn/oaxaca/robles.jpg","nombComp":"Benjam�n Robles","partido":"PT"},
{"cand":"Otros","prom":5.82392365,"desv":4.63112997,"promPROY":7.502616715,"desvPROY":5.637389235,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]

	],

	[

		/*-----------------------------------------------------------------------------------------------------------------*/
		/*-------------------------------------------------PUEBLA 7 --------------------------------------------------------*/
		/*-----------------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Alcal�","prom":25.80807958,"desv":5.417894164,"promPROY":33.25212323,"desvPROY":7.498879277,"fotos":"images/byn/puebla/alcala.jpg","nombComp":"Blanca Alcal�","partido":"PRI"},
{"cand":"Gali","prom":32.58932385,"desv":3.306260924,"promPROY":41.8544594,"desvPROY":4.471881215,"fotos":"images/byn/puebla/gali.jpg","nombComp":"Antonio Gali","partido":"PAN"},
{"cand":"Luna","prom":3.055899198,"desv":0.631281058,"promPROY":3.947107727,"desvPROY":0.985738419,"fotos":"images/byn/puebla/luna.jpg","nombComp":"Roxana Luna","partido":"PRD"},
{"cand":"Quiroz","prom":10.6943069,"desv":4.263203528,"promPROY":13.54544159,"desvPROY":4.544423773,"fotos":"images/byn/puebla/quiroz.jpg","nombComp":"Abraham Quiroz","partido":"Morena"},
{"cand":"Otros","prom":6.015208499,"desv":6.096586914,"promPROY":7.400868055,"desvPROY":7.132779,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]

	],

	[

		/*----------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------------QUINTANA ROO 8 ---------------------------------------------------------*/
		/*----------------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"G�ngora","prom":30.41635972,"desv":2.866008308,"promPROY":42.83946958,"desvPROY":7.576710367,"fotos":"images/byn/quintanaroo/gongora.jpg","nombComp":"Mauricio G�ngora","partido":"PRI"},
{"cand":"Joaqu�n","prom":26.64532785,"desv":7.424763653,"promPROY":36.74247698,"desvPROY":7.499737532,"fotos":"images/byn/quintanaroo/gonzalez.jpg","nombComp":"Carlos Joaqu�n","partido":"PAN-PRD"},
{"cand":"Pech","prom":9.604573139,"desv":2.002002043,"promPROY":13.3364757,"desvPROY":2.089881459,"fotos":"images/byn/quintanaroo/pech.jpg","nombComp":"Jos� Luis Pech","partido":"Morena"},
{"cand":"Otros","prom":5.094764303,"desv":2.088905327,"promPROY":7.081577733,"desvPROY":2.87272836,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]

	],

	[

		/*-------------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------------SINALOA 9-----------------------------------------------------*/
		/*-------------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Ordaz","prom":34.67176061,"desv":8.697136146,"promPROY":42.41908375,"desvPROY":11.1206548,"fotos":"images/byn/sinaloa/ordaz.jpg","nombComp":"Quirino Ordaz","partido":"PRI"},
{"cand":"Heredia","prom":18.90121138,"desv":5.205081264,"promPROY":22.79696137,"desvPROY":4.337403869,"fotos":"images/byn/sinaloa/heredia.jpg","nombComp":"Mart�n Heredia","partido":"PAN"},
{"cand":"G�mez","prom":2.398937959,"desv":1.815586052,"promPROY":2.778844541,"desvPROY":1.781923055,"fotos":"images/byn/sinaloa/gomez.jpg","nombComp":"Mario G�mez","partido":"PRD"},
{"cand":"Estrada F.","prom":3.675508659,"desv":2.740571515,"promPROY":4.47318664,"desvPROY":3.41734164,"fotos":"images/byn/sinaloa/estrada.jpg","nombComp":"Jes�s Estrada F.","partido":"Morena"},
{"cand":"Cu�n O.","prom":17.62729124,"desv":4.570107004,"promPROY":21.55546629,"desvPROY":5.88932629,"fotos":"images/byn/sinaloa/cuen.jpg","nombComp":"Cuen Ojeda","partido":"MC-PAS"},
{"cand":"F. Castro","prom":4.865272574,"desv":5.465259266,"promPROY":5.976457407,"desvPROY":6.892233549,"fotos":"images/byn/sinaloa/castro.jpg","nombComp":"Francisco F. Castro","partido":"Indepte."}]

	],

	[

		/*-------------------------------------------------------------------------------------------------------------------*/
		/*-----------------------------------------------TAMAULIPAS 10------------------------------------------------------------*/
		/*-------------------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Hinojosa","prom":30.90316543,"desv":0.141350487,"promPROY":38.97527679,"desvPROY":1.874945408,"fotos":"images/byn/tamaulipas/hinojosa.jpg","nombComp":"Baltazar Hinojosa","partido":"PRI"},
{"cand":"Cabeza de Vaca","prom":31.12661709,"desv":5.654019475,"promPROY":39.40843078,"desvPROY":8.82557985,"fotos":"images/byn/tamaulipas/cdevaca.jpg","nombComp":"Francisco Cabeza de Vaca","partido":"PAN"},
{"cand":"Chavira","prom":4.35755577,"desv":6.360771909,"promPROY":5.320580916,"desvPROY":7.766510268,"fotos":"images/byn/tamaulipas/chavira.jpg","nombComp":"Jose Chavira","partido":"Indepte"},
{"cand":"Garza","prom":7.854748141,"desv":0.21202573,"promPROY":9.91129554,"desvPROY":0.698201428,"fotos":"images/byn/tamaulipas/garza.jpg","nombComp":"H�ctor Mart�n Garza","partido":"Morena"},
{"cand":"Otros","prom":5.130360599,"desv":3.109710711,"promPROY":6.384415981,"desvPROY":3.632216418,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]

	],

	[

		/*-------------------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------------TLAXCALA 11-----------------------------------------------------------*/
		/*-------------------------------------------------------------------------------------------------------------------*/

[{"cand":"Mena","prom":17.7177604,"desv":0.207174361,"promPROY":21.96267328,"desvPROY":3.452906022,"fotos":"images/byn/tlaxcala/mena.jpg","nombComp":"Marco Antonio Mena","partido":"PRI"},
{"cand":"D�vila","prom":19.96821188,"desv":0.759639325,"promPROY":24.66304342,"desvPROY":2.605900634,"fotos":"images/byn/tlaxcala/davila.jpg","nombComp":"Adriana D�vila","partido":"PAN"},
{"cand":"Cu�llar","prom":22.46628513,"desv":4.281603467,"promPROY":27.44046064,"desvPROY":1.504179858,"fotos":"images/byn/tlaxcala/cuellar.jpg","nombComp":"Lorena Cu�llar","partido":"PRD"},
{"cand":"Palafox","prom":11.3055386,"desv":4.212545347,"promPROY":13.6236999,"desvPROY":3.420902195,"fotos":"images/byn/tlaxcala/palafox.jpg","nombComp":"Martha Palafox","partido":"Morena"},
{"cand":"Otros","prom":10.10463563,"desv":2.278917975,"promPROY":12.31012276,"desvPROY":1.133724603,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]

	],

	[

		/*----------------------------------------------------------------------------------------------------------*/
		/*----------------------------------------VERACRUZ 12----------------------------------------------------------*/
		/*----------------------------------------------------------------------------------------------------------*/

		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Y. Landa","prom":21.70590096,"desv":3.004806563,"promPROY":31.41111939,"desvPROY":1.908127338,"fotos":"images/byn/veracruz/ylanda.jpg","nombComp":"H�ctor Y. Landa","partido":"PRI"},
{"cand":"Y. Linares","prom":23.08707394,"desv":5.252894227,"promPROY":33.60844751,"desvPROY":6.725048858,"fotos":"images/byn/veracruz/ylinares.jpg","nombComp":"Miguel Y. Linares","partido":"PAN-PRD"},
{"cand":"Garc�a J.","prom":14.49407378,"desv":2.818533533,"promPROY":21.22722005,"desvPROY":4.836750104,"fotos":"images/byn/veracruz/garciaj.jpg","nombComp":"Cuitl�huac Garc�a J.","partido":"Morena"},
{"cand":"Otros","prom":9.878239804,"desv":6.4721233,"promPROY":13.75321305,"desvPROY":7.529341719,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]
	],

	/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
	/*-----------------------------------------------------------------ZACATECAS 13-------------------------------------------------------------------------*/
	/*--------------------------------------------------------------------------------------------------------------------------------------------------*/
	[
		/*-----------------------------------------------AGOSTO---------------------------------------------*/
[{"cand":"Tello","prom":27.98937038,"desv":4.872351357,"promPROY":38.38619836,"desvPROY":7.320028557,"fotos":"images/byn/zacatecas/tello.jpg","nombComp":"Alejandro Tello","partido":"PRI"},
{"cand":"Flores","prom":13.68002914,"desv":2.000220756,"promPROY":18.74383549,"desvPROY":3.30236471,"fotos":"images/byn/zacatecas/deleon.jpg","nombComp":"Rafael Flores","partido":"PAN-PRD"},
{"cand":"Monreal","prom":19.77733767,"desv":3.845968447,"promPROY":26.81477039,"desvPROY":4.570831327,"fotos":"images/byn/zacatecas/monreal.jpg","nombComp":"David Monreal A.","partido":"Morena"},
{"cand":"Otros","prom":11.9703414,"desv":4.661197005,"promPROY":16.05519576,"desvPROY":5.062050944,"fotos":"images/byn/otros.png","nombComp":"Otros","partido":""}]


	]


]

;



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

		[{"nro":8,"enc":aragon,"fecha":"08/06/2017","peso":0.197753867},
		{"nro":7,"enc":"Query","fecha":"01/06/2017","peso":0.185216633},
		{"nro":6,"enc":"Aresco","fecha":"31/05/2017","peso":0.244776544},
		{"nro":5,"enc":"Circuitos","fecha":"30/05/2017","peso":0.061009508},
		{"nro":4,"enc":"Polldata","fecha":"29/05/2017","peso":0.067494232},
		{"nro":3,"enc":analogias,"fecha":"23/05/2017","peso":0.148395625},
		{"nro":2,"enc":"Haime","fecha":"19/05/2017","peso":0.056563427},
		{"nro":1,"enc":aragon,"fecha":"08/05/2017","peso":0.038790164}]

	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------CIUDAD-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

		[{"nro":3,"enc":"Rouvier","fecha":"31/05/2017","peso":0.746360514},
		{"nro":2,"enc":analogias,"fecha":"13/04/2017","peso":0.179884704},
		{"nro":1,"enc":aragon,"fecha":"30/03/2017","peso":0.073754781}]

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
		  "7":[15.87485242,30.80897285,37.51168831,12.69988194,2.704604486,0,1987],
		  "6":[26.28205128,29.05982906,31.3034188,7.692307692,5.662393162,0,1000],
		  "5":[17.343044,35.02175981,25.62294887,10.96527943,5.146967895,0,2440],
		  "4":[30.69196429,31.69642857,23.99553571,7.8125,5.803571429,0,855],
		  "3":[26.99930151,31.51711292,17.31827707,10.97182771,5.593480792,0,809],
		  "2":[31.46280088,30.30142232,23.9666302,7.496170678,3.27297593,0,3006],
		  "1":[36.41304348,35.97826087,18.58695652,5.543478261,3.47826087,0,2123],
		  "0":[19.42899408,26.96508876,36.3852071,12.59940828,4.121301775,0,1804]
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
