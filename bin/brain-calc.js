#!/usr/bin/env node

import brainCalc, { rules } from '../src/games/calcGame.js';
import playGame from './brain-games.js';

playGame(brainCalc, rules);
