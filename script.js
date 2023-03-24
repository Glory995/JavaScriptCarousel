(function (){
    "use strict";

     const myImages=[ "download1.jfif","download2.jfif", "download3.jfif", "download4.jfif", "download5.jfif", "download6.jfif"];

    let currentImage=0;

    const next= document.getElementById("next");

    const previous= document.getElementById("previous");

    next.addEventListener('click',nextPhoto);

    

    previous.addEventListener('click',previousPhoto);

    function nextPhoto(){
        
        currentImage++
        if(currentImage >5){ currentImage=0; };
        console.log(currentImage);
        
        
        document.getElementById("images").src= myImages[currentImage]
        
    }

    //comiting changes

    function previousPhoto(){

         currentImage= currentImage -1;
         if(currentImage < 0){ currentImage=5; };
         console.log(currentImage); 
         document.getElementById("images").src= myImages[currentImage]

    }

})();