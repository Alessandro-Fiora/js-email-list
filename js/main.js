const emailList = document.getElementById("email-list");
console.log(emailList);

for (let i = 0; i < 10; i++) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((result) => result.json())
    .then((data) => {
      const email = data.response;

      emailList.innerHTML += `<li>${email}</li>`;
    });
}
