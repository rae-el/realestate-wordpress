//this is the javascript to call for specific mls property from my api

document.addEventListener("DOMContentLoaded", function(){
	//get mls number
	var mls = document.getElementById("mls-id").innerText;
	//here for testing delete later
	console.log(mls);

	//run api call
	var u = 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls?CultureId=1&ReferenceNumber='+mls;
	
	const o = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
			'X-RapidAPI-Key': '6961dcebb5mshe3477bd2f0876fap118313jsn9d615631a184'
		}
	};


	async function searchMLS(u,o){
		try {
		const response = await fetch(u,o);
		
		var d = await response.json();
		console.log(d);
		show(d);
		}
		catch (e){
			console.error(e);
		}
	}
	searchMLS(u,o)

	function show(d){
		let tab = "";
	for (let r of d.Results){
		try{
		tab += `
		<img class="property-pic" src="${r.Property.Photo[0].HighResPath}" alt="property picture">
		<section class="property-details">
		<h4 class="property-price">${r.Property.Price}</h4>
		<p class="property-address">${r.Property.Address.AddressText}</p>
		<section class="property-subdetails">
			<i class="fa-solid fa-bed"></i>
			<p> ${r.Building.Bedrooms} </p>
			<i class="fa-solid fa-bath"></i>
			<p> ${r.Building.BathroomTotal}</p>
			<i class="fa fa-home"></i>
			<p>${r.Property.Type}</p>
		</section>
		</section>
		<section class="property-blurb">
		<p>${r.PublicRemarks}</p>
		</section>
		<table class="property-table">
			<tbody>
				<tr>
					<td class="category">MLS Number</td>
					<td>${r.MlsNumber}</td>
				</tr>
				<tr>
					<td class="category">Building Type</td>
					<td>${r.Building.Type}</td>
				</tr>
				<tr>
					<td class="category">Ownership Type</td>
					<td>${r.Property.OwnershipType}</td>
				</tr>
				<tr>
					<td class="category">Land Size Total</td>
					<td>${r.Land.SizeTotal}</td>
				</tr>
				<tr>
					<td class="category">Interior Size</td>
					<td>${r.Building.SizeInterior}</td>
				</tr>
				<tr>
					<td class="category">Total Stories</td>
					<td>${r.Building.StoriesTotal}</td>
				</tr>
				<tr>
					<td class="category">Parking</td>
					<td>${r.Property.ParkingType}</td>
				</tr>
				<tr>
					<td class="category">Landscape Features</td>
					<td>${r.Land.LandscapeFeatures}</td>
				</tr>
				<tr>
					<td class="category">Near By Ammenities</td>
					<td>${r.Property.AmmenitiesNearBy}</td>
				</tr>
			</tbody>
			</table>
			<div class="listing-details">
			<img class="realtor-pic" src="${r.Individual[0].PhotoHighRes}" alt="agent picture">
			<h3 class="realtor-name">${r.Individual[0].Name}</h3>
			<img class="agency-logo" src="${r.Individual[0].Organization.Logo}" alt="agent picture">
			<p class="agency-name">${r.Individual[0].Organization.Name}</p>
			</div>
		
		`;
	}
		catch(e){
			//if error try again replacing image with font awesome icon
			try {
				tab += `
				<span class="property-pic"><i class="fa fa-home"></i></span>
		<section class="property-details">
		<h4 class="property-price">${r.Property.Price}</h4>
		<p class="property-address">${r.Property.Address.AddressText}</p>
		<section class="property-subdetails">
			<i class="fa-solid fa-bed"></i>
			<p> ${r.Building.Bedrooms} </p>
			<i class="fa-solid fa-bath"></i>
			<p> ${r.Building.BathroomTotal}</p>
			<i class="fa fa-home"></i>
			<p>${r.Property.Type}</p>
		</section>
		</section>
		<section class="property-blurb">
		<p>${r.PublicRemarks}</p>
		</section>
		<table class="property-table">
				<tbody>
					<tr>
						<td class="category">MLS Number</td>
						<td>${r.MlsNumber}</td>
					</tr>
					<tr>
						<td class="category">Building Type</td>
						<td>${r.Building.Type}</td>
					</tr>
					<tr>
						<td class="category">Ownership Type</td>
						<td>${r.Property.OwnershipType}</td>
					</tr>
					<tr>
						<td class="category">Land Size Total</td>
						<td>${r.Land.SizeTotal}</td>
					</tr>
					<tr>
						<td class="category">Interior Size</td>
						<td>${r.Building.SizeInterior}</td>
					</tr>
					<tr>
						<td class="category">Total Stories</td>
						<td>${r.Building.StoriesTotal}</td>
					</tr>
					<tr>
						<td class="category">Parking</td>
						<td>${r.Property.ParkingType}</td>
					</tr>
					<tr>
						<td class="category">Landscape Features</td>
						<td>${r.Land.LandscapeFeatures}</td>
					</tr>
					<tr>
						<td class="category">Near By Ammenities</td>
						<td>${r.Property.AmmenitiesNearBy}</td>
					</tr>
				</tbody>
			</table>
			<img class="realtor-pic" src="${r.Individual[0].PhotoHighRes}" alt="agent picture">
			<section class="realtor-details">
			<h3 class="realtor-name">${r.Individual[0].Name}</h3>
			<img class="agency-logo" src="${r.Individual[0].Organization.Logo}" alt="agent picture">
			<p class="agency-name">${r.Individual[0].Organization.Name}</p>
			</section>
			`;
			}
			catch(e){
				tab = '';
				console.log(e);
			}}
	}
		if (tab != null){
			document.getElementById("property-area").innerHTML = tab;
		}
		else{
			document.getElementById("property-area").innerHTML = "Sorry! We didn't find any information on that property!";
		}}
		
});
