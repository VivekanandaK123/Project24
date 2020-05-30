class Ground {
   constructor(x,y,width,hight){

    var options = {
        isStatic:true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 800;
    this.height = 20;

    World.add(world,this.body);
   }



display(){

    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, 800, 20);

}
}