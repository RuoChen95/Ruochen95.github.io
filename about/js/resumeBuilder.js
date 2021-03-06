var projects = {
    "projects": [
        {
          "name": "Front-end web Development (In Bitmain.com, 2017.4 - 2018.12)",
          "knowledge": "Vue.js, Vuex, vue-router, vant, element UI, npm, webpack, Git",
          "src": "https://shop.bitmain.com",
          "image": "imgs/bitmain.png"
        },
        {
            "name": "frontend nanodegree arcade game",
            "knowledge": "Javascript",
            "src": "https://github.com/RuoChen95/frontend-nanodegree-arcade-game",
            "image": "imgs/OOP.png"
        },
        {
            "name": "Chinese language of the Global Translator Community team",
            "knowledge": "Volunteer",
            "src": "https://www.transifex.com/user/profile/xieruochen_gtc_M2ZiMj/",
            "image": "imgs/volunteer.jpg"
        },
    ]
};

projects.display = function(){
    for (var project = 0; project < this.projects.length; project++) {
        $(".workContent").append(HTMLprojectStart);
        var formattedSrc = HTMLprojectSrc.replace("%data%", this.projects[project].src);
        var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].image);
        var formattedName = HTMLprojectName.replace("%data%", this.projects[project].name);
        var formattedKnowledge = HTMLprojectKnowledge.replace("%data%", this.projects[project].knowledge);
    
        $(".portfolio-item:last").append(HTMLprojectImageBox);
        $(".portfolio-image:last").append(formattedSrc);
        $(".proLink:last").append(formattedImage);


        $(".portfolio-item:last").append(HTMLprojectCaption);
        $(".portfolio-caption:last").append(formattedName);
        $(".portfolio-caption:last").append(formattedKnowledge);

    }
};

projects.display();