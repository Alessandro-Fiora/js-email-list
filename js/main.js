const generateEmail = () => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((result) => result.json())
    .then((data) => {
      const email = data.response;
      console.log(email);
    });
  return email;
};

generateEmail();
console.log(email);
