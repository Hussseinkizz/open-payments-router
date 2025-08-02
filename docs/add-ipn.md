# Integrating the OPR IPN (Webhook) Handler

This guide explains how to set up the OPR IPN (Instant Payment Notification) handler in your application using the OPR core SDK. Handlers are provided for both Hono and Express frameworks.

## Overview

The OPR IPN handler allows your application to receive payment status updates from payment gateways via a webhook endpoint. This enables you to automate payment processing and reconciliation securely and reliably.

## What is the IPN Handler?

Many payment gateways require you to provide a webhook (IPN) endpoint where they can send payment status updates. The OPR core SDK provides handler functions you can attach to your app to process these notifications.

## Usage with Hono

1. **Import the handler and server:**

   ```ts
   import { Hono } from "hono";
   import { handleIPN } from "@open-payments-router/core/rest/handle-ipn/hono";
   import { serve } from "@hono/node-server";
   ```

2. **Attach the handler to your route:**

   ```ts
   app.post("/opr/ipn", handleIPN);
   ```

3. **Start your app:**

   ```ts
   const port = 8000;
   serve({
     fetch: app.fetch,
     port: port,
   });
   console.log(`Hono app listening on http://localhost:${port}`);
   ```

## Usage with Express

1. **Import the handler:**

   ```ts
   import express from "express";
   import { handleIPN } from "@open-payments-router/core/rest/handle-ipn/express";
   ```

2. **Attach the handler to your route:**

   ```ts
   app.post("/opr/ipn", handleIPN);
   ```

3. **Enable JSON body parsing:**

   ```ts
   app.use(express.json());
   ```

## Example (Hono)

```ts
import { Hono } from "hono";
import { handleIPN } from "@open-payments-router/core/rest/handle-ipn/hono";
import { serve } from "@hono/node-server";

const app = new Hono();
app.post("/opr/ipn", handleIPN);
app.get("/", (c) => c.text("OPR Hono Example"));

const port = 8000;
serve({
  fetch: app.fetch,
  port: port,
});
console.log(`Hono app listening on http://localhost:${port}`);
```

## Example (Express)

```ts
import express from "express";
import { handleIPN } from "@open-payments-router/core/rest/handle-ipn/express";

const app = express();
app.use(express.json());
app.post("/opr/ipn", handleIPN);
app.get("/", (req, res) => res.send("OPR Express Example"));
app.listen(8000, () => console.log("Express app listening on http://localhost:8000"));
```

## Testing Your IPN Locally

Since the IPN is a webhook, it must be accessible from the internet. Localhost is not directly accessible by payment gateways. To test your integration during development, use a reverse proxy tool like tunnelmole, ngrok, localcan, zrok, or similar. These tools expose your local server to the internet over HTTPS.

**Example using tunnelmole:**

1. **Install tunnelmole:**

   ```bash
   pnpm install -g tunnelmole
   ```

2. **Start your local server:**

   ```bash
   pnpm dev
   ```

   This starts your server on localhost:8000, so your IPN endpoint is at http://localhost:8000/opr/ipn

3. **Expose your server:**

   ```bash
   tmole 8000
   ```

   This will give you a public URL, e.g. `https://amazing-url/opr/ipn`, which you can use as your IPN endpoint for testing.

**Note:** Free tiers of these proxy services may provide temporary URLs that change each session. Keep the session running to maintain the same URL during testing.

## Node.js ES Modules Note

If you use ES module imports in Node.js, ensure your `package.json` includes:

```json
{
  "type": "module"
}
```

## Next Steps

- See the example in `/examples/hono` for a working setup.
- Use a reverse proxy to test your IPN integration locally.
