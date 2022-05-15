let translatedText = document.querySelector("#translatedText");
async function translateText() {
    translatedText.innerHTML = "";
    let inputText = document.querySelector("#inputText").value;
    let sourceLanguage = document.querySelector("#source").value;
    sourceLanguage = sourceLanguage.toLowerCase()
    let targetLanguage = document.querySelector("#target").value;
    targetLanguage = targetLanguage.toLowerCase()
    const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: inputText,
            source: sourceLanguage,
            target: targetLanguage,
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    console.log(data);
    translatedText.append(data.translatedText);
}