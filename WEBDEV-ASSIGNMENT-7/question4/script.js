document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("productList");
  
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const productCard = createProductCard(product);
          productList.appendChild(productCard);
        });
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  
    function createProductCard(product) {
      const card = document.createElement("div");
      card.className = "product-card";

      const image = document.createElement("img")
      image.src = product.image
  
      const title = document.createElement("h3");
      title.textContent = product.title;
  
      const description = document.createElement("p");
      description.textContent = `price is ${product.price}`;
  
      const button = document.createElement("button");
      button.textContent = "Add to Cart";
  
        card.appendChild(image)
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(button);
  
      return card;
    }
  });



