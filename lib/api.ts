export async function fetchJournals() {
  const res = await fetch("https://drl-backend-wlz1.onrender.com/api/journals");
  return res.json();
}

export async function fetchVolumes(journalId: number) {
  const res = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/volumes/journal/${journalId}`
  );
  return res.json();
}

export async function fetchArticles(volumeId: number) {
  const res = await fetch(
    `https://drl-backend-wlz1.onrender.com/api/articles/volume/${volumeId}`
  );
  return res.json();
}