import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 

// class App extends Component{
//   render(){

//     let nome = 'Matheus';

//     return(
//       <View>
//         <Text style={{ color: '#FF0000', fontSize: 25, marginTop: 35 }}>
//           Sujeito Programador
//         </Text>

//         <Text style={{ fontSize: 30 }}> {nome} </Text>

//         <Jobs largura={100} altura={200} fulano="Matheus" />

//       </View>
//     );
//   }
// }

// class Jobs extends Component{
//   render(){

//     let img = 'https://sujeitoprogramador.com/steve.png';

//     return(
//       <View>
//         <Image 
//           source={{ uri: img }}
//           style={{ width: this.props.largura, height: this.props.altura }}
//       />
//       <Text> {this.props.fulano} </Text>
//      </View>
//     );
//   }
// }

class App extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor: '#222'}}>

          <View style={{height: 65, backgroundColor: '#222'}}></View>

          <View style={{flex:1, backgroundColor: '#FFF'}}></View>

          <View style={{height:65, backgroundColor: '#222'}}></View>
      </View>
    );
  }
}


export default App;