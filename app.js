const button = document.getElementById('getText')
const output = document.getElementById('output');
button.addEventListener('click', getText);

function getText() {
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        output.innerHTML = data
    })

}

