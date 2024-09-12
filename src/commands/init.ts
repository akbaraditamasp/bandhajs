import { Command } from "commander";
import degit from "degit";
import { resolve } from "path";

export default function init(program: Command) {
  return program
    .command("init")
    .description("Init new Bandha project")
    .argument("<destination>", "Destination of initialized project")
    .action(async (dest) => {
      const destPath = resolve(dest);
      console.log(`Scaffolding Bandha project in ${destPath}\n`);

      const emitter = degit("akbaraditamasp/bandha-skeleton", {});

      emitter.on("info", (info) => {
        console.log(info.message);
      });

      emitter.clone(destPath).then(() => {
        console.log(`✅ Done. Now run:\n`);
        console.log("cd " + dest);
        console.log("npm install");
        console.log("npm run dev");
      });
    });
}
