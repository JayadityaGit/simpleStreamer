import { RequestHandler } from "express";
import createHttpError from "http-errors";
import "dotenv/config"
import env from "../util/validatEnv"
import fetch from 'node-fetch';
import { TmdbModelMovie, TmdbTV } from "../Model/tmdbModel";
import { makeProviders, makeStandardFetcher, targets } from '@movie-web/providers';

export const getStuff: RequestHandler  = async(req, res, next)=>{


    try {

        const name = req.body.yourname

        if(!name){
            throw createHttpError(402, "my friend Harsha reccomended me Money Heist, Get some friends for reccomendations lol .")
        }
    
        const url = "https://api.themoviedb.org/3/search/multi?query="+name+"&include_adult=true&language=en-US&page=1";
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: env.KEY
          }
        };
        
        

        const response = await fetch(url, options);

        if(!response ){
            createHttpError("the server could not fetch the tmdb details")
        }
    
        const data = await response.json();

        const realData= data.results;


        res.status(200).json(realData)
        

    } catch (error) {
  
         next(error)
        
    }

    
   }


   export const getStreamsMovie: RequestHandler =async (req, res, next) => {
    
     try {

      const mediaBody: TmdbModelMovie = req.body.media;

      if(!mediaBody){
        throw createHttpError(500, "unabel to fetch data from react client")
      }

      const myFetcher = makeStandardFetcher(fetch);
     // make an instance of the providers library
      const providers = makeProviders({
        fetcher: myFetcher,
        // will be played on a native video player
        target: targets.ANY
      })
            
      // fetch some data from TMDB
      const media = {
        type:'movie' as const,
        title: mediaBody.title,
        releaseYear: new Date(mediaBody.release_date).getFullYear() ,
        tmdbId: mediaBody.id.toString()

      }

      
        
      const output = await providers.runAll({
        media: media
      })

      if(output == null){
        throw createHttpError(500, "this content still needs to be added to the servers which we do not own.")
      }

      res.status(200).json(output)
     } catch (error) {
      next(error)
     }
   }



   export const getStreamsTV: RequestHandler =async (req, res, next) => {
    
    try {

     const mediaBody: TmdbTV = req.body.media;

     if(!mediaBody){
       throw createHttpError(500, "unabel to fetch data from react client")
     }

     const myFetcher = makeStandardFetcher(fetch);
    // make an instance of the providers library
     const providers = makeProviders({
       fetcher: myFetcher,
       // will be played on a native video player
       target: targets.ANY
     })
           
     const mediaType: 'movie' | 'tv' = mediaBody.media_type === 'movie' ? 'movie' : 'tv';

     // fetch some data from TMDB
     const media = {
       type: mediaType as 'movie',
       title: mediaBody.name,
       releaseYear: new Date(mediaBody.first_air_date).getFullYear() ,
       tmdbId: mediaBody.id.toString()

     }

     console.log(media)
       
     const output = await providers.runAll({
       media: media
     })

     if(output == null){
       throw createHttpError(500, "Kangaru vadu, anni lopala dacham , velli movies chudu")
     }

     res.status(200).json(output)
    } catch (error) {
     next(error)
    }
  }