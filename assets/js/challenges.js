function hundredk() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = '100K Coding Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function webDesign() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Web Design Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    webDesignVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function gitChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Date With Git Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    gitVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                            <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                            <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                        `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function pythonChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Python Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""
    

    pythonVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                            <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                            <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                        `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function webDev() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Web Development Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function dataStructure() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Data Structure Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function reactChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'React Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function flutterChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Flutter Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
}

function gameDev() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Game Developmet Challenge';
    const container = document.querySelector('.challenges-container')
    container.innerHTML = ""


    HundredkVideos.forEach(data => {
        const dataArticle = document.createElement('article');
        const dataArticleContent = `
                                                <div class="course-image"><img src="https://img.youtube.com/vi/${data.Id}/maxresdefault.jpg"></div>
                                                <div class="course-info"><h4>${data.Name}</h4><p>${data.Details}</p><a href="https://youtu.be/${data.Id}" class="btn btn-primary">Watch Video</a></div>
                                            `;
    dataArticle.innerHTML = dataArticleContent;
    container.appendChild(dataArticle);
    })
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






































































































































// function hundredk() {
//     const heading = document.querySelector('.challenges h2');
//     heading.innerHTML = '100K Coding Challenge';

//     const container = document.querySelector('.challenges-container')
//     container.innerHTML = ""

//     fetch('https://script.google.com/macros/s/AKfycbylP9-4EEgc1kvvawNNYlxsLl3tpp7N4ugUh9cSydMenKHAtQ4-0lvKVpC4Oo8FgmyW/exec')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         if(data.length>0){
//             var temp = '';

//             data.forEach(newVideo => {
//                 const newVideoArticle = document.createElement('article');
//                 const newVideoArticleContent = `
//                                                     <div class="course-image"><img src="https://img.youtube.com/vi/${newVideo.Id}/maxresdefault.jpg"></div>
//                                                     <div class="course-info"><h4>${newVideo.Name}</h4><p>${newVideo.Details}</p><a href="https://youtu.be/${newVideo.Id}" class="btn btn-primary">Watch Video</a></div>
//                                                 `;
//             newVideoArticle.innerHTML = newVideoArticleContent;
//             container.appendChild(newVideoArticle);
//             newVideoArticle.classList.toggle("course");
//             })
//         }
//     });
// }
