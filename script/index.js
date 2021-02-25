//Global variables..
const canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = innerWidth - 2;
canvas.height = innerHeight - 4;

canvas.style.cursor = 'none';

//Game objects..
let player;
let projectiles = [];
let enemies = [];
let particles = [];

//Player Properties..
const width = 40;
const height = 20;
const x = canvas.width / 2 - width / 2;
const y = canvas.height - height - height /2;
const color = 'white';


