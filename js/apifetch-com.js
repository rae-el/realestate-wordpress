//this is the javascript to call for commercial properties from my api
const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-commercial?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage=1&RecordsPerPage=15&SortOrder=A&NumberOfDays=0&BedRange=0-0&CultureId=1&BathRange=0-0&SortBy=6&TransactionTypeId=2'
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
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
			<i class="fa-solid fa-building"></i>
			<p> ${r.Property.Type} </p>
			<i class="fa-solid fa-ruler-combined"></i>
			<p>${r.Land.SizeTotal}</p>
		</section>
		</section>
		</section>`;
	}	
	document.getElementById("properties-area").innerHTML = tab;
}