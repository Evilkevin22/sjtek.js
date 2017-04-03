/**
 * Created by kevin
 */

var Sjtek = {

    url: "https://sjtek.nl/api/",
    toggleLight1: function () {
        fetch(Sjtek.url + 'lights/toggle1').then(function (response) {
        });
    },
    toggleLight2: function () {
        fetch(Sjtek.url + 'lights/toggle2').then(function (response) {
        });
    },
    toggleLight3: function () {
        fetch(Sjtek.url + 'lights/toggle3').then(function (response) {
        });
    },
    getTemperatureInside: function (callback) {
        fetch(Sjtek.url + 'info').then(function (response) {
            console.log(response.status);
            response.json().then(function (json) {
                var tempInside = json.temperature.inside;
                callback(tempInside);
            });
        }).catch(function (error) {
            console.log("Error: " + error);
        });
    },
};