namespace SpriteKind {
    export const scenario = SpriteKind.create()
}
// Eating a strawberry or a cherry gives 1 point
// 
// Eating taco gives 10 points
// 
// If you try to eat the death pill you will lose a life, but gain 15 points.
// 
// Princess, you have 60 seconds and 3 life to finish the game.
function randomAssets2 () {
	
}
// Eating a strawberry or a cherry gives 1 point
// 
// Eating taco gives 10 points
// 
// If you try to eat the death pill you will lose a life, but gain 15 points.
// 
// Princess, you have 60 seconds and 3 life to finish the game.
function randomAssets () {
    lata = sprites.create(assets.image`myImage9`, SpriteKind.Food)
    lata.x = randint(0.4, scene.screenWidth())
    lata.y = randint(0.4, scene.screenWidth())
    lata.setScale(0.8, ScaleAnchor.Middle)
    papel = sprites.create(assets.image`myImage8`, SpriteKind.Food)
    papel.setScale(0.5, ScaleAnchor.Middle)
    papel.x = randint(1, scene.screenWidth())
    papel.y = randint(1, scene.screenWidth())
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() == 60) {
        game.gameOver(true)
    }
})
function initializeLevel (level: number) {
	
}
let papel: Sprite = null
let lata: Sprite = null
info.setLife(3)
info.startCountdown(60)
let mySprite3 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f e f f 8 8 e e f f 8 f f 
    f 8 f f 8 8 e e e e f f e f 
    f f f e 3 e e e e 3 e f f f 
    . f 3 3 e e e e e e 3 3 f . 
    . f e e e e 4 4 8 e e e f . 
    . f f 8 e 4 4 4 4 8 8 f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f 4 4 f 1 4 f f . 
    . . f f 3 4 4 4 4 3 f f . . 
    . . 8 f e 4 4 4 4 e f e . . 
    . . 4 f a 3 3 3 3 a f 4 . . 
    . . 4 f 3 3 3 3 3 3 f 4 . . 
    . . 4 f a a a a a a f 4 . . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite3.setScale(1.5, ScaleAnchor.Middle)
controller.moveSprite(mySprite3, 60, 60)
scene.setBackgroundImage(assets.image`myImage2`)
let arvore = sprites.create(assets.image`myImage0`, SpriteKind.scenario)
arvore.setPosition(145, 55)
arvore = sprites.create(assets.image`myImage0`, SpriteKind.scenario)
arvore.setPosition(16, 55)
let garrafa = sprites.create(assets.image`myImage7`, SpriteKind.Food)
garrafa.setPosition(74, 91)
garrafa.setScale(0.5, ScaleAnchor.Middle)
let lixeira = sprites.create(assets.image`myImage10`, SpriteKind.Player)
lixeira.setScale(0.7, ScaleAnchor.Middle)
lixeira.setPosition(139, 96)
game.onUpdateInterval(2000, function () {
    randomAssets()
})
