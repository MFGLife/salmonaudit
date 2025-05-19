

const totalSlides = document.querySelectorAll('.swiper-slide').length;

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: totalSlides > 3, // Only enable loop if more than 3 slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

    // Hide the TikTok blockquote after 5 seconds
    window.onload = function() {
      setTimeout(function() {
        var embed = document.querySelector('.tiktok-embed');
        if (embed) {
          embed.style.display = 'none';
        }
      }, 6000); // 5000 milliseconds = 5 seconds
    };

const webhookBase = btoa('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv'); // Base64 for the base URL
const webhookId = 'MTM3Mzg3MzkwNDQxNzc3MTU0MA';
const webhookSecretEncoded = btoa('ZWFuMUV1aDdXRnpCU3h2SWNRVVJSVzRIYmQwTDdHMk1kUFJSZ2VUWVk5NTRLQXJtTmVaTExLaUl1US1jV2NZNlhleG1D'); // Base64 for the secret

function getAnonymousWebhookURL(baseEncoded, id, secretEncoded) {
  return atob(baseEncoded) + id + '/' + atob(secretEncoded);
}

const anonymousWebhookURL = getAnonymousWebhookURL(webhookBase, webhookId, webhookSecretEncoded);

document.getElementById('anonymousClassActionForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const anonymousDetails = this.anonymousDetails.value;

    const content = `**匿名 📝 Anonymous Submission**\n` +
                    `**Experience:**\n${anonymousDetails}`;

    try {
        await fetch(anonymousWebhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });

        document.getElementById('successModalAnonymous').classList.remove('hidden');
        this.reset();
    } catch (err) {
        alert('There was an error submitting your anonymous form. Please try again.');
        console.error(err);
    }
});

document.getElementById('closeModalAnonymous').addEventListener('click', function() {
    document.getElementById('successModalAnonymous').classList.add('hidden');
});