document.addEventListener("DOMContentLoaded", function(){
    setTimeout(() => {
        document.addEventListener('submit',function(e){
            e.preventDefault();
            const searchForm = document.querySelector('.search-bar-form');
            console.log(searchForm);
            var searchInput = searchForm.searchbar.value;
            console.log(searchInput);
            if (searchInput && searchInput.trim().length > 0){
                // exclude white space and to uppercase
                searchInput = searchInput.trim().toUpperCase();
                return console.log(searchInput);
            } else {
                return console.log("No results");
            }
        });
    },2000);
});