
reset.addEventListener("click", () => {
    output.innerText = "OUTPUT";
});

serverBtn.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000");
    const text = await res.text();
    output.innerText = text;
});

timeBtn.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/time");
    const time = await res.json();
    output.innerText = time;
});

