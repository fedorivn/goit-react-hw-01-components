import PropTypes from 'prop-types';

import { Container, FriendsListBlok } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <Container>
      <FriendsListBlok>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              friendName={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          );
        })} 
      </FriendsListBlok>
    </Container>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
