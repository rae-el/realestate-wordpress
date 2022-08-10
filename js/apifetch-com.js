//this is the javascript to call for commercial properties from my api

//make this change, get the pages from the API call
var pageNum = 1;

var urlPaged = 'https://realty-in-ca1.p.rapidapi.com/properties/list-commercial?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage='+pageNum+'&RecordsPerPage=15&SortOrder=A&NumberOfDays=0&BedRange=0-0&CultureId=1&BathRange=0-0&SortBy=6&TransactionTypeId=2'

//ideally move these to a private file not uploaded to GitHub
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};

async function getApiResponse(urlPaged,options){
	const response = await fetch(urlPaged,options);
	
	var data = await response.json();
	console.log(data);
	//show first page
	show(data);
	//get pages
	getPages(data);
}

getApiResponse(urlPaged,options);

function getPages(data){
	var page = 1;
	totalPages = data.Paging.TotalPages;
	var showPages = "";
	for (; page <= totalPages; page++){
		try {
			console.log(page);
			showPages += `<a href="/wordpress/commercial/${page}">${page}</a>`;
		}
		catch(e){
			showPages = '';
			console.log(e);
	}}
	document.getElementById("pagination").innerHTML = showPages;
}

function show(data){
	var tab = "";
	for (var r of data.Results){
		try {
			tab += `<a href="/mls/${r.MlsNumber}"><section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" alt="property picture">
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
		</section></a>`;
		}
		catch(e){
			tab = '';
			console.log(e);
		}}
	document.getElementById("properties-area").innerHTML = tab;
}
