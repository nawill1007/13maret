onload = () => {
  document.body.classList.remove("container");
};

// Ganti 'lagu-anda.mp3' dengan link file musik Anda
var audio = new Audio("Bruno Mars.mp3");

// Set ke muted (bisu) agar bisa autoplay
audio.muted = true;

audio
  .play()
  .then(function () {
    // Jika berhasil diputar, tunggu 1 detik lalu nyalakan suara
    setTimeout(function () {
      audio.muted = false;
    }, 1000);
  })
  .catch(function (error) {
    console.log("Autoplay diblokir oleh browser.");
  });
