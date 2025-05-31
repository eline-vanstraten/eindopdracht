import { Actor, Vector, Sprite } from "excalibur"
import { Resources } from './resources.js'

export class Scarf extends Actor {

    constructor(x,y){
        super({x,y, width: Resources.Scarf.width, height: Resources.Scarf.height})

        this.graphics.use(Resources.Scarf.toSprite())
         this.pos = new Vector(x, y)
        this.scale = new Vector(0.1, 0.11)
         this.vel = new Vector(-300, 0)
    }

     isHitByTaylor(){
        console.log('i was hit by taylor, scarf')
        this.kill()
    }

    deleteScarf(){
        console.log("game over, scarf deletes")
        this.kill()
    }
    


}