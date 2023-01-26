#!/usr/bin/env node

import generateCalcData, { description } from '../src/games/calcGame.js';
import playGame from './brain-games.js';

playGame(generateCalcData, description);
