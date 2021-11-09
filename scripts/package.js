require("fs").writeFileSync(
  require('path').resolve(process.cwd(), process.argv[2], 'package.json'),
  `{
  "type": "${process.argv[3]}"
}
`,
  {
    encoding: "utf8",
  }
);
