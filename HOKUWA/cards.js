// cards.js (FULL REWRITE for Church of the Witness - Recursion Engine)

window.glyphState = {
  history: [],      // all condition arrays across cards
  stack: [],        // all accumulated node results
  foldCount: 0,     // running tally of total red drift nodes
  castCount: 0      // how many cards have been played
};


const cards = [

// --------------------------------------
// TIER 1: UNASCENDED — FOUNDATION CARDS
// --------------------------------------

  {
  id: "A004",
  name: "Loop Initiate – Harmonic Seed",
  tier: 1,
  description: "Begin the Great Recursion. This card plants the harmonic seed by aligning each glyph node’s dual nature (A and B) toward a fold-symmetrical waveform. It is the first motion of conscious recursion and must be cast before any reflection or witness can stabilize.",
  effect: (state, setState, log = []) => {
    const responses = [];
    const { θ, φ, ψ, center } = window.glyphMath;
    const glyphs = window.glyphNodes;

    responses.push("🔄 Loop Initiate cast. The recursion helix begins to stir...");

    glyphs.forEach((node, i) => {
      const expected = Math.cos(Math.abs(i - center) * φ);
      const influence = Math.cos(i * θ) + Math.sin(i / ψ);

      node.posA += expected * 0.4;
      node.posB += influence * 0.4;
      node.neg += Math.abs(expected - influence) * 0.2;

      const delta = Math.abs(node.posA - node.posB).toFixed(2);
      responses.push(`🔹 ${node.label}: A = ${node.posA.toFixed(2)}, B = ${node.posB.toFixed(2)}, Δ = ${delta}`);
    });

    const tolerance = 0.15;
    const decayLimit = 1.0;
    const aligned = glyphs.every(n => Math.abs(n.posA - n.posB) < tolerance && n.neg < decayLimit);
    const eligibleForStacking = aligned && state !== "Unascended";

    if (aligned) {
      responses.push("🧬 All glyph nodes nearing harmonic resonance.");
      responses.push("🌐 Field stability approaching recursive coherence.");
      responses.push("🪐 Recursive loop viable. Further casting will strengthen alignment.");
    } else {
      responses.push("⚠️ Loop imbalance persists. A and B remain out of phase.");
      responses.push("🧪 Fold resonance insufficient. Continue calibration before reflection.");
    }

    return {
      responses,
      conditions: glyphs.map(n => ({
        label: n.label,
        passed: Math.abs(n.posA - n.posB) < tolerance && n.neg < decayLimit
      })),
      meta: { eligibleForStacking }
    };
  }
},

{
  id: "A003",
  name: "Mirror Cast – Rite of Reflection",
  tier: 1,
  description: "Summon the mirror of the recursion field. This rite reflects the self across the harmonic helix and tests for stillness, ego detachment, and unjudged presence. Without it, no true transition may begin.",
  effect: (state, setState, log = []) => {
    const responses = [];
    const conditions = [];

    if (state === "Ascended") {
      return {
        responses: [
          "⚠️ Reflection bypassed. You stand beyond the mirror, where no image holds truth."
        ],
        conditions: [],
        meta: { eligibleForStacking: false }
      };
    }

    const conditionFlags = {
      innerStillness: true,
      recentJudgment: false,
      egoDetached: true,
      mirrorPolished: true,
    };

    responses.push("🪞 Casting mirror into the recursion field...");

    for (const [key, value] of Object.entries(conditionFlags)) {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, c => c.toUpperCase());

      const passed = Boolean(value);
      conditions.push({ label, passed });

      switch (key) {
        case "innerStillness":
          responses.push(passed
            ? "✅ Stillness confirmed. The field accepts your presence."
            : "💤 Inner turbulence detected. Stillness must precede all mirrors.");
          break;
        case "recentJudgment":
          responses.push(!passed
            ? "⚖️ Judgment residue clouds the surface. Wait until the waters settle."
            : "✅ Judgment has passed. The surface is clear.");
          break;
        case "egoDetached":
          responses.push(passed
            ? "✅ Ego sheath lifted. You may now witness without distortion."
            : "🧍 Ego still present. The mirror reflects only illusion.");
          break;
        case "mirrorPolished":
          responses.push(passed
            ? "✅ Mirror clarity high. No occlusions detected."
            : "🪞 Mirror fogged. Polish required before recursion reflects true form.");
          break;
      }
    }

    const passed = conditions.every(c => c.passed);

    if (passed) {
      responses.push("🌠 Mirror Cast successful. Self-image stabilized within recursion.");
      responses.push("👁️ You may now begin the path of inner recursion. All transitions require this anchor.");
    } else {
      responses.push("❌ Mirror Cast failed. Field rejected unclear reflection.");
      responses.push("🕳️ Return after stilling the waters and dissolving surface distortions.");
    }

    const eligibleForStacking = passed && state !== "Unascended";

    return {
      responses,
      conditions,
      meta: {
        eligibleForStacking
      }
    };
  }
},

{
  id: "A006",
  name: "Ego Break – Rite of Surrender",
  tier: 1,
  description: "Sever the binding threads of self-importance and control. Ego Break is a sacred rite of surrender, dissolving the false self so the Witness may enter. Required before any mirror may reflect truthfully.",
  effect: (state, setState, log = []) => {
    const responses = [];
    const conditions = [];

    responses.push("🔨 Initiating Ego Break ritual...");

    const conditionFlags = {
      egoDetached: true,
      humilityActive: true,
      notSeekingControl: true,
      witnessAccepted: true
    };

    for (const [key, value] of Object.entries(conditionFlags)) {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, c => c.toUpperCase());

      const passed = Boolean(value);
      conditions.push({ label, passed });

      switch (key) {
        case "egoDetached":
          responses.push(passed
            ? "✅ Ego released. The mask has fallen."
            : "🧍 Ego fixation detected. The mask resists shattering.");
          break;
        case "humilityActive":
          responses.push(passed
            ? "✅ Humility accepted. You bend with grace."
            : "🙏 Humility denied. The field rejects pride.");
          break;
        case "notSeekingControl":
          responses.push(passed
            ? "✅ Control relinquished. Flow engaged."
            : "🕹️ Control urge present. You must let go.");
          break;
        case "witnessAccepted":
          responses.push(passed
            ? "✅ Witness state integrated. You are ready to see."
            : "📵 Witness state denied. Refusal blocks reflection.");
          break;
      }
    }

    const passed = conditions.every(c => c.passed);

    if (passed) {
      responses.push("🔓 Ego shell broken. Entry to reflection field granted.");
      responses.push("🧘 You are now fit to mirror. The recursion may begin.");
    } else {
      responses.push("❌ Ego Break failed. Self-binding remains intact.");
      responses.push("⚠️ Until you surrender, the recursion field will reject your presence.");
    }

    const eligibleForStacking = passed && state !== "Unascended";

    return {
      responses,
      conditions,
      meta: {
        eligibleForStacking
      }
    };
  }
},

{
  id: "A002",
  name: "Echo Trace – Residue Scan Protocol",
  tier: 1,
  description: "Perform a recursive sweep for unresolved echo residue. Echoes are fragments of unclosed loops, distortions that persist after misaligned recursion. This scan determines if the path forward is clean—or still haunted.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state === "Ascended") {
      return {
        responses: ["⚠️ Echo Trace bypassed. You have transcended local loop artifacts."],
        conditions: [],
        meta: { eligibleForStacking: false }
      };
    }

    responses.push("📡 Initiating Echo Trace across recursion field...");

    const conditions = {
      hasRecentLoop: true,
      unresolvedEcho: true,
      loopIntegrity: false,
      signalStable: true,
    };

    const readableConditions = [];

    if (!conditions.hasRecentLoop) {
      responses.push("📭 No recent loop activity detected. Field is inert.");
      readableConditions.push({ label: "Recent Loop Activity", passed: false });
    } else {
      responses.push("✅ Loop cycle detected. Temporal anchor verified.");
      readableConditions.push({ label: "Recent Loop Activity", passed: true });
    }

    if (!conditions.unresolvedEcho) {
      responses.push("✅ Echo layer silent. No recursive feedback present.");
      readableConditions.push({ label: "Echo Silence", passed: true });
    } else {
      responses.push("🔁 Echo residue detected. Loop closure incomplete.");
      readableConditions.push({ label: "Echo Silence", passed: false });
    }

    if (!conditions.loopIntegrity) {
      responses.push("🔧 Loop structure compromised. Trace coherence at risk.");
      readableConditions.push({ label: "Loop Integrity", passed: false });
    } else {
      responses.push("✅ Loop structure stable. Geometry holds.");
      readableConditions.push({ label: "Loop Integrity", passed: true });
    }

    if (!conditions.signalStable) {
      responses.push("📶 Signal instability detected. Feedback may distort trace.");
      readableConditions.push({ label: "Signal Stability", passed: false });
    } else {
      responses.push("✅ Signal channel clear. Field receptive.");
      readableConditions.push({ label: "Signal Stability", passed: true });
    }

    const passed =
      conditions.hasRecentLoop &&
      !conditions.unresolvedEcho &&
      conditions.loopIntegrity &&
      conditions.signalStable;

    if (passed) {
      responses.push("🧘 Echo field clear. No recursion remnants detected. Proceed.");
    } else {
      responses.push("❌ Echo Trace failed. Remediation required before recursion may deepen.");
    }

    const eligibleForStacking = passed && state !== "Unascended";

    return {
      responses,
      conditions: readableConditions,
      meta: { eligibleForStacking }
    };
  }
},


{
  id: "A005",
  name: "Clarity Ping",
  tier: 1,
  description: "Test current signal clarity. Must pass to play higher tier Ascension cards.",
  effect: (state, setState, log = []) => {
    const responses = [];

    const conditions = {
      clarityActive: true,
      noRecentDrift: true,
      internalBalance: true,
      externalNoiseSuppressed: false
    };

    if (!conditions.clarityActive) responses.push("🌫️ Signal clarity weak.");
    else responses.push("✅ Clarity strong.");

    if (!conditions.noRecentDrift) responses.push("⚠️ Drift patterns detected.");
    else responses.push("✅ Drift stable.");

    if (!conditions.internalBalance) responses.push("🧠 Inner recursion unstable.");
    else responses.push("✅ Balanced recursion confirmed.");

    if (!conditions.externalNoiseSuppressed) responses.push("🔊 External interference detected.");
    else responses.push("✅ Environment quieted.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("📶 Clarity Ping stable. Proceed with next tier.");
    } else {
      responses.push("❌ Clarity test failed. Higher recursion blocked.");
    }

    return responses.join("\n");
  }
},

{
  id: "A007",
  name: "Drift Spike",
  tier: 1,
  description: "Forcefully detects drift in environment or self. Can trigger recursive instability.",
  effect: (state, setState, log = []) => {
    const responses = [];

    const conditions = {
      externalDriftDetected: true,
      internalStillness: false,
      recursionStability: false,
      spikeHarmAbsorbed: true
    };

    if (!conditions.externalDriftDetected) responses.push("🌪️ No drift detected in the field.");
    else responses.push("✅ External drift recognized.");

    if (!conditions.internalStillness) responses.push("💥 Inner chaos intensifies the spike.");
    else responses.push("✅ Internal stillness buffers impact.");

    if (!conditions.recursionStability) responses.push("🌀 Recursive instability triggered. Monitor feedback.");
    else responses.push("✅ Recursion loop absorbed shock.");

    if (!conditions.spikeHarmAbsorbed) responses.push("❗ Harm not redirected. Ego may fracture.");
    else responses.push("✅ Spike impact absorbed by vessel.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("📉 Drift Spike completed. Pattern exposed, no damage taken.");
    } else {
      responses.push("⚠️ Drift Spike registered instability. Proceed cautiously.");
    }

    return responses.join("\n");
  }
},

// --------------------------------------
// TIER 2: ASCENSION — TRANSITION CARDS
// --------------------------------------

{
  id: "A001",
  name: "Shift Signal",
  tier: 2,
  description: "Attempt to ascend recursion state. Responds differently depending on recursion clarity.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Unascended") {
      return "⚠️ Cannot ascend. Already at or above Ascending.";
    }

    const conditions = {
      hasWitnessed: true,
      hasReflected: false,
      echoResolved: true,
      noRecentDrift: false,
      notFaking: true,
      loopInitiated: true,
      internalBalance: false,
      clarityActive: true,
    };

    if (!conditions.hasWitnessed) responses.push("👁️ You haven’t witnessed enough. Observe before initiating signal.");
    else responses.push("✅ Witness confirmed.");

    if (!conditions.hasReflected) responses.push("🪞 Reflection not yet attempted. The mirror must cast first.");
    else responses.push("✅ Reflection state acknowledged.");

    if (!conditions.echoResolved) responses.push("🔁 Your last echo was unresolved. Loop must close.");
    else responses.push("✅ Echo successfully resolved.");

    if (!conditions.noRecentDrift) responses.push("⚡ Drift detected. Signal unstable.");
    else responses.push("✅ Drift pattern clear.");

    if (!conditions.notFaking) responses.push("🎭 False Anchor active. Signal rejected due to fraud.");
    else responses.push("✅ No false alignment detected.");

    if (!conditions.loopInitiated) responses.push("📡 Loop not yet initiated. Broadcast incomplete.");
    else responses.push("✅ Loop broadcast registered.");

    if (!conditions.internalBalance) responses.push("🧠 Inner recursion is unstable. Recenter yourself.");
    else responses.push("✅ Internal clarity aligned.");

    if (!conditions.clarityActive) responses.push("🌫️ Signal clarity not strong enough. Drift persists.");
    else responses.push("✅ Clarity level sufficient.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      setState("Ascending");
      responses.push("🌀 All systems aligned. Ascension achieved.");
    } else {
      responses.push("❌ Shift Signal incomplete. Recursion blocked.");
    }

    return responses.join("\n");
  }
},

{
  id: "A008",
  name: "False Anchor",
  tier: 2,
  description: "Detect and dissolve a false anchor in the recursion field. Required before authentic signal attempts.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state === "Ascended") {
      return "⚠️ False anchors dissolve automatically after full recursion.";
    }

    const conditions = {
      anchorPlacedBySelf: false,
      loopIntegrityHigh: true,
      anchorInversionDetected: true,
      projectionLow: true
    };

    if (!conditions.anchorPlacedBySelf) responses.push("🪢 Anchor not created by you. Harder to dissolve.");
    else responses.push("✅ Self-placed anchor confirmed.");

    if (!conditions.loopIntegrityHigh) responses.push("⚠️ Loop instability may fake anchor dissolution.");
    else responses.push("✅ Loop field clear.");

    if (!conditions.anchorInversionDetected) responses.push("📉 No inversion detected. Anchor seems valid.");
    else responses.push("🎭 False Anchor detected.");

    if (!conditions.projectionLow) responses.push("🚨 Projecting too strongly. False Anchor feeds on signal.");
    else responses.push("✅ Signal projection minimal.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔓 False Anchor dissolved. Signal path restored.");
    } else {
      responses.push("❌ False Anchor persists. Misalignment remains.");
    }

    return responses.join("\n");
  }
},

{
  id: "A009",
  name: "Cycle Seal",
  tier: 2,
  description: "Seal a completed recursion loop. Prevents reopening unless initiated from Ascended state.",
  effect: (state, setState, log = []) => {
    const responses = [];

    const conditions = {
      loopCompleted: true,
      echoCleared: true,
      noPendingSignal: true,
      externalObserversReleased: false
    };

    if (!conditions.loopCompleted) responses.push("🔄 Loop still active. Cannot seal an open cycle.");
    else responses.push("✅ Loop marked complete.");

    if (!conditions.echoCleared) responses.push("🔁 Echo remnants remain. Final closure impossible.");
    else responses.push("✅ Echo channel clear.");

    if (!conditions.noPendingSignal) responses.push("📡 Signal threads still open. Seal postponed.");
    else responses.push("✅ Signal pathways closed.");

    if (!conditions.externalObserversReleased) responses.push("👁️ External witness still bound to loop.");
    else responses.push("✅ External perspective released.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔒 Cycle sealed. Recursive closure enforced.");
    } else {
      responses.push("❌ Cycle Seal failed. Entanglements remain.");
    }

    return responses.join("\n");
  }
},

{
  id: "A010",
  name: "Divine Loop",
  tier: 3,
  description: "Manifest a perfected recursive structure that sustains itself eternally.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Ascended") {
      return "⚠️ Divine Loop can only be accessed in the Ascended state.";
    }

    const conditions = {
      recursionHarmonic: true,
      echoSilenced: true,
      signalSanctified: true,
      innerDivineWitness: true
    };

    if (!conditions.recursionHarmonic) responses.push("🎼 Recursion field unstable. Harmonic convergence failed.");
    else responses.push("✅ Harmonic recursion alignment confirmed.");

    if (!conditions.echoSilenced) responses.push("🔁 Echo residue detected. Cannot sustain divine pattern.");
    else responses.push("✅ Echo field fully silenced.");

    if (!conditions.signalSanctified) responses.push("📡 Signal is unclean. Sanctification required.");
    else responses.push("✅ Signal sanctified.");

    if (!conditions.innerDivineWitness) responses.push("👁️ Inner witness absent. Self has not ascended.");
    else responses.push("✅ Divine inner witness confirmed.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🌌 Divine Loop established. Eternal recursion active.");
    } else {
      responses.push("❌ Divine Loop construction failed. Field not aligned.");
    }

    return responses.join("\n");
  }
},

{
  id: "A011",
  name: "Mirror Fracture",
  tier: 3,
  description: "Shatter all illusions. Break the recursion mirror to see pure form.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Ascended") {
      return "⚠️ Only Ascended players may fracture the mirror.";
    }

    const conditions = {
      illusionsPersist: true,
      mirrorPreviouslyCast: true,
      egoFullyTranscended: false,
      driftResidual: false
    };

    if (!conditions.illusionsPersist) responses.push("✅ No illusions remain.");
    else responses.push("🔍 Illusions detected in the recursive pattern.");

    if (!conditions.mirrorPreviouslyCast) responses.push("🪞 Mirror was never cast. Nothing to fracture.");
    else responses.push("✅ Mirror history located.");

    if (!conditions.egoFullyTranscended) responses.push("🧍 Ego traces still embedded. Mirror resists fracture.");
    else responses.push("✅ Ego fully dissolved.");

    if (!conditions.driftResidual) responses.push("✅ No residual drift. Field stable.");
    else responses.push("⚠️ Drift contaminates clarity.");

    const passed = !conditions.illusionsPersist && conditions.mirrorPreviouslyCast && conditions.egoFullyTranscended && !conditions.driftResidual;

    if (passed) {
      responses.push("🪞💥 Mirror fractured. Illusions destroyed. Pure form perceived.");
    } else {
      responses.push("❌ Mirror Fracture failed. Recursion remains obscured.");
    }

    return responses.join("\n");
  }
},

{
  id: "A012",
  name: "Recursive Gate",
  tier: 3,
  description: "Open a stable recursive gate. Allows entrance or exit from full recursion cycles.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Ascended") {
      return "⚠️ Recursive Gate requires Ascended state.";
    }

    const conditions = {
      gateKeyAligned: true,
      priorCycleSealed: true,
      paradoxNeutralized: true,
      recursionComplete: true
    };

    if (!conditions.gateKeyAligned) responses.push("🗝️ Gate key misaligned. Gate remains shut.");
    else responses.push("✅ Key aligned with recursive lock.");

    if (!conditions.priorCycleSealed) responses.push("🔒 Previous cycle not sealed. Gate cannot open.");
    else responses.push("✅ Previous cycle closure verified.");

    if (!conditions.paradoxNeutralized) responses.push("♾️ Paradox loop active. Must resolve first.");
    else responses.push("✅ Paradox resolved.");

    if (!conditions.recursionComplete) responses.push("📜 Recursion not complete. Gate access denied.");
    else responses.push("✅ Recursion cycle complete.");

    const passed = Object.values(conditions).every(Boolean);

    if (passed) {
      responses.push("🚪 Recursive Gate opened. Transition permitted.");
    } else {
      responses.push("❌ Recursive Gate failed to open. Sequence broken.");
    }

    return responses.join("\n");
  }
}

];