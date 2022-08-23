function newVidoes() {
    const heading = document.querySelector('#new-videos h2');
    heading.innerHTML = 'Latest Videos';
  
    newVideos.forEach(newVideo => {
        const newVideoArticle = document.createElement('article');
        const newVideoArticleContent = `
                                    <div class="course-image"><img src="${newVideo.Image}"></div>
                                    <div class="course-info"><h4>${newVideo.Name}</h4><p>${newVideo.Details}</p><a href="" class="btn btn-primary">Watch Video</a></div>
                                    `;
    newVideoArticle.innerHTML = newVideoArticleContent;
    document.querySelector('.videos-container').appendChild(newVideoArticle);
    })
  }
  
  newVidoes();