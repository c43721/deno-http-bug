# Deno HTTP Server Response Extension Bug

This repository demonstrates a bug in Deno's handling of Node.js `http` module
compatibility when attempting to extend the `ServerResponse` type.

## The Issue

When creating an HTTP server using `node:http` with options to extend the
`ServerResponse`, Deno does not properly extend or create the incoming response
object. This differs from Node.js behavior where the response object is
correctly extended.

## Running the Code

### With Deno

Run the server with `deno`:

```bash
deno task dev
```

### With Node.js

First, install dependencies:

```bash
npm install
```

Then run the server:

```bash
npm run dev
```

### With a debugger

There are 2 launch options: one for Deno and the other for Node. You can use
this to help debug better.

## Expected Behavior

When navigating to `http://localhost:3000`, the server should return "Hello from
HelloResponse!" as the response.

## Actual Behavior

Navigating to `http://localhost:3000` returns "Internal Server Error".

## Reproduction Steps

1. Run the server using either Deno or Node.js as shown above
2. Make a request to `http://localhost:3000`
3. Observe that in Node.js, the expected response is returned
4. Observe that in Deno, an internal server error is shown

## Environment Information

- Deno version: deno 2.2.8
- Node.js version: v22.14.0

## Reference

- https://github.com/denoland/deno/issues/28768

## Resources

Node instantiates the class here: https://github.com/nodejs/node/blob/main/lib/_http_server.js#L1066

Which is set from the options like so: https://github.com/nodejs/node/blob/main/lib/_http_server.js#L446

Which is then called up in `new Server`: https://github.com/nodejs/node/blob/main/lib/_http_server.js#L547

Seems like no matter what, you're getting a `ServerResponse` here: https://github.com/denoland/deno/blob/main/ext/node/polyfills/http.ts#L1958
