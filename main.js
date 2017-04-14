var tellie = -1;
var app = new Vue({
    el: '.vuetje',
    data: {
        question: "",
        explanation: "",
        firstImage: "",
        Expl: "",
        secondImage: "",
        Expl2: ""
    }
});

(function init() {
    next();
})();


function next() {

    // Sjtek.musicPlayPauze('pause');
    // Sjtek.getTemperatureInside(function (tempInside) {
    //     console.log(tempInside);
    // });

    tellie++;
    var request = new Request('./data/questions.json', {
        method: 'GET',
    });

    fetch(request).then(function (response) {

        response.json().then(function (json) {
            console.log("JSON:" + json[tellie].Expl);


            app.question = json[tellie].question;
            app.explanation = json[tellie].explanation;
            app.firstImage = json[tellie].firstImage;
            app.Expl = json[tellie].Expl;
            app.secondImage = json[tellie].secondImage;
            app.Expl2 = json[tellie].Expl2;

            console.log("Data:" + app.question);


        });
    });
}