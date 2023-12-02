const text = document.querySelector("#description-text p");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) =>
            `<span style="transform: rotate(${i * 7.4}deg);">${char}</span>`
    )
    .join("");