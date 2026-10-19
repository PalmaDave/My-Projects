const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();
    // Pinipigilan nito ang default behavior ng form
    // (hindi magre-refresh ang page), para JavaScript ang mag-handle ng submit.

    const formData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    }

    fetch("http://localhost:4000/contact", {
    // Dito ipinapadala ng browser ang formData sa Express server.

        method: "POST",
        //  Ito ang nagsasabi sa server na
        // "Magpapadala ako ng data."

        headers: {
            "Content-Type": "application/json"
            // Sinasabi nito sa server na ang ipinapadalang data
            // ay nasa JSON format.
        },

        body: JSON.stringify(formData)
        // Ginagawang JSON string ang formData bago ipadala.
    })

    .then(response => response.json())
    // Hindi ito "naghihintay tayo ng response sa user."
    //  Naghihintay tayo ng response mula sa SERVER (Express).

    .then(data => {
        console.log(data);
        // Ang data dito ay ang ipinadala ng Express gamit ang res.json().
    })

    .catch(error => {
        console.log(error);
        // Dito pumapasok kapag may error
        // (server down, maling URL, walang internet, atbp.)
    });

});