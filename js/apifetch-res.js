//this is the javascript to call for residential properties from my api
var records = 12;
var pageNum = 1;
const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage='+pageNum+'&RecordsPerPage='+records+'&SortOrder=A&SortBy=6&CultureId=1&NumberOfDays=0&BedRange=1-0&BathRange=1-0&PriceMin=800000&TransactionTypeId=2'
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
	//get pages
	getPages(data);
	//get current page
	var currentPage = data.Paging.CurrentPage;
	console.log(currentPage)
	//highlight page button
	var pageElements = document.getElementsByTagName("button");
	for (element of pageElements){
		if (currentPage == element.id){
			element.value = "on";
			console.log(element);
		}
	}
}

getapiresponse(url,options);

function show(data){
	let tab = "";
	for (let r of data.Results){
		try{
		tab += `<section class="property-box"><a href="/wordpress/property/" class="get-property-details" id=${r.MlsNumber}>
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
		</a>
		</section>`;
		}
		catch(e){
			//if error try again replacing image with font awesome icon
			try {
				tab += `<section class="property-box"><a href="/wordpress/property/" class="get-property-details" id=${r.MlsNumber}>
				<span class="property-pic"><i class="fa fa-home"></i></span>
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
				</a>
				</section>`;
			}
			catch(e){
				tab = '';
				console.log(e);
			}}
	}
	document.getElementById("properties-area").innerHTML = tab;
}

//get the pages, create buttons and links
function getPages(data){
	//always number pages starting from 1
	var page = 1;
	//get total pages
	totalPages = data.Paging.TotalPages;
	//log total pages
	console.log(totalPages);
	//get element to input page numbers
	var paginate = document.getElementById("pagination");
	//clear element
	paginate.innerHTML = '';
	//loop through every page and create a button with id as page number
	//add event listener to each button
	for (; page <= totalPages; page++){
		var btn = document.createElement("button");
		btn.innerHTML = page;
		btn.className = "pageBtn";
		btn.id = page;
		btn.value = "off";
		paginate.appendChild(btn);
		document.getElementById(page).addEventListener("click",newPage)
	}
}

//call api with page number
function newPage(){
	var p = event.srcElement.id;
	var pageNum = p;
	//url for API
	var urlPaged = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=49.3474068&LatitudeMin=49.013513&LongitudeMax=-122.740764&LongitudeMin=-123.1180341&CurrentPage='+pageNum+'&RecordsPerPage='+records+'&SortOrder=A&SortBy=6&CultureId=1&NumberOfDays=0&BedRange=1-0&BathRange=1-0&PriceMin=800000&TransactionTypeId=2'
	//ideally move these to a private file not uploaded to GitHub
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
			'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
		}
	};
	getapiresponse(urlPaged,options)
	//tag to top of page
}