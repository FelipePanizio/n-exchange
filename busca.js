const code = document.querySelector("#code");

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

code.addEventListener("blur", (e) => {
    let search = code.value
    search = search.toUpperCase();
    console.log(search)
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`http://localhost:3000/currency/${search}/`, options)
        .then(response => {
            response.json().then(data => showData(data))
        })
        .catch(e => console.log('erro'))
});