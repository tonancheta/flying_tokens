// ...existing code...

// Example of updating a deprecated method
function updateFlyingStatus(token, isFlying) {
  // ...existing code...
  // Replace deprecated method
  // token.update({ "flags.flying-tokens.isFlying": isFlying });
  token.document.update({ "flags.flying-tokens.isFlying": isFlying });
  // ...existing code...
}

// Example of using Token Magic FX API
function applyFlyingEffect(token) {
  // ...existing code...
  TokenMagic.addFilters(token, {
    filterType: "shadow",
    filterId: "flying-shadow",
    autoDestroy: true,
    // ...other filter properties...
  });
  // ...existing code...
}

// ...existing code...
