const container = document.getElementById("container");
const button = document.getElementById("button");

const getData = function() {
    console.log("pressed");

    fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(data => {
        for (let index = 0; index < data.length; index++) {
            const address = data[index].address;
            console.log(data[index]);
            container.innerHTML += `
            <div class="col m-0 p-0" style="max-width: 400px;">
                <div class="card w-100 h-100" style="background-color: #2c3034;">
                    <div class="card-body">
                        <h5 class="card-title text-white">${data[index].name}</h5>
                        <h6 style="color: gray;" class="card-subtitle mb-2">${data[index].username}</h6>
                        <p class="card-text text-muted">
                            Email: <span style="color: #00ff99;">${data[index].email}</span>
                            <br>
                            Address: <span style="color: #00ff99;">${address.street} ${address.suite} ${address.city}</span>
                            <br>
                            Zipcode: <span style="color: #00ff99;">${data[index].address.zipcode}</span>
                            <br>
                            Phone: <span style="color: #00ff99;">${data[index].phone}</span>
                            <br>
                            Website: <a target="_blank" href="${data[index].website}"<span style="color: #00ff99;">${data[index].website}</span></a>
                        </p>
                        <a target="_blank" href="#" class="btn btn-primary">Go to profile</a>
                    </div>
                </div>
            </div>
        `
        }
    });
}

button.addEventListener("click", getData);
