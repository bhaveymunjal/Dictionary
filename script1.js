const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '57efda9864mshe5355ba4eae6ed3p11be8fjsn5b05cc52c77b',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const find = document.getElementById("find");
const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=';

let input_word = document.getElementById("word_name");
find.addEventListener("click", () => {
  let inputWord = document.getElementById("word_name").value;
  if (inputWord == "") 
    alert("Please Enter a word to search");
  else
    fetchMeaning(inputWord);
});
function fetchMeaning(inputWord) {
fetch(`${url}${inputWord}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        result.innerHTML = `
        <div class="word">
        <h3>${inputWord}</h3>
        <ion-icon name="volume-high" id="play"></ion-icon>
        </div>
        <div class="details">
        <p>${response.list[9].definition}</p>
        </div>
        `;
    })
    .catch(err => console.error(err));

}