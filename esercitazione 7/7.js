// che senso ha fare una funziona che funziona che non è generica??
// non sarebbe piu bello fare una funzione normale dove gli passi i paramentri
// e la funzione li elabora e basta restituendo l' output?
function converti(x){
	a=document.getElementById("testo").value;
	
	window.alert(" avevi scritto "+a.toLowerCase());
}

function colore(){
	a=document.f.frt.value;
	//window.alert(" e' il primo passo "+a);
	
	if (a == "bianco") {
		
  }
  if (a == "rosso") {
	  //come farlo con css.styleSheets.backgroundColor: red;
    document.body.bgColor="red";
  }
  if (a == "giallo") {
    
  }
  if (a == "bianco") {
    
  }
}

function scegli(){
	a=document.f.colore.value;
	window.alert(" avevi scritto "+a);
	
	document.body.bgColor=a;
}

function somma(){
	
	document.f.smma.value=parseInt(document.f.primo.value)+parseInt(document.f.secondo.value);
	

}

function natale(){
    b=document.f.data.valueAsDate.getFullYear();
    c=new Date( );
    c.setDate(25);
    c.setMonth(11);
    c.setFullYear(b);
    document.f.giorno.value=c.getDay();
}
	
	//domande:
	//1) e meglio fare un foglio solo con le cose di js, o se le scrivo direttamente nel foglio gtml va bene uguale
	    // per la "buona programmazione"?
	// 2)nelle funzioni che scrivo vado a chiamarmi direttamente gli elemnti che uso (es: a=document.f.frt.value;) esiste un modo
	// per avere delle funzioni "generali" a cui passo semplicente il paramentro?
	//
	// 3)il metodo colore() va bene o sarebbe meglio usare tipo CSS_property, e perche questo non mi funziona?
    // 4)perche scegli() non mi legge il valore di 'a'?
	//5) come faccio a scrivere sulla pagina e non con i pop-up?
	
