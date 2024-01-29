function getAndupdate() {
  console.log("updating list");
  tit = document.getElementById('title').value;
  desc = document.getElementById('address').value;
  email = document.getElementById('email').value;
  num = document.getElementById('number').value;
  Qty = document.getElementById('Quantity').value;
  price = document.getElementById('price').value;
  if (localStorage.getItem('itemJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc, email, num, Qty, price]);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
  }
  else {
    itemJsonArraystr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([tit, desc, email, num, Qty, price]);
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
  }
  update()
}
function update() {
  if (localStorage.getItem('itemJson') == null) {
    itemJsonArray = [];
    localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
  }
  else {
    itemJsonArraystr = localStorage.getItem('itemJson')
    itemJsonArray = JSON.parse(itemJsonArraystr);
  }
  //populate the table
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4]}</td>
        <td>${element[5]}</td>
        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();
function deleted(itemindex) {
  console.log("Delete", itemindex);
  itemJsonArraystr = localStorage.getItem('itemJson')
  itemJsonArray = JSON.parse(itemJsonArraystr);
  // delete itemindex element from the array
  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem('itemJson', JSON.stringify(itemJsonArray));
  update();
}
function clearstorage() {
  if (confirm("Do you want to clear the database?")) {
    localStorage.clear();
    update()
  }
}