window.addEventListener("scroll", function(){
    let navbar = document.querySelector("div.navbar");
    navbar.classList.toggle("sticky", window.scrollY > 20);
})

let btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

let teste = 0;
 setInterval(piscar, 400);
 function piscar(){
	if(teste<1){
	  teste++;
	  document.getElementById('piscando').style.opacity = '1';
	} else{
	  teste = 0; 
	  document.getElementById('piscando').style.opacity = '0';
	}};