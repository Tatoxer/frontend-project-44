#!/usr/bin/env node

import playGame from '../src/games/gameEngine.js';
import generateGCSData, { description } from '../src/games/gcdGame.js';

playGame(generateGCSData, description);
