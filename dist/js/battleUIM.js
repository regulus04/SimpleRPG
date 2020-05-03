import { Monster } from './Monsters.js';

const commandList = document.getElementById('command-list');
const heroAttack1 = document.querySelector('#action-1');
const heroAttack2 = document.querySelector('#action-2');
const heroAttack3 = document.querySelector('#action-3');
const heroAttack4 = document.querySelector('#action-4');
const heroHpText = document.querySelector('#hero-hp');
const heroMpText = document.querySelector('#hero-mp');
const heroMoveBox = document.querySelector('#player-box'); 
const heroHp = document.querySelector('#hero-hp');
const enemyMoveBox = document.querySelector('#enemy-box');
const enemyName = document.querySelector('#enemy-name');
const enemyHp = document.querySelector('#enemy-hp');
const enemyTurn = document.querySelector('#enemy-turn');

// Encount 