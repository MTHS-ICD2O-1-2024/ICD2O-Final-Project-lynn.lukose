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
    this.load.image('cardOne', './assets/facedown.png')
    this.load.image('cardTwo', './assets/facedown.png')
    this.load.image('cardThree', './assets/facedown.png')
    this.load.image('cardFour', './assets/facedown.png')
    this.load.image('cardFive', './assets/facedown.png')
    this.load.image('cardSix', './assets/facedown.png')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'bodyBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.cardOne = this.add.sprite(1920 / 2 - 500 , 1080 / 2 - 250, 'cardOne')
    this.cardOne.setInteractive({ useHandCursor: true })
    this.cardOne.on('pointerdown', () => this.clickButton())

    this.cardTwo = this.add.sprite(1920 / 2, 1080 / 2 - 250, 'cardTwo')
    this.cardTwo.setInteractive({ useHandCursor: true })
    this.cardTwo.on('pointerdown', () => this.clickButton())

    this.cardThree = this.add.sprite(1920 / 2 + 500, 1080 / 2 - 250, 'cardThree')
    this.cardThree.setInteractive({ useHandCursor: true })
    this.cardThree.on('pointerdown', () => this.clickButton())

    this.cardFour = this.add.sprite(1920 / 2 + 500, 1080 / 2 + 250, 'cardFour')
    this.cardFour.setInteractive({ useHandCursor: true })
    this.cardFour.on('pointerdown', () => this.clickButton())

    this.cardFive = this.add.sprite(1920 / 2, 1080 / 2 + 250, 'cardFive')
    this.cardFive.setInteractive({ useHandCursor: true })
    this.cardFive.on('pointerdown', () => this.clickButton())

    this.cardSix = this.add.sprite(1920 / 2 - 500, 1080 / 2 + 250, 'cardSix')
    this.cardSix.setInteractive({ useHandCursor: true })
    this.cardSix.on('pointerdown', () => this.clickButton())
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
