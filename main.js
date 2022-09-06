class Employes {
    constructor(lname,fname, address, birthday, entry) {
        this.lname = lname;
        this.fname = fname;
        this.address = address;  
        this.birthday = birthday;
        this.entry = entry;
    }
        avatar() {
        let initials = this.lname.charAt(0) + this.fname.charAt(0)
        return "https://avatars.dicebear.com/api/initials/" + initials + ".svg"
    }

    age(){
        var diff = Date.now() - new Date(this.birthday);
        var result = diff / (1000*60*60*24*364.25)
        return Math.floor(result)
    }

}

 var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    // recuperration des values
    var lname = document.getElementById("lname")
    var fname = document.getElementById("fname");
    var address= document.getElementById("address");
    var birthday = document.getElementById("birthday");
    var email = document.getElementById("email")

    // creation d'instance de employé
   let employe = new Employes(  lname.value,
                                fname.value,
                                address.value,
                                birthday.value,
                                email.value
                                )
    // validation des champs

    // NOM 

    console.log(lname.value.length)
if (lname.value.length < 2 || lname.value.length > 30) {
    lname.className += " is-invalid"
}else {
    lname.classList.replace("is-invalid", "is-valid") 
}

// PRENOM
if (fname.value.length < 2 || fname.value.length > 30 ) {
    fname.className += " is-invalid"
}else {
    fname.classList.replace("is-invalid", "is-valid") 
}

//ADRESSE   

if (address.value.length < 2 || address.value.length > 30 ) {
    address.className += " is-invalid"
} else {
    address.classList.replace("is-invalid", "is-valid") 
}
    
// EMAIL 

    var tr = document.createElement('tr');
    tr.innerHTML = "<th> <img width=40 src='"+ employe.avatar() +"'></th><th>"+employe.lname+" "+employe.fname+"</th><td>"+employe.age()+"</td>";
    document.getElementById('tableau').appendChild(tr);
    e.preventDefault();

    console.log(employe.age())

    
})

