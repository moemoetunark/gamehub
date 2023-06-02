import { Badge } from '@chakra-ui/react';
interface Props {
    score: number;
}

export const CriticScore = ({score}: Props) => {
    let colors = score >75? 'green': score >60? 'yellow': '';
  return (
    <Badge colorScheme={colors} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}
