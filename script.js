// merender satu tweet aja.
function renderTweet(eachTweet, index) {
  addTweetList(eachTweet);
}

// render tugasnya merender semua tweet yang diberikan dari argument kedalam tweet-list.
function render(tweets) {
  const tweetList = document.getElementById("tweet-list");
  tweetList.innerHTML = "";
  tweets.forEach(renderTweet);
}

// Membuat list item tweet baru dan menambahkan kedalam list tweet container nya.
function addTweetList(textContent) {
  // mengambil tempat penampung tweet kita.
  const tweetList = document.getElementById("tweet-list");

  // membuat element list.
  const listItem = document.createElement("li");

  // tidak bisa menampilkan karakter enter (\n),
  // makanya kita perlu menambahkan css-> white-space: pre;
  listItem.textContent = textContent;
  listItem.classList.add("tweet-item", "debug");

  // memasukkan element yang baru kita buat kedalam si penampung tweet.
  tweetList.append(listItem);
}

// function yang akan dieksekusi ketika terjadi event click di button yang
// memiliki id=submit-btn
function onClickAddTweetButton(event) {
  event.preventDefault(); // untuk mecegah agar semua tindakan default dieksekusi. Contoh: Refresh browser

  // mengambil content untuk tweet kita dari textarea yang idnya = tweet-input
  const tweetInput = document.getElementById("tweet-input");
  // disini kita menghapus space yang ada di kiri dan dikanan kata.
  // misal <space><space>abda<space> =>  abda
  const value = tweetInput.value.trim();

  // kita reset ulang value-nya biar kembali kosong
  tweetInput.value = "";

  // validasi yang sangat simple.
  // ketika inputnya tidak kosong
  if (value.length > 0) {
    // addTweetList(value);
    tweetHistories.push(value); // menambahkan value kedalam tweetHistories
    render(tweetHistories);
  }
}

// global: Memnimpan semua tweet yang kita miliki
const tweetHistories = ["Progress Pertama", "Progress Kedua"];

// entrypoint dari aplikasi kita.
function main() {
  render(tweetHistories);

  const addTweetButton = document.getElementById("submit-btn");
  addTweetButton.addEventListener("click", onClickAddTweetButton);
}

// harus di panggil.
main();
