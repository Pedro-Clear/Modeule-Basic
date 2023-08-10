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

// class App extends Component{
//   render(){
//     return(
//       <View style={{flex:1, backgroundColor: '#222'}}>

//           <View style={{height: 65, backgroundColor: '#222'}}></View>

//           <View style={{flex:1, backgroundColor: '#FFF'}}></View>

//           <View style={{height:65, backgroundColor: '#222'}}></View>
//       </View>
//     );
//   }
// }

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       nome: ''
//     };

//     this.pegaNome = this.pegaNome.bind(this);
//   }

//   pegaNome(texto){
//     if(texto.length > 0){
//       this.setState({nome: 'Bem vindo: ' + texto});
//     }else{
//       this.setState({nome: ''})
//     }
//   }

//   render(){
//     return(
//       <View style={styles.container}>

//         <TextInput
//         style={styles.input}
//         placeholder="Digite seu nome?"
//         underlineColorAndroid="transparent"
//         onChangeText={this.pegaNome}
//         />

//         <Text style={styles.texto}>{this.state.nome}</Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//   },
//   input:{
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20,
//     padding: 10,
//   },
//   texto:{
//     textAlign: 'center',
//     fontSize: 25
//   }
// });

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       textoFrase: '',
//       img: require('./src/biscoito.png'),
//     };

//     this.quebraBiscoito = this.quebraBiscoito.bind(this);

//     this.frases = [
//       'Siga os bons e aprenda com eles.', 
//       'O bom-senso vale mais do que muito conhecimento.', 
//       'O riso é a menor distância entre duas pessoas.', 
//       'Deixe de lado as preocupações e seja feliz.',
//       'Realize o óbvio, pense no improvável e conquiste o impossível.',
//       'Acredite em milagres, mas não dependa deles.',
//       'A maior barreira para o sucesso é o medo do fracasso.'
//     ];

//   }

//   quebraBiscoito(){
//     let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

//     this.setState({
//       textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
//       img: require('./src/biscoitoAberto.png')
//     });
  
//   }


//   render(){
//     return(
//       <View style={styles.container} > 
      
//       <Image
//         source={this.state.img}
//         style={styles.img}
//       />

//       <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

//       <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
//         <View style={styles.btnArea}>
//           <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
//         </View>
//       </TouchableOpacity>  

//       </View>    
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   img:{
//     width: 250,
//     height: 250,
//   },
//   textoFrase:{
//     fontSize: 20,
//     color: '#dd7b22',
//     margin: 30,
//     fontStyle: 'italic',
//     textAlign: 'center'
//   },
//   botao:{
//     width: 230,
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#dd7b22',
//     borderRadius: 25 
//   },
//   btnArea:{
//     flex:1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   btnTexto:{
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#dd7b22'
//   }
// });


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    //Variavel do timer do relogio.
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI'});
    }else{

      //Comeca girar o timer
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'PARAR'});
    }

  }

  limpar(){
    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render(){
    return(
      <View style={styles.container}>  

      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />

      <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.btnTexto}> {this.state.botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
      </View>


      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrida:{
    fontSize:25,
    fontStyle:'italic',
    color: '#FFF'
  }
});
export default App;