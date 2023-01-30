#!/usr/bin/env node

import playGame from '../src/gameEngine.js';
import generateProgressionData, { description } from '../src/games/progression.js';

playGame(generateProgressionData, description);
