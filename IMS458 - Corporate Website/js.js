/* slider */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

/* card slider magazine */
function cardslides(n) {
			const slider = document.getElementById('cardSlider1');
			const btnLeft = document.getElementById('navLeft');
			const btnRight = document.getElementById('navRight');
			const cardWidth = 300; // card width + margin-right approx

			btnLeft.addEventListener('click', () => {
			  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
			});
			btnRight.addEventListener('click', () => {
			  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
			});
}

/* card slider news*/
function cardslides2(n) {
			const slider = document.getElementById('cardSlider2');
			const btnLeft = document.getElementById('navLeft2');
			const btnRight = document.getElementById('navRight2');
			const cardWidth = 300; // card width + margin-right approx

			btnLeft.addEventListener('click', () => {
			  slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
			});
			btnRight.addEventListener('click', () => {
			  slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
			});
}


/* contact */
document.getElementById('newsForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const rating = document.querySelector('input[name="rating"]:checked');
  const warning = document.getElementById('warning');

  if (!name || !email || !rating) {
    warning.textContent = "Sila isi semua maklumat dan penilaian!";
    return;
  }

  warning.textContent = "";

  const subject = encodeURIComponent("Maklumat Penilaian Portal Akhbar");
  const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPenilaian: ${rating.value} bintang`);

  window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
});
//
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const form = e.target;
  const warning = document.getElementById('warning');

  const firstName = form.first_name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!firstName || !email || !phone || !message) {
    warning.textContent = 'All fields are required.';
    e.preventDefault(); // prevent form from submitting
  } else {
    warning.textContent = '';
  }
});
