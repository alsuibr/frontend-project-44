#!/usr/bin/env node
import { getCalcParametersForEngine } from "../src/games/brain-calc-script.js";
import { runEngine } from "../src/index.js";

getCalcParametersForEngine();
runEngine()
