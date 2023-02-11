import styled from '@emotion/styled';

export const Card = styled.div`


padding: 50px;
  background-color: rgb(233 238 248);;
 
`;

export const Describtion = styled.div`
// display: flex;
background-color: white;
border: 1px solid transparent;
border-radius: 5px;
box-shadow: 2px 5px blur grey;
margin-left: auto;
margin-right:auto;
  padding: 70px;
`;

export const Avatar = styled.img`
margin: 0 auto;
display: flex;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: rgb(245, 237, 237);
`;

export const UserName = styled.p`
text-align: center;
  font-size: 40px;
  font-weight: 700;
  color:#343232;
  padding: 30px 0;
`;

export const UserTag = styled.p`
font-family: montserat;
font-weight: 700;
  font-size: 25px;
  color:#5c5252;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserLocation = styled.p`
font-family: montserat;
font-weight: 700;
  font-size: 25px;
  color:#5c5252;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid transparent;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 2px 2px #bebebe;
  
`;

export const UserStatsItem = styled.li`
padding: 15px;
width: calc(100% / 3);
height: 80px;
text-align: center;
color: #5c5252;
background-color: #edf1f6;


  &:not(:last-child) {
    border-right: 1px solid #959090;
  }
`;

export const Label = styled.span`
  display: block;
  padding: 10px;
  font-weight: 700;
`;
