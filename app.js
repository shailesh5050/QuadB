let closeSearch = document.getElementById('close-search');
let searchBar = document.getElementById('search-bar');
let searchOpen =document.getElementById('search-open');

closeSearch.addEventListener('click',function(){
    searchBar.style.top=80+'px';
    searchBar.style.opacity=0;
    searchBar.style.visibility='hidden';
});
searchOpen.addEventListener('click',function(){
    console.log("clicked");
    searchBar.style.top=35+'px';
    searchBar.style.opacity=1;
    searchBar.style.visibility='visible';
})