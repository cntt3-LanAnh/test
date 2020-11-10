function load() {
    getDataAsync("users").then(dataUser => {
        console.log(dataUser);
    })
}