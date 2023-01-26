#!/usr/bin/env node

import playGame from './brain-games.js';
import generateProgressionData, { description } from '../src/games/progressionGame.js';

playGame(generateProgressionData, description);
