#!/usr/bin/env node

import playGame from './brain-games.js';
import evenGame, { rules } from '../src/games/evenGame.js';

playGame(evenGame, rules);
