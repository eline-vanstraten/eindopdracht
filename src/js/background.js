import { Actor, Vector, Sprite } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {

    sprite

    constructor(){
        super()

        this.graphics.use(Resources.Background.toSprite())
         this.anchor = new Vector(0,0)
    }
    

     onInitialize(engine){
        this.sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += .05 * delta;
    }
}