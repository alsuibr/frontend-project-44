#!/usr/bin/env node

import askNameAndGreet from '../src/cli.js';

const welcomingMessage = () => {
    console.log("Welcome to the Brain Games!");
};

askNameAndGreet();

export default welcomingMessage;