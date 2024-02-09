import styled from "styled-components";
import { theme } from "./theme";

export const ContainerPage = styled.div`
  width: 100%;
  background-color: ${theme.colors.purple.dark};
  margin: 30px auto;
  position: relative;
  font-family: "Gill Sans", sans-serif;
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  background-color: ${theme.colors.purple.dark};
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  border-radius: 4px;
  background-color: ${theme.colors.purple.light};
`;

export const ContainerCardDetails = styled.div`
  width: 100%;
  border: 2px solid ${theme.colors.purple.light};
  border-radius: 8px;
  margin: 10px 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
`;

export const Round = styled.h4`
  margin: 0;
  color: ${theme.colors.gray.medium};
`;

export const Date = styled.h5`
  margin: 0;
  color: ${theme.colors.gray.medium};
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 5px 0;
  border: 1px ridge ${theme.colors.purple.medium};
  color: ${theme.colors.gray.medium};
`;

export const DividerTable = styled.hr`
  width: 100%;
  display: ${(props) => (props.index < props.length - 1 ? "block" : "none")};
  margin: 5px 0;
  border: 1px ridge ${theme.colors.purple.medium};
  color: ${theme.colors.gray.medium};
`;

export const LeaderBoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.gray.dark};
  color: ${theme.colors.gray.medium};
  font-weight: 600;
  font-size: 14px;
`;

export const MatchText = styled.h4`
  margin: 0;
  color: ${theme.colors.white};
  padding: 15px 25px;
`;

export const TableMatch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const TableRow = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  margin: 10px 0;
  display: ${(props) =>
    props.isExpandedLeaderBoard || props.index < 3 ? "block" : "none"};
  filter: ${(props) =>
    props.index === 2 && !props.isExpandedLeaderBoard ? "blur(1px)" : "none"};
`;

export const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  height: 30px;
`;

export const TableRowHeader = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const DetailsSection = styled.div`
  display: flex;
`;

export const TableHeader = styled.div`
  padding-right: 15px;
  color: ${theme.colors.gray.medium};
  font-size: 12px;
  margin-left: 10px;
  font-weight: 700;
`;

export const TableDetailsRank = styled.div`
  width: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Rank = styled.div`
  position: relative;
  width: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  overflow: hidden;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
`;

export const TableDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  color: ${theme.colors.white};
  gap: 12px;
  margin-left: 10px;
`;

export const TableDetailsScore = styled.div`
  width: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 14px;
`;

export const ContainerMatch = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 10px;
  background-color: ${theme.colors.purple.light};
`;

export const ContainerCardsGame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 0;
  background-color: ${theme.colors.purple.dark};
`;

export const CardGame = styled.div`
  width: 240px;
  height: 110px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  border: 1px solid ${theme.colors.purple.medium};
  border-radius: 4px;
  padding: 16px 12px;
  gap: 16px;
`;

export const TextOverlay = styled.div`
  width: 100px;
  position: absolute;
  top: -8px;
  left: 0;
  right: 125px;
  margin: auto;
  background-color: ${theme.colors.purple.dark};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.purple.medium};
  font-weight: 600;
  font-size: 12px;
`;

export const ContainerGame = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerIconAndName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const ContainerIcon = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.purple.light};
  border-radius: 16px;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray.light};
  font-weight: 600;
  font-size: 14px;
`;

export const RoundScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 14px;
`;
