import { createServer, type IncomingMessage, ServerResponse } from "node:http";

class HelloResponse<Request extends IncomingMessage = IncomingMessage>
  extends ServerResponse<Request> {
  public hello() {
    this.statusCode = 200;
    return this.end("Hello from HelloResponse!");
  }
}

const server = createServer({
  ServerResponse: HelloResponse,
});

server.on("request", (request, response) => {
  if (request.url === "/") {
    return response.hello();
  }

  return response.end("Hello from the server!");
});

server.on("listening", () => console.log("Started: http://localhost:3000"));

server.listen(3000);
