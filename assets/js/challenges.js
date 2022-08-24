function hundredk() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = '100K Coding Challenge';

    HundredkVideos.forEach(HundredkVideo => {
        const HundredkVideoArticle = document.createElement('article');
        const HundredkVideoArticleContent = `
                                    <div class="course-image"><img src="${HundredkVideo.Image}"></div>
                                    <div class="course-info"><h4>${HundredkVideo.Name}</h4><p>${HundredkVideo.Details}</p><a href="" class="btn btn-primary">Watch Video</a></div>
                                    `;
    HundredkVideoArticle.innerHTML = HundredkVideoArticleContent;
    document.querySelector('.challenges-container').appendChild(HundredkVideoArticle);
    })
}

function webDesign() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Web Design Challenge';

    webDesignVideos.forEach(webDesignVideo => {
        const webDesignVideoArticle = document.createElement('article');
        const webDesignVideoArticleContent = `
                                    <div class="course-image"><img src="${webDesignVideo.Image}"></div>
                                    <div class="course-info"><h4>${webDesignVideo.Name}</h4><p>${webDesignVideo.Details}</p><a href="" class="btn btn-primary">Watch Video</a></div>
                                    `;
    webDesignVideoArticle.innerHTML = webDesignVideoArticleContent;
    document.querySelector('.challenges-container').appendChild(webDesignVideoArticle);
    })
}

function gitChallenge() {
    const heading = document.querySelector('.challenges h2');
    heading.innerHTML = 'Date With Git Challenge';

    gitVideos.forEach(gitVideo => {
        const gitVideoArticle = document.createElement('article');
        const gitVideoArticleContent = `
                                    <div class="course-image"><img src="${gitVideo.Image}"></div>
                                    <div class="course-info"><h4>${gitVideo.Name}</h4><p>${gitVideo.Details}</p><a href="" class="btn btn-primary">Watch Video</a></div>
                                    `;
    gitVideoArticle.innerHTML = gitVideoArticleContent;
    document.querySelector('.challenges-container').appendChild(gitVideoArticle);
    })
}

var number;
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
}

