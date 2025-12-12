
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
                    image.style.height="400px"
                    image.style.width="400px"
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
                    const title = document.createElement("h1")
                    title.innerHTML = `${temple.name}`
                    const image = document.createElement("img")
                    image.src = `${temple.imageUrl}`
                    image.alt = "this should be a temple"
                    image.style.height="400px"
                    image.style.width="400px"
                    const description = document.createElement("p")
                    description.innerHTML = `${temple.description}`
                    const bre = document.createElement("br")
                    box.appendChild(title)
                    box.appendChild(image)
                    box.appendChild(description)
                    box.appendChild(bre)
                }
            }
            else if (input == "australia" ) {
                const australia = d.countries[0].cities;
                for(const australias of australia) {
                    const title = document.createElement("h1")
                    title.innerHTML = `${australias.name}`
                    const image = document.createElement("img")
                    image.src = `${australias.imageUrl}`
                    image.alt = "this should be a australia"
                    image.style.height="400px"
                    image.style.width="400px"
                    const description = document.createElement("p")
                    description.innerHTML = `${australias.description}`
                    const bre = document.createElement("br")
                    box.appendChild(title)
                    box.appendChild(image)
                    box.appendChild(description)
                    box.appendChild(bre)
                }
            }
            else if (input == "japan") {
               const japan = d.countries[1].cities;
                for(const japans of japan) {
                    const title = document.createElement("h1")
                    title.innerHTML = `${japans.name}`
                    const image = document.createElement("img")
                    image.src = `${japans.imageUrl}`
                    image.alt = "this should be a japan"
                    image.style.height="400px"
                    image.style.width="400px"
                    const description = document.createElement("p")
                    description.innerHTML = `${japans.description}`
                    const bre = document.createElement("br")
                    box.appendChild(title)
                    box.appendChild(image)
                    box.appendChild(description)
                    box.appendChild(bre)
                }
            }
            else if (input == "brazil") {
                const brazil = d.countries[2].cities;
                for(const brazils of brazil) {
                    const title = document.createElement("h1")
                    title.innerHTML = `${brazils.name}`
                    const image = document.createElement("img")
                    image.src = `${brazils.imageUrl}`
                    image.alt = "this should be a brazil"
                    image.style.height="400px"
                    image.style.width="400px"
                    const description = document.createElement("p")
                    description.innerHTML = `${brazils.description}`
                    const bre = document.createElement("br")
                    box.appendChild(title)
                    box.appendChild(image)
                    box.appendChild(description)
                    box.appendChild(bre)
                }
            }
            else {
                box.innerHTML = `<section class="card">
                <h1> unable to find what you're looking for </h1>
                </section>`
            }
}



document.getElementById('searchbutton').addEventListener('click', find);