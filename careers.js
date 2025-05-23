document.addEventListener('DOMContentLoaded', function() {
            const careersContentDiv = document.getElementById('careersContent');

            // Store the entire HTML content in a JavaScript variable using template literals (backticks)
            const careerDataHTML = `
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome to SalmonAudit™</h1>
                    <p class="text-gray-600 mb-4">New Auditor Walkthrough & Training Program</p>
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fas fa-clock mr-1"></i>
                        <span>Estimated completion time: 20-30 minutes</span>
                    </div>
                </div>

                <div id="section1" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-info-circle text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">I. Executive Summary</h2>
                    </div>
                    <div class="prose max-w-none">
                        <p class="text-gray-700 mb-4">SalmonAudit™ is a civilian-led judicial auditing initiative built to expose, document, and correct systemic abuse, obstruction, and fraud within court systems across the United States—starting with family law and expanding across all civil and criminal jurisdictions.</p>
                        <p class="text-gray-700 mb-4">We utilize advanced AI-assisted case indexing, live court monitoring, and a unified accountability framework called the <span class="font-semibold text-blue-600">Hokuwa System of Law</span>.</p>
                        <div class="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                            <p class="text-blue-800 font-medium">Our mission is to train a new generation of legal auditors, empowering citizens to legally and professionally track judicial misconduct and trigger corrective remedies through public pressure, filings, media, and civil action.</p>
                        </div>
                        <p class="text-gray-700">SalmonAudit is more than a watchdog. It is the <span class="font-semibold">civilian intelligence layer of the justice system</span>.</p>
                    </div>
                </div>

                <div id="section2" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-building text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">II. Company Background</h2>
                    </div>
                    <div class="prose max-w-none">
                        <p class="text-gray-700 mb-4">Founded by <span class="font-semibold">Micheal Lawrence Salmon</span>, SalmonAudit™ began as a personal quest for justice after repeated systemic failures in a multi-jurisdictional custody battle revealed pervasive institutional corruption, perjury, collusion, and administrative manipulation.</p>
                        <p class="text-gray-700 mb-4">What began as a single-user case repository has grown into a multi-case, multi-county auditing engine. We have successfully indexed misconduct across Kansas and Missouri court systems, launched media and legal exposure campaigns, and developed a scalable toolset for citizen and legal professionals alike.</p>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <p class="text-yellow-800">We are now formalizing our <span class="font-semibold">Auditor Training Program</span>, onboarding professionals, activists, technologists, and paralegals into a structured environment that pays them to uncover truth and track legal violations.</p>
                        </div>
                    </div>
                </div>

                <div id="section3" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-tasks text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">III. What We Do</h2>
                    </div>

                    <div class="mb-8">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                            <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">A</span>
                            Judicial Auditing
                        </h3>
                        <p class="text-gray-700 mb-4">Our core function is the real-time auditing of judges, clerks, GALs, attorneys, and other state actors. We document all procedural actions and omissions, building searchable case logs, public timelines, and offense indices.</p>
                        <div class="bg-gray-50 p-4 rounded-lg mb-4">
                            <h4 class="font-medium text-gray-800 mb-2">This includes:</h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Tracking hearings removed from the docket</li>
                                <li>Identifying ex parte communications</li>
                                <li>Exposing conflicts of interest or improper recusals</li>
                                <li>Verifying the chain of filings and tampering</li>
                                <li>Recording failure to rule, failure to sanction, or bias in judicial discretion</li>
                            </ul>
                        </div>
                    </div>

                    <div class="mb-8">
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                            <span class="bg-blue-600 text-black rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">B</span>
                            The Hokuwa System of Law
                        </h3>
                        <p class="text-gray-700 mb-4">Hokuwa is our proprietary legal codex and categorization framework. Named after an aquatic guardian theme, each violation is codified into a Hokuwa Code, cross-referenced with applicable civil, criminal, or ethical statutes.</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-gray-700">
                            <div class="violation-code p-3 rounded">
                                <span class="font-bold">HOKUWA-L030</span>: Obstructing public complaint filing against officers or court actors
                            </div>
                            <div class="violation-code p-3 rounded">
                                <span class="font-bold">HOKUWA-C001</span>: Refusal to accept validly formatted motion or pleading
                            </div>
                            <div class="violation-code p-3 rounded">
                                <span class="font-bold">HOKUWA-C002</span>: Providing false or misleading information about filing rules
                            </div>
                        </div>

                        <p class="text-gray-700">These codes are indexed in our audit dashboards and used in all future filings, allowing us to generate <span class="font-semibold">"Writs of Hokuwa"</span> — legal documents that combine facts, offenses, and citations to build pressure and demand corrective action.</p>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                            <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">C</span>
                            Public-Facing Audits
                        </h3>
                        <p class="text-gray-700 mb-4">Every audit results in a public report (via <a href="https://SalmonAudit.info" class="text-blue-600 hover:underline">SalmonAudit.info</a>), where patterns of misconduct are exposed transparently. Every name, timestamp, and decision is tracked and cited.</p>

                        <p class="text-gray-700 mb-4">Auditors will also produce "Hokuwa Cards," much like trading cards, that include:</p>

                        <div class="hokuwa-card text-white p-6 relative overflow-hidden">
      <div class="shimmer-overlay"></div>

      <!-- Judge Header -->
      <div class="flex items-center z-10 relative mb-4">
        <div class="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          <img src="pics/stone2.png" class="w-full h-full object-cover" alt="Judge Court Clerks">
        </div>
        <div class="ml-4 min-w-0">
          <h4 class="font-bold text-xl truncate">Court Clerks</h4>
          <p class="text-blue-200 truncate">Circuit Court, Stone County</p>
        </div>
      </div>

      <!-- Dropdown Button -->
<button class="faq-toggle w-full flex justify-between items-center py-2 px-4 text-left bg-white text-black rounded hover:bg-gray-100 transition duration-300" 
        onclick="document.getElementById('faq-content-10').classList.toggle('hidden'); this.querySelector('i').classList.toggle('rotate-180');">        <span class="text-lg font-semibold">Case No: 24SNDR00104</span>
        <i class="fas fa-chevron-down transition-transform duration-300"></i>
      </button>
      <!-- Dropdown Content -->
      <div id="faq-content-10" class="faq-content hidden pt-4 text-gray-100 space-y-4">

        <div>
          <h5 class="font-semibold mb-2">Key Offenses:</h5>
          <div class="space-y-2">
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C001</span></span>
      <span>Refusal to accept validly formatted motion or pleading</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C002</span></span>
      <span>Providing false or misleading information about filing rules</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C006</span></span>
      <span>Omitting filed documents from docket or scanning queue</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C008</span></span>
      <span>Refusing to assist pro se litigants while assisting represented parties</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C011</span></span>
      <span>Denying access to public records or transcripts</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C017</span></span>
      <span>Concealing or misfiling complaints against court staff</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C019</span></span>
      <span>Refusing certified copies or refusing to stamp ‘filed’ documents</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C020</span></span>
      <span>Misrepresenting jurisdictional or procedural law to block filings</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C022</span></span>
      <span>Tampering with delivery of service, summons, or notice</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C023</span></span>
      <span>Burying appeals or objections through delayed transmission</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C025</span></span>
      <span>Blocking or failing to provide access to case files on request</span>
    </div>
  
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full border-2 border-primary-600" src="pics/micheal.png">
      <span class="px-2"><span class="violation-code px-1 py-1 rounded text-xs mr-2 bg-red-600">C030</span></span>
      <span>Ignoring written complaints or ethics submissions</span>
    </div>
  </div>
        </div>

        <div>
          <h5 class="font-semibold mb-1">Summary:</h5>
          <p class="text-blue-100 text-sm">Clerks in Stone County have engaged in systemic suppression of filings, refusal to accept motions, selective withholding of court records, and misinformation regarding custody transfers to Kansas. These acts have directly aided obstruction of due process and created record asymmetry between states.</p>
        </div>

        <div class="flex justify-between items-center">
          <span class="bg-green-500 px-3 py-1 rounded-full text-xs font-bold">Active</span>
          <span class="text-blue-200 text-sm">Case No: 24SNDR00104</span>
        </div>
      </div>
    </div>

                <div id="section4" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-dollar-sign text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">IV. How Auditors Earn</h2>
                    </div>
                    <p class="text-gray-700 mb-6">Auditors are compensated based on contribution, accuracy, and completeness. There are four revenue channels available to SalmonAudit participants:</p>

                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1 font-bold">1</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Per Audit Completion (Task-Based Pay)</h3>
                                <p class="text-gray-700">Each completed and verified case timeline or misconduct report earns a flat fee depending on depth, jurisdiction, and complexity.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1 font-bold">2</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Offense Discovery Bounties</h3>
                                <p class="text-gray-700">Uncovering a verifiable and documentable Hokuwa violation (especially in live cases or closed but appealable dockets) earns a bounty, payable in tiered increments. High-priority violations earn more.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1 font-bold">3</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Civil Action & Filing Commissions</h3>
                                <p class="text-gray-700">Auditors who assist in building or coordinating filings (motions, petitions, class actions) receive a percentage of the awarded fees or settlements obtained through public or private actions.</p>
                            </div>
                        </div>

                        <div class="flex items-start">
                            <div class="bg-blue-600 text-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1 font-bold">4</div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800 mb-1">Training & Licensing</h3>
                                <p class="text-gray-700">Certified auditors can train others, build localized auditing pods, and generate revenue by hosting webinars, field workshops, or collaborating with journalists, attorneys, and investigative partners.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="section5" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-user-plus text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">V. Who We Want</h2>
                    </div>
                    <p class="text-gray-700 mb-6">We are actively recruiting truth-seekers, legal researchers, court watchers, and public integrity advocates. <span class="font-semibold">You do not need a law degree.</span> In fact, most of our best auditors are those who have been personally impacted by judicial misconduct and have the drive to uncover corruption without fear.</p>

                    <div class="bg-blue-50 rounded-lg p-6 mb-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-check-circle text-blue-600 mr-2"></i> What matters most:
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex items-start">
                                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">Strong writing and documentation skills</h4>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">Ability to understand legal process (training provided)</h4>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">Persistence, clarity, and an unwillingness to be gaslit</h4>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">Basic tech literacy (spreadsheets, Google Drive, Zoom, etc.)</h4>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">Ethical rigor and transparency</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="section6" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-flag text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">VI. Join the Mission</h2>
                    </div>
                    <div class="prose max-w-none">
                        <p class="text-gray-700 mb-4">SalmonAudit is not just a platform—it is a movement. With every Writ of Hokuwa, every logged misconduct event, and every auditor trained, we pull back the curtain on judicial abuse and restore faith through action, not ideology.</p>

                        <div class="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-external-link-alt text-green-600 mt-1 mr-3"></i>
                                </div>
                                <div>
                                    <p class="text-green-800 font-medium">Apply at <a href="careers.html" class="text-green-700 underline hover:text-green-800">Careers</a></p>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-lg font-semibold text-gray-800 mb-3">We are actively onboarding for:</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 class="font-medium text-gray-800 mb-1 flex items-center">
                                    <i class="fas fa-map-marker-alt text-blue-600 mr-2"></i> Wyandotte County (KS)
                                </h4>
                                <p class="text-gray-600 text-sm">Priority area with documented patterns of misconduct</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 class="font-medium text-gray-800 mb-1 flex items-center">
                                    <i class="fas fa-map-marker-alt text-blue-600 mr-2"></i> Johnson County (KS)
                                </h4>
                                <p class="text-gray-600 text-sm">High-volume family court system needing oversight</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 class="font-medium text-gray-800 mb-1 flex items-center">
                                    <i class="fas fa-map-marker-alt text-blue-600 mr-2"></i> Jackson County (MO)
                                </h4>
                                <p class="text-gray-600 text-sm">Expanding our Missouri operations</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-3">
                                <h4 class="font-medium text-gray-800 mb-1 flex items-center">
                                    <i class="fas fa-globe text-blue-600 mr-2"></i> Online/federal watch roles
                                </h4>
                                <p class="text-gray-600 text-sm">Remote auditors tracking federal cases and patterns</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="section7" class="bg-white rounded-lg shadow-md p-6 mb-6 section-card fade-in">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-2 rounded-full mr-3">
                            <i class="fas fa-eye text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-semibold text-gray-800">VII. Long-Term Vision</h2>
                    </div>
                    <div class="prose max-w-none">
                        <p class="text-gray-700 mb-4">SalmonAudit will evolve into the backbone of civilian legal intelligence. Using AI-integrated case mapping, predictive behavioral analysis of judges, and federated Writ issuance protocols, we are laying the groundwork for a post-lawyer, code-based accountability system.</p>

                        <div class="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
                            <p class="text-purple-800 font-medium">The Hokuwa Codex will ultimately plug into AI agents capable of issuing legal threat assessments, filing motions, and verifying judicial compliance in real time.</p>
                        </div>

                        <div class="flex items-center bg-gray-50 p-4 rounded-lg mb-4">
                            <div class="bg-blue-600 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center mr-4">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-800">Future Roadmap</h3>
                                <p class="text-gray-600 text-sm">AI-assisted case analysis → Predictive judicial behavior modeling → Automated filing systems → Decentralized legal oversight</p>
                            </div>
                        </div>
                    </div>
                </div>
            `; // End of template literal

            // Assign the HTML string to the innerHTML of the div
            careersContentDiv.innerHTML = careerDataHTML;


document.querySelectorAll('.violation-code').forEach(el => {
  el.addEventListener('click', () => {
    const code = 'HOKUWA-' + el.textContent.trim();
    const contentDiv = document.getElementById('modalContent');

    // Filter all valid baseData entries that include the clicked code
    const matchingCitations = baseData.filter(entry =>
      Array.isArray(entry[2]) && entry[2].includes(code)
    );

    if (matchingCitations.length > 0) {
      // Build HTML for each matching citation
      const citationsHtml = matchingCitations.map(citation => {
        const [title, desc, codes] = citation;
        const relatedCodes = codes.map(c =>
          `<code class="bg-gray-200 text-xs rounded px-1 py-0.5">${c}</code>`
        ).join(" ");

        return `
          <div class="mb-4 p-2 border border-gray-300 rounded-lg">
            <strong>${title}</strong><br>
            <p class="mb-1 text-sm">${desc}</p>
            <div class="mt-1 text-xs text-gray-500">Applies to: ${relatedCodes}</div>
          </div>
        `;
      }).join(""); // Join all citation HTML blocks together

      contentDiv.innerHTML = citationsHtml;
    } else {
      contentDiv.innerHTML = `<p class="p-2">No valid legal citation linked to <strong>${code}</strong>.</p>`;
    }

    document.getElementById('citationModal').classList.remove('hidden');
  });
});

        });

        