import React from 'react';
// import user from "../../data//user.json"
// import data from "../../data/data.json"
// import friends from "../../data/friends.json"
// import transactions from "../../data/transactions.json"
// import Profile from "../profile/profile"
// import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOption';
// import FriendsList from "../FriendsList/FriendsList"
// import History from "components/transactions/transactions"

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = newState => {
    this.setState(prevState => {
      return{
        ...prevState,
        [newState]: prevState[newState] + 1 ,
      }
    })
  }

  // handleIncrement=()=>{
  //   console.log('+1');
  // }

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <Section title = 'Please leave feedback'>
          <FeedbackOptions countFeedback={this.countFeedback} />
      </Section>
    );
  }
}

export default App;
