#!/usr/bin/env node

import playGame from './brain-games.js';
import brainGCD, { rules } from '../src/games/gcdGame.js';

playGame(brainGCD, rules);
