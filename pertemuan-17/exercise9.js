//1.
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  
  messages(); // Output: "Hello World!" setelah 2 detik


//2.
// const ambilDataUser = () => {
//   fetch('https://reqres.in/api/users')
//     .then(response => response.json()) 
//     .then(users => {
//       users.data.forEach(({ first_name, last_name }) => {
//         console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
//       });
//     });
// };

// Memanggil fungsi ambilDataUser
// ambilDataUser();

//3.
// const ambilDataUser = async () => {
//   const response = await fetch('https://reqres.in/api/users');
//   const users = await response.json();
//   users.data.forEach(({ first_name, last_name }) => {
//     console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
//   });
// };

// // Memanggil fungsi ambilDataUser
// ambilDataUser();

//4.
const ambilDataUser = async () => {
  const response = await axios.get('https://reqres.in/api/users');
  const users = response.data.data;
  users.forEach(({ first_name, last_name }) => {
    console.log(`First Name: ${first_name}, Last Name: ${last_name}`);
  });
};

// Memanggil fungsi ambilDataUser
ambilDataUser();


