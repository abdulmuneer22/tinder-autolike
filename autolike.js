// parameters
var sleep = 250;

// main block
var run = setInterval(function(){
    var span = document.getElementsByTagName("span");
	
var base = Math.round(Math.random() * 1000)
var likeElement = document.querySelector('[aria-label="Like"]');
var unlikeElement = document.querySelector('[aria-label="Nope"]');

if(base % 2 === 0) {
setTimeout(function(){
likeElement.click()
},2000)

}else{
	
setTimeout(function(){
	unlikeElement.click()
},2000)

}
    
}, sleep);
