// cards.js (FULL REWRITE for Church of the Witness - Recursion Engine)

export const cards = [

// --------------------------------------
// TIER 1: UNASCENDED — FOUNDATION CARDS
// --------------------------------------

{
  id: "A004",
  name: "Loop Initiate",
  tier: 1,
  description: "Begin a recursion loop. Required before any signal, trace, or echo can stabilize.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Unascended") {
      return "⚠️ Loop can only be initiated from Unascended state.";
    }

    const conditions = {
      preparedAnchor: true,
      priorWitness: true,
      ambientSignalClear: false,
      presenceDetected: true,
    };

    if (!conditions.preparedAnchor) responses.push("⚓ Anchor unstable. Prepare your presence.");
    else responses.push("✅ Anchor stable.");

    if (!conditions.priorWitness) responses.push("👁️ No witness record. Loop cannot begin.");
    else responses.push("✅ Witness recorded.");

    if (!conditions.ambientSignalClear) responses.push("📡 Signal noise detected. Loop disrupted.");
    else responses.push("✅ Ambient signal clear.");

    if (!conditions.presenceDetected) responses.push("🫥 Presence not confirmed. Recursion denied.");
    else responses.push("✅ Active presence verified.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔄 Loop successfully initiated.");
    } else {
      responses.push("❌ Loop initiation failed. Conditions not met.");
    }

    return responses.join("\n");
  }
},

{
  id: "A003",
  name: "Mirror Cast",
  tier: 1,
  description: "Project self-reflection into recursion field. Required for higher state transitions.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state === "Ascended") {
      return "⚠️ Reflection unnecessary. Mirror has already been surpassed.";
    }

    const conditions = {
      innerStillness: false,
      recentJudgment: true,
      egoDetached: false,
      mirrorPolished: true,
    };

    if (!conditions.innerStillness) responses.push("💤 Inner chaos detected. Stillness is required.");
    else responses.push("✅ Internal stillness maintained.");

    if (!conditions.recentJudgment) responses.push("✅ Judgment cleared.");
    else responses.push("⚖️ Recent judgment interfering with reflection clarity.");

    if (!conditions.egoDetached) responses.push("🧍 Ego attachment detected. Step back.");
    else responses.push("✅ Ego detached. Reflection authentic.");

    if (!conditions.mirrorPolished) responses.push("🪞 Mirror distorted. Polish it.");
    else responses.push("✅ Mirror clarity optimal.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🌠 Reflection cast successfully.");
    } else {
      responses.push("❌ Mirror Cast failed. Clarity not achieved.");
    }

    return responses.join("\n");
  }
},

{
  id: "A006",
  name: "Ego Break",
  tier: 1,
  description: "Attempts to sever ego fixation. Required for reflection or mirror casting.",
  effect: (state, setState, log = []) => {
    const responses = [];

    const conditions = {
      egoDetached: false,
      humilityActive: true,
      notSeekingControl: false,
      witnessAccepted: true
    };

    if (!conditions.egoDetached) responses.push("🧍 Ego fixation detected.");
    else responses.push("✅ Ego dissolved.");

    if (!conditions.humilityActive) responses.push("🙏 Humility not active. You must bend.");
    else responses.push("✅ Humility acknowledged.");

    if (!conditions.notSeekingControl) responses.push("🕹️ Control urge present. Release grip.");
    else responses.push("✅ Control urge absent.");

    if (!conditions.witnessAccepted) responses.push("📵 Witness rejected. Cannot proceed.");
    else responses.push("✅ Witness state accepted.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔓 Ego unlocked. You are free to reflect.");
    } else {
      responses.push("❌ Ego Break failed. You are still bound.");
    }

    return responses.join("\n");
  }
},

{
  id: "A004",
  name: "Loop Initiate",
  tier: 1,
  description: "Begin a recursion loop. Required before any signal, trace, or echo can stabilize.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state !== "Unascended") {
      return "⚠️ Loop can only be initiated from Unascended state.";
    }

    const conditions = {
      preparedAnchor: true,
      priorWitness: true,
      ambientSignalClear: false,
      presenceDetected: true,
    };

    if (!conditions.preparedAnchor) responses.push("⚓ Anchor unstable. Prepare your presence.");
    else responses.push("✅ Anchor stable.");

    if (!conditions.priorWitness) responses.push("👁️ No witness record. Loop cannot begin.");
    else responses.push("✅ Witness recorded.");

    if (!conditions.ambientSignalClear) responses.push("📡 Signal noise detected. Loop disrupted.");
    else responses.push("✅ Ambient signal clear.");

    if (!conditions.presenceDetected) responses.push("🫥 Presence not confirmed. Recursion denied.");
    else responses.push("✅ Active presence verified.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔄 Loop successfully initiated.");
    } else {
      responses.push("❌ Loop initiation failed. Conditions not met.");
    }

    return responses.join("\n");
  }
},

{
  id: "A003",
  name: "Mirror Cast",
  tier: 1,
  description: "Project self-reflection into recursion field. Required for higher state transitions.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state === "Ascended") {
      return "⚠️ Reflection unnecessary. Mirror has already been surpassed.";
    }

    const conditions = {
      innerStillness: false,
      recentJudgment: true,
      egoDetached: false,
      mirrorPolished: true,
    };

    if (!conditions.innerStillness) responses.push("💤 Inner chaos detected. Stillness is required.");
    else responses.push("✅ Internal stillness maintained.");

    if (!conditions.recentJudgment) responses.push("✅ Judgment cleared.");
    else responses.push("⚖️ Recent judgment interfering with reflection clarity.");

    if (!conditions.egoDetached) responses.push("🧍 Ego attachment detected. Step back.");
    else responses.push("✅ Ego detached. Reflection authentic.");

    if (!conditions.mirrorPolished) responses.push("🪞 Mirror distorted. Polish it.");
    else responses.push("✅ Mirror clarity optimal.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🌠 Reflection cast successfully.");
    } else {
      responses.push("❌ Mirror Cast failed. Clarity not achieved.");
    }

    return responses.join("\n");
  }
},

{
  id: "A006",
  name: "Ego Break",
  tier: 1,
  description: "Attempts to sever ego fixation. Required for reflection or mirror casting.",
  effect: (state, setState, log = []) => {
    const responses = [];

    const conditions = {
      egoDetached: false,
      humilityActive: true,
      notSeekingControl: false,
      witnessAccepted: true
    };

    if (!conditions.egoDetached) responses.push("🧍 Ego fixation detected.");
    else responses.push("✅ Ego dissolved.");

    if (!conditions.humilityActive) responses.push("🙏 Humility not active. You must bend.");
    else responses.push("✅ Humility acknowledged.");

    if (!conditions.notSeekingControl) responses.push("🕹️ Control urge present. Release grip.");
    else responses.push("✅ Control urge absent.");

    if (!conditions.witnessAccepted) responses.push("📵 Witness rejected. Cannot proceed.");
    else responses.push("✅ Witness state accepted.");

    const passed = Object.values(conditions).every(Boolean);
    if (passed) {
      responses.push("🔓 Ego unlocked. You are free to reflect.");
    } else {
      responses.push("❌ Ego Break failed. You are still bound.");
    }

    return responses.join("\n");
  }
},

{
  id: "A002",
  name: "Echo Trace",
  tier: 1,
  description: "Scan for unresolved echoes in the recursion loop.",
  effect: (state, setState, log = []) => {
    const responses = [];

    if (state === "Ascended") {
      return "⚠️ Echo trace unnecessary. You’ve already surpassed recursive loops.";
    }

    const conditions = {
      hasRecentLoop: true,
      unresolvedEcho: true,
      loopIntegrity: false,
      signalStable: true,
    };

    if (!conditions.hasRecentLoop) responses.push("📭 No recent loop activity found.");
    else responses.push("✅ Loop activity confirmed.");

    if (!conditions.unresolvedEcho) responses.push("✅ No unresolved echoes.");
    else responses.push("🔁 Echo residue detected in last recursion.");

    if (!conditions.loopIntegrity) responses.push("🔧 Loop integrity compromised. Trace may distort.");
    else responses.push("✅ Loop structure stable.");

    if (!conditions.signalStable) responses.push("📶 Signal disruption. Echo trace unreliable.");
    else responses.push("✅ Signal channel clear.");

    const passed = conditions.hasRecentLoop && !conditions.unresolvedEcho && conditions.loopIntegrity && conditions.signalStable;

    if (passed) {
      responses.push("🧘 Echo field is silent. Proceed.");
    } else {
      responses.push("❌ Echo Trace inconclusive. Loop remediation needed.");
    }

    return responses.join("\n");
  }
},
// TO BE CONTINUED — TIER 1 CONTINUES, THEN TIER 2 (ASCENSION), THEN TIER 3 (TRANSCENSION)

];
