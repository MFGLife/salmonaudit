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

    <a href="careers.html" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
      Begin Alignment
    </a>
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

    <a href="careers.html" class="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
      Join the Integrity Net
    </a>
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

    <a href="careers.html" class="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
      Enter Ascension Protocol
    </a>
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
