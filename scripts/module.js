// ...existing code...

Hooks.once('init', async function() {
  console.log('flying-tokens | Initializing flying tokens module');

  // ...existing code...

  // Example of updating deprecated method
  // Replace deprecated method calls with the new API methods
  // For example, if `CONFIG.Actor.entityClass` is deprecated, use `CONFIG.Actor.documentClass` instead
  // CONFIG.Actor.entityClass = MyActorClass;
  CONFIG.Actor.documentClass = MyActorClass;

  // ...existing code...
});

// ...existing code...
