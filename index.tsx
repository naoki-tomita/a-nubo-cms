import { root, get, path, Request, Response, listen } from "summer-framework";
import { renderToText, h } from "zheleznaya";

const App = () => {
  return (
    <html lang="en">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      hello world
    </body>
    </html>
  );
}

@root("")
class Root {
  @get
  @path("/entries/:id")
  async path(req: Request<{ id: string }>) {
    const { id } = req.params;
    const html = renderToText(<App />);
    return new Response()
      .status(200)
      .headers({ "content-type": "text/html" })
      .body(html);
  }
}

async function main() {
  await listen(8080);
}

main();
