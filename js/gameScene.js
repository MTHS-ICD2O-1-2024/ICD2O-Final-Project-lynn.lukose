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

    // used gemini
    this.firstCard = null
    this.secondCard = null
    this.canFlip = true
    this.flippedCardsCount = 0 // To track how many cards are currently face-up
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
    this.load.image('cardBack', './assets/facedown.png')
    this.load.image('five_hearts', './assets/five_hearts.png')
    this.load.image('seven_clubs', './assets/4.png')
    this.load.image('three_spades', './assets/5.png')

    // create some variables and do some random numbers to pick the cards
  }

  create (data) {
    this.background = this.add.image(0, 0, 'bodyBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.cardOne = this.add.sprite(1920 / 2 - 500, 1080 / 2 - 250, 'cardBack')
    this.cardOne.faceTexture = 'five_hearts'
    this.cardOne.isFlipped = false 
    this.cardOne.isMatched = false 
    this.cardOne.setInteractive({ useHandCursor: true })
    this.cardOne.on('pointerdown', () => this.flipCard(this.cardOne)) 

    this.cardTwo = this.add.sprite(1920 / 2, 1080 / 2 - 250, 'cardBack')
    this.cardTwo.faceTexture = 'seven_clubs'
    this.cardTwo.isFlipped = false
    this.cardTwo.isMatched = false
    this.cardTwo.setInteractive({ useHandCursor: true })
    this.cardTwo.on('pointerdown', () => this.flipCard(this.cardTwo))

    this.cardThree = this.add.sprite(1920 / 2 + 500, 1080 / 2 - 250, 'cardBack')
    this.cardThree.faceTexture = 'three_spades'
    this.cardThree.isFlipped = false
    this.cardThree.isMatched = false
    this.cardThree.setInteractive({ useHandCursor: true })
    this.cardThree.on('pointerdown', () => this.flipCard(this.cardThree))

    this.cardFour = this.add.sprite(1920 / 2 + 500, 1080 / 2 + 250, 'cardBack')
    this.cardFour.faceTexture = 'five_hearts'
    this.cardFour.isFlipped = false
    this.cardFour.isMatched = false
    this.cardFour.setInteractive({ useHandCursor: true })
    this.cardFour.on('pointerdown', () => this.flipCard(this.cardFour))

    this.cardFive = this.add.sprite(1920 / 2, 1080 / 2 + 250, 'cardBack')
    this.cardFive.faceTexture = 'seven_clubs'
    this.cardFive.isFlipped = false
    this.cardFive.isMatched = false
    this.cardFive.setInteractive({ useHandCursor: true })
    this.cardFive.on('pointerdown', () => this.flipCard(this.cardFive))

    this.cardSix = this.add.sprite(1920 / 2 - 500, 1080 / 2 + 250, 'cardBack')
    this.cardSix.faceTexture = 'three_spades'
    this.cardSix.isFlipped = false
    this.cardSix.isMatched = false
    this.cardSix.setInteractive({ useHandCursor: true })
    this.cardSix.on('pointerdown', () => this.flipCard(this.cardSix))
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

  /**
   * Sourced by Google Gemini
   * Handles the logic for flipping a single card.
   * This function manages the game flow for a turn.
   * @param {Phaser.GameObjects.Sprite} card - The specific card sprite that was clicked.
   */
  flipCard(card) {
    // If cards cannot be flipped (e.g., two are already face-up awaiting a check),
    // or if the clicked card is already face-up, or if it's already part of a matched pair,
    // then do nothing.
    if (!this.canFlip || card.isFlipped || card.isMatched) {
      return // Exit the function early
    }

    // Change the card's visual texture to its hidden face texture
    card.setTexture(card.faceTexture)
    card.isFlipped = true // Mark this card as currently flipped (face-up)

    // Check if this is the first or second card flipped in the current turn
    if (this.flippedCardsCount === 0) {
      // This is the first card of the turn
      this.firstCard = card // Store a reference to this card
      this.flippedCardsCount++ // Increment the counter
    } else if (this.flippedCardsCount === 1) {
      // This is the second card of the turn
      this.secondCard = card // Store a reference to this card
      this.flippedCardsCount++ // Increment the counter
      this.canFlip = false // Prevent any more cards from being clicked until this pair is processed

      // After a short delay (e.g., 1 second), call the 'checkForMatch' function.
      // The 'this' argument ensures that 'this' inside 'checkForMatch' refers to the scene.
      this.time.delayedCall(1000, this.checkForMatch, this)
    }
  }

  /**
   * Compares the two flipped cards to see if they are a match.
   * Resets the game state for the next turn.
   */
  checkForMatch() {
    // Check if the face textures of the two flipped cards are the same
    if (this.firstCard.faceTexture === this.secondCard.faceTexture) {
      // It's a match!
      // Make these matched cards unclickable so they stay face-up and don't interfere with gameplay
      this.firstCard.disableInteractive()
      this.secondCard.disableInteractive()
      // Mark them as matched cards
      this.firstCard.isMatched = true
      this.secondCard.isMatched = true
      // Removed: matchesFound++ and win condition check
    } else {
      // Not a match!
      // Flip both cards back to their face-down texture
      this.firstCard.setTexture('cardBack')
      this.secondCard.setTexture('cardBack')
      // Mark them as not flipped
      this.firstCard.isFlipped = false
      this.secondCard.isFlipped = false
    }

    // Reset for the next turn:
    this.firstCard = null // Clear the reference to the first card
    this.secondCard = null // Clear the reference to the second card
    this.flippedCardsCount = 0 // Reset the counter for flipped cards
    this.canFlip = true // Allow cards to be clicked again
  }
}

export default GameScene
