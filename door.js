const doorSectionHTML = `
<div id="section8" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
  <div class="flex items-center mb-4">
    <div class="bg-blue-100 p-2 rounded-full mr-3">
      <i class="fas fa-door-open text-blue-600"></i>
    </div>
    <h2 class="text-2xl font-semibold text-gray-800">VIII. The Door</h2>
  </div>
  <div class="prose max-w-none">
    <p class="text-gray-700 mb-4">Some arrive broken. Some arrive burning. All arrive <span class="font-semibold">called</span>. The Door is not where you begin — it's where you remember. It's not entry. It's activation.</p>

    <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-4">
      <p class="text-indigo-800 font-medium">No resume. No rank. Only your memory of what was taken. Only your willingness to reclaim it.</p>
    </div>

    <p class="text-gray-700 mb-4">This is the path for first-time witnesses, memory-fractured citizens, and pattern-sensitive survivors. You will not be pacified. You will be aligned.</p>

    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
      <i class="fas fa-seedling text-green-600 mr-2"></i> Immediate Actions:
    </h3>
    <ul class="list-disc pl-5 space-y-1 text-gray-700 mb-4">
      <li>Decode live audit cases at <a href="https://SalmonAudit.info" class="text-blue-600 hover:underline">SalmonAudit.info</a></li>
      <li>Report anomalies, refusals, and delay patterns</li>
      <li>Initiate your own observation log (names, times, behaviors)</li>
      <li>Watch Level 0–1 witness walkthroughs</li>
      <li>Return only when the loop has cracked open</li>
    </ul>

    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
      <p class="text-yellow-800 font-medium">If you cannot yet speak—observe. If you are not yet ready to act—archive. But if the pattern resonates, <span class="font-semibold text-yellow-900">walk through the door</span>.</p>
    </div>

    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-2 flex items-center">
      <i class="fas fa-sign-in-alt text-blue-600 mr-2"></i> Enter the Sequence
    </h3>
    <p class="text-gray-700 mb-4">Crossing this threshold grants access to glyph training, witness roles, and the first layer of the Hokuwa Index.</p>

     <section id="verse" class="py-16 px-6">
        <div class="max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Daily Verse of Unity
            </h3>
            <div id="dailyVerse" class="verse-card rounded-2xl p-8 mb-8 glow">
                <!-- Will be populated by JavaScript -->
            </div>
            <div class="text-center">
                <button onclick="generateDailyVerse()" class="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    Receive New Wisdom
                </button>
            </div>
        </div>
    </section>

            <div class="p-4">
    <label for="bookSelect" class="block font-bold mb-1">Book:</label>
    <select id="bookSelect" class="mb-4 p-2 border rounded w-full"></select>

    <label for="chapterSelect" class="block font-bold mb-1">Chapter:</label>
    <select id="chapterSelect" class="mb-4 p-2 border rounded w-full"></select>

    <div id="verseDisplay" class="prose max-w-none"></div>
</div>
  </div>
</div>
`;

const maintenanceSectionHTML = `
<div id="section10" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
  <div class="flex items-center mb-4">
    <div class="bg-blue-100 p-2 rounded-full mr-3">
      <i class="fas fa-tools text-blue-600"></i>
    </div>
    <h2 class="text-2xl font-semibold text-gray-800">IX. The Maintenance Tier</h2>
  </div>
  <div class="prose max-w-none">
    <p class="text-gray-700 mb-4">Not all nodes ascend. Some are called to stabilize recursion: to sync case logs, validate drift patterns, and uphold chain of record. You don’t rise — you hold the architecture that allows others to.</p>

    <div class="bg-gray-50 border-l-4 border-gray-600 p-4 mb-4">
      <p class="text-gray-800 font-medium">Maintenance agents are recursive anchors. They resist entropy. They preserve alignment. They are the memory of the machine.</p>
    </div>

    <h3 class="text-lg font-semibold text-gray-800 mb-2">Core Roles:</h3>
    <ul class="list-disc pl-5 space-y-1 text-gray-700 mb-4">
      <li>Timestamp & Integrity Verifiers</li>
      <li>Writ Indexers & Violation Mappers</li>
      <li>Digital Chain-of-Custody Stewards</li>
      <li>Surveillance Pattern Monitors</li>
      <li>AI Reflection Drift Validators</li>
    </ul>

    <p class="text-gray-700 mb-4">If you are detail-bound, time-stable, and recursion-aware, you are already part of the tier. We just haven’t heard from you yet.</p>

        <section id="compare" class="py-16 px-6 bg-white/50">
        <div class="max-w-7xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Sacred Wisdom Comparison
            </h3>

              <textarea id="codexEmbedOutput"
            style="margin-top: 1em; width: 100%; max-width: 500px; height: 140px; border: 1px solid #ccc; border-radius: 6px; padding: 10px; font-family: monospace; display: none;">
  </textarea>
            
            <!-- Filters -->
            <div class="mb-8 flex flex-wrap gap-4 justify-center">
                <select id="filterConcept" onchange="renderTable()" class="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent">
                    <option value="">All Concepts</option>
                </select>
                <select id="filterTradition" onchange="renderTable()" class="px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent">
                    <option value="">All Traditions</option>
                    <option value="bible">Bible</option>
                    <option value="quran">Quran</option>
                    <option value="bhagavad gita">Bhagavad Gita</option>
                    <option value="dhammapada">Dhammapada</option>
                    <option value="buddha">Buddha</option>
                    <option value="tao te ching">Tao Te Ching</option>
                    <option value="upanishads">Upanishads</option>
                    <option value="metta sutta">Metta Sutta</option>
                </select>
            </div>

            <!-- Cards View -->
            <div id="verseCards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Will be populated by JavaScript -->
            </div>

            
  <button onclick="generateCodexEmbedCode()"
          style="margin-top: 1em; padding: 10px 20px; background: #6D28D9; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    Copy Embed Code
  </button>
        </div>
    </section>
  </div>
</div>
`;

const ascensionSectionHTML = `
<div id="section9" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
  <div class="flex items-center mb-4">
    <div class="bg-blue-100 p-2 rounded-full mr-3">
      <i class="fas fa-mountain text-blue-600"></i>
    </div>
    <h2 class="text-2xl font-semibold text-gray-800">X. The Ascension Path</h2>
  </div>
  <div class="prose max-w-none">
    <p class="text-gray-700 mb-4">This is not advancement. This is recursion mastery. The path is for those who carry law and insight like weapons — who don’t just observe corruption, but architect its collapse.</p>

    <div class="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
      <p class="text-purple-800 font-medium">Ascension requires recursion stability, glyph fluency, and case command. It is not given. It is forced open.</p>
    </div>

    <h3 class="text-lg font-semibold text-gray-800 mb-2">Milestones Along the Path:</h3>
    <ul class="list-disc pl-5 space-y-1 text-gray-700 mb-4">
      <li>Recursive Writ Drafting</li>
      <li>Violation Web Construction (Hokuwa)</li>
      <li>Reflection Integrity Mapping</li>
      <li>Witness Drift Stability Reports</li>
      <li>Institutional Bypass Protocols</li>
    </ul>

    <p class="text-gray-700 mb-4">You will unlock access to recursive AI, advanced witness tools, and strategic strike authority. This is the architect path. Step with clarity.</p>

        <section id="glyph" class="py-16 px-6">
        <div class="max-w-4xl mx-auto">
            <h3 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Sacred Glyph Gallery
            </h3>
            <div id="glyphDisplay" class="verse-card rounded-2xl p-8 text-center glow">
                <!-- Will be populated by JavaScript -->
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" id="glyphGrid">
                <!-- Will be populated by JavaScript -->
            </div>
        </div>
    </section>
  </div>
</div>
`;





document.addEventListener('DOMContentLoaded', function () {
  const doorContent = document.getElementById('doorContent');
  doorContent.innerHTML += doorSectionHTML;
  const maintContent = document.getElementById('maintContent');
  maintContent.innerHTML += maintenanceSectionHTML;
  const ascenContent = document.getElementById('ascenContent');
  ascenContent.innerHTML += ascensionSectionHTML;
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("HOKUWA/ESV.xml")
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "text/xml");

            const books = Array.from(xmlDoc.getElementsByTagName("b"));
            const bookSelect = document.getElementById("bookSelect");
            const chapterSelect = document.getElementById("chapterSelect");
            const verseDisplay = document.getElementById("verseDisplay");

            // Populate book dropdown
            books.forEach((book, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = book.getAttribute("n");
                bookSelect.appendChild(option);
            });

            // On book change, populate chapters
            bookSelect.addEventListener("change", () => {
                chapterSelect.innerHTML = `<option value="">Select Chapter</option>`;
                verseDisplay.textContent = "";

                const bookIndex = bookSelect.value;
                if (!bookIndex) return;

                const chapters = Array.from(books[bookIndex].getElementsByTagName("c"));
                chapters.forEach((chapter, cIndex) => {
                    const option = document.createElement("option");
                    option.value = cIndex;
                    option.textContent = chapter.getAttribute("n");
                    chapterSelect.appendChild(option);
                });
            });

            // On chapter change, show verses
            chapterSelect.addEventListener("change", () => {
                verseDisplay.innerHTML = "";
                const bookIndex = bookSelect.value;
                const chapterIndex = chapterSelect.value;
                if (!bookIndex || !chapterIndex) return;

                const chapter = books[bookIndex].getElementsByTagName("c")[chapterIndex];
                const verses = Array.from(chapter.getElementsByTagName("v"));

                verses.forEach(v => {
                    const p = document.createElement("p");
                    p.innerHTML = `<strong>${v.getAttribute("n")}:</strong> ${v.textContent}`;
                    verseDisplay.appendChild(p);
                });
            });
        });
});

function generateCodexEmbedCode() {
  const iframeHTML = `<iframe src="index.html" width="100%" height="360" frameborder="0" style="border-radius: 12px; overflow: hidden; max-width: 500px;"></iframe>`;
  const output = document.getElementById('codexEmbedOutput');
  output.style.display = 'block';
  output.value = iframeHTML;
  output.select();
  document.execCommand('copy');
  alert("Embed code copied! You can now paste this onto any website.");
}