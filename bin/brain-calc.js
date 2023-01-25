#!/usr/bin/env node

import { getCalcParametersForEngine , gameExplanation, generateTheQuestion, getCorrectAnswer } from "../src/games/brain-calc-script.js";
import { runEngine  } from "../src/index.js";

getCalcParametersForEngine();
runEngine(gameExplanation, generateTheQuestion, getCorrectAnswer);
