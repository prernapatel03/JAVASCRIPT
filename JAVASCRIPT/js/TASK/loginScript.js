function myFun(){
    console.log("hii")

  let inputEl1 = document.getElementById('fname');
  let inputEl2 = document.getElementById('lname');


    const new_data_final =   localStorage.getItem('list')
      const ParseData = JSON.parse(new_data_final)

      let fname =ParseData.map((e)=>e.fname)
      let lname = ParseData.map((e)=>e.lname)

      console.log(fname , lname)

}