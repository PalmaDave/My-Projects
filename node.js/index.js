// 
// IMPORT NG MGA PACKAGE
// 

// Ginagamit ang Express para gumawa ng web server.
const express = require("express");

// Ginagamit ang MySQL para makakonekta sa database.
// (Hindi pa natin ginagamit dito, pero gagamitin natin sa susunod.)
const mysql = require("mysql");

// Pinapayagan nito ang ibang website o frontend
// (hal. Live Server sa port 5500)
// na makapag-request sa Express server.
const cors = require("cors");


//
// GUMAWA NG EXPRESS SERVER
//

// Gumagawa ng Express application.
// Ito ang magiging web server natin.
const app = express();


// 
// MIDDLEWARE
// 

// Pinapayagan ang browser na mag-request
// mula sa ibang origin (hal. localhost:5500).
app.use(cors());

// Kapag may dumating na JSON data mula sa browser,
// iko-convert ito bilang JavaScript object
// para mabasa natin gamit ang req.body.
app.use(express.json());


// 
// GET ROUTE
// 

// Kapag binuksan ang:
//
// http://localhost:4000/
//
// ang code sa loob ng function na ito ang tatakbo.
app.get("/", (req, res) => {

    // req (Request)
    // ----------------
    // Ito ang impormasyon na ipinadala ng browser.
    // Sa route na ito, wala naman tayong ipinadalang data.

    // res (Response)
    // ----------------
    // Ito ang ginagamit ng server
    // para magpadala ng sagot pabalik sa browser.

    res.json({
        name: "Software Dave",
        gender: "Male",
        address: "Manggahan",
        hobby: "Baseball"
    });

});


// 
// POST ROUTE
//

// Kapag may POST request papuntang:
//
// http://localhost:4000/contact
//
// ang function na ito ang tatakbo.
app.post("/contact", (req, res) => {

    // Ang req.body ay ang data
    // na ipinadala ng browser gamit ang fetch().
    //
    // Halimbawa:
    //
    // {
    //   name: "Dave",
    //   email: "dave@gmail.com",
    //   phone: "09123456789",
    //   message: "Hello!"
    // }

    console.log(req.body);

    // Pagkatapos matanggap ang data,
    // nagpapadala tayo ng response
    // pabalik sa browser.
    res.json({
        message: "Contact form received!!"
    });

});


// 
// PAANDARIN ANG SERVER
// 

// Pinapaandar ang Express server
// sa port 4000.
//
// Kapag binuksan mo:
//
// http://localhost:4000
//
// dito papasok ang request.
app.listen(4000, () => {

    console.log("Server started on http://localhost:4000");

});