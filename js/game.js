/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: Apr 2025
// This is the Phaser3 game configuration file

// statements for scene import
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

// create the new scenes
const menuScene = new MenuScene()
const gameScene = new GameScene()
/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
  // at the center of page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)

// the scart scene
game.scene.start('menuScene')
