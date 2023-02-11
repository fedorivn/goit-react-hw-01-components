
import PropTypes from 'prop-types'
import {FriendItem, FriendName, FriendStatus, StatusText, FriendAvatar   } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, friendName, isOnline })=>{
return <FriendItem>
    <FriendStatus>
        <StatusText 
        >{isOnline ? 'Online' : 'Offline'}</StatusText>
    </FriendStatus>
<FriendAvatar src ={avatar} alt={friendName}></FriendAvatar>
    <FriendName>{friendName}</FriendName>
</FriendItem>
}

