require('./js/libs/weapp-adapter')
window.p2 = require('./js/libs/p2')
window.PIXI = require('./js/libs/pixi')
window.Phaser = require('./js/libs/phaser-split')

// 定义全局常量
window.WIDTH = 750 // 游戏宽度
window.SCALE = WIDTH / canvas.width // 游戏宽度/ canvas 宽度
window.HEIGHT = canvas.height * SCALE // 游戏高度

window.go = {
  game: null,
  userInfo: null,
  opponentInfo: null, // 对手信息
  common: require('./js/common.js'), // 公共函数
  server: null, // 与服务器的交互
  launchRoomId: null, // 进入主菜单时需要加入的房间 id
  battle: null, // 对战状态
}

const config = {
  width: WIDTH,
  height: HEIGHT,
  renderer: Phaser.CANVAS,
  canvas: canvas
}

const game = new Phaser.Game(config)
go.game = game

game.state.add('start', require('./js/states/start'))
game.state.add('menu', require('./js/states/menu'))
game.state.add('practice', require('./js/states/practice'))
game.state.start('start')