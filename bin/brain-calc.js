#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playerName } from "../src/cli.js";
import { explainTheGame , generateTheQuestion, getCorrectAnswer } from '../src/games/brain-calc-script.js';
import { getRandomNumber } from '../src/utils.js';
import { runAnyGame } from '../src/utils.js';

getCorrectAnswer();
runAnyGame();