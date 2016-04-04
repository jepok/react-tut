var React = require('react');

var fetchUsers = (cb) => {
  setTimeout( () => {
    cb([{name: 'Jeremy'}, {name: 'Shannon'}]);
  },500);
};

// var login = React.createClass({
//
//   showSignIn () {
//     // do sign in stuff
//   }
//
//     render () {
//       return (
//         <div>
//           <a onClick={showSignIn}>sign in</a>
//           <h5>Hello {user.name}</h5>
//         </div>
//       )
//     }
// });

var Header = React.createClass({

  render () {
    return (
      <div>
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
    <div>
      <div style={headerContainerStyle}>
        <div style={headerStyle}>
          <Header></Header>
        </div>
      </div>
        <div style={containerStyle}>
          <h1>Hello World</h1>
          <ul>
            {users}
          </ul>
        </div>
      </div>
    );
 }
});

var headerStyle = {
  color: 'white',
  display: 'block',
  // position: 'fixed',
  top: '0',
  width: '50%',
  margin: 'auto',
  height: '25%',
  alignContent: 'center',
  textAlign: 'center'
};

var containerStyle = {
  color: 'black',
  paddingTop: '245px',
  width: '100%',
  margin: '25px auto',
  textAlign: 'center'
};

var headerContainerStyle = {
  width: '100%',
  position: 'fixed',
  backgroundColor: 'purple',
  boxShadow: '3px 10px 5px 1px #002'

}

React.render(<App/>, document.body);
