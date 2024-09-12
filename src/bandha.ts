#!/usr/bin/env node

import { Command } from "commander";
import commands from "./commands";

const program = new Command();

program
  .name("bandha")
  .description("Simple Moddable SDK Framework")
  .version("1.0.0");

for (const command of commands) {
  command(program);
}

program.parse();
