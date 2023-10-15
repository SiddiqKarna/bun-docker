const PORT: number = +(process.env.PORT || 8081);
const NODE_ENV = process.env.NODE_ENV ?? "development";

const server = Bun.serve({
  port: PORT,
  fetch() {
    process.exit(1);
    return new Response("Welcome to Bun!");
  },
});

console.log(`[${NODE_ENV}] Listening on port ${server.port}`);
