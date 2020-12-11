
class Ship {
    constructor(_id, _name, _points) {
        this.id = _id;
        this.name = _name;
        this.points = _points;
    }

    render() {
        return `
        <div>
            <h2>${this.name}</h2>
            <p>${this.points}xp</p>
        </div>
        `;
    }
}

    const shipArray = [
        new Ship(0, "M", 100), 
        new Ship(1, "D", 80),
        new Ship(2, "D", 80),
        new Ship(3, "D", 80),
        new Ship(4, "D", 80),
        new Ship(5, "D", 80),
        new Ship(6, "A", 45),
        new Ship(7, "A", 45),
        new Ship(8, "A", 45),
        new Ship(9, "A", 45),
        new Ship(10, "A", 45),
        new Ship(11, "A", 45),
        new Ship(12, "A", 45),
        new Ship(13, "A", 45),
    ]

button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 14)
    const shipHit = shipArray.find((ship) => {
        if(randomNumber === ship.id) {
            return ship;
        }
    });

    if(shipHit.name === "M") {
        console.log("Mothership hit!");
        shipHit.points -= 9;
        console.log(shipHit.points);
    } else if(shipHit.name === "D") {
        console.log("Defenceship hit!");
        shipHit.points -= 10;
        console.log(shipHit.points);
    } else if(shipHit.name === "A") {
        console.log("Attackship hit!");
        shipHit.points -= 12;
        console.log(shipHit.points);
    }
})

const printShips = shipArray.forEach(ship => {
    document.getElementById("ships").innerHTML += ship.render();
});