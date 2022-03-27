class Box{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var box_options = {
            friction: 1,
            density: 1
        }

        this.body = Bodies.rectangle(x,y,w,h,box_options)
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        push();
    rectMode(CENTER);
    
    fill('green');
    rect(pos.x, pos.y, this.w, this.h);
    pop();

    }

}