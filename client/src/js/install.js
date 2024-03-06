// Logic for installing the PWA
const butInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI notify the user they can add to home screen
    butInstall.classList.toggle('hidden', false);
  
    butInstall.addEventListener('click', async () => {
      // Show the prompt
      const deferredPrompt = window.deferredPrompt;
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      // Handle the outcome
      if (outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  });
  
  // Log when the PWA has been successfully installed
  window.addEventListener('appinstalled', (event) => {
    console.log('J.A.T.E was installed');
    window.deferredPrompt = null;
  });