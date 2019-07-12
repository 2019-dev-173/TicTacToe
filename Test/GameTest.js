describe("Tic Tac Toe Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("allows only first player to start", function() {
    expect(game.currentPlayer()).toEqual("first");
  })

  it("switches player after first turn", function() {
    game.put("first", [1, 1]);
    expect(game.currentPlayer()).toEqual("second");
  })

  it("switches player after each turn", function() {
    game.put("first", [1, 1]);
    game.put("second", [1, 2]);

    expect(game.currentPlayer()).toEqual("first");
  })

describe("winColumn(fields)", function() {
    it("is not a win when fields is empty", function() {
      expect(game.winColumn([])).toEqual(false);
    })  
