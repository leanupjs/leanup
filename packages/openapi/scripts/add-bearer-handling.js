const fs = require("fs");
let code = fs.readFileSync("typescript-rxjs/runtime.ts", {
  encoding: "utf8",
});
code = code.replace(
  /(this.createRequestArgs\(requestOpts\))/,
  "this.handleBearerToken($1)"
);
code = code.replace(
  /(private createRequestArgs = \(\{)/,
  `private handleBearerToken = (requestOpts: RequestArgs): RequestArgs => {
      const auth = this.configuration.accessToken("");
      if (typeof auth === "string") {
          requestOpts.headers = {
              ...requestOpts.headers,
              Authorization: 'Bearer ' + auth,
          };
      }
      return requestOpts;
    };

    $1`
);
fs.writeFileSync("typescript-rxjs/runtime.ts", code, {
  encoding: "utf8",
});
