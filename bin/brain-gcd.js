#!/usr/bin/env node

import playGame from './brain-games.js';
import generateGCSData, { description } from '../src/games/gcdGame.js';

playGame(generateGCSData, description);
