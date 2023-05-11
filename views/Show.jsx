// const React = require("react");

// const myStyle = {
//   color: "#ffffff",
//   backgroundColor: "#000000",
//   textAlign: "center",
// };
// class Show extends React.Component {
//   render() {
//     const { pokemon } = this.props;
//     return (
//       <div>
//         <h1 style={myStyle}>Gotta Catch 'Em All</h1>
//         <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
//         <img src={pokemon.img+".jpg"}></img><br/><br/>
//         <a href="/pokemon">Return to Home</a>
//       </div>
//     );
//   }
// }
// module.exports = Show;

const myStyle = {
  // color: "#ffffff",
  backgroundColor: "darkgray",
  color: "black",
  textAlign: "center",
  // display: "flex"
};


const React = require("react");

class Show extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>Pokemon show page</h1>
        <h3>The name: {this.props.Pokemon.name.charAt(0).toUpperCase()+this.props.Pokemon.name.slice(1)}</h3>
        <img
            src={`http://img.pokemondb.net/artwork/${this.props.Pokemon.name}.jpg`}
            alt={this.props.Pokemon.name}
          ></img>
      </div>
    );
  }
}
module.exports = Show;

