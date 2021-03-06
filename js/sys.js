﻿/// <reference path="libs/head.js" />
/// <reference path="libs/basil.js" />

head.load(
    "js/libs/stats.min.js",
    "js/libs/detector.js",
    "js/libs/three.js",
    "js/libs/three.projector.js",
    "js/libs/domevent.js",
    "js/libs/cannon.js",
    function () {
        console.log("Libraries have loaded.");

        head.load("js/game/game.static.js",
                "js/game/game.three.js",
                "js/game/game.cannon.js",
                "js/game/game.events.js",
                "js/game/game.helpers.js",
                "js/game/game.ui.js",
                "js/game/game.models.js",
                "js/game/game.core.rts.js",
                function () {

                    if (!Detector.webgl) {
                        Detector.addGetWebGLMessage();
                    } else {
                        window.gameInstance = window.game.core();
                        window.gameInstance.init({
                            domContainer: document.querySelector("#game"),
                            rendererClearColor: window.game.static.white
                        });
                    }
                });
    }
);

head.ready(function () {
   
    console.log("ready");
});

