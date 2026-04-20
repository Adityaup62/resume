
function searchFunction() {

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".searchable");
    const noResult = document.getElementById("noResult");

    let visible = 0;

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(searchInput)){
            card.style.display = "";
            card.classList.add("highlight");
            card.scrollIntoView({behavior:"smooth"});
            visible++;
        } else {
            card.style.display = "none";
            card.classList.remove("highlight");
        }
    });

    if(visible === 0){
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}
document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchFunction();
    }
});