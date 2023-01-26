#!/usr/bin/env node

import playGame from '../src/games/gameEngine.js';
import primeGame, { description } from '../src/games/primeGame.js';

playGame(primeGame, description);
