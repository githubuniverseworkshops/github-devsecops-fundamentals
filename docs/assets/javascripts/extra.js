// (function facilitateGitHubAppCreation() {
//   const handle = document.getElementById("handle");
//   if (!handle) {
//     return;
//   }

//   const manifest = document.getElementById("manifest");
//   if (!manifest) {
//     return;
//   }

//   handle.addEventListener("change", (event) => {
//     manifest.value = JSON.stringify({
//       name: `gu2023-release-bot-${handle?.value.trim()}`,
//       description: "My BOT for creating releases",
//       public: false,
//       url: `https://github.com/${handle?.value.trim()}`,
//       setup_url: location.href,
//       redirect_url: location.href,
//       callback_urls: [location.href],
//       default_permissions: {
//         contents: "write",
//       },
//     });
//   });
// })();
