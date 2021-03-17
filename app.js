let closeSearch = document.getElementById('close-search');
let searchBar = document.getElementById('search-bar');
let searchOpen =document.getElementById('search-open');

//Tabs

let share = document.getElementById('share');
let shareTab = document.getElementById('share-tab');
let comment = document.getElementById('comment');
let commentTab = document.getElementById('comment-tab');
let read = document.getElementById('read');
let readTab = document.getElementById('read-tab');
let trendindTab = document.getElementById('trendind-tab');
let trending = document.getElementById('trending');

//Shaire Tab
shareTab.addEventListener('click',function(e){
    share.style.display='block';
    comment.style.display='none';
    read.style.display='none';
    trending.style.display='none';

    //Tab background
    shareTab.style.backgroundColor='black';
    readTab.style.backgroundColor='#BABABA';
    trendindTab.style.backgroundColor='#BABABA';
    commentTab.style.backgroundColor='#BABABA';
    
})

//comment Tab
commentTab.addEventListener('click',function(e){
    share.style.display='none';
    comment.style.display='block';
    read.style.display='none';
    trending.style.display='none';

    //Tab background
    shareTab.style.backgroundColor='#BABABA';
    readTab.style.backgroundColor='#BABABA';
    trendindTab.style.backgroundColor='#BABABA';
    commentTab.style.backgroundColor='black';
    
})

//read Tab
readTab.addEventListener('click',function(e){
    share.style.display='none';
    comment.style.display='none';
    read.style.display='block';
    trending.style.display='none';

    //Tab background
    shareTab.style.backgroundColor='#BABABA';
    readTab.style.backgroundColor='black';
    trendindTab.style.backgroundColor='#BABABA';
    commentTab.style.backgroundColor='#BABABA';
    
})
//trending Tab
trendindTab.addEventListener('click',function(e){
    share.style.display='none';
    comment.style.display='none';
    read.style.display='none';
    trending.style.display='block';

    //Tab background
    shareTab.style.backgroundColor='#BABABA';
    readTab.style.backgroundColor='#BABABA';
    trendindTab.style.backgroundColor='black';
    commentTab.style.backgroundColor='none';
    
})



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