//Wire up an event handler for the btnPerson button
document.getElementById("btnPerson").addEventListener("click", CreatePerson);

// {} are the start of declaring an object in JS
function CreatePerson(){
    //Step 1: Get all the user data
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let age = parseInt(document.getElementById("age").value);
    let hairColor = document.getElementById("hairColor").value;
    let eyeColor = document.getElementById("eyeColor").value;
    

    let person = {
        FirstName: fName,
        LastName: lName,
        Age: age,
        HairColor: hairColor,
        EyeColor: eyeColor,
        // the following is a property working as a function
        FullName: function() {
            return `${this.FirstName} ${this.LastName}`;
        },
        Greeting: function() {
            return `Hello, my name is ${this.FirstName} and I am ${this.Age} years old`
        }
    };
    //Step 3: Print out the Person properties
    let output = `Your First Name is: <b>${person.FirstName}</b><br>`;
    output += `Your Last Name is: ${person.LastName}<br> `;
    output += `Your Age is: ${person.Age}<br> `;
    output += `Your Hair Color is: ${person.HairColor}<br> `;
    output += `Your Eye Color is: ${person.EyeColor}<br> `;
    output += `Your Full Name is: ${person.FullName()}<hr>`;
    output += `${person.Greeting()}`;
    
    document.getElementById("output").innerHTML = output;
}