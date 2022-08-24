fetch('https://sheet.best/api/sheets/728bac48-0e46-4d42-af91-23ba8d6dca66')
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