const express = require("express");

const routes = (router) => {
    console.log("Registering routes");

    router.get("v1/topcontributors", (req, res) => {
        console.log("Got the response !!!");
    });

    // return router;

};

module.exports = routes;