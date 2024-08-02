
let list = [];
let final_data;

display();
function data() {
  let input_fname = document.getElementById("input-fname");
  let input_lname = document.getElementById("input-lname");


  let fname_item = input_fname.value;
  let lname_item = input_lname.value;
  final_data = { fname_item, lname_item };
  list.push(final_data);

  localStorage.setItem("list", JSON.stringify(list));
  localStorage.getItem("list");
  // window.location.href = "login.html"
 
  display();
}



function display() {


  let container = document.getElementById("container");

  

  let new_data = "";
  new_data += 
  ` 
  <table>
      <tr> 
      <td>fname</td>
      <td>lname</td>
      <td>operations</td>
      ` + list.map((e, i) =>(

        `
        <tr>
             <td> ${e.fname_item} </td>
            <td> ${e.lname_item} </td>
            <td>
            <button onclick="list.splice(${i} , 1); display();">delete</button>
            <button id="editButton" onclick="editFun(${i});display();">Edit</button>
            </td>
            
             </tr>
        `
      ))+`
      </tr>
  </table>
  
  `

 
    

  
  container.innerHTML = new_data;



}

function editFun(i){
  // var input = document.createElement("input");
  // pTag.appendChild(input);

  // var inputButton = document.createElement("button");
  // inputButton.innerText = "Add";
  // pTag.appendChild(inputButton);

  // inputButton.onclick = () => {
  //   pTag.innerHTML = input.value;
  //   console.log( input.value);
  //   pTag.appendChild(EditButton);
  //   pTag.appendChild(DeleteButton);
  // };
}
// function myFun(){ 

//   let inputEl1 = document.getElementById('fname');
//   let inputEl2 = document.getElementById('lname');
//   // const new_data_final =   localStorage.getItem('list')
//   //     const ParseData = JSON.parse(new_data_final)

//   //     let fname =ParseData.map((e)=>e.fname)
//   //     let lname = ParseData.map((e)=>e.lname)

// }

//   localStorage.setItem('list' , list)

//  localStorage.getItem('list')

// const obj = {
//   name : "prerna",
//   age : 20
// }
