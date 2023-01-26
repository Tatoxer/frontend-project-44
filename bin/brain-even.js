#!/usr/bin/env node

import playGame from '../src/games/gameEngine.js';
import evenGame, { rules } from '../src/games/evenGame.js';

playGame(evenGame, rules);
