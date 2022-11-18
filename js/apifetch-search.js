//this is the javascript to call for specific mls property from my api
//really no clue why not working, not recognizing elements
// mls = "R2730551"
document.addEventListener("DOMContentLoaded", function(){

	//var mls = document.getElementById("mls-input").value;
	var mls = "R2730551";
	document.getElementById("mls-input").addEventListener("Submit",TrySearch);
	

	
})
function TrySearch(){
	if (mls!=null){
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
			if (tab != null){
				document.getElementById("property-area").innerHTML = tab;
			}
			else{
				document.getElementById("property-area").innerHTML = "Sorry! We didn't find anything to match that MLS number!";
			}
			
		}
	}
	else{
		document.getElementById("property-area").innerHTML = "Please enter an MLS number!";
	}
}

