
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
var matiastombolini = decode_utf8("Matías Tombolini");

var aragon = decode_utf8("Aragón");
var analogias = decode_utf8("Analogías");
var poliarquia = decode_utf8("Poliarquía");

// console.log(unPais);


var cand =
[
		/*---------------------------------------------------------------------------------------*/
		/*--------------------------------- 0 - provincia de Buenos Aires- PASO ----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/
[

  [{"cand":"Bullrich","prom":30.97595152,"desv":3.181778989,"promPROY":33.19418962,"desvPROY":2.930587614,"fotos":"images/cand/bullrich.png","nombComp":"Esteban Bullrich","partido":"Cambiemos"},
  {"cand":"C. Kirchner","prom":34.07527734,"desv":2.374968506,"promPROY":36.51669295,"desvPROY":1.48037432,"fotos":"images/cand/cfk.png","nombComp":"Cristina F. Kirchner","partido":"FPV"},
  {"cand":"Massa","prom":18.77366387,"desv":4.29164091,"promPROY":20.12044503,"desvPROY":4.561344532,"fotos":"images/cand/massa.png","nombComp":"Sergio Massa","partido":unPais},
  {"cand":"Randazzo","prom":5.93548861,"desv":1.364228226,"promPROY":6.381242635,"desvPROY":1.533266774,"fotos":"images/cand/randazzo.png","nombComp":"Florencio Randazzo","partido":"Cumplir-PJ"},
  {"cand":"Pitrola","prom":3.528545303,"desv":0.853160991,"promPROY":3.787429766,"desvPROY":0.907440968,"fotos":"images/cand/pitrola.png","nombComp":"Nestor Pitrola","partido":"FIT"},
  {"cand":"NS/NC:","prom":6.711073359,"desv":4.736886618,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],


[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ 1 - ciudad de Buenos Aires - PASO-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"cand":carrio,"promPROY":50.25276817,"desvPROY":4.021161116,"prom":53.61201428,"desv":4.198749211,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
    {"cand":"Filmus","promPROY":23.29049536,"desvPROY":2.964506848,"prom":24.85423219,"desv":3.174157664,"fotos":"images/cand/filmus.png","nombComp":"Daniel Filmus","partido":"FPV"},
    {"cand":"Losteau","promPROY":14.29479616,"desvPROY":3.72846416,"prom":15.21322015,"desv":3.805103967,"fotos":"images/cand/lousteau.png","nombComp":martinlousteau,"partido":evolucionciudadana},
    {"cand":"Tombolini","promPROY":2.933145145,"desvPROY":0.975805447,"prom":3.158580805,"desv":1.180465142,"fotos":"images/cand/tombolini.png","nombComp":matiastombolini,"partido":"FR"},
    {"cand":"Ramal","promPROY":2.998510932,"desvPROY":1.936616456,"prom":3.161952574,"desv":1.990326016,"fotos":"images/cand/otros.png","nombComp":"Marcelo Ramal","partido":"FIT"},
    {"cand":"NS/NC:","promPROY":6.230284234,"desvPROY":3.020129796,"prom":0,"desv":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],

[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ 2 - provincia de Buenos Aires 1 - Eleccion General -------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/
    [{"cand":"Bullrich","prom":38.1463981,"desv":1.633474748,"promPROY":41.19035022,"desvPROY":1.042117819,"fotos":"images/cand/bullrich.png","nombComp":"Esteban Bullrich","partido":"Cambiemos"},
    {"cand":"C. Kirchner","prom":34.97481489,"desv":2.549305265,"promPROY":37.74008879,"desvPROY":1.982513962,"fotos":"images/cand/cfk.png","nombComp":"Cristina F. Kirchner","partido":"FPV"},
    {"cand":"Massa","prom":11.76298955,"desv":1.575990631,"promPROY":12.70590904,"desvPROY":1.668113412,"fotos":"images/cand/massa.png","nombComp":"Sergio Massa","partido":unPais},
    {"cand":"Randazzo","prom":4.332596521,"desv":1.019602314,"promPROY":4.700492232,"desvPROY":1.1997844,"fotos":"images/cand/randazzo.png","nombComp":"Florencio Randazzo","partido":"Cumplir-PJ"},
    {"cand":"Pitrola","prom":3.387383939,"desv":0.546944734,"promPROY":3.66315972,"desvPROY":0.619232299,"fotos":"images/cand/pitrola.png","nombComp":"Nestor Pitrola","partido":"FIT"},
    {"cand":"NS/NC:","prom":7.395817005,"desv":3.060378757,"promPROY":0,"desvPROY":0,"fotos":"images/cand/nsnc.png","nombComp":"NS/NC","partido":"NS/NC"}]

],

[
		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------- 3 - CABA - Eleccion General---------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"cand":carrio,"promPROY":51.85206072,"desvPROY":2.388720246,"prom":55.49062857,"desv":2.530810157,"fotos":"images/cand/carrio.png","nombComp":elisacarrio,"partido":"Cambiemos"},
    {"cand":"Filmus","promPROY":20.28984774,"desvPROY":1.453420549,"prom":21.70988617,"desv":1.49806909,"fotos":"images/cand/filmus.png","nombComp":"Daniel Filmus","partido":"FPV"},
    {"cand":"Losteau","promPROY":11.25541649,"desvPROY":0.923393575,"prom":12.03323093,"desv":0.77372155,"fotos":"images/cand/lousteau.png","nombComp":martinlousteau,"partido":evolucionciudadana},
    {"cand":"Zamora","promPROY":3.594364525,"desvPROY":0.956833895,"prom":3.853757619,"desv":1.062261054,"fotos":"images/cand/zamora.png","nombComp":"Luis Zamora","partido":"AyL"},
    {"cand":"Tombolini","promPROY":3.428330889,"desvPROY":1.186481168,"prom":3.65516314,"desv":1.24899417,"fotos":"images/cand/tombolini.png","nombComp":matiastombolini,"partido":"FR"},
    {"cand":"Ramal","promPROY":3.428330889,"desvPROY":1.186481168,"prom":3.257333573,"desv":0.882694085,"fotos":"images/cand/ramal.png","nombComp":"Marcelo Ramal","partido":"FIT"}]
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
		/*--------------------------------- 0 - PBA PASO----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/
    [{"nro":40,"enc":aragon,"fecha":"11/08/2017","peso":0.100780953},
    {"nro":39,"enc":"M&F","fecha":"10/08/2017","peso":0.071076197},
    {"nro":38,"enc":"Query","fecha":"08/08/2017","peso":0.056443181},
    {"nro":37,"enc":"Analia del Franco","fecha":"07/08/2017","peso":0.033349886},
    {"nro":36,"enc":"Aresco","fecha":"06/08/2017","peso":0.078068679},
    {"nro":35,"enc":aragon,"fecha":"05/08/2017","peso":0.048623227},
    {"nro":34,"enc":"Prognosis","fecha":"04/08/2017","peso":0.027466143},
    {"nro":33,"enc":"Opina Argentina","fecha":"04/08/2017","peso":0.030116385},
    {"nro":32,"enc":"Circuitos","fecha":"04/08/2017","peso":0.030484513},
    {"nro":31,"enc":"Synopsis","fecha":"03/08/2017","peso":0.033241761},
    {"nro":30,"enc":"OPSM","fecha":"03/08/2017","peso":0.043302731},
    {"nro":29,"enc":"Elypsis","fecha":"02/08/2017","peso":0.217269641},
    {"nro":28,"enc":"M&F","fecha":"31/07/2017","peso":0.04438746},
    {"nro":27,"enc":"G&V","fecha":"28/07/2017","peso":0.026146837},
    {"nro":26,"enc":"Circuitos","fecha":"26/07/2017","peso":0.008431202},
    {"nro":25,"enc":"Query","fecha":"25/07/2017","peso":0.02417571},
    {"nro":24,"enc":"Rouvier","fecha":"21/07/2017","peso":0.02838081},
    {"nro":23,"enc":aragon,"fecha":"19/07/2017","peso":0.009729196},
    {"nro":22,"enc":"Opolit Communis","fecha":"17/07/2017","peso":0.021625151},
    {"nro":21,"enc":"OPSM","fecha":"15/07/2017","peso":0.006119636},
    {"nro":20,"enc":"Rouvier","fecha":"13/07/2017","peso":0.016734268},
    {"nro":19,"enc":"Polldata","fecha":"11/07/2017","peso":0.009479148},
    {"nro":18,"enc":"Circuitos","fecha":"07/07/2017","peso":0.001561897},
    {"nro":17,"enc":"CIGP","fecha":"05/07/2017","peso":0.007997744},
    {"nro":16,"enc":"Synopsis","fecha":"03/07/2017","peso":0.002155936},
    {"nro":15,"enc":"Axonier","fecha":"03/07/2017","peso":0.003293616},
    {"nro":14,"enc":"G&V","fecha":"02/07/2017","peso":0.001861295},
    {"nro":13,"enc":"Rouvier","fecha":"01/07/2017","peso":0.00398992},
    {"nro":12,"enc":"M&F","fecha":"01/07/2017","peso":0.003895418},
    {"nro":11,"enc":"Opina Argentina","fecha":"30/06/2017","peso":0.003395722},
    {"nro":10,"enc":"Query","fecha":"29/06/2017","peso":0.001934967},
    {"nro":9,"enc":"Polldata","fecha":"13/06/2017","peso":0.000691053},
    {"nro":8,"enc":"Haime","fecha":"12/06/2017","peso":0.001034848},
    {"nro":7,"enc":aragon,"fecha":"08/06/2017","peso":0.000485348},
    {"nro":6,"enc":"Query","fecha":"01/06/2017","peso":0.000351741},
    {"nro":5,"enc":"Aresco","fecha":"31/05/2017","peso":0.001348831},
    {"nro":4,"enc":"Circuitos","fecha":"30/05/2017","peso":0.00010839},
    {"nro":3,"enc":"Polldata","fecha":"29/05/2017","peso":0.000301891},
    {"nro":2,"enc":"Haime","fecha":"19/05/2017","peso":0.000104466},
    {"nro":1,"enc":aragon,"fecha":"08/05/2017","peso":0}]
	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ 1 - CIUDAD PASO-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"nro":8,"enc":"Rouvier","fecha":"04/08/2017","peso":0.233580842},
    {"nro":7,"enc":aragon,"fecha":"28/07/2017","peso":0.138567002},
    {"nro":6,"enc":"Circuitos","fecha":"22/07/2017","peso":0.208467859},
    {"nro":5,"enc":"G&V","fecha":"08/07/2017","peso":0.081493749},
    {"nro":4,"enc":"Circuitos","fecha":"07/07/2017","peso":0.051361748},
    {"nro":3,"enc":"CIGP","fecha":"05/07/2017","peso":0.230073601},
    {"nro":2,"enc":"Rouvier","fecha":"31/05/2017","peso":0.051353954},
    {"nro":1,"enc":aragon,"fecha":"30/03/2017","peso":0.005101245}]
		,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ 2 - PBA ELECCION GENERAL-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"nro":18,"enc":"Analytica","fecha":"17/10/2017","peso":0.073763105},
    {"nro":17,"enc":"G&V","fecha":"17/10/2017","peso":0.089496136},
    {"nro":16,"enc":"CEIS","fecha":"14/10/2017","peso":0.051956919},
    {"nro":15,"enc":"Circuitos","fecha":"13/10/2017","peso":0.054568382},
    {"nro":14,"enc":"Rouvier","fecha":"13/10/2017","peso":0.106067719},
    {"nro":13,"enc":"Opolit Communis","fecha":"12/10/2017","peso":0.076797576},
    {"nro":12,"enc":"Synopsis","fecha":"10/10/2017","peso":0.065211835},
    {"nro":11,"enc":poliarquia,"fecha":"08/10/2017","peso":0.079729468},
    {"nro":10,"enc":"M&F","fecha":"07/10/2017","peso":0.173446095},
    {"nro":9,"enc":"Rouvier","fecha":"27/09/2017","peso":0.030859938},
    {"nro":8,"enc":"OPSM","fecha":"26/09/2017","peso":0.048402874},
    {"nro":7,"enc":"Query","fecha":"24/09/2017","peso":0.040528994},
    {"nro":6,"enc":"Circuitos","fecha":"19/09/2017","peso":0.011944208},
    {"nro":5,"enc":"CEIS","fecha":"12/09/2017","peso":0.013493832},
    {"nro":4,"enc":"Synopsis","fecha":"11/09/2017","peso":0.012269167},
    {"nro":3,"enc":"Taquion","fecha":"08/09/2017","peso":0.017141437},
    {"nro":2,"enc":"Opinaia","fecha":"07/09/2017","peso":0.03213613},
    {"nro":1,"enc":"Opina Argentina","fecha":"06/09/2017","peso":0.022186186}]
		,

		/*---------------------------------------------------------------------------------------------------------*/
		/*------------------------------------------ 3 - CIUDAD ELECCION GENERAL-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    [{"nro":7,"enc":"Rouvier","fecha":"11/10/2017","peso":0.32566308},
    {"nro":6,"enc":"M&F","fecha":"06/10/2017","peso":0.145821438},
    {"nro":5,"enc":aragon,"fecha":"22/09/2017","peso":0.119132567},
    {"nro":4,"enc":"Rouvier","fecha":"13/09/2017","peso":0.126494252},
    {"nro":3,"enc":"CEIS","fecha":"12/09/2017","peso":0.130908634},
    {"nro":2,"enc":"Opinaia","fecha":"04/09/2017","peso":0.064393692},
    {"nro":1,"enc":"Taquion","fecha":"30/08/2017","peso":0.087586336}]


		,





];











//-------------------------------------------------ENCUESTAS---------------------------------------------//
var numeros =
[
		/*---------------------------------------------------------------------------------------*/
		/*--------------------------------- 0 - PBA PASO ----------------------------------------------*/
		/*---------------------------------------------------------------------------------------*/



    {
      "39":[15.87485242,30.80897285,37.51168831,12.69988194,2.704604486,0,1987],
      "38":[26.28205128,29.05982906,31.3034188,7.692307692,5.662393162,0,1000],
      "37":[30.69196429,31.69642857,23.99553571,7.8125,5.803571429,0,855],
      "36":[26.99930151,31.51711292,17.31827707,10.97182771,5.593480792,0,809],
      "35":[31.46280088,30.30142232,23.9666302,7.496170678,3.27297593,0,3006],
      "34":[36.41304348,35.97826087,18.58695652,5.543478261,3.47826087,0,2123],
      "33":[19.42899408,26.96508876,36.3852071,12.59940828,4.121301775,0,1804],
      "32":[27.07659115,32.79395901,29.01833873,5.825242718,5.285868393,0,1000],
      "31":[30.15021459,34.7639485,21.99570815,7.618025751,5.472103004,0,720],
      "30":[37.04103672,37.58099352,16.84665227,4.967602592,3.563714903,0,1204],
      "29":[34.08695652,35.15217391,18.10869565,6.391304348,4.260869565,0,2017],
      "28":[28.91506229,39.59139298,18.68357871,7.562400906,3.447565119,0,1600],
      "27":[29.68616423,28.95703037,25.10303712,5.624746907,3.229021372,0,2000],
      "26":[27.17836594,33.49367089,29.43383199,5.864211738,2.029919448,0,800],
      "25":[32.39745575,34.98064159,19.37389381,6.027433628,4.520575221,0,1056],
      "24":[35.10227027,36.79394595,18.71416216,4.863567568,2.326054054,0,1605],
      "23":[40.56411145,38.5981776,11.62062467,4.919981039,2.007105235,0,1707],
      "22":[32.65888158,36.10800439,17.89232456,5.604824561,6.035964912,0,870],
      "21":[30.81648822,34.90438972,20.22987152,6.813169165,5.13608137,0,780],
      "20":[30.83036876,36.50401302,18.30553145,9.313340564,3.746746204,0,1500],
      "19":[32.91916933,34.46709265,20.01980831,7.636421725,1.857507987,0,1000],
      "18":[33.0192926,35.11575563,21.27909968,6.289389068,2.096463023,0,2072],
      "17":[24.13161435,35.05089686,28.717713,5.022869955,4.47690583,0,1801],
      "16":[33.65043103,37.1424569,14.49719828,10.26443966,2.645474138,0,1500],
      "15":[36.70613563,40.2583423,15.17761033,4.198062433,3.6598493,0,1329],
      "14":[31.9022508,35.37877814,17.07588424,5.419292605,5.623794212,0,909],
      "13":[27.65604143,33.7023015,28.10391254,5.710356732,2.127387802,0,1000],
      "12":[26.14887039,34.9783591,25.6960761,5.43353151,2.943162901,0,2000],
      "11":[35.22727273,36.36363636,15.90909091,7.954545455,4.545454545,0,3121],
      "10":[37.36613455,35.17457241,16.65587229,4.492702395,2.410718358,0,1001],
      "9":[33.07664921,33.38010471,22.96146597,4.652984293,2.528795812,0,1000],
      "8":[27.93832117,34.06824818,27.11313869,3.654379562,4.125912409,0,1600],
      "7":[34.40860215,36.55913978,19.35483871,6.451612903,3.225806452,0,1700],
      "6":[31.8522848,36.2848034,18.65781084,5.25717322,4.947927736,0,887],
      "5":[28.1451049,34.43636364,24.39242424,4.194172494,3.531934732,0,1987],
      "4":[33.03928571,33.03928571,18.74642857,6.939285714,3.935714286,0,2015],
      "3":[32.15782313,35.05306122,12.92517007,6.617687075,4.446258503,0,1690],
      "2":[33.9,39.7,17.1,4.8,4.5,0,1195],
      "1":[29.0773913,33.32,23.90347826,6.105217391,2.793913043,0,803],
      "0":[31.1,33.9,20.1,5.8,3.8,0,1350]
    }


	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*----------------------------------------- 1 - CABA PASO-------------------------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    {
      "7":[43.94726426,19.23364377,26.21792782,0.107450524,2.79371362,0,1987],
      "6":[44.66351351,23.51846847,19.20315315,3.991666667,4.423198198,0,2440],
      "5":[51.72419373,26.26974916,10.10130621,2.160027742,1.344723153,0,1707],
      "4":[46.34087937,15.09919445,14.82073169,1.774312949,5.531681546,0,815],
      "3":[42.58933824,21.6682598,18.9997549,2.668504902,1.174142157,0,600],
      "2":[46.01260965,23.78179825,16.95745614,2.274780702,5.273355263,0,889],
      "1":[49.01464646,23.93472222,11.68106061,5.038888889,1.030681818,0,503],
      "0":[50.24542125,18.6959707,12.21611722,2.868131868,2.974358974,0,700]
    }

	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*----------------------------------------- 2 - PROVINCIA ELECCION GENERAL--------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    {
      "17":[39.61702128,36.4893617,12.5106383,6.255319149,3.127659574,0,1200],
      "16":[39.8,36,11.9,3.9,4.3,0,1718],
      "15":[40.3207331,37.2279496,11.79839633,6.414662085,4.238258877,0,850],
      "14":[43.49276974,38.15350389,12.34705228,3.003337041,3.003337041,0,1101],
      "13":[36.92307692,39.03296703,11.6043956,5.274725275,3.164835165,0,1220],
      "12":[42.27009858,39.04337349,9.895290252,3.656955093,3.334282585,0,836],
      "11":[38.91837607,37.77371795,14.46431624,2.809615385,3.433974359,0,1000],
      "10":[42.4437299,39.01393355,11.68274384,3.536977492,3.32261522,0,1179],
      "9":[42.58926554,35.9519774,10.39841808,5.531073446,3.429265537,0,1200],
      "8":[38.19266272,33.34816568,13.18153846,6.309112426,4.16852071,0,2000],
      "7":[39.63227917,37.00414395,12.82529989,3.258887677,3.679389313,0,1130],
      "6":[42.59805195,39.13831169,12.10909091,3.45974026,2.594805195,0,1114],
      "5":[39.6355042,36.27310924,13.24579832,4.279411765,3.566176471,0,1264],
      "4":[40.52362205,36.7488189,13.54488189,4.774015748,3.108661417,0,1200],
      "3":[41.20833333,37.93279915,10.98888889,4.966132479,3.803846154,0,852],
      "2":[40.67741935,38.59139785,10.43010753,4.172043011,3.129032258,0,1600],
      "1":[40.6,35.9,14.4,4.6,4.5,0,1000],
      "0":[41.56136114,41.45312843,8.766849616,4.004610318,2.814050494,0,1011]
    }
	,

		/*---------------------------------------------------------------------------------------------------------*/
		/*----------------------------------------- 3 - CABA ELECCION GENERAL--------------------------------------*/
		/*---------------------------------------------------------------------------------------------------------*/

    {
      "6":[54.11690141,20.17183099,11.92957746,4.338028169,5.205633803,4.338028169,800],
      "5":[50.25107128,22.38909116,11.44331326,3.980282874,4.079789945,3.880775802,519],
      "4":[54.96666667,23.71111111,10.77777778,2.155555556,3.233333333,2.155555556,800],
      "3":[52.87429538,21.36775648,11.88308906,3.597632469,3.924689966,3.05253664,750],
      "2":[52.31654676,20.8643371,13.90955807,4.878725591,4.774922919,4.255909558,501],
      "1":[58.10534699,19.44209329,11.26757679,5.302389078,1.104664391,1.877929465,400],
      "0":[54.57404255,21.24638298,11.66468085,3.228617021,3.749361702,3.436914894,750]
    }


];
