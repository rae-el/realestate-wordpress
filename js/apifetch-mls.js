//this is the javascript to call for specific mls property from my api
//const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?ReferenceNumber=R2657980&CultureId=1'

//featured property ref number = R2657980

////////////////////////////////////NOT A WORKING SEARCH/////////////////////////////////

//let inputmls = document.getElementById('mls-search').value;
//const linkstart = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?CultureId=1&ReferenceNumber=R2653514';
//const url = linkstart + inputmls;

const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?ReferenceNumber=R2653514&CultureId=1'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};
async function getapiresponse(url,options){
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

getapiresponse(url,options);

function show(data){
	let tab = "";
	for (let r of data.Results){
		tab += `<section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" width="350" height="250">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
		<p>Beds: ${r.Building.Bedrooms} Baths: ${r.Building.BathroomTotal} Size: ${r.Land.SizeTotal}</p>
		</section>
		</section>
		</section>`;
	}	
	document.getElementById("mls-property-area").innerHTML = tab;
}