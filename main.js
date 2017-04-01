(function init() {

    var app = new Vue({
        el: '.container',
        data: {
            question: "yolo",
            explanation: "diek",
            firstImage: "",
            firstButton: "asdad",
            secondImage: "",
            secondButton: "dgdssss"
        }
    });

    var request = new Request('./data/questions.json', {
        method: 'GET',
    });

    fetch(request).then(function (response) {

        response.json().then(function (json) {
            console.log("JSON:" + json[0].question);


            app.question = json[0].question;
            console.log("Data:" + app.question);


        });
    });
})();

