const attackButton = document.getElementById("attack-button");
const resetButton = document.getElementById("reset-button");

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

shipArray.forEach(ship => {
    document.getElementById("ships").innerHTML += ship.render();
});

attackButton.addEventListener("click", () => {
    const mothership = shipArray.find(ship => ship.id === 0);
    let randomNumber = Math.floor(Math.random() * 14)
    const liveShips = shipArray.filter((ship) => ship.points);
    const shipHit = liveShips.find((ship) => {
        if(randomNumber === ship.id && ship.points > 0) {
            return ship;
        } else {
            return null;
        }
    });

    if(shipHit.name === "M") {
        console.log("Mothership hit!");
        shipHit.points -= 9;
    } else if(shipHit.name === "D") {
        console.log("Defenceship hit!");
        shipHit.points -= 10;
    } else if(shipHit.name === "A") {
        console.log("Attackship hit!");
        shipHit.points -= 12;
    } else {
        console.log("Missed hit!");
    }

    if(shipHit.points < 0) {
        shipHit.points = 0;
    }
    if(mothership.points === 0) {
        shipArray.forEach(ship => {
            ship.points = 0;
        })
        alert("MOTHERSHIP DESTROYED, YOU HAVE SAVED PLANET EARTH")
    }
    document.getElementById("ships").innerHTML = ""
    shipArray.forEach(ship => {
        document.getElementById("ships").innerHTML += ship.render();
    });
})

resetButton.addEventListener("click", () => {
    document.location.href = "";
})