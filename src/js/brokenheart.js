import { Actor, Vector, Sprite, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Brokenheart extends Actor {


    constructor() {
        super({width: Resources.Brokenheart.width, height: Resources.Brokenheart.height})
        let x = 800 + Math.random() * 300
        let y = 327

        this.graphics.use(Resources.Brokenheart.toSprite())

        this.scale = new Vector(0.2, 0.2)

        this.pos = new Vector(400 + x, y)
        this.vel = new Vector(-200, 0)

        this.events.on("exitviewport", (e) => this.brokenheartLeft(e))


    }

    brokenheartLeft(e) {
        let x = Math.random() * 300
        let y = 327
        e.target.pos = new Vector(800 + x, y)
    }


}