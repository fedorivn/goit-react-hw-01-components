import styled from '@emotion/styled';

export const FriendItem= styled.li`
display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin-bottom: 10px;
    padding: 20px 0;
    background-color: #fff;
    border: 1px solid rgb(180 180 179);
    box-shadow: 5px 2px 2px rgb(180 180 179);
`
export const FriendName = styled.p`
font-size: 22px;
font-weight: 500;
`

export const FriendStatus = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${(props) => props.isOnline? 'green': 'red'
}

`


export const FriendAvatar = styled.img`
border-radius:50%;
width: 100px;
`


