#!/usr/bin/env node

import generateCalcData, { description } from '../src/games/calc.js';
import playGame from '../src/gameEngine.js';

playGame(generateCalcData, description);
