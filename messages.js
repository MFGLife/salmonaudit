const webhookParts = [
  'ht',
  'tps',
  ':/',
  '/di',
  'sc',
  'ord',
  '.co',
  'm/a',
  'pi/',
  'web',
  'hoo',
  'ks/',
  '1373873904417771540',
  '/',
  'ean1Euh7WFzBSxvIcQURRW4Hbd0L7G2MdPRJgeTY954KArmNeZMLKiIuQ-cWcY6XexmC'
];

function assembleWebhookURL(parts) {
  return parts.join('');
}

const anonymousWebhookURL = assembleWebhookURL(webhookParts);

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


