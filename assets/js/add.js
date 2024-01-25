

  const url = 'https://fakestoreapi.com/products';

  let main = document.querySelector('main.row');
  let firstBtn = document.getElementById('firstBtn');
  let secondBtn = document.getElementById('secondBtn');
  
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
    data.sort((a, b) => (order === 'asc') ? a.price - b.price : b.price - a.price);
    updateCards();
}

function resetOrder() {
    data = [...originalData];
    updateCards();
}

firstBtn.addEventListener('click', () => sortByPrice('asc'));
secondBtn.addEventListener('click', () => sortByPrice('desc'));
lastBtn.addEventListener('click', resetOrder);

updateCards();
  
  
