function saveResult() {
    const resultData = document.getElementById("resultData").value;
    document.getElementById("resultText").textContent = resultData;
    document.getElementById("result-input").style.display = "none";
    document.getElementById("result-display").style.display = "block";
}
