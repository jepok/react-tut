var React = require('react');

var fetchData = (cb) => {
  setTimeout( () => {
    cb([{name: 'Jeremy'}, {name: 'Shannon'}]);
  },500);
};

var DATA = [
  {clickTime:"10/21/15 03:45PM" , song: 'pink'},
  {clickTime:"10/21/15 03:49pm" , song: 'red'},
  {clickTime:"10/21/15 03:57pm" , song: 'blue'},
  {clickTime:"10/21/15 04:23pm" , song: 'green'},
  {clickTime:"10/21/15 04:28pm" , song: 'green'},
  {clickTime:"10/23/15 03:49pm" , song: 'red'},
  {clickTime:"10/23/15 03:55pm" , song: 'blue'},
  {clickTime:"10/25/15 12:34pm" , song: 'green'},
  {clickTime:"10/25/15 12:42pm" , song: 'red'},
  {clickTime:"10/26/15 01:23pm" , song: 'pink'},
  {clickTime:"10/26/15 03:49pm" , song: 'blue'},
  {clickTime:"10/27/15 12:45PM" , song: 'green'},
  {clickTime:"10/27/15 12:49pm" , song: 'red'},
  {clickTime:"10/27/15 12:57pm" , song: 'blue'},
  {clickTime:"10/28/15 08:23pm" , song: 'red'},
  {clickTime:"10/28/15 08:28pm" , song: 'green'},
  {clickTime:"10/30/15 02:49pm" , song: 'red'},
  {clickTime:"10/30/15 02:55pm" , song: 'blue'},
  {clickTime:"10/31/15 12:34pm" , song: 'green'},
  {clickTime:"10/31/15 12:42pm" , song: 'red'},
  {clickTime:"11/02/15 01:23pm" , song: 'red'},
  {clickTime:"11/02/15 03:49pm" , song: 'pink'},
  {clickTime:"11/02/15 08:23pm" , song: 'red'},
  {clickTime:"11/05/15 12:28pm" , song: 'green'},
  {clickTime:"11/05/15 02:49pm" , song: 'red'},
  {clickTime:"11/07/15 09:45am" , song: 'blue'},
  {clickTime:"11/07/15 09:49am" , song: 'green'},
  {clickTime:"11/07/15 12:42pm" , song: 'red'},
  {clickTime:"11/07/15 01:23pm" , song: 'red'},
  {clickTime:"11/07/15 03:49pm" , song: 'pink'}
];


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

var dataComponent1 = React.createClass ({



  render () {
    // var playClicks = DATA;
    // var clickTimes = this.props.DATA.clickTime;

    return (
      <div className={chart1}>

      </div>
    );
  }

});

var dataComponent2 = React.createClass ({

  getDefaultProps () {
    return {
      data:DATA,
      chartWidth:400,
      chartHeight:300
    }
  },

  getInitialState () {
    return {
      data: DATA,
      loaded: false
    };
  },

  componentDidMount () {
    fetchData((data) => {
      this.setState({
        metrics,
        loaded: true
      });
    });
  },


  render () {
    return this.props.metrics.map((metric, index)=> {
      return (
        <div key={index}>
          <p>
            {metric.song}
          </p>
        </div>
      );
    });


  }

});



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

  getDefaultProps () {
    return {
      data:DATA,
      chartWidth:400,
      chartHeight:300
    }
  },

  getInitialState () {
    return {
      data: DATA,
      loaded: false
    };
  },

  componentDidMount () {
    fetchData((data) => {
      this.setState({
        data: DATA,
        loaded: true
      });
    });
  },


  render () {
    if (!this.state.loaded)
    return <div>Loading</div>;

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
            <dataComponent2/>
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

React.render(<App metrics={DATA}/>, document.body);
