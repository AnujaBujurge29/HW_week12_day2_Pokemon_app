const React = require("react");

const myStyle = {
  // color: "#ffffff",
  backgroundColor: "darkgray",
  color:"black",
  textAlign: "center",
};
class Index extends React.Component {
  render() {
    const { sample } = this.props;
    return (
      <div>
        <h1 style={myStyle}>Index Page</h1>
        <ul>
          {sample.map((item, i) => {
            return (
              <li style={myStyle} key={item.name}>
                <h2>
                  <a href={`/pokemon/${i}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
