// Using GetElementById                   
// Ginagamit kapag ID lang ang hahanapin (#)

//let sheading = document.getElementById("second-heading");
// Kinukuha ang element na may id="second-heading"

//console.log(sheading);
// Pinapakita sa console yung nakuha na element



// Single Selectors
// Dito pwede kang pumili gamit ang id, class, o tag

//let e = document.querySelector(".comment");
// querySelector() = kukunin lang ang UNANG matching element
// ".comment" = class selector

//console.log(e);
// Ipi-print sa console ang first element na may class="comment"



// DOM Multiple Selectors

// Using GetElementsByClassName
// Kinukuha lahat ng elements na may parehong class

//let allContent = document.getElementsByClassName("content")
// Kukuhanin lahat ng may class="content"

// let comments = document.getElementsByClassName("comment");
// Kukuhanin lahat ng may class="comment"

// console.log(comments);
// Ipi-print lahat ng comment elements
// Result ay HTMLCollection (parang array pero hindi totoong array)


// Using GetElementsByTagName
// Kinukuha lahat base sa HTML tag name

// let allHeading = document.getElementsByTagName("h1");
// Kukuhanin lahat ng <h1>

// let allParagraphs = document.getElementsByTagName("p");
// Kukuhanin lahat ng <p>

// console.log(allParagraphs);
// Ipi-print lahat ng paragraph tags



// Using Query Selector All on Class
// Kinukuha lahat gamit ang CSS selector

//let everyContent = document.querySelectorAll(".content");
// Kukuhanin lahat ng may class="content"

// let comments = document.querySelectorAll(".comment");
// Kukuhanin lahat ng may class="comment"

// console.log(comments);
// Ipi-print lahat ng comments
// Result = NodeList (mas flexible kaysa HTMLCollection)



// Using Query Selector All on Tag Name
// Pwede rin sa tags

//let everyHeading = document.querySelectorAll("h1");
// Kukuhanin lahat ng h1 tags

// let allh1 = document.querySelectorAll("h1");
// Same lang sa taas

// console.log(allh1);
// Ipi-print lahat ng h1 elements



// DOM multiple selectors

// let comments = document.querySelectorAll(".comment");
// Kukuhanin lahat ng may class="comment"

// console.log(comments[1]);
// Ipi-print ang pangalawang element
// Tandaan: index starts at 0
// [0] = first
// [1] = second
// [2] = third



// =============================
// Manipulate HTML
// =============================

// Single Selector

//let firsttitle = document.querySelector("#first-title");
// Kinukuha ang element na may id="first-title"

//firsttitle.innerHTML = "Software Dave";
// Binabago ang laman ng HTML
// Example:
// Before: <h1>Hello</h1>
// After: <h1>Software Dave</h1>


//let descriptions = document.querySelectorAll(".desc");
// Kinukuha lahat ng may class="desc"

//descriptions[1].innerHTML = "Dave Tutorial";
// Binabago ang pangalawang desc
// [1] = second element



// =============================
// Manipulate Attributes
// =============================

//let txtFirstName = document.querySelector("#txtFirstName");
// Kinukuha ang input element

//txtFirstName.placeholder = "Dave SDPT";
// Binabago ang placeholder text ng input
// Example:
// Before: "Enter name"
// After: "Dave SDPT"


//let img = document.querySelector("#img-example");
// Kinukuha ang image element

// img.src = "https://i.redd.it/isagi-yoichi-official-art-appreciation-v0-dalz73id9ede1.jpg?width=736&format=pjpg&auto=webp&s=200c244a866f4c1d46a248a2090b7818f8b2cb72";
// Binabago ang image source
// Magpapakita ng bagong image


//let link = document.querySelector("#example-link");
// Kinukuha ang <a> tag

//link.href = "https://www.youtube.com";
// Binabago ang destination link

//link.target = "_blank";
// Kapag clinick, magbubukas sa bagong tab

//link.innerHTML = "Dave Tutorial";
// Binabago ang text sa loob ng link
// Example:
// Before: Click Here
// After: Dave Tutorial



// =============================
// Manipulate Styles
// =============================

//let b = document.querySelector("body");
// Kinukuha ang body tag

//b.style.backgroundColor = "rgb(199, 65, 65)";
// Binabago ang background color ng page



//let h1 = document.querySelector("h1");
// Kinukuha ang unang h1

// Ginagawang center ang text

//h1.style.fontFamily = "Arial";
// Binabago ang font style

//h1.style.color = "blue";
// Ginagawang blue ang text color

//h1.style.borderBottom = "5px solid gold";
// Naglalagay ng border sa ilalim ng h1

// Tutorial Challenge

let body = document.querySelector("body");
body.style.backgroundColor = "rgb(30, 30, 30)";
body.style.margin = "0px";

let div = document.querySelector("div");
div.style.backgroundColor = "rgb(50,50,50)";
div.style.paddingBottom = "15px";
div.style.paddingTop = "15px";
div.style.textAlign = "center";

let img = document.querySelector("img");
img.src = "https://i.redd.it/isagi-yoichi-official-art-appreciation-v0-dalz73id9ede1.jpg?width=736&format=pjpg&auto=webp&s=200c244a866f4c1d46a248a2090b7818f8b2cb72";
img.style.width = "50px";


let h1 = document.querySelector("h1");
h1.innerHTML = "Dave Tutorial";
h1.style.color = "white";
h1.style.fontFamily = "Arial";
h1.style.textAlign = "center";
h1.style.fontSize = "25px";

let p = document.querySelector("p");
p.style.color = "white";
p.style.fontFamily = "Verdana";
p.style.textAlign = "center";
p.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officiis, nesciunt optio in earum rerum sequi eius minima distinctio. Impedit, neque perferendis similique magni nisi maiores ratione repellendus sapiente a.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officiis, nesciunt optio in earum rerum sequi eius minima distinctio. Impedit, neque perferendis similique magni nisi maiores ratione repellendus sapiente a";
p.style.margin = "10px 20px";