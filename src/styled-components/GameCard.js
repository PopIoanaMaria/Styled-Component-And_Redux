import React, { useState } from "react";
import {
  ContainerPage,
  ContainerIcon,
  Rows,
  Rank,
  ContainerCardDetails,
  UserName,
  ContainerIconAndName,
  ContainerGame,
  TextOverlay,
  RoundScore,
  TableHeader,
  CardGame,
  TableDetailsRank,
  TableDetailsScore,
  DividerTable,
  TableDetails,
  ContainerMatch,
  TableRowHeader,
  DetailsSection,
  TableRow,
  MatchText,
  TableMatch,
  Button,
  ContainerButton,
  Container,
  Round,
  ContainerTitle,
  Date,
  LeaderBoardContainer,
  Divider,
  ContainerCard,
  ContainerCardsGame,
} from "./GameCard.style";
import { LuUser } from "react-icons/lu";
import { useFetchUsers } from "./useFetchUsers";
import { useFetchGames } from "./useFetchGames";
import { theme } from "./theme";

const Game = () => {
  const { users } = useFetchUsers();
  const { games } = useFetchGames();

  const [isExpandedLeaderBoard, setIsExpandedLeaderBoard] = useState(false);

  const handleClick = () => {
    setIsExpandedLeaderBoard(!isExpandedLeaderBoard);
  };

  return (
    <ContainerPage>
      <Container>
        <ContainerTitle>
          <Round>Round 1</Round>
          <Date>Mar 20th 2023 - 10:45 AM</Date>
        </ContainerTitle>

        <Divider />

        <ContainerCardDetails>
          <ContainerCard>
            <LeaderBoardContainer>
              <MatchText>Match 1.1</MatchText>
              <TableMatch>
                <ContainerMatch>
                  <TableRowHeader>
                    <DetailsSection>
                      <TableHeader>RANK</TableHeader>
                      <TableHeader>NAME</TableHeader>
                    </DetailsSection>
                    <TableHeader>SCORE</TableHeader>
                  </TableRowHeader>

                  {users.map((user, index) => (
                    <TableRow
                      key={index}
                      isExpandedLeaderBoard={isExpandedLeaderBoard}
                      index={index}
                    >
                      <Rows>
                        <DetailsSection>
                          <TableDetailsRank>
                            <Rank
                              color={user.color_rank}
                              backgroundColor={user.backgroundColor_rank}
                            >
                              {user.rank}
                            </Rank>
                          </TableDetailsRank>
                          <TableDetails>
                            <LuUser color={theme.colors.gray.medium} />
                            {user.name}
                          </TableDetails>
                        </DetailsSection>
                        <TableDetailsScore>{user.score}</TableDetailsScore>
                      </Rows>
                      <DividerTable index={index} length={users.length} />
                    </TableRow>
                  ))}

                  <ContainerButton>
                    <Button onClick={handleClick}>See Leaderboard</Button>
                  </ContainerButton>
                </ContainerMatch>
              </TableMatch>
            </LeaderBoardContainer>
          </ContainerCard>

          <ContainerCardsGame>
            {games.map((game, index) => (
              <CardGame key={index}>
                <TextOverlay>{game.game}</TextOverlay>
                {game.users.map((user, index) => (
                  <ContainerGame>
                    <ContainerIconAndName key={index}>
                      <ContainerIcon>
                        <LuUser color={theme.colors.gray.medium} />
                      </ContainerIcon>
                      <UserName>{user.name}</UserName>
                    </ContainerIconAndName>
                    <RoundScore>{user.score}</RoundScore>
                  </ContainerGame>
                ))}
              </CardGame>
            ))}
          </ContainerCardsGame>
        </ContainerCardDetails>
      </Container>
    </ContainerPage>
  );
};

export default Game;
