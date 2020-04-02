//access the JSON file
let requestURL = 'https://kuanwen-liu.github.io/lab-four/products.json';

fetch(requestURL)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
    let strangeProducts = data.strangeProducts;
    let main = document.querySelector('main');

    for(let i = 0; i < strangeProducts.length; i++) {
      //build HTML elements
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p = document.createElement('p');
      let ul = document.createElement('ul');

      div.classList.add("divStyle");

      img.setAttribute('src', 'https://kuanwen-liu.github.io/lab-four/img/' + strangeProducts[i].image);
      img.setAttribute('alt', strangeProducts[i].image);
      h2.textContent = strangeProducts[i].name;
      p.textContent = 'Price ' + strangeProducts[i].price;
      let details = strangeProducts[i].details;
      for(let j = 0; j < details.length; j++) {
        let li = document.createElement('li');
        li.textContent = details[j];
        ul.appendChild(li);
      }

      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(ul);
      main.appendChild(div);
    }

  });
