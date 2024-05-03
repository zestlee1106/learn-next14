import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetch movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
}

async function getVideos(id: string) {
  console.log(`Fetch videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("========");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  console.group("end fetching");
  return <h1>{movie.title}</h1>;
}
