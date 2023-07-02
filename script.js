document.getElementById("send-btn").addEventListener("click", function(event){
    event.preventDefault()
    process()
});

function process() {
    // Process input data
    var fullname = document.getElementById('fullname-field').value
    var email = document.getElementById('email-field').value
    if (fullname == "" || email == "") {
        alert("You left certain fields empty")
        return
    }

    // Store selected options into an array
    var options = document.querySelectorAll('[name="activity"]')
    var selected = new Array()
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selected.push(options[i].value)
        }
    }

    // Sets alert message
    var str = ("Hi, " + fullname + " @ " + email + "\n")
    if (selected.length != 0) {
        str = str.concat("\nYou've chosen :\n")
        for (let i = 0; i < selected.length; i++) {
            str = str.concat((i+1) + ". " + selected[i] + "\n")
        }
    }
    else {
        str = str.concat("\nYou didn't choose any activities :(\n")
    }
    str = str.concat("\nThank you for your participation!") 

    // Display alert message
    alert(str)

    // Reload the page
    location.reload()
}