#!/usr/bin/env node

import playGame from '../src/gameEngine.js';
import primeGame, { description } from '../src/games/prime.js';

playGame(primeGame, description);
