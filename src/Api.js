import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_API = 'https://www2.ipmjp.pb.gov.br/site';

export default {

  signIn: async (matricula, password) => {
    const req = await fetch(`${BASE_API}/painel/?json=%7B%22jsonrpc%22%3A2,%22method%22%3A%22Acesso%2Flogin%22,%22params%22%3A%7B%22acao%22%3A%22login%22,%22modulo%22%3A%22Acesso%22,%22tipo%22%3A%22T%22,%22matricula%22%3A%22${matricula}%22,%22senha%22%3A%22${password}%22%7D%7D`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const res = await req.json();
    console.log(res, 'LOGIN')
    return res;
  },

  logout: async () => {
    const req = await fetch(`${BASE_API}/painel/?json=%7B%22jsonrpc%22%3A%202,%22method%22%3A%22Acesso%2Flogout%22,%22params%22%3A%7B%22acao%22%3A%22logout%22,%22modulo%22%3A%22Acesso%22,%22pagina%22%3A%22contracheque%22,%22link%22%3A%22http%3A%2F%2Fwww2.ipmjp.pb.gov.br%2Fsite%2Fcontracheque%2F%20%22%7D,%22id%22%3A1645452503331%7D%0D%0A`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const res = await req.json();
    console.log(res);
    return res;
  },

  getContraCheque: async (ano, mes, matricula, tipo) => {
    const token = await AsyncStorage.getItem('token');
    const req = await fetch(`${BASE_API}/painel?json=%7B%22jsonrpc%22%3A2,%22method%22%3A%22Contracheque%2FconsultaApp%22,%22params%22%3A%7B%22acao%22%3A%22consultaApp%22,%22modulo%22%3A%22Contracheque%22,%22ano%22%3A%22${ano}%22,%22mes%22%3A%22${mes}%22,%22matricula%22%3A%22${matricula}%22,%20%22tipo%22%3A%22${tipo}%22,%20%22token%22%3A%22${token}%22,%22app%22%3A%22true%22%7D,%22id%22%3A1644240880023%7D`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const res = await req.json();
    return res;
  },
}