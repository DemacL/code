let timestamp = document.getElementById('timestamp');
console.log('timestamp:', timestamp);

console.log('timestamp.firstChild:', timestamp.firstChild);

timestamp.appendChild(document.createTextNode(new Date()));

timestamp.style.backgroundColor = 'red';

timestamp.className = 'highlight';

timestamp.onclick = function () {
    console.log(this);
    console.log(this === timestamp);
    this.innerHTML = new Date();
}