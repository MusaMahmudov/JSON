async function getData(url) {
  let data = await fetch(url);

  return data.json();
}
let AllData = document.getElementById("container");

let user1 = [];
let user2 = [];
let user3 = [];
let user4 = [];
let user5 = [];
let user6 = [];
let user7 = [];
let user8 = [];
let user9 = [];
let user10 = [];
getData("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    data.map((x) => {
      if (x.userId === 1) {
        user1.push(x);
      } else if (x.userId === 2) {
        user2.push(x);
      } else if (x.userId === 3) {
        user3.push(x);
      } else if (x.userId === 4) {
        user4.push(x);
      } else if (x.userId === 5) {
        user5.push(x);
      } else if (x.userId === 6) {
        user6.push(x);
      } else if (x.userId === 7) {
        user7.push(x);
      } else if (x.userId === 8) {
        user8.push(x);
      } else if (x.userId === 9) {
        user9.push(x);
      } else if (x.userId === 10) {
        user10.push(x);
      }
    });

    return user1;
  })
  .then((user) => {
    showData(user);
    return user2;
  })
  .then((user) => {
    showData(user);
    return user3;
  })
  .then((user) => {
    showData(user);
    return user4;
  })
  .then((user) => {
    showData(user);
    return user5;
  })
  .then((user) => {
    showData(user);
    return user6;
  })
  .then((user) => {
    showData(user);
    return user7;
  })
  .then((user) => {
    showData(user);
    return user8;
  })
  .then((user) => {
    showData(user);
    return user9;
  })
  .then((user) => {
    showData(user);
    return user10;
  })
  .then((user) => {
    showData(user);
  });

function showData(user) {
  let container = document.createElement("div");
  let name = `user${user[0].userId}`;
  container.setAttribute("id", `${name}`);
  user.map((user) => {
    container.innerHTML += `
          <div class="data">
                  <div class="heading">
                    <h1>userId:${user.userId}</h1>
                    <h1>Id:${user.id}</h1>
                  </div>
                  <p>${user.title}</p>
                  <p>${user.completed}</p>
                </div>

          `;
    AllData.appendChild(container);
  });
}
