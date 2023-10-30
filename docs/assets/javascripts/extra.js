const handle = document.getElementById("handle");
const manifest = document.getElementById("manifest");

const randomNumbers = new Uint32Array(1);
crypto.getRandomValues(randomNumbers);
const randomNumber = randomNumbers[0];

manifest?.value = JSON.stringify({
  name: `universe-devsecops-workshop-${handle?.value.trim()}`,
  url: `https://github.com/${handle?.value.trim()}`,
  setup_url: "https://githubuniverseworkshops.github.io/github-devsecops-fundamentals/prerequisites",
  redirect_url: "https://githubuniverseworkshops.github.io/github-devsecops-fundamentals/prerequisites",
  callback_urls: ["https://githubuniverseworkshops.github.io/github-devsecops-fundamentals/prerequisites"],
  public: true,
  default_permissions: {
    issues: "write",
    checks: "write",
  },
  default_events: ["issues", "issue_comment", "check_suite", "check_run"],
});
