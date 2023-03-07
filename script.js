const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log("Form submission cancelled.");
});

function sendMail(e) {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_tcrz3fn";
  const templateID = "template_pjv1gdc";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}

var btnClear = document.querySelector("button");
var inputs = document.querySelectorAll("input");

btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});
