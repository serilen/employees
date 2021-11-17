;(function(){
	"use strict";

	async function getResponse(){
		let response = await fetch('../data/employees.json');
		let content = await response.json();
		let listEmployee = document.querySelector('employeeList');
		
		let key;
		for (key in content) {
			
			console.log(content[key].name);
		}
	}
getResponse();
	

})();