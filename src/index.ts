const bunServer = Bun.serve({
  port: 5000,
  fetch(request: Request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on http://localhost:${bunServer.port}`);
