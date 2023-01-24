#!/usr/bin/env node

import playGame from './brain-games.js';
import primeGame, { rules } from '../src/games/primeGame.js';

playGame(primeGame, rules);
