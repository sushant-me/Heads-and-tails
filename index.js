const username_submit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;

    if (username.length >= 5) {
        document.getElementById("user").innerHTML = username;
        document.getElementById("username_div").style.display = "none";
        document.getElementById("game_div").style.display = "block"; // Show game_div
    } else {
        alert("Username must be at least 5 characters long");
        return;
    }
};

const start_game = (side) => {
    document.getElementById("results").style.display = "none";
    document.getElementById("flipping").style.display = "block";

    setTimeout(() => {
        get_result(side);
    }, 2000);
};

const get_result = (side) => {
    const coin_slide = Math.floor(Math.random() * 2); // Random number: 0 or 1
    let flipped_side = coin_slide === 0 ? "HEAD" : "TAIL";

    document.getElementById("results").innerHTML = "Coin flipped and result was <h1>" + flipped_side + "</h1>";
    document.getElementById("results").style.display = "block"; // Show results
    document.getElementById("flipping").style.display = "none"; // Hide flipping message
    document.querySelector("img").style.display = "none"; // Hide the loading image

    if (flipped_side === "HEAD") {
        if (side === "HEAD") {
            won();
        } else {
            lost();
        }
    } else {
        if (side === "HEAD") {
            lost();
        } else {
            won();
        }
    }
};

const won = () => {
    setTimeout(() => {
        alert("You won!");
    }, 1000);
};

const lost = () => {
    setTimeout(() => {
        alert("You lost!");
    }, 1000);
};
