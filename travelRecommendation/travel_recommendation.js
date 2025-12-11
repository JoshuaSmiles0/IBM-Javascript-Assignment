const box = document.getElementById("returns");
import data from "./travel_recommendation_api.json" assert {type:json};


function clear() {
    box.innerHTML = '';
}

document.getElementById('clearbutton').addEventListener('click',clear);



function find() {
    const input = document.getElementById('search').value.toLowerCase();
    console.log(input);
            if (input == "beach") {
                const beaches = data.beaches;
                for(const beache of beaches) {
                    box.innerHTML = `<section class="card">
                    <h1> ${beache.name} </h1>
                    <img src="${beache.imageUrl}>
                    <p> ${beache.description} </p>
                    </section` 
                }
            }
            else if (input == "temple"){
                const temples = data.temples;
                for(const temple of temples) {
                    box.innerHTML = `<section class="card">
                    <h1> ${temple.name} </h1>
                    <img src="${temple.imageUrl}>
                    <p> ${temple.description} </p>
                    </section` 
                }
            }
            else if (input == "australia" ) {
                const australia = data.countries[0].cities;
                for(const australias of australia) {
                    box.innerHTML = `<section class="card">
                    <h1> ${australias.name} </h1>
                    <img src="${australias.imageUrl}>
                    <p> ${australias.description} </p>
                    </section` 
                }
            }
            else if (input == "japan") {
               const japan = data.countries[1].cities;
                for(const japans of japan) {
                    box.innerHTML = `<section class="card">
                    <h1> ${japans.name} </h1>
                    <img src="${japans.imageUrl}>
                    <p> ${japans.description} </p>
                    </section` 
                }
            }
            else if (input == "brazil") {
                const brazil = data.countries[2].cities;
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