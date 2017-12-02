function calculate(prices) {
var name = "Amsterdam";
var average=0;
	for(var i = 0; i < prices.length ; i++) {
 	average = average + prices[i];
		}

	average = average / prices.length;
 	
 	return average;
		}

var x = calculate([1500, 500, 1800, 700]);
var y = calculate([2500, 1500, 1000, 900]);
document.getElementById("average-Amsterdam").innerHTML = x;
document.getElementById("average-London").innerHTML = y;



function name(cities) {
	return cities;
		}

document.getElementById("name-amsterdam").innerHTML = name('Amsterdam');
document.getElementById("name-london").innerHTML = name('London');


function diffrance(x,y) {
	z = y - x ;
	return z;
		}

document.getElementById("diffrance").innerHTML = diffrance(x,y) + " €";
