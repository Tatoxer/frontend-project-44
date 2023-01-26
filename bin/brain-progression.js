#!/usr/bin/env node

import playGame from '../src/games/gameEngine.js';
import generateProgressionData, { description } from '../src/games/progressionGame.js';

playGame(generateProgressionData, description);
