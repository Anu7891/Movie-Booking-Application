const routeResponseMap = {
    "/movies": "<h1>All Movies Data in JSON format from Mongo DB</h1>",
    "/genres": "<h1>All Genres Data in JSON format from Mongo DB</h1>",
    "/artists": "<h1>All Artists Data in JSON format from Mongo DB</h1>"
}

const port = 9000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
        }
        else {
            res.end("<h1>Sorry, not found.</h1>");
        }
    })

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`)
});