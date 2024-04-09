const ele_btn = document.querySelector(".btn");
const ele_card = document.querySelector(".card");

console.log(ele_btn);

ele_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(`https://randomuser.me/api/`);

  const data = await res.json();
  const person = data.results[0];

  console.log(person);

  ele_card.insertAdjacentHTML(
    "afterbegin",
    `  
        <h1> ${
          person.name.title + " " + person.name.first + " " + person.name.last
        }  </h1>
  
        <p>${person.location.country}</p>
        <div style="margin: 24px 0;">
            <a href="#"><i class="fa fa-dribbble"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
        </div>
        <p>Email : ${person.dob.date}</p>
           <p>Birthdate : ${person.dob.date}</p>
               <p>  Phone : ${person.phone}</p>
        <p><button> Gender : ${person.gender}</button></p>`
  );
});
