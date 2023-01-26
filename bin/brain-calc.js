#!/usr/bin/env node

import generateCalcData, { description } from '../src/games/calcGame.js';
import playGame from '../src/games/gameEngine.js';

playGame(generateCalcData, description);
