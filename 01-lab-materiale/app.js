import { createServer } from "http";

const port = 3000;

const server = createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    //res.write("Hello World! "+ req.url);
    switch (req.url) {
        case "/hello":
            res.write("<h1>Hello world!</h1>");
            break;
        case "/contacts":  
            res.write("<h1>Contacts</h1>");
            break;
        default:
            res.write("<h1>Rotta visitata: " + req.url + "</h1>");
            break;
    }
    res.end();
});
server.listen(port);

console.log(`Server is listening on port ${port}`);