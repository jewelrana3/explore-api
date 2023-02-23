function userAdd() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => add(data))
}

function add(data) {
    const ul = document.getElementById('ul-list');
    for (const user of data) {
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    }
}