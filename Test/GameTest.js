describe("Tic Tac Toe Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("allows only first player to start", function() {
    expect(game.currentPlayer()).toEqual("first");
  })
