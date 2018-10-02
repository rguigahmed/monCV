function showDetails(x){
	
        var divid=document.getElementById(x);            	
		var visibles = document.getElementsByClassName("p1");

		[].forEach.call(visibles, function (i) {i.classList.remove("p1");
			if(i!==divid)
			i.style.display="none";			
});		

		if(divid.style.display == 'none'){
		divid.classList.add("p1");
		divid.style.display='inline';}
		else{

		divid.style.display='none';
		}

}

var tooltipsHTML = document.getElementsByClassName("tooltip");
var tooltips = [];
var tooltiptextsHTML = document.getElementsByClassName("tooltiptext");
var tooltiptexts = [];

for (var i = 0; i < tooltipsHTML.length; i++) {
  tooltips = [...tooltips, tooltipsHTML.item(i)];
  tooltiptexts = [...tooltiptexts, tooltiptextsHTML.item(i)];
}

tooltips.forEach(function(tooltip) {
  tooltip.onmousemove = function(event) {
    var rect = tooltip.getBoundingClientRect();
    var x = event.clientX - rect.x;
    tooltiptexts.forEach(function(tooltiptext) {
      tooltiptext.style.left = x + "px";
    });
  };
});


function SizeProgress(multiple) {
	var divid=document.getElementById(multiple);
	var list = document.getElementsByClassName("p1");
	[].forEach.call(list, function (i) {i.classList.remove("p1");
	if(i!==divid)
	i.style.display="none";
	});
	if(divid.style.display == 'none'){
	divid.classList.add("p1");
	divid.style.display='inline';
	}
	else{
	divid.style.display='none';
	}	
	var myAwesomeVar = 2;
	//let timerId = setInterval(function (){var liste = document.getElementsByClassName("p2");liste[0].style.fontSize= myAwesomeVar++ + "px";}, 50);

	//let timerId = setInterval(function (){[].forEach.call(list, function (i) {i.style.fontSize= myAwesomeVar + "px";myAwesomeVar++;})}, 150);

	let timerId = setInterval(function (){var i=0;list[i].style.fontSize= myAwesomeVar++ + "px";i++;}, 70);
	// after 2 seconds stop
	setTimeout(() => { clearInterval(timerId);}, 1000);
}
var levels = {
  PHP : 4,
  XML :5,
  JAVAEE :4,
  JAVASE :4,
     HTML :4,
     Symfony :3,
    C :5
    
};

for (field in levels) {
  var stars = document.getElementsByClassName(field).item(0);
  var children = stars.children;
  for (var i = 0; i < levels[field]; i++) {
    var star = children.item(i);
    star.className = "fa fa-star";
  }
}
