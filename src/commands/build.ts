import { Command } from "commander";
import esbuild from "esbuild";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export default function build(program: Command) {
  return program
    .command("build")
    .description("Build Bandha projects for flashing to device")
    .action(async () => {
      const entryPath = resolve("src", "main.ts");
      const outPath = resolve(".tmp", "main.js");

      await esbuild.build({
        entryPoints: [entryPath],
        bundle: true,
        platform: "neutral",
        outfile: outPath,
        external: ["#moddable"],
        minify: true,
        plugins: [
          {
            name: "post-process",
            setup(build) {
              build.onEnd(() => {
                if (existsSync(resolve(".tmp", "main.js"))) {
                  const file = readFileSync(
                    resolve(".tmp", "main.js"),
                    "utf-8"
                  );
                  const contents = file.replace(/#moddable\//gm, "");

                  writeFileSync(resolve(".tmp", "main.js"), contents);
                }
              });
            },
          },
        ],
      });

      console.log("✅ Build complete");
    });
}
