 import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface Game{
    id: number;
    name: string;
    }
    interface fetchGameResponses {
        count: number;
        results: Game[]
    }

 const useGames =()=>{
    const [games, setgames] = useState<Game[]>([]);
    const [error, setError] = useState('');

     useEffect(()=>{
        const controller = new AbortController();
      apiClient.get<fetchGameResponses>('/games', {signal: controller.signal})
      .then(res => setgames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)})

      return ()=> controller.abort();
    }, []);

    return {
        games, error
    };

 }
 export default useGames