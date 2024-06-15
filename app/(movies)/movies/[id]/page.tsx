import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
    console.log(`fetching getMovies :${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    console.log(`fetching getMgetVideosovies :${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({
    params: { id }
} : {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    console.log(`finally: ${Date.now()}`)
    return <div>
        <h1>{movie.title}</h1>
        <div>

        </div>
    </div>

}