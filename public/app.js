const mainElement=document.querySelector('.feed');
const inputValue = document.getElementById('news-search');
const button=document.querySelector('.submit-btn');

  button.addEventListener("click",function getFeed(){
      const proxy=`https://mycors-proxy-devesh.herokuapp.com/`;
     const url=`${proxy}https://newsapi.org/v2/everything?q=${inputValue.value}&apiKey=87e9c8df9ef34834ad3c4a0b57f743ed`;
     fetch(url).then(res=>{
        return res.json();
     }).then(data=>{
          showFeed(data);
  });
  })


  function showFeed(data){
     for(var i=0;i<data.articles.length;i++){
          var  feedData=`<div class="feed-container">
         <img class="feed-img" src="${data.articles[i].urlToImage}" />
         <div class="feed-details">${data.articles[i].description}</div>
         <a href="${data.articles[i].url}" target="_blank">Click here to view More</a> 
          </div>`
 mainElement.innerHTML+=feedData;
    }
   
  }