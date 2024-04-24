import { App, setupApp } from "./App.js";

setupApp();

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill()
.lineStyle(4, 0xFFEA00, 1)
.drawRect(200, 200, 100, 120)
.endFill();
App.stage.addChild(rectangle);

const poly = new Graphics();
poly.beginFill(0xFF66FF)
.drawPolygon([
    600, 50,
    800, 150,
    900, 300,
    400, 400
])
.endFill();
App.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440, 200, 80)
.endFill();
App.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xFFEA00, 1)
.moveTo(1000, 100)
.lineTo(1500, 800)
App.stage.addChild(line);

