var React = require('react');

var fetchUsers = (cb) => {
  setTimeout( () => {
    cb([{name: 'Jeremy'}, {name: 'Shannon'}]);
  },500);
};

var Header = React.createClass({

  render () {
    return (
      <div style={headerStyle}>
        <h1 >Bloc Metrics</h1>
        <h3>Metrics for Bloc Jams</h3>
      </div>
    );
  }
});

var App = React.createClass({

  getInitialState () {
    return {
      users: [],
      loaded: false
    };
  },

  componentDidMount () {
    fetchUsers((users) => {
      this.setState({
        users,
        loaded: true
      });
    });
  },
  deleteUsers (target) {
    var users = this.state.users;
    var withoutUser = users.filter(user => user.name !== target.name);
    this.setState({users: withoutUser});
  },

  render () {
    if (!this.state.loaded)
    return <div>Loading</div>;
    var users = this.state.users.map((user) => {
      return <li key={user.name} onClick= {this.deleteUsers.bind(this, user)}>{user.name}</li>;
    });
    return (
      <div style={headerStyle}>
        <Header/>
        <h1>Hello World</h1>
        <ul>
          {users}
        </ul>
      </div>
    );
 }
});

var headerStyle = {
  color: 'blue',
  display: 'block',
  position: 'fixed',
  top: '0',
  width: '100%',
  alignContent: 'center'

};

React.render(<App/>, document.body);
