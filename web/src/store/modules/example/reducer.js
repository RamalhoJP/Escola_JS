import * as types from '../types'

const inicialState = {
  botaoClicado: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = inicialState, action) {
  switch(action.type){
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('erro')
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('request')
      return state;
    }

    default:
      return state;
  }
}
