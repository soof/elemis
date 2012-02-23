// JavaScript Document
function fizzbuzz(){
	var output = '';
	for (var i=0; i < 100; i++) {
		if ( (i%3 ) == 0) {	fizz = true;} else {fizz = false}
		if ( (i%5 ) == 0){ buzz=true;} else {buzz = false}
		
		if (fizz && buzz) {output += ' fizzbuzz '} 
		else if (fizz) {output += ' fizz  ' }
		else if (buzz) {output += ' buzz ' }
		else {output +=  i + ' '};
	}
	newElement = document.createElement('p');
	newElement.innerHTML = output;
	document.getElementById('outputDiv').innerHTML = output;
	
}

fizzbuzz();