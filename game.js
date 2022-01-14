let game = {



// organiza as cartas e veifica se está corretp

    lockMode: false,
    firstCard: null,
    secondCard: null,


    setCard: function (id)
    {
        
        let card = this.cards.filter( (card) => card.id === id)[0];

        console.log(card)

        if(card.flipped || this.lockMode)
        {return false;}

        if(!this.firstCard)
        {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;

        }else{

            this.secondCard = card;
            this.secondCard.flipped = true;

            this.lockMode = true;
            return true;
        }

    },
    


    checkMatch: function()
    {
        // if(!this.firstCard || !this.secondCard){return false}
        return this.firstCard.icon === this.secondCard.icon;
    },



    clearCards : function ()
    {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },



    unflipCards()
    {
        
     this.firstCard.flipped = false;
     this.secondCard.flipped = false
     this.clearCards();
    },



    checkGameOver()
    {   console.log(this.cards.filter((card) => !card.flipped).length);
        return this.cards.filter((card) => !card.flipped).length == 0;}

    ,


    // CRIAR as cartas e embaralhar as CARTAS



    apps: ['a','b','c','d','e','f','g','h','i','j'],
    cards : null,


    createCardsFromApps: function ()
{

    this.cards=[];
    this.apps.forEach((app)=>{


        this.cards.push(this.createPairFromApp(app));

                             }
                     )
    
    console.log(this.cards.flatMap(app => app))
    this.cards = this.cards.flatMap(app => app)
    this.shuffleCards();
    // return this.cards
},



// cria dus cartas com o mesmo nome no inicio

createPairFromApp:function(app)
{
    return [{id: this.createIdWithApp(app),icon: app, flipped:false},{id: this.createIdWithApp(app),icon: app,flipped:false}]
},


// criar os ids 

createIdWithApp: function(app)
{
return app + parseInt(Math.random() * 1000); 
},  


// funcao que embaralha as cartas



shuffleCards: function ()
{


let currentIndex = this.cards.length;
let randomIndex = 0;
while(currentIndex != 0){

randomIndex =Math.floor(Math.random() * currentIndex);
currentIndex--;

[this.cards[currentIndex],this.cards[randomIndex]] = [this.cards[randomIndex],this.cards[currentIndex]]

                        }
}


// fim do objecto

}