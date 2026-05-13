export async function fetchJournals() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/journals`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function fetchVolumes(journalId: number) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/volumes/journal/${journalId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function fetchArticles(volumeId: number) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/volume/${volumeId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}