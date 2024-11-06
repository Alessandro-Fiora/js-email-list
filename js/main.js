const emailList = document.getElementById("email-list");
const printEmailsButton = document.getElementById("email-print-button");

// ^ prima soluzione

// const printEmails = () => {
//   emailList.innerHTML = "";
//   for (let i = 0; i < 10; i++) {
//     fetch("https://flynn.boolean.careers/exercises/api/random/mail")
//       .then((response) => response.json())
//       .then((email) => {
//         emailList.innerHTML += `
//             <li class="list-group-item" >
//               <a href="#">${email.response}</a>
//             </li>`;
//       });
//   }
// };

// printEmails();

// printEmailsButton.addEventListener("click", printEmails);

// ^ soluzione con ricerca metodi su documentazione
// ^ (volevo una soluzione che stampasse le email una sola volta e non a cascata

async function printEmails() {
  emailList.innerHTML = "";
  let emailListNewHTML = "";
  for (let i = 0; i < 10; i++) {
    const response = await fetch(
      "https://flynn.boolean.careers/exercises/api/random/mail"
    );
    const email = await response.json();
    emailListNewHTML += `
        <li class="list-group-item" >
            <a href="#">${email.response}</a>
        </li>`;
  }
  emailList.innerHTML = emailListNewHTML;
}

printEmails();
printEmailsButton.addEventListener("click", printEmails);
