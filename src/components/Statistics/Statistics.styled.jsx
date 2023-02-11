import styled from '@emotion/styled';

export const StatContainer = styled.section`
  text-align: center;
  background-color: rgb(233 238 248);
  padding: 0 50px 50px;
`;
export const StatTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom:20px;
  color:#5c5252;
`;
export const StatList = styled.ul`

display: flex;
justify-content: space-between;
border: 1px solid transparent;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
box-shadow: 2px 2px #bebebe;
}
   `;

export const StatItem = styled.li`
  width: 100px;
  background-color: #edf1f6;

  &:not(:last-child) {
    border-right: 1px solid #959090;
  }
`;

export const Label = styled.span`
  display: block;
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  color:#5c5252;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 25px;
  display: inline-block;
  padding-bottom: 10px;
  color:#5c5252;
`;
