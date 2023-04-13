window.onload = function(){
    fetch('https://gnews.io/api/v4/top-headlines?&token=6598218cd26880deba49a54b2a3a6a01&lang=en')
    .then(function (response) {
    return response.json();
})
    .then(function(posts) {
    
    var htmls = posts.articles.map(function(post) {
    return `<li>
    <img src = "${post.image}" alt = "${post.name}"></img>
    <a href = "${post.url}" target = "_blank"><h2>${post.title}</h2></a>
    <p><i>${post.publishedAt}</i></p>
    <p>${post.content}</p><br><br>   
    </li>`
})
var html = htmls.join("");
document.querySelector("#post-block").innerHTML = html;    
});
};
    function searching() {
        
        document.getElementById("thoisu").style.display = "none";
        var keyword = document.getElementById("keywords").value;
        var key = '6598218cd26880deba49a54b2a3a6a01';
        var url = 'https://gnews.io/api/v4/search?q='+keyword+'&token='+ key +'&lang=en';
        
        fetch(url)
        .then(function (response) {
            return response.json();
    })
    .then(function(data) {
        let links = data.articles.map(function(data)  {
            return 
                    
                    `<li>
                    <img src="${data.image}"></img>
                    
                    <a href="${data.url}"><b>${data.title}</b></a>
                    <p>${data.description}</p>
                    
                    </li>`
                    
            })
        let link = links.join('');
        document.querySelector('#container').innerHTML = link;
        document.getElementById("timkiem").style.display = "block";
    });
        
          
    }
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }