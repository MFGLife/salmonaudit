{
  "cards": [
    // --- TIER 1: UNASCENDED ---
    {
      "id": "U001",
      "tier": 1,
      "name": "Drift Spike",
      "glyph": "↹○1",
      "type": "Echo",
      "description": "Trigger confusion in another player. Cancels one ascending card they’ve played.",
      "play_requirements": ["Can only be played if the opponent is in recursion state."],
      "effect": {
        "onPlay": "Opponent loses their current recursion alignment for one round.",
        "onFail": "You enter drift."
      }
    },
    {
      "id": "U002",
      "tier": 1,
      "name": "False Anchor",
      "glyph": "⬤↘1",
      "type": "Echo",
      "description": "Simulates a recursion state. Fools one player for one round unless exposed.",
      "play_requirements": [],
      "effect": {
        "onPlay": "You may play an Ascending-tier card without meeting requirements. Risk collapse.",
        "onFail": "Opponent calls False Witness—card is destroyed and you lose recursion for 2 rounds."
      }
    },
    {
      "id": "U003",
      "tier": 1,
      "name": "Echo Loop",
      "glyph": "↺↹0",
      "type": "Echo",
      "description": "Replays your last failed action. Can be used to recover or amplify failure.",
      "play_requirements": ["Must have a collapsed action in the last turn."],
      "effect": {
        "onPlay": "Replay any failed Shift Signal or Petition.",
        "onFail": "You are stuck in echo and lose one card draw."
      }
    },

    // --- TIER 2: ASCENDING ---
    {
      "id": "A001",
      "tier": 2,
      "name": "Shift Signal",
      "glyph": "△↗○1→2",
      "type": "Witness",
      "description": "Initiate a recursive move to rebalance alignment. Requires clarity.",
      "play_requirements": [],
      "effect": {
        "onPlay": "Choose any player and test their recursion state. If unstable, their card pool resets.",
        "onFail": "If targeting fails, you lose alignment and must skip next card phase."
      }
    },
    {
      "id": "A002",
      "tier": 2,
      "name": "Loop Request",
      "glyph": "↺△1→2",
      "type": "Witness",
      "description": "Send a recursive petition to another player. Forces truth reflection.",
      "play_requirements": ["Must have initiated 1 Shift Signal prior."],
      "effect": {
        "onPlay": "Opponent must respond with reflection or enter drift.",
        "onFail": "You collapse and must discard 1 card from each tier."
      }
    },
    {
      "id": "A003",
      "tier": 2,
      "name": "Mirror Cast",
      "glyph": "○↘2→1",
      "type": "Witness",
      "description": "Copy the last Ascending card played by an opponent and reflect its outcome onto them.",
      "play_requirements": ["You must have entered observation state prior turn."],
      "effect": {
        "onPlay": "Opponent is affected by their own last action.",
        "onFail": "You both enter a temporary drift lockout."
      }
    },

    // --- TIER 3: ASCENDED ---
    {
      "id": "S001",
      "tier": 3,
      "name": "Recursive Seal",
      "glyph": "∴⟟↺⧗⟟∴",
      "type": "Seal",
      "description": "Close a loop permanently. Truth becomes irreversible. Requires full recursion.",
      "play_requirements": ["You must have played at least 1 Ascending and 1 Unascended card successfully."],
      "effect": {
        "onPlay": "Declare one truth that cannot be reversed. Locks opponent from playing Drift or Echo cards.",
        "onFail": "Truth fractures. All players reset recursion meters."
      }
    },
    {
      "id": "S002",
      "tier": 3,
      "name": "Alignment Pulse",
      "glyph": "△○∞↗",
      "type": "Seal",
      "description": "Send out a resonance wave that aligns all Ascending players instantly.",
      "play_requirements": ["Must have full recursion meter."],
      "effect": {
        "onPlay": "All players in Ascending state elevate one level. Echo players collapse.",
        "onFail": "Pulse backfires, all players reenter petition state."
      }
    },
    {
      "id": "S003",
      "tier": 3,
      "name": "Collapse Point",
      "glyph": "⬤⧗○",
      "type": "Seal",
      "description": "Force the closure of a false recursion. Used to end dead loops.",
      "play_requirements": ["Must detect a False Anchor in play."],
      "effect": {
        "onPlay": "Destroys False Anchor or Drift Spike. Player responsible loses recursion access for 2 rounds.",
        "onFail": "If misused, you lose Seal access until recursion is reestablished."
      }
    }
  ]
}
