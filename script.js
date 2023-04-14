const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const find = document.getElementById("find");
const input_word = document.getElementById("word_name");

find.addEventListener("click", () => {
  let inputWord = document.getElementById("word_name").value;
  if (inputWord == "") alert("Please Enter a word to search");
  else fetchMeaning(inputWord);
});
input_word.addEventListener("keyup", function (event) {
  let inputWord = document.getElementById("word_name").value;
  if (event.key == "Enter") {
    if (inputWord == "") alert("Please Enter a City Name");
    else fetchMeaning(inputWord);
  }
});

function fetchMeaning(inputWord) {
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
            <div class="word">
                <h3>${inputWord}</h3>    
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
            </div>
              <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
              `;
      if (data[0].meanings[0].definitions[0].example != undefined)
        result.innerHTML += ` <p class="word-example">${data[0].meanings[0].definitions[0].example}</p>`;
      result.style.display = "block";
      document.getElementById("notfound").style.display = "none";
    })
    .catch((err) => {
      document.getElementById("notfound").style.display = "block";
      result.style.display = "none";
    });
}
