import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'
import { Brokenheart } from './brokenheart.js'

export class Taylor extends Actor {

    name

    constructor(name) {
        super({ width: Resources.Taylor.width, height: Resources.Taylor.height, collisionType: CollisionType.Active })

        console.log("I am Taylor")
        this.graphics.use(Resources.Taylor.toSprite())
        this.pos = new Vector(200,200)  
       
        this.scale = new Vector(0.1, 0.1)
         this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation) 

         this.name = name
    }

        onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitHeart(event))
    }

    hitHeart(event){
        if (event.other.owner instanceof Brokenheart) {
            console.log(`${this.name} hits a heart`)
            // event.other.owner.kill()


            // //game aanroepen
            // this.scene.engine.ui.showScore(this.player, this.score)

            this.scene.engine.gameOver()
        }
    }



    // }

   

    onPreUpdate(engine, delta) {

        if (engine.input.keyboard.wasPressed(Keys.Up)) {
           
            this.body.applyLinearImpulse(new Vector(0, -300 * delta))
        }
       
        }

}