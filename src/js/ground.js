import { Actor, Vector, Sprite, CollisionType } from "excalibur"

export class Ground extends Actor {


    constructor(){
        super({ width: 800, height: 87, collisionType: CollisionType.Fixed })

        this.pos = new Vector(400, 407)

    }
    
}