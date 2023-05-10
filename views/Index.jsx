const React = require("react");

const myStyle = {
  // color: "#ffffff",
  backgroundColor: "darkgray",
  color:"black",
  textAlign: "center",
};
class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1 style={myStyle}>Index Page</h1>
        <ul>
          {pokemon.map((item, i) => {
            return (
              <div style={myStyle}>
                <p key={item.name}>
                  <a href={`/pokemon/${i}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                  
                  <br />
                  {/* <img src={item.img} alt="NA"></img> */}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
