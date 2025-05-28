import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Taylor } from './taylor.js'
import { Brokenheart } from './brokenheart.js'
import { Ground } from './ground.js'
import { UI } from './ui.js'

export class Game extends Engine {

    heartCooldown
    heartCounter
    ui

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

        let ground = new Ground()
        this.add(ground)


        this.heartCounter = 0 
        this.heartCooldown = 120


        this.ui = new UI()
        this.add(this.ui)

    }

    onPostUpdate(){
        this.heartCounter++
        if(this.heartCounter > this.heartCooldown){

            this.addHeart()
            this.heartCounter = 0   
            this.heartCooldown = 60 + Math.random() * 60     
        }
    }

    addHeart() {
        let brokenheart = new Brokenheart(Math.random() * 400 - 200)
        this.add(brokenheart)
    }

    gameOver() {
        for (let actor of this.currentScene.actors) {
            console.log("Game over")
            actor.kill()
        }

        this.startGame()

    }

}

new Game()
