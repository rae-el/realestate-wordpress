//this is the javascript to call for properties by Team 3000
// OrganizationId = 147734

const url = 'https://realty-in-ca1.p.rapidapi.com/agents/get-listings?OrganizationId=147734&CurrentPage=1&RecordsPerPage=15&SortOrder=D&SortBy=6&CultureId=1'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};
async function getapiresponse(url,options){
	const response = await fetch(url,options);
	
	var data = await response.json();
	console.log(data);
	show(data);
}

getapiresponse(url,options);

//photo isn't working and not sure why

function show(data){
	let tab = "";
	for (let r of data.Results){
		tab += `<section class="property-box">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
		<p>Beds: ${r.Building.Bedrooms} Baths: ${r.Building.BathroomTotal} Size: ${r.Land.SizeTotal}</p>
		</section>
		</section>`;
	}	
	document.getElementById("properties-area").innerHTML = tab;
}