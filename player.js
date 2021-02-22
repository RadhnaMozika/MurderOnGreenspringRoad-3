class Player{
    constructor(){
        this.body = createSprite(1310, 460, 20, 20);
            //9730, 8840, 20, 20)
            //1310, 460, 20, 20);

        //1 - at the gate, 2 - near hegann breweries
        this.earring1 = createSprite(4310, 2020, 20, 20);
        this.earring2 = createSprite(2350, 3320, 20, 20);

        this.fireRemains = createSprite(9730, 8840, 40, 40);

        this.scalpel = createSprite(2990, 4100, 20, 20);

        this.name = "player";

    }

    move(){
        if(keyDown("up")){
            this.body.y = this.body.y-20;
        }
        if(keyDown("down")){
            this.body.y = this.body.y+20;
        }
        if(keyDown("left")){
            this.body.x = this.body.x-20;
        }
        if(keyDown("right")){
            this.body.x = this.body.x+20;
        }

        camera.x = this.body.x;
        camera.y = this.body.y;

    }

    





}