// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
        
    }
}





// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
        

    }

    attack(){
        return this.strength;
        
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health;
        this.health -= damage; 

        if(this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    
    battleCry(){
        return "Odin Owns You All!";
    }
}

const viking = new Viking(100,100);


// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength);

    }

    attack(){
        return this.strength;
        
    }

    receiveDamage(damage){
        this.damage = damage;
        this.health = this.health;
        this.health -= damage; 

        if(this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        } else 
            return `A Saxon has died in combat`
       
        
    }
}

const saxon = new Saxon(100,100);



// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }
    
    addSaxon(saxon){
        this.saxonArmy.push(saxon)

    }

    vikingAttack() {

        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomViking.attack();
        const hurtSaxon = randomSaxon.receiveDamage(damage);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return hurtSaxon;

    }

    saxonAttack(){
        //declarin the random index
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        //passing the randomnes to the array  
        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        
        const damage = randomSaxon.attack();
        const hurtViking = randomViking.receiveDamage(damage);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return hurtViking;

    }

    showStatus(){

        if(this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }

   
}





