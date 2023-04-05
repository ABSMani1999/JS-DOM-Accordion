var h2=document.getElementsByTagName('h2');

for(let i=0; i<=h2.length; i++){
	h2[i].addEventListener('click', function(e){
		let targetElement=e.target;
		let parentDiv=targetElement.parentNode;
		let pElement=parentDiv.getElementsByTagName('p');
		
		let result=pElement[0];
	result.classList.toggle('content');
	});
}
