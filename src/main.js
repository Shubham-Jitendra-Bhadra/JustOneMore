import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import MenuScene from './scenes/MenuScene'
import GameScene from './scenes/GameScene'
import GameOverScene from './scenes/GameOverScene'
import { gameConfig } from './config/gameConfig'

const config = {
  type: Phaser.AUTO,
  width: gameConfig.width,
  height: gameConfig.height,
  backgroundColor: gameConfig.backgroundColor,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: gameConfig.gravity },
      debug: gameConfig.debug,
    },
  },
  scene: [BootScene, MenuScene, GameScene, GameOverScene],
}

new Phaser.Game(config)