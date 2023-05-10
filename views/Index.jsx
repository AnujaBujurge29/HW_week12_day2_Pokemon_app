const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
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
              <p>
                <li key={item.name}>Name: 
                  <a href={`/pokemon/${i}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
                  
                  <br />
                  <img src={item.img} alt="NA"></img>
                </li>
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
