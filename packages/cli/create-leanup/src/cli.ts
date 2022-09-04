#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

const caveat = `
Your app on leanup stack has been created successfully!
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-leanup", {
  templateRoot,
  defaultTemplate: "react",
  defaultPackageManager: "pnpm",
  promptForPackageManager: true,
  promptForTemplate: true,
  caveat,
});
