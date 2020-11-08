class Food{
    constructor(x,y, width, height){
        var options = {

        }
        this.foodStock = Bodies.rectangle(x, y, w, h, options);
        this.lastFed = Bodies.rectangle(x, y, w, h, options);
        this.image = loadImage("images/milk.png");
    }
}