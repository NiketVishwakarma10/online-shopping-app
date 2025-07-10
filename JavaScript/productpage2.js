var furnitureData = [

  {
    id: "product31",
    rating : "./images/4.1.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/03734d7463d2eab8b86443d490abf0a5fa866cf6/NNV-14%22-3500-lbs-Heavy-Duty-California-Bed-Frame%2C-Duty-Steel-Slat-Metal-Bed-Frame.jpg?imwidth=480&impolicy=medium",
       
       price : 4957.51,
 
       name: "mDesign Wide Dresser Storage Tower Organizer Unit, 5 Drawers",
     
       
     },
     {
      id: "product32",
      rating : "./images/4.6.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/9fb70a27d1a1e067f65a6f2ef2e0bfb98e0e525d/CraftPorch-2-Piece-Bedroom-Set-in-Luxurious-Velvet-Wingback-Panel.jpg?imwidth=480&impolicy=medium",
       
       price : 25498.04,
 
       name: "CraftPorch 2 Piece Bedroom Bench Set Velvet Wingback Upholstered Bed",
     
       
     },
     {
      id: "product33",
      rating : "./images/4.1.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/03734d7463d2eab8b86443d490abf0a5fa866cf6/NNV-14%22-3500-lbs-Heavy-Duty-California-Bed-Frame%2C-Duty-Steel-Slat-Metal-Bed-Frame.jpg?imwidth=480&impolicy=medium",
       
       price : 10831.22,
 
       name: "NNV 14 3500 lbs Heavy Duty Bed Frame, Duty Steel Slat Metal Bed Frame",
     
       
     },
     {
      id: "product34",
      rating : "./images/4.1.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/8893cb3d1b07d9308d652245df0eb679a7c68e48/Brookside-Kaylee-Adjustable-Upholstered-Headboard.jpg?imwidth=480&impolicy=medium",
       
       price : 7486.27 ,
 
       name: "Brookside Kaylee Adjustable Upholstered Headboard",
     
       
     },
     {
      id: "product35",
      rating : "./images/4.6.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/21d1fd6ad625bf8131c66bc90b8eaa3f87bb863f/Mid-Century-1-Drawer-Nightstand.jpg?imwidth=480&impolicy=medium",
       
       price : 16659.64 ,
 
       name: "Middlebrook Mid-Century Solid Wood 1-Drawer, 1 Shelf Nightstand",
     
       
     },
     {
      id: "product36",
      rating : "./images/4.6.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/2ebad0a4e7d94b6acf2bee922879c8f1ec5bda9d/Middlebrook-Gammelstaden-Mid-Century-Solid-Wood-6-Drawer-Dresser.jpg?imwidth=480&impolicy=medium",
       
       price : 28620.30 ,
 
       name: "Middlebrook Gammelstaden Mid-Century Solid Wood 6-Drawer Dresser",
     
       
     },
     {
      id: "product37",
      rating : "./images/4.4.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/cc7ff416cdefa87f42de64e9d11a422cca4c1457/Nathan-James-Harlow-Wall-Mount-Upholstered-Headboard-with-Metal-Rail.jpg?imwidth=480&impolicy=medium",
       
       price : 9667.80 ,
 
       name: "Nathan James Harlow Wall Mount Upholstered Headboard with Metal Rail",
     
       
     },
     {
      id: "product38",
      rating : "./images/4.6.PNG",
       image_url:
       "https://ak1.ostkcdn.com/images/products/is/images/direct/1bdf1f904f3597aefee82cea29579f1d12cd9e40/100%25-Solid-Wood-Kyle-4-Door-Wardrobe%2C-White.jpg?imwidth=480&impolicy=medium",
       
       price : 95810.84,
 
       name: "Palace Imports 100% Solid Wood Kyle 4-Door Wardrobe Armoire with Raised Panel or Mirrored Doors",
     
       
     },
       
     ];
   
     displayProducts();

     function sortdata(){
       var select=document.getElementById("sort-data").value;
       if(select==="lth"){
         furnitureData=furnitureData.sort(function(a,b){
           return a.price-b.price;
         })
       }
       if(select==="htl"){
         furnitureData=furnitureData.sort(function(a,b){
           return b.price-a.price;
         })
       }
       if(select==="reset"){
         window.location.reload();
       }
       displayProducts(furnitureData);
     }
     
   
   function displayProducts() {
     document.querySelector("#furData").textContent=""
     furnitureData.map(function(elem,ind) {
       var div = document.createElement("div");
       div.setAttribute("id","divofproducticon")
       var image = document.createElement("img");
       image.setAttribute("src", elem.image_url);
       image.setAttribute("alt", elem.name);
       image.addEventListener("click",function(){
         addToCart(elem);
       })
       var priceBox = document.createElement("div");
       var rating = document.createElement("img");
       rating.setAttribute("class","ratingimg");
       rating.setAttribute("src", elem.rating);
       var finalPrice = document.createElement("h3");
       
       finalPrice.textContent = "Sale Starts at INR " + elem.price;
       finalPrice.setAttribute("class","ratesection");
       var name = document.createElement("p");
       name.setAttribute("class","nameofproducts");
       name.textContent = elem.name;
   
       priceBox.append(finalPrice);
       div.append(image, priceBox,rating, name);
       document.querySelector("#furData").append(div);
       div.append(image, priceBox,rating, name);
       document.querySelector("#furData").append(div);
   
       image.addEventListener("click", function() {
         window.location.href = "productdetails.html?id=" + elem.id;
       });
       
       name.addEventListener("click", function() {
         window.location.href = "productdetails.html?id=" + elem.id;
       });
     });
   }
   
   // var productproductdetaisobjectdetaisobject = localStorage.getItem("productdetaisobject");
   // function addToCart(elem) {
   //   var productdetaisobject = elem;
   //   console.log(productdetaisobject);
   //   localStorage.setItem("productdetaisobject", JSON.stringify( productdetaisobject)); 
   //   window.location.href = "productdetails.html";
   // }
   
   var cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
   
   function addToCart(elem){
     cartArr.push(elem);
     localStorage.setItem("cartArr",JSON.stringify(cartArr));
   }