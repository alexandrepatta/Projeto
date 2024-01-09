function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  if (html.classList.contains("light") == false) {
    html.classList.add("dark")
  } else {
    html.classList.remove("dark")
  }
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_7pmpfa6"
  const templateID = "template_d149e8q"

  var nameValue = document.getElementById("name").value
  var emailValue = document.getElementById("email").value
  var messageValue = document.getElementById("message").value

  if (!nameValue || !emailValue || !messageValue) {
    alert("Fill in the blank!")
  } else {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
        console.log(res)
        alert("Your message sent successfully!")
      })
      .catch((err) => console.log(err))
  }
}
