var app = angular.module('store');

app.directive('generalDirective',['$sce',function($sce){ //Para meter HTML$

		return{

			restrict:'E',
			controller: function($scope,$http,$sce){

			$scope.estado = {id:0,name:"",data:[]};
			$scope.estado.name = "Buenos Aires"


			//Map dimensions (in pixels)
			var width = 600,
			    height = 378;

			//Map projection
			var projection = d3.geo.mercator()
			    .scale(600)
			    .center([-61.03,-36.28]) //projection center
			    .translate([width/2,height/2]) //translate to center the map in view

			//Generate paths based on projection
			var path = d3.geo.path()
			    .projection(projection);

			//Create a tooltip, hidden at the start
			var tooltip = d3.select("#map").append("div").attr("class","tooltipMap");

			//Create an SVG
			var svg = d3.select("#map").append("svg")
				.attr("id","svg0")
			   // .attr("width", width)
			   // .attr("height", height)
			    .attr("viewBox", "0 0 600 478")
			    .attr("perserveAspectRatio","xMinYMid");

			//Group for the map features
			var features = svg.append("g")
			    .attr("class","features");

			//Create choropleth scale
			var color = d3.scale.quantize()
			    .domain([0,1])
			    .range(d3.range(3).map(function(i) { return "q" + i + "-3"; }));



			d3.json("maps/mapFINALsoloPBAyCABA.geojson",function(error,geodata) {
			  if (error) return console.log(" error viejaaaa"); //unknown error, check the console

			  //Create a path for each map feature in the data
			  features.selectAll("path")
			    .data(geodata.features)
			    .enter()
			    .append("path")
			    .attr("d",path)
			    .attr("class", function(d) {
						if(d.properties.show === "si"){
							//Si tiene la propiedad show en "si", esta pintada con la clase q2, definida en general-directive.html
							return "q2";
						}else{
							return "q1";
						}
						// return (typeof color(d.properties.show) == "string" ? color(d.properties.show) : "");
					})
			    .on("mouseover",function(d){

			    	hoveredPath = d3.select(this);
						console.log(hoveredPath);
						console.log(d);

			    	if(d.properties.show === "si"){
			    		showTooltip(d);
			    		hoveredPath.style('fill','#205E8C');

			    		$scope.$apply(function() {  //Sin este apply la actualizacion de estadoData no se refleja en el ng-repeat del panel de abajo
				    		console.log(d.id.toString());
				    		console.log(selectState(d.id.toString())-1);
				    		$scope.estado.id = selectState(d.id.toString())-1;  //Resto uno. Recordar que esta desfazado el nuero del TAB con el objeto Datos
				    		$scope.estado.name = d.properties.Provincia.toString();
				    		//if($scope.estado.id = 4){$scope.estado.name = "Ciudad de México"};

				    		$scope.width = "calc(100%/$scope.estado.data["+$scope.estado.id+"].length)";

			    		});


			    	}
			    })
			    .on("mousemove",moveTooltip)
			    .on("mouseout",function(d){

			    	hideTooltip();
			    	hoveredPath = d3.select(this);

			    	if(d.properties.show === "si"){
			    		hoveredPath.style('fill','#3182BD');
			    	}
			    })
			    .on("click",clicked);

			});


			// Add optional onClick events for features here
			// d.properties contains the attributes (e.g. d.properties.name, d.properties.population)
			function clicked(d,i) {

			}

			//Position of the tooltip relative to the cursor
			var tooltipOffset = {x: -136, y: -290};

			//Create a tooltip, hidden at the start
			function showTooltip(d) {
			  moveTooltip();

			  tooltip.style("display","block")
			      .text(d.properties.Provincia);
			}

			//Move the tooltip to track the mouse
			function moveTooltip() {

			 	tooltip.style("top",(d3.mouse(document.body)[1]+tooltipOffset.y)+"px")
			      .style("left",(d3.mouse(document.body)[0]+tooltipOffset.x)+"px");
			}

			//Create a tooltip, hidden at the start
			function hideTooltip() {
			  tooltip.style("display","none");
			}

			function selectState(state){
				switch(state){
					case "BUENOS AIRES": return 1; break;
					case "CIUDAD DE BUENOS AIRES": return 2; break;
					// case "Estado de Mexico": return 2; break;
					// case "Nayarit": return 3; break;
					// case "Hidalgo": return 4; break;
					// case "Ciudad de Mexico": return 5; break;
					// case "Oaxaca": return 6; break;
					// case "Puebla": return 7; break;
					// case "Quintana Roo": return 8; break;
					// case "Sinaloa": return 9; break;
					// case "Tamaulipas": return 10; break;
					// case "Tlaxcala": return 11; break;
					// case "Veracruz": return 12; break;
					// case "Zacatecas": return 13; break;

				}
			}


			},
			templateUrl:"app/templates/general-directive.html"



		}
	}]);
