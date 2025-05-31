import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat}),
    Taylor: new ImageSource('images/taylor.png'),
    Brokenheart: new ImageSource('images/brokenheart.png'),
    Ground: new ImageSource('images/ground.png'),
    Scarf: new ImageSource('images/scarf.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }