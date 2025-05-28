import { Actor, Vector, Sprite, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Ground extends Actor {

    sprite

    constructor(){
        super({
            pos: new Vector(400, 407), // adjust Y position for your ground level
            width: 800,
            height: 87,
            collisionType: CollisionType.Fixed // doesn't move
        })

        this.graphics.use(Resources.Ground.toSprite())
        // this.pos = new Vector(400, 450/2)
        // this.scale = new Vector(0.6, 0.6)
    }
    

    //  onInitialize(engine){
    //     this.sprite = new Sprite({
    //         image: Resources.Ground,
    //         sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
    //     })
    //     this.anchor = Vector.Zero
    //     this.graphics.use(this.sprite)
    // }

    // onPostUpdate(engine, delta) {
    //     this.sprite.sourceView.x += .05 * delta;
    // }
}