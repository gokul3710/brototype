    newVideos.forEach(newVideo => {
        const newVideoArticle = document.createElement('article');
        const newVideoArticleContent = `
                                    <div class="course-image"><img src="https://img.youtube.com/vi/${newVideo.Id}/maxresdefault.jpg"></div>
                                    <div class="course-info"><h4>${newVideo.Name}</h4><p>${newVideo.Details}</p><a href="https://youtu.be/${newVideo.Id}" class="btn btn-primary">Watch Video</a></div>
                                    `;
    newVideoArticle.innerHTML = newVideoArticleContent;
    document.querySelector('.videos-container').appendChild(newVideoArticle);
    })
