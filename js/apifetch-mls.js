//this is the javascript to call for specific mls property from my api
//const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?ReferenceNumber=R2657980&CultureId=1'

//featured property ref number = R2657980
//R2693408

////////////////////////////////////NOT A WORKING SEARCH/////////////////////////////////

const urlStart = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?CultureId=1&ReferenceNumber=';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
		'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
	}
};

const mlsInput = document.getElementById('mls-search');

//the error is coming from a null input?
mlsInput.addEventListener("input",(e)=>{
	let mlsValue = e.target.value;
	//trim whitespace & uppercase the letters
	if (mlsValue.length > 0){
		mlsValue = mlsValue.trim().toUpperCase();
		let url = urlStart + mlsValue;
		getproperty(url,options);
	} else{
		return;
	}
})



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