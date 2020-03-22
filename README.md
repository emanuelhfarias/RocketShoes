<h1 align="center">
  <img src=".github/logo-inverted.png" />
</h1>

<h3 align="center">
:rocket: [Bootcamp GoStack#10] desafio 7 e 8
</h3>

## Descrição
Desenvolver um e-commerce em React Native para venda de Calçados.

[Link da versão web](https://github.com/emanuelhfarias/bootcamp-gostack-modulo-07)
[Link do desafio 7](https://github.com/Rocketseat/bootcamp-gostack-desafio-07/blob/66c10d7bc6d11c1c14f56ec2136e45aa32f9381d/README.md)

### Resultado
<h1 align="center">
  <img src=".github/demo.gif" width="280px" />
</h1>


### Subindo a aplicação
```sh
git clone ...
cd
yarn
react-native start
react-native run-android
adb reverse tcp:3333 tcp:3333
json-server server.json -p 3333 --watch --host 0.0.0.0
```

### Debugging with Reactotron
Open Reactotron, then run:
```sh
adb reverse tcp:9090 tcp:9090
```
Reload your app.

### React Hooks (desafio 8)
Branch com a mesma aplicação modificada para utilizar __function components__ e __React Hooks__.  
Ver [branch](https://github.com/emanuelhfarias/bootcamp-gostack-modulo-07/tree/react-hooks)  
Ver [desafio 8](https://github.com/emanuelhfarias/RocketShoes/tree/react-hooks)  

Features utilizadas:
* useState (substitui setState)
* useEffect (substitui componentDidMount)
* useRef guarda referência de um elemento por todo o ciclo de vida do componente
* useSelector (substitui mapStateToProps)
* useDispatch (substitui mapDispatchToProps)
