var tellie = -1;
var app = new Vue({
    el: '.container',
    data: {
        question: "",
        explanation: "",
        firstImage: "",
        firstButton: "",
        secondImage: "",
        secondButton: ""
    }
});

(function init() {
    next();
})();


function next() {

    // Sjtek.toggleLight1();
    // Sjtek.getTemperatureInside(function (tempInside) {
    //     console.log(tempInside);
    // });
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