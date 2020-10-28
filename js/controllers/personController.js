document.getElementById("btnRegistrar").addEventListener("click", function () {
    let name = document.getElementById("inputNombre").value;
    let apell = document.getElementById("inputApellido").value;
    alert(name);
    alert(apell);
});


function search(doc) {
    return per.find(e => e.documento === doc);
}

function add(Person) {

    if (search(Person.documento) !== undefined) {
        per.push(Person);
        return true;
    } else {
        return false;
    }
}