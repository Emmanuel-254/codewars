const React = require('react');

// Let us know who your three favorite codewarriors are!
const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

const CodewarsLink = ({ user }) => {
  // Return a link to the user's profile
  return (
    <a href={`http://www.codewars.com/users/${user}`}>
      {user}
    </a>
  );
};

const Leaderboard = ({ leaders }) => {
  // Map over the leaderboard array to create links
  const leaderLinks = leaders.map((user, index) => (
    <CodewarsLink key={index} user={user} />
  ));

  // Return an abridged version of the leaderboard
  return (
    <div>
      {leaderLinks}
    </div>
  );
};

// Example usage
const leaders = ['Sch3lp', 'nplus', 'jhoffner', 'noLan', 'OverZealous']; // Add more users as needed
const leaderboardElement = <Leaderboard leaders={leaders} />;

const App = () => (
  <div>
    {myHeader}
    {leaderboardElement}
  </div>
);

module.exports = App;