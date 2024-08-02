

function validation(){
    
    // let name = document.form.name.value;
    // let password = document.form.password.value;
 
    // document.cookie="Name="+ name;
    // document.cookie ="password= "+ password;
    
    
        var obj = {};  
        obj.name = document.form.name.value;  
        obj.password = document.form.password.value;  
        
        var jsonString = JSON.stringify(obj);  
        
        document.cookie = jsonString;  
        window.location.href="login.html"

        // let fname_item =  obj.name;
        // let lname_item =  obj.password;
        // final_data = { fname_item, lname_item };
        // list.push(final_data);
      
        // console.log("login")

} 

function get()
{  
    
    let username = document.form.fname.value;
    let pass = document.form.cpassword.value;


        if( document.cookie.length!=0)  
        {  
            var obj = JSON.parse(document.cookie);  
            
            if(username == obj.name && pass == obj.password){
                
            
            alert("Name="+obj.name+" "+"password="+obj.password);  
            alert("done")
           window.location.href = "home.html"

        }
        else{
            alert("undone")
        }
        }  
        else  
        {  
            alert("Cookie not available");  
        } 
}

