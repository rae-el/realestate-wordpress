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


function show(data){
	let tab = "";
	for (let r of data.Results){
		tab += `<section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" alt="property picture">
		<section class="property-details">
		<h4 class="property-price">${r.Property.Price}</h4>
		<p class="property-address">${r.Property.Address.AddressText}</p>
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
	document.getElementById("properties-area").innerHTML = tab;
}
