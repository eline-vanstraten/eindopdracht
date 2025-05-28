import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Taylor } from './taylor.js'
import { Brokenheart } from './brokenheart.js'
import { Ground } from './ground.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {

        let background = new Background()
        this.add(background)

        let taylor = new Taylor("Taylor")
        this.add(taylor)

        for (let i=0;i < 5; i++) {
            let brokenheart = new Brokenheart(Math.random() * 400 - 200)
            this.add(brokenheart)
        }

        let ground = new Ground()
        this.add(ground)




        // console.log("start de game!")
        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(500, 300)
        // fish.vel = new Vector(-10,0)
        // fish.events.on("exitviewport", (e) => this.fishLeft(e))
        // this.add(fish)
    }

    gameOver(){
         for(let actor of this.currentScene.actors) {
            console.log("Game over")
           actor.kill()
        }

         this.startGame()

    }

}

new Game()
