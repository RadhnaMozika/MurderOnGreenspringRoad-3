class Choice{
    constructor(){
        this.pabst = createSprite(width/2-400, height/2, 200, 200);
        this.patterson = createSprite(width/2, height/2, 200, 200);
        this.hegann = createSprite(width/2+400, height/2, 200, 200);

        this.pabst.visible = false;
        this.patterson.visible = false;
        this.hegann.visible = false;
    }

    answer(){

        this.pabst.visible = true;
        this.pabst.addImage(pabstImg);
        this.pabst.scale = 0.5;

        this.patterson.visible = true;
        this.patterson.addImage(pattersonImg);
        this.patterson.scale = 0.5;

        this.hegann.visible = true;
        this.hegann.addImage(hegannImg);
        this.hegann.scale = 0.5;
        
        if(mousePressedOver(this.pabst)){
            answer = 1;
        }
        if(mousePressedOver(this.patterson)){
            answer = 2;
        }
        if(mousePressedOver(this.hegann)){
            answer = 3;
        }

        if(answer === 1){
            gameState = 3;
        }
        else if(answer === 2){
            gameState = 4;
        }
        else if(answer === 3){
            gameState = 4;
        }
        else{
            gameState = 2;
        }
    }

    remove(){
        this.pabst.remove();
        this.patterson.remove();
        this.hegann.remove();
    }

}