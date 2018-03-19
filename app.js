// lexical guide

	// xxxxx **************** === chapter
	// !!! === possible ocnfusion
	//-----  === commented out because it is edge case that could be long to search for ( ex : removing a node and we'll look for why this node does not appear)
	// exo : little self exercice

	//--N: Internal note not to show to student but to say orally


	//--N: about this course
	// i will alternate ways to select an element in JS to introducev you to differetn types of ways to access DOM elements and nodes

	//--N: about elements and nodes

	// Element is a dom element, a node can be the simple text node of an element (see below consequences in the list part )

// TEXT AND COLOR ****************

//console.log('eeee');
var test= document.querySelector('p');
test.className="paragraph blue"
test.classList.add('red');
test.classList.remove('blue');
test.style.fontSize="30px";
test.innerHTML="eeee";
test.innerText="testonssssss";
test.textContent="testons encoreeeee"

var parag=document.getElementsByClassName('paragraph')[0];

//console.log('parag= ',parag.classList)

setInterval(function(){
	parag.classList.toggle('red');
	parag.classList.toggle('blue');
},1000)



var demo=document.getElementById('demo');
/*if(demo.textContent){
	demo.textContent="hey";
} else {
	demo.textContent = "hey";
}*/

//console.log(test.classList); // list all style applied
//console.log(test.style); // list all style possible

console.log('form decorator text = ',document.getElementsByClassName('text-form')[0].classList);
document.getElementsByClassName('text-form')[0].classList.add('event-paragr');
document.getElementsByClassName('text-form')[0].classList.add('underline');


console.log('form decorator text = ',document.getElementsByClassName('text-form')[0].classList);
// LIST, children ****************

var listInit=document.getElementsByTagName('ul');
var listEl=document.getElementsByTagName('li');

//console.log('list = ',listInit);
//console.log('listEl = ',listEl);

Array.from(listEl).forEach(function(el,i){
	//console.log(el);
	el.classList.add('listItem');
	el.innerText= i ;
});  // not optimized, better off w/ a for loop performance wise

//var list=document.querySelector('ul');
var list = document.querySelector('ul');

//console.log(list);
//console.log(listInit);


//console.log('list w/ children',list.children);
//console.log('list w/ children node',list.childNodes);
//console.log('list w/ children that r elements',list.elementChildren);

// see also ChildCount, childEl..Count, firstCh..., fistEl..Ch.. [ lastCh... , lastEl...Ch...]

// find the second element, second el will be index 2 as a css slector even though it is index 0 as a HTML collection
var second = document.querySelector('li:nth-child(2)');

//console.log('second = ',second);

var third=second.nextElementSibling;
//console.log('third = ',third);

// !!! second.nextSibling will return a #text node w/ the text of the current li

// idem previousSib... previousEl..Sib...

// exo :remove fourth element 

	//-----list.removeChild(document.querySelector('li:nth-child(4)')); 
		// 3 will disapear from list
		// very intensive usage performance wise



//  La pseudo-classe :nth-child(an+b) permet de cibler un élément qui possède an+b-1 éléments voisins (au même niveau) avant lui dans l'arbre du document pour des valeurs entières n et qui possède un élément parent. Autrement dit, un sélecteur utilisant cette pseudo-classe permettra de cibler les éléments fils d'un élément dont les positions correspondent au motif an+b.

// Illustrons cela avec quelques exemples :
/*
1n+0 ou n ciblera chaque élément fils. n ne cible aucun élément pour le navigateur Android jusqu'à la version 4.3 alors qu'1n fonctionne. 1n est synonyme de 1n+0 et les deux peuvent donc être utilisés de façon équivalente.
2n+0 ou 2n ciblera les éléments fils 2, 4, 6, 8, etc. On pourra utiliser le mot-clé even à la place de cette expression.
2n+1 ciblera les éléments fils 1, 3, 5, 7, etc. On pourra utiliser le mot-clé odd à la place de cette expression.
3n+4 permettra de cibler les éléments fils 4, 7, 10, 13, etc.
0n+3 (ou plus simplement 3) permettra de cibler le troisième élément.
Les valeurs des coefficients a et b doivent être des entiers et l'indice du premier élément fils commence à 1. Autrement dit, cette pseudo-classe permettra de cibler les éléments fils dont l'indice appartient à l'ensemble { an + b; n = 0, 1, 2, ... }.
*/

 // exo :
 	
 	// duplicate node 3, set its text to "new node" and append it to the body
 	// add another copy of node 3 also to the end of the list as ell at the begining 
 	// and in fourth position but comment out that part once suceeded
 	// replace node 3 by a node w/ text "three"

var newNodeCounter=0;

var Node = function (index,newText){
	this.index = index;
	this.instance = document.querySelector('li:nth-child(3)').cloneNode(true); // no children copied if false (thus it won't copy the text node associated to the li)
	this.instance.innerHTML = newText === undefined ? "dynamically added node"+this.index : newText;
	newNodeCounter += 1;
};

var newNode1  = new Node(null,"dynamically added node to the end of the body");
var newNode2  = new Node(newNodeCounter+1);
var newNode3  = new Node(newNodeCounter+1);
var newNode4  = new Node(newNodeCounter+1);
var newNode5  = new Node(null,"three");

 //console.log('newNode1 = ',newNode1.instance);

 document.body.appendChild(newNode1.instance);
 document.querySelector('ul').appendChild(newNode3.instance);

 document.querySelector('ul').insertBefore(newNode2.instance,document.querySelector('li'));

 // document.querySelector('ul').insertBefore(newNode4.instance ,document.querySelector('li:nth-child(4)').nextSibling);

 document.querySelector('ul').replaceChild(newNode5.instance,document.querySelector('li:nth-child(5)'));


// EVENTS ****************

var paragUnderlined = false;

var eventParagr = document.querySelector(".event-paragr")


function changeParagClassesClick() {
	// toggle class
	eventParagr.classList.toggle('red');
	// add underline conditonnally
	paragUnderlined === true ?  null : eventParagr.classList.add('underline');
	paragUnderlined = true;
}

function clickActivate (e) {
	//console.log('parag clicked');
	e.cancelBubble =true; // set it to false and it will bubble to event-Paragr when clicked // alternative : stopPropagation Method, which is cleaner
	e.preventDefault();
	console.log('link clicked');
	eventParagr.addEventListener('click',changeParagClassesClick);
}


document.getElementsByTagName('a')[0].addEventListener('click',clickActivate);

		//console.log(e);
		//console.log("target = ",e.target); // Element where the event originaly fired
		//console.log("currentTarget = ",e.currentTarget); // current element where the event is bubbling up
	

function clickCancel(e){
	e.stopPropagation();
	e.preventDefault();
	eventParagr.removeEventListener('click',changeParagClassesClick);
	console.log('cancel clicked');
}

document.querySelector('.cancel-toggle-parag').addEventListener('click', clickCancel )





//--N:if logging an event , then currenttarget has probably bubbled up and is now null, to show it put a debugger statetment in the code


// INPUT EVENTS ****************

var inputField = document.getElementsByTagName('input')[0];
//console.log('input field = ',inputField);

inputField.addEventListener('change',function(e) {
	console.log('input field in cb = ',e.target.value);
})

var inputFieldOtherSelector = document.querySelector('#a');
//console.log('inputFieldOtherSelector = ',inputFieldOtherSelector);

//--N : in real life always use the same var to refer to the same target element

//--N : keyup will not allow prevent default but keydown, do the test to comment out the listener on keyup

inputField.addEventListener('keyup',function(e){
	//console.log('target just pressed = ',e.key)// !!! when the user strike a combination of keys to make a char (i.e : %) , both keys are returned by key, thus use fromCharCode()
	//console.log('target event = ',e) 
	//console.log(String.fromCharCode(e.keyCode));

	var letter = String.fromCharCode(e.keyCode);

	if (letter !== 'A') {
		console.log('different letter');
		e.preventDefault();	  // this will even dissalow you to erase anythin in the field.
	}
})


inputField.addEventListener('keydown',function(e){
	//console.log('target just pressed = ',e.key)// !!! when the user strike a combination of keys to make a char (i.e : %) , both keys are returned by key, thus use fromCharCode()
	//console.log('target event = ',e) 
	//console.log(String.fromCharCode(e.keyCode));

	var letter = String.fromCharCode(e.keyCode);

	if (letter !== 'A') {
		console.log('different letter');
		e.preventDefault();	  
	}
})
// --N : review event propagation

//if no stop propagation is set to on target element, again this cb will be called , thus 2 events will be fired for the same event type : keyup



/*

document.addEventListener('keyup',function(e){
	e.stopPropagation();
	console.log('just pressed = ',e)
})

*/

var submitForm = document.querySelector('#b');
console.log('submitForm = ',submitForm);
console.log('submit form with getElById',document.getElementById('b'));
var zipCode = document.querySelector('#zip-code');
console.log('zipcode = ',zipCode);

// SELECT OPTION

var selectAge=document.querySelector('#age');
	console.log('selectAge = ',selectAge);


//-- N : make no default selection

document.getElementById("age").selectedIndex = -1; // in JS

/*
//in HTML

<select>
    <option disabled selected value> -- select an option -- </option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
*/


//in CSS
//$("#age").prop("selectedIndex", -1);

submitForm.addEventListener('submit',function(e){
	var showConfirmation = true;
	//console.log('form submission');
	var zipCodeSubmited = zipCode.value;
	//console.log('text submited = ',zipCodeSubmited);
	//console.log(zipCodeSubmited.match(/^([0-9]{5})$/) != null); 

	// --N:
	// do not use the * flag here as it would match the absence of any number as well
	// you have to capture the expression inside () for the match to work exactly as we want, i.e we re working w/ french zipcode that are always 5 digits long

	if ( (zipCodeSubmited.match(/^([0-9]{5})$/) != null) === false ) { // exo: ask to refactor simplifying this test to assert students comprehension of what the regEx is doing and practice logical thinking => expected answer = if ( (zipCodeSubmited.match(/^([0-9]{5})$/) === null ) ) {


		alert('please enter a valid french code only containing 5 numbers without any spaces i.e : 75011')
		e.preventDefault();
		showConfirmation = false;
	}

	var checkBox=document.querySelector('#checkBox');//--N: ('input[id="checkBox"]'); does a double check but most likely unecessary check , in this case we ll prefer performance over 120% secure check

	if ( checkBox.checked === false ) {
		alert('please accept ... before validating your order'); 
		e.preventDefault();
		showConfirmation = false;
	}

	//console.log("checkBox = ",checkBox.checked);

  if (document.getElementById("age").selectedIndex === -1) { // prevent default selection to throw on submission

  	e.preventDefault();
		alert("please select your age")
		showConfirmation = false;
		// !!! do not declare those var before submission unless you want them to always have the default values
  } else  {

  	var userValue = selectAge.options[selectAge.selectedIndex].value; 
  	// --N : 
  		// other options selectedOption[0].value

  	var userText = selectAge.options[selectAge.selectedIndex].text;

  	console.log('userValue = ',userValue);
	  console.log('userText = ',userText);

  	if ( userValue !== "+12" ) {
  		e.preventDefault();
			alert("you are too young to enter this site")
			showConfirmation = false;
  	}
	}

	// display confirmation
	showConfirmation === true ? alert('Woooo, it worked, in a normal site you should get a confirmation message within the page') : null;
})


document.addEventListener('DOMContentLoaded',function(e){
	console.log('we are runningggggggggggggggggggggggggggggggggggg '); // --N: use this to safely add actions when you are sure all loading has been done. in real life you wouldn't use that in everything especially on low connection or mobiles phones because it would 
})


