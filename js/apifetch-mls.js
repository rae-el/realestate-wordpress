//this is the javascript to call for specific mls property from my api
//this isn't working because it is trying to get the event listener element when it does not exist yet

var mls = "R2730551";

var url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?CultureId=1&ReferenceNumber='+mls;

//ideally move these to private
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};


async function getproperty(url,options){
	try {
	const response = await fetch(url,options);
	
	var data = await response.json();
	console.log(data);
	show(data);
	}
	catch (e){
		console.error(e);
	}
	
}

getproperty(url,options);

function show(data){
	let tab = "";
	for (let r of data.Results){
		tab += `<section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" alt="Property Photo">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
			<i class="fa-solid fa-bed"></i>
			<p> ${r.Building.Bedrooms} </p>
			<i class="fa-solid fa-bath"></i>
			<p> ${r.Building.BathroomTotal}</p>
			<i class="fa-solid fa-ruler-combined"></i>
			<p>${r.Land.SizeTotal}</p>
		</section>
		</section>
		</section>`;
	}	
	document.getElementById("mls-property-area").innerHTML = tab;
}
