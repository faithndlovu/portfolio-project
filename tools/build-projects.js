/* Writes the project cards from projects-data.js straight into the HTML,
   so they show up even when JavaScript is off (search engines, link
   previews, some recruiters' tools). The browser still refreshes them
   from the same data, so the site stays correct even if you forget to
   run this.

   Run it after editing projects-data.js:
       node tools/build-projects.js
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {} };
ctx.globalThis = ctx.window;
vm.createContext(ctx);
for (const f of ["projects-data.js", "projects-render.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f });
}
const { PROJECTS, ProjectCards } = ctx.window;

function inject(file, marker, html) {
  const p = path.join(root, file);
  const src = fs.readFileSync(p, "utf8");
  const re = new RegExp(`(<!-- ${marker}:START -->)[\\s\\S]*?(<!-- ${marker}:END -->)`);
  if (!re.test(src)) throw new Error(`${file}: markers <!-- ${marker}:START/END --> not found`);
  fs.writeFileSync(p, src.replace(re, `$1\n${html}\n$2`));
  console.log(`${file}: wrote ${marker}`);
}

inject("work.html", "PROJECTS", ProjectCards.workGrid(PROJECTS));
inject("index.html", "FEATURED", ProjectCards.featured(PROJECTS));
console.log(`${PROJECTS.length} projects, ${PROJECTS.filter((p) => p.featured).length} featured`);
