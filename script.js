function updateClock() {
  const t = new Date();
  const hh = String(t.getUTCHours()).padStart(2, "0");
  const mm = String(t.getUTCMinutes()).padStart(2, "0");
  const ss = String(t.getUTCSeconds()).padStart(2, "0");
  const el = document.getElementById("utc-clock");
  if (el) el.textContent = `${hh}:${mm}:${ss} UTC`;
}
updateClock();
setInterval(updateClock, 1000);
