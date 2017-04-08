/**
 * Created by Kevin Grond
 * Can only be used Local in this build
 */

var Sjtek = {

        url: "https://sjtek.nl/api/",
        toggleLight: function (number) {
            fetch(Sjtek.url + 'lights/toggle' + number).then(function (response) {
            });
        },

        Lighton: function (number) {
            fetch(Sjtek.url + 'lights/toggle' + number + 'on').then(function (response) {
            });
        },

        Lightoff: function (number) {
            fetch(Sjtek.url + 'lights/toggle' + number + 'off').then(function (response) {
            });
        },

        master: function () {
            fetch(Sjtek.url + 'switch').then(function (response) {
            });
        },


        getTemperatureInside: function (callback) {
            fetch(Sjtek.url + 'info').then(function (response) {
                response.json().then(function (json) {
                    var tempInside = json.temperature.inside;
                    callback(tempInside);
                });
            })
        },

        musicPlayPauze: function (state) {
            fetch(Sjtek.url + 'music/' + state).then(function (response) {
            });
        },

        musicSkip: function (state) {
            fetch(Sjtek.url + 'music/' + state).then(function (response) {
            });
        },
        musicShuffle: function () {
            fetch(Sjtek.url + 'music/shuffle').then(function (response) {
            });
        },

        getVolume: function (callback) {
            fetch(Sjtek.url + 'info').then(function (response) {
                response.json().then(function (json) {
                    var volumeVal = json.music.volume;
                    callback(volumeVal);
                });
            })
        },
    }
;