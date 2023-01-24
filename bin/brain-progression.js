#!/usr/bin/env node

import playGame from './brain-games.js';
import brainProgression, { rules } from '../src/games/progressionGame.js';

playGame(brainProgression, rules);
