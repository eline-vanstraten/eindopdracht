import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'
import { Brokenheart } from './brokenheart.js'

export class Taylor extends Actor {
    constructor(name) {
        super({ width: Resources.Taylor.width, height: Resources.Taylor.height, collisionType: CollisionType.Active })

        let x = Math.random() * -500
        let y = Math.random() * 450

        console.log("I am Taylor")
        this.graphics.use(Resources.Taylor.toSprite())
        this.pos = new Vector(200,200)   // positie
        // this.vel = new Vector(20,0)   

        // let sc = Math.random() * 2 + 0.2
        this.scale = new Vector(0.1, 0.1)
         this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation) 

         this.name = name
    }

        // this.pos = new Vector(300, 315)
        // this.baseSpeed = 10
        // this.vel = new Vector(200, 0)

        onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitHeart(event))
    }

    hitHeart(event){
        if (event.other.owner instanceof Brokenheart) {
            console.log(`${this.name} hits a heart`)
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            // console.log('hit Fish')
            // event.other.owner.kill()
            // Resources.NomNom.play()

            // this.score++

            // //game aanroepen
            // this.scene.engine.ui.showScore(this.player, this.score)

            this.scene.engine.gameOver()
        }
    }


    // }

   

    onPreUpdate(engine, delta) {
//    let xspeed = 0
//         let yspeed = 0
//         let kb = engine.input.keyboard

//         if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
//             yspeed = -300
//         }
//         if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
//             yspeed = 300
//         }
//         // if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
//         //     xspeed = -300
//         //     this.graphics.flipHorizontal = true       // flip de sprite
//         // }
//         // if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
//         //     xspeed = 300
//         //     this.graphics.flipHorizontal = false      // flip de sprite
//         // }
//         this.vel = new Vector(xspeed, yspeed)

        if (engine.input.keyboard.wasPressed(Keys.Up)) {
           
            this.body.applyLinearImpulse(new Vector(0, -300 * delta))
        }
        //  if (engine.input.keyboard.wasPressed(Keys.A)) {
           
        //     this.body.applyLinearImpulse(new Vector(-300 * delta, 0))
        // }
        //  if (engine.input.keyboard.wasPressed(Keys.D)) {
           
        //     this.body.applyLinearImpulse(new Vector(300 * delta, 0))
        // }
        }

}