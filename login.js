const labels = document.querySelectorAll('.formControl label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
});

submitHandler = () => {
    event.preventDefault()
    const tckn = document.getElementById('tckn').value
    const password = document.getElementById('password').value

    if(tckn=="123" && password=="123"){
        localStorage.setItem('username', "ADMIN");
        window.location.href="index.html"
    }
}