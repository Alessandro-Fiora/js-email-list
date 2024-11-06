const emailList = document.getElementById("email-list");
const printEmailsButton = document.getElementById("email-print-button");

const printEmails = () => {
  emailList.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((result) => result.json())
      .then((data) => {
        const email = data.response;

        emailList.innerHTML += `<li>${email}</li>`;
      });
  }
};

printEmails();

printEmailsButton.addEventListener("click", printEmails);
