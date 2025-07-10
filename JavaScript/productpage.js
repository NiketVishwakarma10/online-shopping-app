var furnitureData = [

   
  {  
    id: "product1",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/eb3fbf0627b5ba8a73db004039ac20d24fdfa484/Carbon-Loft-Kenyon-Round-Metal-Wrap-Side-Table.jpg?imwidth=480&impolicy=medium",
    rating : "./images/3.5.PNG",
    price : 8869.73,

    name: "Middlebrook Barnett Round Metal Wrap Side Table",
  
    
  },
  {
    id: "product2",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/6b99f856c492903a7a531a32f6969018131c1297/Mcombo-Electric-Power%C2%A0Recliner-with-Massage-%26-Heat%2C-Extended-Footrest%2C-2-USB-Ports%2C-Side-Pockets%2C-Cup-Holders%2C-Plush-Fabric-8015.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.6.PNG",
    price : 57032.61,
    name: "Mcombo Electric Power Recliner with Massage & Heat, Extended Footrest, 2 USB Ports, Side Pockets, Cup Holders, Plush Fabric 8015",
  
    
  },
  {
    id: "product3",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/103aa27e87275cc2213c2e9673dbf35825a79b9c/The-Gray-Barn-End-Table-with-Storage.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.4.PNG",
    price : 14482.50,
    name: "End Table with Storage",
  
    
  },
  {
    id: "product4",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/9dd4ae7d60e7b7c14621eca2e953e4a4c129c9c6/Avelina-Nailhead-Trim-Comfy-Accent-Armchair-with-Rolled-Arms.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.8.PNG",
    price : 20998.31,
    name: "Avelina Nailhead Trim Comfy Accent Armchair with Rolled Arms",
  
    
  },
  {
    id: "product5",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/09b786c3dcc47edf8b7843843e3d9dc54d335e6f/Copper-Grove-Perreux-Linen-Reversible-Sleeper-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.2.PNG",
    price : 53606.50,
    name: "Copper Grove Perreux Linen Reversible Sleeper Sectional Sofa",
  
    
  },
  {
    id: "product6",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/788603aada5008e5ee1a287d45eed8a6be1cbea1/Boho-Floor-Mattress%2C-Japanese-Style-Futon-Mattress-Camping-Mattress.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.4.PNG",
    price : 8729.72,
    name: "Boho Floor Mattress, Japanese Style Futon Mattress Camping Mattress",
  
    
  },
  {
    id: "product7",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/b478d4647e57d5cb750514f49ef0acc042a1698f/70-in-TV-Stand-for-TVs-up-to-80%22.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.8.PNG",
    price : 21065.03,
    name: "70-inch Extra-Wide Rustic TV Stand for TVs up to 80 inches",
  
    
  },
  {
    id: "product8",
    image_url:
    "https://ak1.ostkcdn.com/images/products/is/images/direct/a8305b1a6fda644e0ef5fb7c057d32bc305a24fc/12.5%22-Round-Tray-Style-Metal-Martini-Table.jpg?imwidth=480&impolicy=medium",
    rating : "./images/4.6.PNG",
    price : 5487.79,
    name: "12.5 Round Tray-Style Metal Martini Table",
  
    
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
      div.append(image, priceBox, rating,name);
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
  
  var productproductdetaisobjectdetaisobject = localStorage.getItem("productdetaisobject");
  function addToCart(elem) {
    var productdetaisobject = elem;
    console.log(productdetaisobject); 
    window.location.href = "productdetails.html";
  }
  
  var cartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  
  function addToCart(elem){
    cartArr.push(elem);
    localStorage.setItem("cartArr",JSON.stringify(cartArr));
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  