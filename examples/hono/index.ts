import { Hono } from "hono";
import { handleIPN } from "@open-payments-router/core/rest/handle-ipn/hono";
import { serve } from "@hono/node-server";

const app = new Hono();

// Attach the IPN handler to /opr/ipn
app.post("/opr/ipn", handleIPN);

// Example root route
app.get("/", (c) => c.text("OPR Hono Example"));

export default app;

const port = 8000;

serve({
	fetch: app.fetch,
	port: port,
});
console.log(`Hono app listening on http://localhost:${port}`);
