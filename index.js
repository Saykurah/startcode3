import data from "./data.json" with {type: "json"};

const thumbnailsDiv = document.getElementById("thumbnails");
const detailsDiv = document.getElementById("details");
const moreButton = document.getElementById("more");

const searchInput = document.getElementById("search");
const priceInput = document.getElementById("price");

// STATE
let selectedDestination = data[0]; //de destination waarvan de details getoond worden
let searchBy = "";
let priceFilter = undefined;

renderData(data);

function renderData(destinations) {
    console.log("renderData", destinations);
    detailsDiv.innerHTML = destinations
        .map(renderDestinationDetails)
        .join("");

    //TODO fill detailsDiv.innerHTML with results of renderDestinationDetails(selectedDestination)

    //TODO fill thumbnailsDiv.innerHTML with results of renderDestinationThumbnail
}

function renderDestinationThumbnail(destination) {
    const image = 'img/placeholder.jpeg';
    return `
	<div id = "dest-${destination.id}" class="">
		<div class="card m-1 p-1">
			<div class="card-header bg-dark text-white p-0">
			    <img src="${image}" class="card-img-top object-fit-cover" />
			</div>
		</div>
	</div>
  `;
}

function renderDestinationDetails(destination) {
    //TODO
    return `
        <div class="container-fluid">
			<div class="row mb-2">
                <div class="col-12 col-md-6">
                    <img src="${image}" class="card-img-top object-fit-cover" />
                </div>
                <div class="col-12 col-md-6">
                </div>
             </div>
        </div>
    `;
}



//- toon details destination (pas hiervoor aan: functie renderDestinationDetails)
//- toon destination thumbnails (pas hiervoor aan: functies renderData en renderDestinationThumbnail)
//- ol activities
//- search by name
//- search by price
//- click thumbnail: show details
