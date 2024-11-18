import http from "http";

const PORT = 8000;

const server = http.createServer((request, response) => {
    if(request.url === "/api" && request.method === "GET") {
        response.writeHead(200);
        response.write("Welcome to My API");
        response.end();
    } else if (request.url === "/api" && request.method === "GET") {
        const users = [
        {id: 1, firstName: "Budi", lastName: "halilintar" },
        {id: 1, firstName: "Joko", lastName: "Taulany" },
        {id: 1, firstName: "Siti", lastName: "Blake" },

        ];

        response.writeHead(200);
        response.write("Welcome to My API");
        response.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});