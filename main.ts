let item = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Red))
            item.shift(1)
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
            item.shift(1)
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(100)
        }
    }
    for (let index = 0; index < 10; index++) {
        for (let index4 = 0; index4 <= 2; index4++) {
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Red))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Green))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Violet))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Purple))
            basic.pause(100)
        }
    }
    for (let index = 0; index < 20; index++) {
        for (let index6 = 0; index6 <= 2; index6++) {
            item.range(index6, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
            item.shift(1)
            basic.pause(30)
        }
    }
    for (let index = 0; index < 30; index++) {
        for (let index8 = 0; index8 <= 2; index8++) {
            item.range(index8, 1).showColor(neopixel.colors(NeoPixelColors.Purple))
            item.shift(1)
            basic.pause(20)
        }
    }
})
