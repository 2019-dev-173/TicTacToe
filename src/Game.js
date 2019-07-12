function Game() {
  this.current_player = "first"
  this.fields = { first: [], second: [] }
}

Game.prototype.currentPlayer = function() {
  return this.current_player
}

Game.prototype.put = function(player, field) {
  this.fields[player].push(field)
  if (this.currentPlayer() == "first") {
    this.current_player = "second"
  } else {
    this.current_player = "first"
  }
}
