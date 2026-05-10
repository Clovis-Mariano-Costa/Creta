
(function () {
  const STORAGE_KEY = "creta_cookie_consent_v1";
  const banner = document.getElementById("creta-cookie-banner");
  const acceptButton = document.getElementById("creta-cookie-accept");
  const rejectButton = document.getElementById("creta-cookie-reject");
  if (!banner || !acceptButton || !rejectButton) return;
  function hideBanner() { banner.setAttribute("hidden", "hidden"); }
  function showBanner() { banner.removeAttribute("hidden"); }
  function saveConsent(value) {
    const payload = { value, date: new Date().toISOString(), version: "1.0" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    hideBanner();
    window.dispatchEvent(new CustomEvent("cretaCookieConsent", { detail: payload }));
  }
  if (!localStorage.getItem(STORAGE_KEY)) showBanner();
  acceptButton.addEventListener("click", () => saveConsent("accepted_all"));
  rejectButton.addEventListener("click", () => saveConsent("rejected_non_essential"));
})();
