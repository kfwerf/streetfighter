import Pixi from 'pixi'; // eslint-disable-line no-unused-vars
import P2 from 'p2'; // eslint-disable-line no-unused-vars
import Phaser from 'phaser';

import shared from './shared';
import preload from './preload';
import create from './create';
import update from './update';

shared.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload,
  create,
  update,
});
