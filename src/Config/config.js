import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'space_shooter',
  width: 800,
  height: 600,
  pixelArt: true,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};