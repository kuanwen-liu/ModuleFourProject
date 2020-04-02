//access the JSON file
let requestURL = 'https://kuanwen-liu.github.io/ModuleFourProject/products.json';

//fetch the resource located at URL (json file)
fetch(requestURL)
    // response returned from the network
    .then(function(resp) {
        //return the response as structured JSON data
        return resp.json();
    })
    // this function is to handle the json data
    .then(function(json) {
        console.log(json);

        // assign strangeProducts array
        let strangeProducts = json.strangeProducts;
        //get main element
        let main = document.querySelector('main');

        // for loop to check how many array
        for (let i = 0; i < strangeProducts.length; i++) {
            //build HTML elements
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p = document.createElement('p');
            let ul = document.createElement('ul');
            // add a class(css)
            div.classList.add("divStyle");
            // set image src
            img.setAttribute('src', 'https://kuanwen-liu.github.io/ModuleFourProject/img/' + strangeProducts[i].image);
            // set image alternative information
            img.setAttribute('alt', strangeProducts[i].image);
            // display the data
            h2.textContent = strangeProducts[i].name;
            p.textContent = 'Price ' + strangeProducts[i].price;
            let details = strangeProducts[i].details;
            
            // for loop to check how many array
            for (let j = 0; j < details.length; j++) {
                let li = document.createElement('li');
                li.textContent = details[j];
                ul.appendChild(li);
            }

            // append
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(ul);
            main.appendChild(div);
        }
    });
