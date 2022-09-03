function hundredk() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = '100K Coding Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function webDesign() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Web Designing Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function gitChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Date with Git Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function pythonChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Python Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function webDev() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Web Development Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function dataStructure() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Data Structure Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function reactChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'React Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function flutterChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Flutter Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function gameDev() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Game Development Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        if(data.length>0){
            var temp = '';

            data.forEach(video => {
                const videoArticle = document.createElement('article');
                const videoArticleContent = `
                                                    <div class="course-image"><img src="https://img.youtube.com/vi/${video.Id}/maxresdefault.jpg"></div>
                                                    <div class="course-info"><h4>${video.Name}</h4><p>${video.Details}</p><a href="https://youtu.be/${video.Id}" class="btn btn-primary">Watch Video</a></div>
                                                `;
            videoArticle.innerHTML = videoArticleContent;
            container.appendChild(videoArticle);
            videoArticle.classList.toggle("course");
            })
        }
    });
}

function call(number){
    const challenges = document.getElementById("challenges");
    challenges.style.marginTop = "6rem";
    challenges.style.padding = "6rem 0 0";
    challenges.style.borderTop = "1px solid #00d2b5";

    if(number==1){
        hundredk();
    }
    else if(number==2){
        webDesign();
    }
    else if(number==3){
        gitChallenge();
    }
    else if(number==4){
        pythonChallenge();
    }
    else if(number==5){
        webDev();
    }
    else if(number==6){
        dataStructure();
    }
    else if(number==7){
        reactChallenge();
    }
    else if(number==8){
        flutterChallenge();
    }
    else if(number==9){
        gameDev();
    }
    else{
        location.reload();
    }
}

