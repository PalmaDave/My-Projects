// Kunin ang mga HTML elements gamit ang class selectors
const gameContainer = document.querySelector(".container"), // main container ng game
userResult = document.querySelector(".user_result img"), // image ng user
cpuResult = document.querySelector(".cpu_result img"), // image ng cpu
result = document.querySelector(".result"), // text na magpapakita ng result
optionImages = document.querySelectorAll(".option_image"); // lahat ng rock, paper, scissors options


// Ulitin para sa bawat option image
optionImages.forEach((image,index) =>{

    // Kapag na-click ang isang option
    image.addEventListener("click", (e) => {

    image.classList.add("active"); // lagyan ng active class ang napiling option

    // Ibalik muna sa rock image habang naghihintay
    userResult.src = cpuResult.src = "images/rock.png";

    // Palitan muna ang result text
    result.textContent = "Wait...";

    // Ulitin ulit ang lahat ng options
    optionImages.forEach((image2,index2) => {

        // Kung hindi ito ang na-click na option
        // tanggalin ang active class
        index !== index2 && image2.classList.remove("active");

    });

    // Lagyan ng start class para magsimula ang shake animation
    gameContainer.classList.add("start");

    // Maghintay ng 2.5 seconds bago ipakita ang result
    let time = setTimeout(() =>{

    // Tanggalin ang start class para huminto ang animation
    gameContainer.classList.remove("start");

    // Kunin ang image source ng napiling option
    let imageSrc = e.target.querySelector("img").src;

    // Ipakita ang napiling image sa user side
    userResult.src = imageSrc;

    // Gumawa ng random number mula 0 hanggang 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Mga possible images ng CPU
    let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png"
    ];

    // Gamitin ang random number para pumili ng image
    cpuResult.src = cpuImages[randomNumber];

    // Convert CPU choice into letter
    // 0 = R
    // 1 = P
    // 2 = S
    let cpuValue = ["R","P","S"][randomNumber];

    // Convert user choice into letter gamit ang index
    let userValue = ["R","P","S"][index];

    // Lahat ng posibleng outcomes
    let outcomes = {

        RR:"Draw", // Rock vs Rock
        RP:"Cpu",  // Rock vs Paper
        RS:"User", // Rock vs Scissors

        PP:"Draw", // Paper vs Paper
        PR:"Cpu",  // Paper vs Rock
        PS:"User", // Paper vs Scissors

        SS:"Draw", // Scissors vs Scissors
        SR:"Cpu",  // Scissors vs Rock
        SP:"User"  // Scissors vs Paper

    };

    // Pagsamahin ang user at cpu values
    // halimbawa: RP
    let outComeValue = outcomes[userValue + cpuValue];

    // I-display ang result
    result.textContent =
    userValue === cpuValue
    ? "Match Draw" // kapag pareho sila
    : `${outComeValue} Won!!!`; // kung may nanalo

    },2500); // 2500 milliseconds = 2.5 seconds

    });
});