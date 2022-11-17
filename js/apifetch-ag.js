//this is the javascript to call for agent properties from my api
//actually just getting organisation data not agent data

//OrganizationId=147734
//IndividualId=1559757

var records = 3;
var pageNum = 1;
//url for API
var urlPaged = 'https://realty-in-ca1.p.rapidapi.com/agents/get-listings?OrganizationId=147734&id=1559757&CurrentPage='+pageNum+'&RecordsPerPage='+records+'&SortOrder=D&SortBy=6&CultureId=1'

//ideally move these to a private file not uploaded to GitHub
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};

//first API call
async function getApiResponse(urlPaged,options){
	const response = await fetch(urlPaged,options);
	
	var data = await response.json();
	console.log(data);
	//show first page
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
		}
	}
}

getApiResponse(urlPaged,options);

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
		//the top tag here scrolls user to the top but causes a disruption with the event listener
		//'<a href="#top">'+page+'</a>'
		btn.innerHTML =page;
		btn.className = "pageBtn";
		btn.id = page;
		btn.value = "off";
		paginate.appendChild(btn);
		document.getElementById(page).addEventListener("click",newPage)
	}
}

//show the real estate data
function show(data){
	var tab = "";
	for (var r of data.Results){
		try {
			tab += `<a href="/mls/${r.MlsNumber}"><section class="property-box">
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" alt="property picture">
		<section class="property-details">
		<h4 class="property-address">${r.Property.Address.AddressText}</h4>
		<h4 class="property-price">${r.Property.Price}</h4>
		<section class="com-property-subdetails">
			<i class="fa-solid fa-building"></i>
			<p> ${r.Property.Type} </p>
			<i class="fa-solid fa-ruler-combined"></i>
			<p>${r.Land.SizeTotal}</p>
		</section>
		</section>
		</section></a>`;
		}
		catch(e){
			//if error try again replacing image with font awesome icon
			try {
				tab += `<section class="property-box">
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
				</section>`;
			}
			catch(e){
				tab = '';
				console.log(e);
			}}
	}
	document.getElementById("properties-area").innerHTML = tab;
}

//call api with page number
function newPage(){
	var p = event.srcElement.id;
	document.getElementById(p).value = "on";
	var pageNum = p;
	//url for API
	var urlPaged = 'https://realty-in-ca1.p.rapidapi.com/agents/get-listings?OrganizationId=147734&id=1559757&CurrentPage='+pageNum+'&RecordsPerPage='+records+'&SortOrder=D&SortBy=6&CultureId=1'
	//ideally move these to a private file not uploaded to GitHub
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
			'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
		}
	};
	getApiResponse(urlPaged,options)
	//tag to top of page
}
