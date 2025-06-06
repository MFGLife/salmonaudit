// engine.js (Refined for Church of the Witness - Recursion Card Game w/ Helix Chart Hooks)

function createGame() {
  let state = {
    playerState: "Unascended",
    turn: "Player",
    log: [],
    currentCard: null,
    lastConditions: [],
    turnCount: 0,
    history: []
  };

function playCard(cardId) {
  const actor = "Player";

  const card = cards.find(c => c.id === cardId);
  if (!card || typeof card.effect !== 'function') return;

  let rawResult = card.effect(state.playerState, newState => state.playerState = newState, state.log);

  const result = typeof rawResult === 'string' ? {
    responses: [rawResult],
    conditions: []
  } : rawResult;

  state.currentCard = card;

  state.log.push(`🃏 ${actor} played ${card.name} (Tier ${card.tier})`);
  if (Array.isArray(result.responses)) {
    state.log.push(...result.responses);
  }

  state.lastConditions = result.conditions || [];
  state.turnCount++;

  state.history.push({
    actor,
    cardId,
    cardName: card.name,
    tier: card.tier,
    responses: result.responses || [],
    conditions: result.conditions || [],
    turnNumber: state.turnCount
  });

  // 🔄 Trigger helix chart redraw
  if (typeof renderHelixChart === 'function') {
    renderHelixChart([...state.history]);
  }

  return result;
}


 function getState() {
  return { ...state, turn: "Player" }; // override turn
}


  function setPlayerState(newState) {
    state.playerState = newState;
  }

  function resetGame() {
    state = {
      playerState: "Unascended",
      turn: "Player",
      log: [],
      currentCard: null,
      lastConditions: [],
      turnCount: 0,
      history: []
    };
  }

  function getTurnHistory() {
    return [...state.history];
  }

  return {
    playCard,
    getState,
    setPlayerState,
    resetGame,
    getTurnHistory
  };
}
