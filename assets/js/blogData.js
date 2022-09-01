fetch('https://script.google.com/macros/s/AKfycbyjf5qHIageB0UN6wl_sqT-ugjniHx5H2jxRwFH8Qy9ZKZjvESAhR_j3ZIlBWGraiDRYg/exec')
.then((response) => response.json())
.then((data) => {
    console.log(data);

    if(data.length>0){
        var temp = '';

        data.forEach(hundredk => {
            const hundredkArticle = document.createElement('article');
            const hundredkArticleContent = `
                                                <div class="post-thumbnail">
                                                <img src="https://img.youtube.com/vi/${hundredk.Id}/maxresdefault.jpg" alt="">
                                                </div>
                                                <div class="post-info">
                                                    <h3 class="post-title">${hundredk.Title}</h3>
                                                    <p class="post-body">${hundredk.Description}</p>
                                                    <a href="https://youtu.be/${hundredk.Id}" class="category-button"><h4>Watch Video</h4></a>
                                                </div>
                                            `;
        hundredkArticle.innerHTML = hundredkArticleContent;
        document.querySelector('.posts-container').appendChild(hundredkArticle);
        })
    }
});