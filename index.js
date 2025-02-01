 const toggle = document.getElementById("toggle");

 toggle.addEventListener("change", function() {
     
     document.querySelector(".basic-price").textContent = toggle.checked ? "19.99" : "199.99";
     document.querySelector(".professional-price").textContent = toggle.checked ? "24.99" : "249.99";
     document.querySelector(".master-price").textContent = toggle.checked ? "39.99" : "399.99";
 });

