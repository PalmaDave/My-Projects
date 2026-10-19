// =====================================================
// KUMUHA NG MGA HTML ELEMENTS
// =====================================================

// Hanapin ang element na may class na .container
// Ito ang buong game box
// Ginagamit ito para lagyan at tanggalan ng "start"
// class na nagpapatakbo ng shake animation
const gameContainer = document.querySelector(".container"),

// Hanapin ang image ng User
// Ito ang kaliwang larawan na nagpapakita
// kung ano ang pinili ng player
userResult = document.querySelector(".user_result img"),

// Hanapin ang image ng CPU
// Ito ang kanang larawan na nagpapakita
// kung ano ang random na napili ng computer
cpuResult = document.querySelector(".cpu_result img"),

// Hanapin ang result text
// Dito lumalabas ang:
// "Wait..."
// "Match Draw"
// "User Won!!!"
// "CPU Won!!!"
result = document.querySelector(".result"),

// Kunin lahat ng choices
// Result nito ay parang:
//
// [
//   bato,
//   papel,
//   gunting
// ]
//
// Kaya pwede natin silang i-loop isa-isa
optionImages = document.querySelectorAll(".option_image");



// =====================================================
// SCORES
// =====================================================

// Score ng User
// Nagsisimula sa 0
let userScore = 0;

// Score ng CPU
// Nagsisimula rin sa 0
let cpuScore = 0;



// =====================================================
// LOOP SA LAHAT NG CHOICES
// =====================================================

// forEach()
// Ibig sabihin:
// "Gawin ito sa bawat option_image"
//
// Example:
//
// Unang ikot:
// image = bato
// index = 0
//
// Ikalawang ikot:
// image = papel
// index = 1
//
// Ikatlong ikot:
// image = gunting
// index = 2
//
optionImages.forEach((image,index) => {



    // =====================================================
    // KAPAG MAY PININDOT ANG USER
    // =====================================================

    image.addEventListener("click", () => {



        // Lagyan ng active class
        // para lumiwanag ang napiling option
        image.classList.add("active");



        // Habang naghihintay ang result
        // ibalik muna pareho sa Rock image
        //
        // Pareho itong:
        //
        // userResult.src = "image/rock.png";
        // cpuResult.src = "image/rock.png";
        //
        userResult.src = cpuResult.src = "image/rock.png";



        // Ipakita muna na naghihintay pa
        result.textContent = "Wait...";



        // Loop ulit sa lahat ng options
        optionImages.forEach((image2,index2) => {

            // Kung hindi ito ang napili
            if(index !== index2){

                // Tanggalin ang active
                // para isang option lang ang maliwanag
                image2.classList.remove("active");

            }

        });



        // Lagyan ng start class
        //
        // Kapag may class na start
        // gagana ang CSS animation
        //
        // .container.start .user_result
        // .container.start .cpu_result
        //
        gameContainer.classList.add("start");



        // Maghintay ng 2.5 seconds
        //
        // Ito ang dahilan kung bakit
        // may shaking muna bago lumabas
        // ang totoong result
        //
        setTimeout(() => {



            // Tanggalin ang start class
            //
            // Hihinto na ang shake animation
            //
            gameContainer.classList.remove("start");



            // Hanapin ang image sa loob
            // ng pinindot na option
            //
            // Halimbawa:
            //
            // Pinindot mo bato
            //
            // imageSrc =
            // image/rock.png
            //
            let imageSrc =
            image.querySelector("img").src;



            // Ipakita ang napili ng User
            userResult.src = imageSrc;



            // =====================================================
            // RANDOM CHOICE NG CPU
            // =====================================================

            // Math.random()
            //
            // Gumagawa ng random decimal
            //
            // Example:
            //
            // 0.24
            // 0.87
            // 0.52
            //
            // *3
            //
            // magiging:
            //
            // 0.72
            // 2.61
            // 1.56
            //
            // floor()
            //
            // Tanggal decimal
            //
            // 0
            // 2
            // 1
            //
            let randomNumber =
            Math.floor(Math.random() * 3);



            // Mga larawan na pwedeng piliin ng CPU
            let cpuImages = [

                "image/rock.png",

                "image/paper.png",

                "image/gunting.png"

            ];



            // Gamitin ang random number
            // para pumili ng image
            //
            // randomNumber = 0
            // rock
            //
            // randomNumber = 1
            // paper
            //
            // randomNumber = 2
            // gunting
            //
            cpuResult.src =
            cpuImages[randomNumber];



            // =====================================================
            // CONVERT TO LETTERS
            // =====================================================

            // Kapag randomNumber = 0
            // cpuValue = R
            //
            // Kapag randomNumber = 1
            // cpuValue = P
            //
            // Kapag randomNumber = 2
            // cpuValue = S
            //
            let cpuValue =
            ["R","P","S"][randomNumber];



            // Parehong logic
            //
            // index = 0 -> R
            // index = 1 -> P
            // index = 2 -> S
            //
            let userValue =
            ["R","P","S"][index];



            // =====================================================
            // TABLE NG MGA RESULTA
            // =====================================================

            let outcomes = {

                RR:"Draw",
                RP:"Cpu",
                RS:"User",

                PP:"Draw",
                PR:"User",
                PS:"Cpu",

                SS:"Draw",
                SR:"Cpu",
                SP:"User"

            };



            // =====================================================
            // HANAPIN KUNG SINO PANALO
            // =====================================================

            //
            // Example:
            //
            // userValue = R
            // cpuValue = P
            //
            // magiging:
            //
            // "RP"
            //
            // outcomes["RP"]
            //
            // sagot:
            //
            // "Cpu"
            //
            let outComeValue =
            outcomes[userValue + cpuValue];



            // =====================================================
            // UPDATE SCORES
            // =====================================================

            if(outComeValue === "User"){

                // Dagdag 1 score
                userScore++;

                // Ipakita sa HTML
                document.getElementById("user-score").textContent =
                userScore;

            }

            else if(outComeValue === "Cpu"){

                cpuScore++;

                document.getElementById("cpu-score").textContent =
                cpuScore;

            }



            // =====================================================
            // IPAKITA RESULT
            // =====================================================

            if(userValue === cpuValue){

                result.textContent =
                "Match Draw";

            }

            else{

                result.textContent =
                `${outComeValue} Won!!!`;

            }



            // =====================================================
            // FIRST TO 5 WINS
            // =====================================================

            if(userScore >= 5){

                result.textContent =
                "USER WINS THE MATCH!";

                optionImages.forEach(option => {

                    // Hindi na pwedeng mag-click
                    option.style.pointerEvents =
                    "none";

                });

            }



            if(cpuScore >= 5){

                result.textContent =
                "CPU WINS THE MATCH!";

                optionImages.forEach(option => {

                    option.style.pointerEvents =
                    "none";

                });

            }

        },2500);

    });

});

function resetGame(){ // Function na tatawagin kapag pinindot ang Reset

    userScore = 0; // Reset User score

    cpuScore = 0; // Reset CPU score

    document.getElementById("user-score").textContent = 0; // Ipakita ulit ang 0

    document.getElementById("cpu-score").textContent = 0; // Ipakita ulit ang 0

    result.textContent = "Let's Play !!!"; // Ibalik ang default text

    userResult.src = "image/rock.png"; // Ibalik ang User image sa Rock

    cpuResult.src = "image/rock.png"; // Ibalik ang CPU image sa Rock

    optionImages.forEach(option => { // I-loop lahat ng options

        option.style.pointerEvents = "auto"; // I-enable ulit ang pagpindot

        option.classList.remove("active"); // Tanggalin ang active class

    });

}