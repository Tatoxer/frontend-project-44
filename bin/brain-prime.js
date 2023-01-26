#!/usr/bin/env node

import playGame from './brain-games.js';
import primeGame, { description } from '../src/games/primeGame.js';

playGame(primeGame, description);
