var tellie = -1;
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

(function init() {
 next();
})();


function next() {

    tellie++;
    var request = new Request('./data/questions.json', {
        method: 'GET',
    });

    fetch(request).then(function (response) {

        response.json().then(function (json) {
            console.log("JSON:" + json[tellie].question);


            app.question = json[tellie].question;
            console.log("Data:" + app.question);


        });
    });
}