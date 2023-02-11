import PropTypes from 'prop-types'

import { Card, Describtion, Avatar, UserName, UserTag, UserLocation, UserStats, UserStatsItem, Label} from './Profile.styled'

export const Profile =({
    username , 
    tag, 
    location, 
    avatar, 
    stats: {followers, views, likes}
}) => {
    return <Card>
    <Describtion>
      <Avatar
        src={avatar}
        alt={username}
        
      />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Describtion>
  
    <UserStats>
      <UserStatsItem>
        <Label >Followers</Label>
        <Label >{followers}</Label>
      </UserStatsItem>
      <UserStatsItem>
        <Label >Views</Label>
        <Label >{views}</Label>
        </UserStatsItem>
      <UserStatsItem>
        <Label >Likes</Label>
        <Label >{likes}</Label>
      </UserStatsItem>
    </UserStats>
  </Card>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
  }),
}