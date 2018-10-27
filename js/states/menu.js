/**
 * 单机练习按钮回调
 */
function practice() {
  this.game.state.start('practice')
}

/**
 * 好友对战按钮回调
 */
function battle() {
  console.log('battle')
}

/**
 * 排行榜按钮回调
 */
function rank() {
  console.log('rank')
}

function addMenu() {
  [
    [240, 750, "单机练习", practice],
    [240, 900, "好友约战", battle],
    [240, 1050, "好友排行", rank],
  ].map((btnConfig) => {
    go.common.addBtn({
      x: btnConfig[0],
      y: btnConfig[1],
      text: btnConfig[2],
      callback: btnConfig[3],
    })
  })
}

class Menu extends Phaser.State {
  create() {
    this.add.image(0, 0, 'bg_menu')
    addMenu()
  }
}

module.exports = Menu