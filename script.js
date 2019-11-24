
function myFunction(produit) {
		var elem = document.querySelector('#'+produit);
	elem.parentNode.removeChild(elem);      
}
function increm(increm) {	
    var qte=document.getElementsByClassName('qtepd1');
         qte=qte+1;
         console.log(qte);
}
function idecrem(decrem) {	
    var qte=document.getElementsByClassName('qtepd1');
         qte=qte-1;
         console.log(qte);
}

