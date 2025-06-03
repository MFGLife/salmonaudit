 // Enhanced data structure with more entries
        const sacredData = [
            {
                "id": "0001",
                "unifiedConcept": "Compassion",
                "description": "The divine practice of extending unconditional love and mercy to all beings",
                "glyph": {
                    "name": "Tear of Mercy",
                    "code": "∴⟟💧↺⧗⟟∴",
                    "meaning": "Compassion flows eternally, becoming universal law",
                    "visual": "💧"
                },
                "source": {
                    "originText": "Bible",
                    "book": "Ephesians",
                    "chapter": "4",
                    "verse": "32",
                    "quote": "Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you."
                },
                "uses": [
                    { "text": "Bible", "location": "Ephesians 4:32" },
                    { "text": "Quran", "location": "42:40" },
                    { "text": "Bhagavad Gita", "location": "12:18–19" },
                    { "text": "Dhammapada", "location": "1:5" },
                    { "text": "Tao Te Ching", "location": "63" }
                ],
                "crossValidated": [
                    "Quran 42:40",
                    "Bhagavad Gita 12:18–19",
                    "Dhammapada 1:5",
                    "Tao Te Ching 63"
                ],
                "loopsWith": ["Grace", "Forgiveness", "Empathy"],
                "keywords": ["compassion", "mercy", "forgiveness", "love", "grace", "kindness"]
            },
            {
                "id": "0002",
                "unifiedConcept": "Wisdom",
                "description": "The divine light of understanding that illuminates the path to truth",
                "glyph": {
                    "name": "Eye of Understanding",
                    "code": "◊👁️‍🗨️◊⟐∞⟐◊",
                    "meaning": "Wisdom sees beyond the veil into infinite truth",
                    "visual": "👁️"
                },
                "source": {
                    "originText": "Bible",
                    "book": "Proverbs",
                    "chapter": "9",
                    "verse": "10",
                    "quote": "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding."
                },
                "uses": [
                    { "text": "Bible", "location": "Proverbs 9:10" },
                    { "text": "Quran", "location": "4:113" },
                    { "text": "Bhagavad Gita", "location": "6:19" },
                    { "text": "Buddha", "location": "General Teachings" },
                    { "text": "Tao Te Ching", "location": "56" }
                ],
                "crossValidated": [
                    "Quran 4:113",
                    "Bhagavad Gita 6:19",
                    "Buddha (3 things not hidden)",
                    "Tao Te Ching 56"
                ],
                "loopsWith": ["Truth", "Insight", "Discernment"],
                "keywords": ["wisdom", "knowledge", "understanding", "truth", "enlightenment"]
            },
            {
                "id": "0003",
                "unifiedConcept": "Unity",
                "description": "The recognition that all existence is interconnected in divine oneness",
                "glyph": {
                    "name": "Circle of Oneness",
                    "code": "○∞○⟐◊⟐○∞○",
                    "meaning": "All paths lead to the same eternal center",
                    "visual": "∞"
                },
                "source": {
                    "originText": "Bible",
                    "book": "Ephesians",
                    "chapter": "4",
                    "verse": "4",
                    "quote": "There is one body and one Spirit, just as you were called to one hope when you were called."
                },
                "uses": [
                    { "text": "Bible", "location": "Ephesians 4:4" },
                    { "text": "Quran", "location": "3:103" },
                    { "text": "Upanishads", "location": "Verse on the Self" },
                    { "text": "Metta Sutta", "location": "Boundless Love" },
                    { "text": "Tao Te Ching", "location": "40" }
                ],
                "crossValidated": [
                    "Quran 3:103",
                    "Upanishads (Self in All)",
                    "Metta Sutta",
                    "Tao Te Ching 40"
                ],
                "loopsWith": ["Peace", "Love", "Compassion"],
                "keywords": ["unity", "oneness", "connection", "harmony", "universal"]
            },
            {
                "id": "0004",
                "unifiedConcept": "Peace",
                "description": "The divine tranquility that surpasses all understanding",
                "glyph": {
                    "name": "Dove of Serenity",
                    "code": "🕊️∼∼∼☮️∼∼∼🕊️",
                    "meaning": "Peace flows like gentle waters, calming all storms",
                    "visual": "☮️"
                },
                "source": {
                    "originText": "Bible",
                    "book": "John",
                    "chapter": "14",
                    "verse": "27",
                    "quote": "Peace I leave with you; my peace I give you. I do not give to you as the world gives."
                },
                "uses": [
                    { "text": "Bible", "location": "John 14:27" },
                    { "text": "Quran", "location": "10:25" },
                    { "text": "Upanishads", "location": "Brhadaranyaka Upanishad" },
                    { "text": "Dhammapada", "location": "100" },
                    { "text": "Tao Te Ching", "location": "78" }
                ],
                "crossValidated": [
                    "Quran 10:25",
                    "Brhadaranyaka Upanishad",
                    "Dhammapada 100",
                    "Tao Te Ching 78"
                ],
                "loopsWith": ["Unity", "Stillness", "Forgiveness"],
                "keywords": ["peace", "tranquility", "serenity", "calm", "harmony"]
            }
        ];

        // Navigation function
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Generate daily verse
       // Fix: ensure this function is globally accessible
function generateDailyVerse() {
    const today = new Date();
    const dayIndex = today.getDate() % sacredData.length;
    const entry = sacredData[dayIndex];

    const quote = entry.source.quote;
    const source = `${entry.source.book} ${entry.source.chapter}:${entry.source.verse}`;
    const tradition = entry.source.originText;

    document.getElementById('dailyVerse').innerHTML = `
        <div class="text-center mb-6">
            <div class="text-6xl mb-4 glyph-animate">${entry.glyph.visual}</div>
            <h4 class="text-2xl font-bold mb-2 text-gray-800">${entry.unifiedConcept}</h4>
            <p class="text-gray-600 italic">${entry.description}</p>
        </div>
        <blockquote class="font-serif text-xl text-gray-700 text-center mb-4 leading-relaxed">
            "${quote}"
        </blockquote>
        <div class="text-center mb-4">
            <span class="concept-badge text-white px-4 py-2 rounded-full text-sm font-semibold">
                ${tradition} - ${source}
            </span>
        </div>
        <div class="mt-6 text-center">
            <div class="bg-gray-100 rounded-lg p-4 inline-block">
                <div class="font-mono text-lg mb-2">${entry.glyph.code}</div>
                <div class="text-sm text-gray-600 italic">${entry.glyph.meaning}</div>
            </div>
        </div>
        <div class="mt-6 bg-blue-50 rounded-lg p-4">
            <h5 class="font-semibold text-gray-800 mb-2">Cross-Validated Wisdom</h5>
            <div class="text-sm text-gray-600 mb-2">
                <strong>Also found in:</strong> ${entry.crossValidated.join(', ')}
            </div>
            <div class="text-sm text-gray-600">
                <strong>Connects with:</strong> ${entry.loopsWith.join(', ')}
            </div>
        </div>
    `;
}


        // Populate filters
        function populateFilters() {
            const conceptSet = new Set();
            sacredData.forEach(entry => conceptSet.add(entry.unifiedConcept));
            
            const conceptSelect = document.getElementById("filterConcept");
            conceptSelect.innerHTML = `<option value="">All Concepts</option>` +
                [...conceptSet].map(c => `<option value="${c}">${c}</option>`).join('');
        }

        // Render comparison cards
        function renderTable() {
            const conceptFilter = document.getElementById("filterConcept").value;
            const traditionFilter = document.getElementById("filterTradition").value;
            
            let filteredEntries = sacredData.filter(entry => 
                (!conceptFilter || entry.unifiedConcept === conceptFilter)
            );

            const verseCards = document.getElementById("verseCards");
            verseCards.innerHTML = filteredEntries.map(entry => {
                // Filter uses by tradition if selected
                const displayUses = traditionFilter ? 
                    entry.uses.filter(use => use.text.toLowerCase() === traditionFilter) : 
                    entry.uses.slice(0, 3);

                return `
                    <div class="tradition-card bg-white rounded-xl p-6 shadow-lg">
                        <div class="text-center mb-4">
                            <div class="text-4xl mb-2">${entry.glyph.visual}</div>
                            <h4 class="text-xl font-bold text-gray-800 mb-2">${entry.unifiedConcept}</h4>
                            <p class="text-sm text-gray-600">${entry.description}</p>
                        </div>
                        
                        <!-- Primary Source -->
                        <div class="mb-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4">
                            <div class="text-xs font-semibold text-violet-600 uppercase mb-1">Primary Source</div>
                            <div class="text-sm text-gray-700 leading-relaxed mb-2">
                                "${entry.source.quote.substring(0, 120)}${entry.source.quote.length > 120 ? '...' : ''}"
                            </div>
                            <div class="text-xs text-gray-500">
                                ${entry.source.originText} - ${entry.source.book} ${entry.source.chapter}:${entry.source.verse}
                            </div>
                        </div>

                        <!-- Cross References -->
                        <div class="space-y-2 mb-4">
                            <div class="text-xs font-semibold text-gray-600 uppercase mb-2">Cross-Validated In:</div>
                            ${displayUses.map(use => `
                                <div class="border-l-4 border-blue-300 pl-3 py-1">
                                    <div class="text-xs font-medium text-blue-600">${use.text}</div>
                                    <div class="text-xs text-gray-500">${use.location}</div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- Loops With -->
                        <div class="mb-4">
                            <div class="text-xs font-semibold text-gray-600 uppercase mb-2">Loops With:</div>
                            <div class="flex flex-wrap gap-1">
                                ${entry.loopsWith.map(concept => `
                                    <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">${concept}</span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mt-4 text-center">
                            <div class="bg-gray-50 rounded-lg p-3">
                                <div class="font-mono text-sm">${entry.glyph.code}</div>
                                <div class="text-xs text-gray-500 mt-1">${entry.glyph.meaning}</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Display glyph gallery
        function displayGlyphs() {
            const currentGlyph = sacredData[0]; // Featured glyph
            document.getElementById('glyphDisplay').innerHTML = `
                <div class="text-center">
                    <div class="text-8xl mb-6 glyph-animate">${currentGlyph.glyph.visual}</div>
                    <h4 class="text-3xl font-bold mb-4 text-gray-800">${currentGlyph.glyph.name}</h4>
                    <div class="font-mono text-2xl mb-4 text-violet-600">${currentGlyph.glyph.code}</div>
                    <p class="text-lg text-gray-600 italic mb-6">${currentGlyph.glyph.meaning}</p>
                    <div class="bg-gray-50 rounded-lg p-4 inline-block max-w-lg">
                        <p class="text-sm text-gray-700">${currentGlyph.description}</p>
                    </div>
                </div>
            `;

            // Populate glyph grid
            const glyphGrid = document.getElementById('glyphGrid');
            glyphGrid.innerHTML = sacredData.map(entry => `
                <div class="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer" 
                     onclick="displayFeaturedGlyph('${entry.id}')">
                    <div class="text-4xl mb-3">${entry.glyph.visual}</div>
                    <h5 class="font-semibold text-gray-800 mb-2">${entry.glyph.name}</h5>
                    <div class="font-mono text-sm text-violet-600 mb-2">${entry.glyph.code}</div>
                    <p class="text-xs text-gray-600">${entry.unifiedConcept}</p>
                </div>
            `).join('');
        }

        // Display featured glyph
        function displayFeaturedGlyph(id) {
            const entry = sacredData.find(e => e.id === id);
            if (!entry) return;

            document.getElementById('glyphDisplay').innerHTML = `
                <div class="text-center">
                    <div class="text-8xl mb-6 glyph-animate">${entry.glyph.visual}</div>
                    <h4 class="text-3xl font-bold mb-4 text-gray-800">${entry.glyph.name}</h4>
                    <div class="font-mono text-2xl mb-4 text-violet-600">${entry.glyph.code}</div>
                    <p class="text-lg text-gray-600 italic mb-6">${entry.glyph.meaning}</p>
                    <div class="bg-gray-50 rounded-lg p-4 inline-block max-w-lg">
                        <p class="text-sm text-gray-700">${entry.description}</p>
                    </div>
                </div>
            `;
        }

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            populateFilters();
            renderTable();
            generateDailyVerse();
            displayGlyphs();
        });