function hundredk() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = '100K Coding Challenge';

    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""

    fetch('https://script.google.com/macros/s/AKfycbziYmjDbmBgsLrQzZN0eFlA7Yg1itGL9lwSDGxrcI9-j-vJVFl7Yj2kSUrB58Hgr_iKIg/exec')
    .then((response) => response.json())
    .then((data) => {

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

    fetch('https://script.google.com/macros/s/AKfycby3EfCXzVAFCZhIfmeERy4j5_1q0uzMWtFaCts7g2JC3yCW2ZU67l5MwzOmNcXCGd6sEg/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbwXxtCcblx80aXjGaqiDCFwjBXwDbhDjizZGJ58k4nCpMlIoyGB8U1igv3C1F3bkUPgJA/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbznuR8-GF5qLxu1H6c5q9eER4kojoZVbuBpHwF5-4sr5-tJKbF5iz_o2pxx2ruv386Zdw/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbz4AapwSX0R2dDHWrQ9vU-fqyyF4FBD9Fk8I8cOgPeWkfrQZ9eadjia6xxN_vxNkwDb4Q/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbyW0Hk6NmPs4D-xy6V1AFHR538JdOjSyNjwxScSRTgr9Pc1-SSqFHmK0qWuwemjejO3GA/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbwJ26gZQibPOZ4D3kiCmCfDD_c02X6rifdfIJFj6T43tQcZV7aqoU2fHFu4IQWDyd3p_g/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbz3SUan0teS6SWKRwd1oEyFnbgZ0EjawqZS5JlB2o3DnNnljPq7eTRWQNl6CIOyJ_H7aQ/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

    fetch('https://script.google.com/macros/s/AKfycbxATWXsTdNJuslLiW0Ic4TVwp3aRtNNwJB6m57jRLUZaAFnU1jh5BofZukB0sXGKV_r1g/exec')
    .then((response) => response.json())
    .then((data) => {
        

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

