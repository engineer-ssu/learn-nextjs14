
export const metadata = {
    title : "Home"
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const json = await fetch(URL).then(res => res.json())
    return json;
}

export default async function HomePage () {
    const movies = await getMovies();

    return <div>
        <div>{JSON.stringify(movies)}</div>
    </div>
}