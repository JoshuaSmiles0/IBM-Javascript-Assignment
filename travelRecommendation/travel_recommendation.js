
let d

fetch('travel_recommendation_api.json')
.then(response => response.json())
          .then(data => {
            d = data
          })


function clear() {
    box.innerHTML = '';
}

document.getElementById('clearbutton').addEventListener('click',clear);



function find() {
    const input = document.getElementById('search').value.toLowerCase();
    const box = document.getElementById("returns");
    box.innerHTML = "";
    console.log(input);
            if (input == "beaches") {
                const beaches = d.beaches;
                for(const beache of beaches) {
                    const title = document.createElement("h1")
                    title.innerHTML = `${beache.name}`
                    const image = document.createElement("img")
                    image.src = `${beache.imageUrl}`
                    image.alt = "this should be a beach"
                    image.style.height="100px"
                    image.style.width="100px"
                    const description = document.createElement("p")
                    description.innerHTML = `${beache.description}`
                    const bre = document.createElement("br")
                    box.appendChild(title)
                    box.appendChild(image)
                    box.appendChild(description)
                    box.appendChild(bre)
                }
            }
            else if (input == "temple"){
                const temples = d.temples;
                for(const temple of temples) {
                    box.innerHTML = `<section class="card">
                    <h1> ${temple.name} </h1>
                    <img src="${temple.imageUrl}>
                    <p> ${temple.description} </p>
                    </section` 
                }
            }
            else if (input == "australia" ) {
                const australia = d.countries[0].cities;
                for(const australias of australia) {
                    box.innerHTML = `<h1> ${australias.name} </h1>`
                    box.innerHTML += `<img href="${australias.imageUrl}>`
                    box.innerHTML += `<p> ${australias.description} </p>`
                    box.innerHTML += `<br>`
                }
            }
            else if (input == "japan") {
               const japan = d.countries[1].cities;
                for(const japans of japan) {
                    box.innerHTML =
                    `<h1> ${japans.name} </h1>
                    <img href="${japans.imageUrl}>
                    <p> ${japans.description} </p>
                    </section` 
                }
            }
            else if (input == "brazil") {
                const brazil = d.countries[2].cities;
                for(const brazils of brazil) {
                    box.innerHTML = `<section class="card">
                    <h1> ${brazils.name} </h1>
                    <img src="${brazils.imageUrl}>
                    <p> ${brazils.description} </p>
                    </section` 
                }
            }
            else {
                box.innerHTML = `<section class="card">
                <h1> unable to find what you're looking for </h1>
                </section>`
            }
}



document.getElementById('searchbutton').addEventListener('click', find);