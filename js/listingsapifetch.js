const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage=1&RecordsPerPage=15&SortOrder=A&SortBy=1&CultureId=1&NumberOfDays=0&BedRange=1-0&BathRange=1-0&RentMin=0'
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
		/*`<tr>
			<th>Photo</th>
			<th>Address</th>
		</tr>`;*/
	for (let r of data.Results){
		/*tab += `<tr>
		<td>${r.Property.Address.AddressText}</td>
		<td><img src="${r.Property.Photo[0].HighResPath}"></td>
		</tr>`;*/
		tab += `<section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" width="350" height="250">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="property-subdetails">
		<p>Beds: ${r.Building.Bedrooms} Baths: ${r.Building.BathroomTotal} Car: ${r.Property.ParkingSpaceTotal}</p>
		</section>
		</section>
		</section>`;
	}	
	document.getElementById("properties-area").innerHTML = tab;
}
/*fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/