function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

function changeColor(){
    var paragraph = document.getElementById("color-description");
    var link = document.getElementById("color-link"); 
    var spanColor1 = document.getElementById("color1");
    var spanColor2 = document.getElementById("color2");  

    var changes = new Array(paragraph, spanColor1, spanColor2); 

    document.querySelector(".change-color").addEventListener('click', () =>{
        document.body.style.transitionDelay = "2s"; 
        document.body.classList.toggle('dark');

        //change pantone link & the titles of the spans 
        if (document.body.classList == 'dark'){
            link.setAttribute('href', 'https://www.pantone.com/color-of-the-year-2021');
            spanColor1.title = '#F5DF4D';
            spanColor2.title = '#939597'; 
        } else {
            link.setAttribute('href', 'https://www.pantone.com/articles/color-of-the-year/color-of-the-year-2016');
            spanColor1.title = '#F7CACA'; 
            spanColor2.title = '#B3CEE5'; 
        }
        
        //change text in color title & description 
        for (i = 0; i < changes.length; i++){
            ob = changes[i]; 
            if (ob.getAttribute("data-text-swap") == ob.innerHTML) {
                ob.innerHTML = ob.getAttribute("data-text-original");
            } else {
                ob.setAttribute("data-text-original", ob.innerHTML);
                ob.innerHTML = ob.getAttribute("data-text-swap");
            }
        }


    })
}

navSlide();
changeColor();
