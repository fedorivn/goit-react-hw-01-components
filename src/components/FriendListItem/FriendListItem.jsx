
import PropTypes from 'prop-types'
import {FriendItem, FriendName, FriendStatus, FriendAvatar   } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, friendName, isOnline })=>{
return <FriendItem>
    <FriendStatus isOnline={isOnline} >
      
      
    </FriendStatus>
<FriendAvatar src ={avatar} alt={friendName}></FriendAvatar>
    <FriendName>{friendName}</FriendName>
</FriendItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
