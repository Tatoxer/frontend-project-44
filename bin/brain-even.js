#!/usr/bin/env node

import playGame from '../src/gameEngine.js';
import evenGame, { description } from '../src/games/even.js';

playGame(evenGame, description);
