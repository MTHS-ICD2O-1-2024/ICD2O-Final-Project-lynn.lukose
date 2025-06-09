/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: Apr 2025
// This is the Game Scene

/**
 * This class is the Game Scene scene
 */

class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.cardOne = null
    this.cardTwo = null
    this.cardThree = null
    this.cardFour = null
    this.cardFive = null
    this.cardSix = null
  }

  /**
   * Can be defined on your own scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init (data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  /**
   * Can be defined on your own scenes.
   * Use it to load assets.
   */
  preload () {
    console.log('Game Scene')

    this.load.image('bodyBackground', './assets/bodybg.png')
    this.load.image('cardOne', )
  }

  create (data) {
    this.background = this.add.image(0, 0, 'bodyBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
  }

  /**
   * should be overridden by my own scenes.
   * method called once per game step while scene is running.
   * @param {number} time - current time.
   * @param {number} delta - The delta time in ms since last frame.
   */
  update (time, delta) {
    // pass
  }
}

export default GameScene
