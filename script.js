
function remove(x) {
		var elem = document.querySelector('#'+x);
	elem.parentNode.removeChild(elem);      
}


let  plus = Array.from(document.querySelectorAll('.fa-plus-circle'))
let  moin = Array.from(document.querySelectorAll('.fa-minus-circle'))
let  qte = document.querySelectorAll('.qtepd')
let  totale=document.getElementById('totalShopping')
let  prix=document.querySelector('.prixx');




for (let a of plus){
    a.addEventListener("click", function(event)
    {
        a.nextElementSibling.innerHTML=parseInt( a.nextElementSibling.innerHTML) +1;
            document.getElementById('totalShopping' ).innerHTML=total();
            
    })
}

for (let a of moin){
    a.addEventListener("click", function(event)
    {
        if(parseInt(a.previousElementSibling.innerHTML)>0){
        a.previousElementSibling.innerHTML=parseInt( a.previousElementSibling.innerHTML) -1;
        totale.innerHTML=total();
        
    }})
}


function total(){
    let  prix=document.getElementsByClassName('prixx');
    let  qte = document.getElementsByClassName('qtepd');
    let sum=0;
   
    for(let i=0; i<prix.length; i++ ){
        sum =  sum + (parseInt(qte[i].innerHTML)* parseInt(prix[i].innerHTML))
        
    }
    return (parseInt(sum))
    
}
Array