
const lightSBtn = document.querySelector("#lightD");
var actualMode = "light";

lightSBtn.addEventListener("click", function() {
    if (actualMode == "light") {
        actualMode = "dark";
        switchLight(actualMode);            
        lightSBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
        lightSBtn.style.animation = "LBtnActivate 550ms linear";
        lightSBtn.style.transform = "translateY(67px)";
    } else {
        actualMode = "light";
        switchLight(actualMode);
        lightSBtn.innerHTML = '<i class="fa-regular fa-sun">';
        lightSBtn.style.animation = "LBtnDeactivate 550ms linear";
        lightSBtn.style.transform = "translateY(0px)";
    }
});


function switchLight(actualMode){

    if (actualMode == "dark") {
            const styleBlock = `body {
                background: #121212!important;
                color: #E7E7E7;
            }

            i,#lBtn {
                color: #121212!important;
            }
            
            div#backBtn {
                background: #333!important;
                border: 3px solid #444!important;
            }
            
            #backBtn:hover {
                background: #444!important;
            }
            
            #langBtn {
                background: #333!important;
                border: 5px solid #444!important;
            }
            
            #lBtn {
                border: 5px solid #444!important;
            }
            
            #mode {
                background: #333!important;
                border: 5px solid #444!important;
            }
            
            #lightD {
                border: 5px solid #444!important;
            }

            input {
                color:white;
            }

            table, tr, td, th {
                border: 1px solid white!important;
                border-collapse: collapse;
            }
            
            #expoBtn, #resuBtn {
              
                box-shadow: 2px 2px 5px rgba(119, 0, 255, 0.473);
            
            }
            
                #expoBtn:hover ,#resuBtn:hover{
                    box-shadow: 4px 4px 10px rgba(119, 0, 255, 0.9);
                }
            
            `;

            const style = document.createElement('style');
            style.setAttribute("id", "styleV2");
            style.innerHTML = styleBlock;
            document.head.appendChild(style);
    } else {
        document.querySelector('style#styleV2').remove();
    }
}
