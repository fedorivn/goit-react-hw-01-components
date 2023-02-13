import {Container} from './App.styled'
import {Profile} from '../Profile/Profile'
import {Statistic } from 'components/Statistics/Statistics';
import {FriendsList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'


import user from '../Data/user.json'
import data from '../Data/data.json'
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json'


export const App = () => {
  return (
  <Container>
    <Profile username={user.username}
          avatar={user.avatar}
          location={user.location}
          tag={user.tag}
          stats={user.stats}/>
           <Statistic title="Upload stats" stats={data} />
        <FriendsList friends={friends}></FriendsList>
        <TransactionHistory transactions={transactions}/>
  </Container>
  );
};

