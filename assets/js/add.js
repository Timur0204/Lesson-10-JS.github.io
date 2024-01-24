

  const url = 'https://fakestoreapi.com/products';

  let main = document.querySelector('main.row');
  let firstInput = document.getElementById('firstInput');
  let secondInput = document.getElementById('secondInput');
  
  let data = await fetch (url);
  data = await data.json();
  let originalData = [...data];
  
  function updateCards() {
    main.innerHTML = data.map(stuff => `
        <div class="p-2">
            <div style="height: 100%" class="card">
                <img style="height: 100%; width: 100%; background-size: cover;" src="${stuff.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${stuff.title}</h5>
                    <p class="card-text">${stuff.description}</p>
                    <p class="card-price">${stuff.price}$</p>
                </div>
            </div>
        </div>
    `).join('');
  }
  
  function sortByPrice(order) {
      data.sort((a, b) => {
          if (order === 'asc') {
              return a.price - b.price;
          } else {
              return b.price - a.price;
          }
      });
      updateCards();
  }
  
  firstInput.addEventListener('change', function () {
      if (this.checked) {
          sortByPrice('asc');
      } else {
          data = [...originalData];
          updateCards();
      }
  });
  
  secondInput.addEventListener('change', function () {
      if (this.checked) {
          sortByPrice('desc');
      } else {
          data = [...originalData];
          updateCards();
      }
  });
  
  updateCards();
  
  
