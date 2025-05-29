import { Actor, Vector, Sprite, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Brokenheart extends Actor {


    constructor() {
        super({ radius: Resources.Brokenheart.width/2 })
        let x = 800 
        let y = 338

        this.graphics.use(Resources.Brokenheart.toSprite())

        this.scale = new Vector(0.15, 0.15)

        this.pos = new Vector(x, y)
        this.vel = new Vector(-200, 0)

        this.events.on("exitviewport", (e) => this.brokenheartLeft(e))


    }

    brokenheartLeft(e) {
       this.kill()
    }

    wasHitByTaylor(){
        console.log('i was hit by taylor')
        this.kill()
    }


}