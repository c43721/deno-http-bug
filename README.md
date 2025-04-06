# Deno HTTP Server Response Extension Bug

This repository demonstrates a bug in Deno's handling of Node.js `http` module
compatibility when attempting to extend the `ServerResponse` type.

## The Issue

When creating an HTTP server using `node:http` with options to extend the
`ServerResponse`, Deno does not properly extend or create the incoming response object.
This differs from Node.js behavior where the response object is correctly
extended.

## Running the Code

### With Deno

```bash
deno task dev
```

### With Node.js

```bash
npm run dev
```

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
