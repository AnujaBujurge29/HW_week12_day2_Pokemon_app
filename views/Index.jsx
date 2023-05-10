const React = require('react');

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
class Index extends React.Component {
  render() {
      const { pokeman } = this.props;
      return (
              <div style={{textAlign:"center"}}>
                  <h1>Index Page</h1>
                  <div style={myStyle}>My First React Component!</div>;
              </div>
      );
  }
}
module.exports = Index;