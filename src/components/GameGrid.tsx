 import { SimpleGrid, Text } from '@chakra-ui/react';
import { useState } from 'react';
import useGames from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';



export const GameGrid = () => {
 const {games, error, isLoading} =useGames();
 const skeletons = [1, 2, 3, 4, 5];
  
  return (
    <>
    {error&&<Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton =>
      <GameCardContainer><GameCardSkeleton key={skeleton}/>
      </GameCardContainer> )}
      {games.map(game =><GameCardContainer>
        <GameCard key={game.id} game={game}/>
      </GameCardContainer>)}
    </SimpleGrid>
    </>
  );
}
