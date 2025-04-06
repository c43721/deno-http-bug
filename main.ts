import { createServer, type IncomingMessage, ServerResponse } from "node:http";

class HelloResponse<Request extends IncomingMessage = IncomingMessage>
  extends ServerResponse<Request> {
  public hello() {
    this.statusCode = 200;
    return this.end("Hello, world!");
  }
}

const server = createServer({
  ServerResponse: HelloResponse,
});

server.on("request", (request, response) => {
  if (request.url === "/") {
    response.hello();
  }

  response.end("Hello, world");
});

server.on("listening", () => console.log("Started: http://localhost:3000"));

server.listen(3000);
