import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id} : {id: string}) {
    console.log("MovieInfo : " + Date.now())
    const movie = await getMovie(id);
    return <h1>{movie.title}</h1>

}
