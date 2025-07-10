document.getElementById("logoclick").addEventListener("click",gothrough);

function gothrough(){
  // console.log("Hiiii");
  window.location.href = "index.html";
}

var loginarr = JSON.parse(localStorage.getItem("users")) || "";
      if (loginarr.length >= 1){
        
        div1.append(img);
        btn.append(div1,div2);
        document.getElementById("navbarstart").append(btn);
      }

      var cartC = JSON.parse(localStorage.getItem("cartArr")) || [];

      // var cart2C = JSON.parse(localStorage.getItem("cartArr1")) || [];

    //  var totalIC = cartC.length + cart2C.length;
    //   var cartValC = cartVal1C + cartVal2C ;
    //   console.log(cartValC);

      document.querySelector("#cartCount").textContent = cartC.length;