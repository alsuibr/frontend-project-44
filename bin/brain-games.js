#!/usr/bin/env node

const welcomingMessage = () => {
    console.log("Welcome to the Brain Games!");
};

welcomingMessage();

import { getPlayerNameAndGreet } from '../src/cli.js';

// getPlayerNameAndGreet();

export default welcomingMessage;