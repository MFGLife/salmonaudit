

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


  const subpoenaData = [
      { name: "Crycella Freitag", link: "https://drive.google.com/file/d/1ztjk8LZ8lTjma0Z9szn_wUlrySPFtno3/view" },
      { name: "Crycella Freitag", link: "https://drive.google.com/file/d/1sZVLOM2lNEmYxjg4KUtdRFWzNTjVxFMN/view" },
      { name: "Crycella Freitag", link: "https://drive.google.com/file/d/1pjIVi5Ao3huyPE7E1FRxo52T8l9xe3xX/view" },
      { name: "Crycella Freitag", link: "https://drive.google.com/file/d/1DGp9Sd5-3Be3f_sdyzULVf2epqIGCdew/view" },
      { name: "Amanda Freitag", link: "https://drive.google.com/file/d/1EMbfT6YWUTorCOAfE5A1x2WP2kcNdPK0/view" },
      { name: "Amanda Freitag", link: "https://drive.google.com/file/d/13cRnHYjQ7UgDmYj4u-Oofp596kVKSbjA/view" },
      { name: "Christian Freitag", link: "https://drive.google.com/file/d/1BAFIuo9DxbT1IS9pdW3T2B5B2TirEq4y/view" },
      { name: "Christina Rockley", link: "https://drive.google.com/file/d/1xxDHfwtbn2Rc1l5TQILncpn2hmwUEUtx/view" },
      { name: "Adrienne Fleck", link: "https://drive.google.com/file/d/1hyaSssSR9viNHg-QSdhCDyMZGRCXKlLj/view" },
      { name: "Matthew Zweifel", link: "https://drive.google.com/file/d/13Hae9npBEZ5ZfAsBeCZz_rN44auUDdBz/view" },
      { name: "Michele Dill", link: "https://drive.google.com/file/d/1egG5sEql83Zjai-CXGw-JO5TdvHZoEGW/view" },
      { name: "Katherine Eickhorst", link: "https://drive.google.com/file/d/1OHCraimQgyzkWXzPJz57SmFzSyaodj7H/view" },
      { name: "Fred Fulks", link: "https://drive.google.com/file/d/10RBKrvIRJrfE61RsH32P1x2OsmsNI-QH/view" },
      { name: "Carl Jemison", link: "https://drive.google.com/file/d/1GO4eat2PQOv18vxVkKHVhU0uwpKmuHDZ/view" },
      { name: "James Masterson", link: "https://drive.google.com/file/d/1zPcAalTdAVdKJhSOnyzo1-I0z_jhPN6r/view" },
      { name: "Taylor Penrod", link: "https://drive.google.com/file/d/1aSYda03OaziRF5Zw9QlwJWeWv4PJqcfw/view" },
      { name: "Terry Seufferlein", link: "https://drive.google.com/file/d/1E0aMz84xH_hXJfQ6WluaIdDGrnwFK6Gh/view" },
      { name: "Teresa Showen", link: "https://drive.google.com/file/d/16-qRm7sSfNPFG1juFs2lUtEcfdkUs5uI/view" },
      { name: "Nikki Wiarda", link: "https://drive.google.com/file/d/1_FVwg2X8L5p4RpiuEy3D-GLF_7Hlbtlj/view" },
      { name: "Leslee Trotter", link: "https://drive.google.com/file/d/1ej9oajCXdNGPvJ1RNWrYRewmsSjfilIm/view" },
      { name: "Samantha Wilson", link: "https://drive.google.com/file/d/1wpAAUNPK9AYNDfnb5cMW9YhHbxYwS-om/view" },
      { name: "Scott Abraham", link: "https://drive.google.com/file/d/1HaOEa5CF44A2DKsxrKTry1iolyrb_kps/view" },
      { name: "Beth Abraham", link: "https://drive.google.com/file/d/1HaOEa5CF44A2DKsxrKTry1iolyrb_kps/view" },
      { name: "Jim Baumann", link: "https://drive.google.com/file/d/1v0R52C1BdlNRcgglKC1ySKvJdoul8j-O/view" },
      { name: "Kathy Baumann", link: "https://drive.google.com/file/d/1v0R52C1BdlNRcgglKC1ySKvJdoul8j-O/view" },
      { name: "Jamie Wilson", link: "https://drive.google.com/file/d/1dRkkROy-lTpg9y945A9wjGDEQslYCE37/view" },
      { name: "Michael Wilson", link: "https://drive.google.com/file/d/1dRkkROy-lTpg9y945A9wjGDEQslYCE37/view" },
      { name: "Natasha Klutts", link: "https://drive.google.com/file/d/1U7Mo8LQRf_uwxKWNkEg3lpEPRjBNLBYi/view" },
      { name: "Robert Klutts", link: "https://drive.google.com/file/d/1U7Mo8LQRf_uwxKWNkEg3lpEPRjBNLBYi/view" },
      { name: "Chris Laubenthal", link: "https://drive.google.com/file/d/1omI-MThT7QQVF6bEWI4ngAFDVi4yT2gg/view" },
      { name: "Robin Laubenthal", link: "https://drive.google.com/file/d/1omI-MThT7QQVF6bEWI4ngAFDVi4yT2gg/view" },
      { name: "Jesse Salmon", link: "https://drive.google.com/file/d/1gV6-5IxvGwAHypLu9908K3pxpeY92XSt/view" },
      { name: "Carolyn Salmon", link: "https://drive.google.com/file/d/1gV6-5IxvGwAHypLu9908K3pxpeY92XSt/view" },

      { name: "Trina Nudson", link: "https://drive.google.com/file/d/1vM76Je5qzagq3dSvXsdfhazxG3s_6jg2/view" },
{ name: "Jessica Newman", link: "https://drive.google.com/file/d/1yAw34o6Qnd47JWrapQgixGSkr00AZGFj/view" },
{ name: "Jesse Salmon", link: "https://drive.google.com/file/d/1UfnPE0uAXbyMPMP371HcxFGQY-qEB-Io/view" },
{ name: "Kate Salmon", link: "https://drive.google.com/file/d/1UfnPE0uAXbyMPMP371HcxFGQY-qEB-Io/view" },
{ name: "Chanille Witham", link: "https://drive.google.com/file/d/1DwqnQaDvIwhmsGTUvAuOCIMjtnjisbpq/view" },
{ name: "Peter Witham", link: "https://drive.google.com/file/d/1DwqnQaDvIwhmsGTUvAuOCIMjtnjisbpq/view" },
{ name: "Michael Jackson", link: "https://drive.google.com/file/d/19j0Kg5H7ej4DrGI_YNItWlbkvTfxQpsv/view" },
{ name: "Midtown Psychological Services", link: "https://drive.google.com/file/d/1o1Uu_Auc8hOoWdWoq68o9OjqH2_1UyIw/view" },
{ name: "Gregory Sisk", link: "https://drive.google.com/file/d/1qoeQ8Zac36lL6yDQY6dAKlnqUk9wyAK6/view" },
{ name: "Helen Weiser", link: "https://drive.google.com/file/d/1fCanjK-kt0CnyG9mkPNKpB6ETFsA5XHq/view" },
{ name: "April DeMasters", link: "https://drive.google.com/file/d/1SgxmnXX1GZGymX54EsJVcno92bTleJZV/view" },
{ name: "Brooke Gipson", link: "https://drive.google.com/file/d/1eQuImoYK90gezmSVXhv6t3fyqZM1HNdP/view" },
{ name: "Terri Gilbert", link: "https://drive.google.com/file/d/13LDafOE4TC3kcu_t7LtIBJbPu19WDS6z/view" },
{ name: "Heather McBride", link: "https://drive.google.com/file/d/1EegUjwC9cUWDpWf2GCtBzcICyQELBFwR/view" },
{ name: "Ryan Weber", link: "https://drive.google.com/file/d/18_Emk_hVteooBere2JJHPgllV_AaXh0H/view" },
{ name: "Stephanie Reed", link: "https://drive.google.com/file/d/1MKtLxNubdXvmirPTcsFEntliWOGqRumk/view" },
{ name: "Tyler Brown", link: "https://drive.google.com/file/d/13rr22SsLy83tVz_4XrFS4f_2e-MEjiI4/view" }


    ];

    const searchInput = document.getElementById('search');
    const resultsList = document.getElementById('results');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      resultsList.innerHTML = '';
      const matches = subpoenaData.filter(item => item.name.toLowerCase().includes(query));

      if (matches.length === 0) {
        noResults.classList.remove('hidden');
      } else {
        noResults.classList.add('hidden');
        matches.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${item.link}" target="_blank" class="text-blue-600 hover:underline">${item.name}</a>`;
          resultsList.appendChild(li);
        });
      }
    });