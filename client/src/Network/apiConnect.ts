import { TmdbTV } from "../Pages/Home";

async function getErrorOrData(input: RequestInfo, init: RequestInit) {

    const response = await fetch(input, init);

    if(response.ok){
        return response;
    }else{
         const data = await response.json();

         const errorBody = data.error

         throw Error(errorBody)
    }
    
}



export async function getDetails(name: string) {


    const response = await getErrorOrData("https://simple-sytt.onrender.com/details", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
        },
        body: JSON.stringify({yourname: name}),
    })


    const data = await response.json();

    return data;

    
}

export interface TmdbModelMovie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export async function getStreamsMovie(media: TmdbModelMovie) {


    const response = await getErrorOrData("https://simple-sytt.onrender.com/streamMovie", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
        },
        body: JSON.stringify({media: media}),
    })


    const data = await response.json();

    return data;

    
}

export async function getStreamsTV(media: TmdbTV) {


    const response = await getErrorOrData("https://simple-sytt.onrender.com/streamTV", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
        },
        body: JSON.stringify({media: media}),
    })


    const data = await response.json();

    return data;

    
}
