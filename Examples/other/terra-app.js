var gameOfLife = new terra.Terrarium(100, 100, {
  trails: Math.random(),
  periodic: true,
  background: [22, 22, 22],
});

terra.registerCA(
  {
    type: "GoL",
    colorFn: function () {
      return this.alive ? this.color + ",1" : "0,0,0,0";
    },
    process: function (neighbors, x, y) {
      var surrounding = neighbors.filter(function (spot) {
        return spot.creature.alive;
      }).length;
      this.alive = surrounding === 3 || (surrounding === 2 && this.alive);
      return true;
    },
  },
  function () {
    this.alive = Math.random() < Math.random();
  }
);

gameOfLife.grid = gameOfLife.makeGrid("GoL");
gameOfLife.animate();
