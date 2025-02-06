// ...existing code...

// Example of updating a deprecated method
Hooks.on('ready', () => {
  // ...existing code...
  // Replace deprecated method
  // game.settings.register("flying-tokens", "someSetting", { ... });
  game.settings.register("flying-tokens", "someSetting", {
    name: "Some Setting",
    hint: "Description of the setting.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true,
    onChange: value => {
      // Handle setting change
    }
  });
  // ...existing code...
});

// Example of updating a deprecated property
Hooks.on('createToken', (scene, tokenData) => {
  // ...existing code...
  // Replace deprecated property
  // let token = canvas.tokens.get(tokenData._id);
  let token = canvas.tokens.get(tokenData.id);
  // ...existing code...
});

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
