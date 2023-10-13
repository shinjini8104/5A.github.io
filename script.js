document.addEventListener("DOMContentLoaded",function(){
    const productsList=document.getElementById("productsList");

    const products=[
        {name:"IPhone",price:"$2,000",image:"1.jpg"},
        {name:"IPad",price:"$4,000",image:"2.jpg"},
        {name:"MacBook",price:"$3,000",image:"3.jpg"},
        {name:"IWatch",price:"$500",image:"4.jpg"},
        {name:"AirPod",price:"$400",image:"5.png"},
        {name:"HeadPhone",price:"$350",image:"6.png"},
    ];
    products.forEach((product)=>{
        const productElement=document.createElement("div");
        productElement.className="product";

        const imageElement=document.createElement("img");
        imageElement.src=product.image;
        imageElement.alt=product.name;

         
imageElement.style.width = "200px";
imageElement.style.height = "170px";

        const nameElement=document.createElement("h3");
        nameElement.textContent=product.name;

        const priceElement=document.createElement("p");
        priceElement.textContent=product.price;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        productsList.appendChild(productElement);
    });
        const scrollToProductsLink=document.getElementById("scrollToProducts");
        const featuredProducts=document.getElementById("featuredProducts");

        scrollToProductsLink.addEventListener("click",function(event){
            event.preventDefault();
            featuredProducts.scrollIntoView({behavior:"smooth"});
        });
 });