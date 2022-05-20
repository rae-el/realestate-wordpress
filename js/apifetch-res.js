//this is the javascript to call for residential properties from my api
const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage=1&RecordsPerPage=15&SortOrder=A&SortBy=6&CultureId=1&NumberOfDays=0&BedRange=1-0&BathRange=1-0&PriceMin=800000&TransactionTypeId=2'
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
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" width="350" height="250">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
		<p> ${r.Building.Bedrooms}  ${r.Building.BathroomTotal}  ${r.Land.SizeTotal}</p>
		</section>
		</section>
		</section>`;
	}	
	document.getElementById("properties-area").innerHTML = tab;
}