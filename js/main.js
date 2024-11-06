const emailList = document.getElementById("email-list");
const printEmailsButton = document.getElementById("email-print-button");

const printEmails = () => {
  emailList.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((result) => result.json())
      .then((email) => {
        emailList.innerHTML += `
            <li class="list-group-item" >
              <a href="#">${email.response}</a>
            </li>`;
      });
  }
};

printEmails();

printEmailsButton.addEventListener("click", printEmails);
