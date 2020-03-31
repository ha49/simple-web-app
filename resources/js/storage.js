const inpEmail = document.getElementById("inpEmail")
const inpName = document.getElementById("inpName")
const inpSurname = document.getElementById("inpSurname")
const btnInsert = document.getElementById("btnInsert")
const lsOutput = document.getElementById("lsOutput")


btnInsert.onclick = function () {


    const key = inpEmail.value;
    const surname=inpSurname.value;

    const value = inpName.value + " " + surname;

    console.log(key);
    console.log(value);


    if (key &&surname&&value) {
        localStorage.setItem(key, value);
        location.reload();
    }

    };



for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    lsOutput.innerHTML += i + 1 + ".  " + value + ",   email:  " + key + "<br/>";

}
// console.log(localStorage);


