describe('ChessboardView', function() {
  var view;

  beforeEach(function() {
    view = new BoardView({model: new Board({n: 8})});
  });

  it('should exist', function() {
    expect(view).to.be.ok;
  });
});
