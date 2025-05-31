import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'
import { Brokenheart } from './brokenheart.js'
import { Scarf } from './scarf.js'
import { Ground } from './ground.js'

export class Taylor extends Actor {

    #name
    lives
    #onGround

    constructor(name) {
        super({ width: Resources.Taylor.width, height: Resources.Taylor.height, collisionType: CollisionType.Active })

        this.graphics.use(Resources.Taylor.toSprite())
        this.pos = new Vector(200, 200)

        this.scale = new Vector(0.1, 0.1)
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)

        this.#name = name
        this.lives = 3
        this.#onGround = false
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.#hitHeart(event))
        this.on('collisionstart', (event) => this.#hitScarf(event))

        this.on('collisionstart', (event) => this.#hitGround(event))
         this.on('collisionend', (event) => this.#leaveGround(event))

    }

    #hitHeart(event) {
        if (event.other.owner instanceof Brokenheart) {

            this.lives--
            this.scene.engine.ui.showLives(this.lives)
            event.other.owner.wasHitByTaylor()

            if (this.lives <= 0) {
                this.scene.engine.gameOver()
            }

            if (this.lives < 3 ) {
                this.scene.engine.addScarf()
            }

             if(this.lives === 0){
                this.scene.engine.scarf.deleteScarf()
            }

        }
    }


    #hitScarf(event) {
        if (event.other.owner instanceof Scarf) {
            this.lives++
            this.scene.engine.ui.showLives(this.lives)
            event.other.owner.isHitByTaylor()
        }

    }

    #hitGround(event){
        if(event.other.owner instanceof Ground){
            this.#onGround = true
        }
    }

    #leaveGround(event){
        if(event.other.owner instanceof Ground){
            this.#onGround = false
        }
    }



    onPreUpdate(engine, delta) {

        if (engine.input.keyboard.wasPressed(Keys.Up) && this.#onGround) {

            this.body.applyLinearImpulse(new Vector(0, -300 * delta))
        }

    }

}