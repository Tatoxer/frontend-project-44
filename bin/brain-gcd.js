#!/usr/bin/env node

import playGame from '../src/gameEngine.js';
import generateGCSData, { description } from '../src/games/gcd.js';

playGame(generateGCSData, description);
