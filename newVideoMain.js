function latestVideos(){

    const heading = document.querySelector('#new-videos h2');
    heading.innerHTML = 'Latest Videos';

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(newVideo => {
                const newVideoArticle = document.createElement('article');
                const newVideoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${newVideo.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${newVideo.Name}</h4><p>${newVideo.Details}</p><a href="https://youtu.be/${newVideo.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            newVideoArticle.innerHTML = newVideoArticleContent;
            document.querySelector('.videos-container').appendChild(newVideoArticle);
            })
        }
    });
}

latestVideos()
