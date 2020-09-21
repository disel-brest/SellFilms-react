import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART,
  INCREASE_COUNT_CART,
  DECREASE_COUNT_CART
} from '../actions';

 //надо чтобы state, был пустой изначально
const initialState = {
  list: [
    // {
    //   count: 0,
    //   id: 1,
    //   data: {
    //     id: 15,
    //     name: 'Капитошка',
    //     year: 1980,
    //     genre: 'Мультфильмы',
    //     country: 'Россия',
    //     rating: 97,
    //     description: 'Капитошка — веселая капелька летнего дождя, она несет в себе разноцветье радуги, энергию солнца и живительную силу воды. Однажды Капитошка появился в домике маленького Волчонка. Волчонок — добрый и ласковый, и именно этим огорчает своих родителей. Он — любящий сын, и чтобы порадовать маму и папу он решил исправиться и стать настоящим — Правильным! — волком, свирепым, злым, жестоким и хитрым.Так положено по волчьим законам, и так написано в самоучителе для настоящих волков. Волчонок усиленно учит правила из учебника и тренирует страшные позы. Капитошка помогает Волчонку избавиться от этих комплексов, осознать себя и становится его большим другом.…',
    //     cost: 970,
    //     cashless: 'нал'
    //   }
    // }
  ],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isExist = state.list.find((film) => film.id === action.payload.id);

      if (isExist) {
        return state;
      }

      const updatedlist = [
        ...state.list,
        { count: 1, id: action.payload.id, data: action.payload },
      ];

      return {
        ...state,
        list: updatedlist,

        //var1 IGOR
        // total: list.reduce((total, film) => {            //более продвинутый способ
        //   return (total += film.data.cost);
        // }, 0),

        //var2 SERGEY
        total: state.total + action.payload.cost
      };
    }

    case REMOVE_FROM_CART: {

      //var1 IGOR       ВАЖНО!!! action.payload = id
      // const updatedlist = state.list.filter((film) => film.id !== action.payload);
      // return {
      //   ...state,
      //   list: updatedlist,
      //   total: updatedlist.reduce((total, film) => {
      //     return (total += film.data.cost);
      //   }, 0),
      // };

      //var2 SERGEY     ВАЖНО!!! action.payload = film
      const updatedlist = state.list.filter((film) => film.id !== action.payload.id);
      let updatedCounte = action.payload.count * action.payload.data.cost;
      return {
        ...state,
        list: updatedlist,
        total: state.total - updatedCounte
      };
    }

    case INCREASE_COUNT_CART: {

      //var1 IGOR       ВАЖНО!!! action.payload = id
      // const updatedlist = state.list.map((film) => {
      //   if (film.id === action.payload) {
      //     return {
      //       ...film,                                       //??????????????????????????????????????????????????
      //       count: film.count + 1,
      //     };
      //   }

      //   return film;
      // });

      // return {
      //   ...state,
      //   list: updatedlist,
      //   total: updatedlist.reduce((total, film) => {
      //     return (total += film.data.cost * film.count);
      //   }, 0),
      // };

      //var2 SERGEY     ВАЖНО!!! action.payload = film
      const updatedlist = state.list.map(film => {
        if (film.id === action.payload.id) {
          film.count += 1;
        }
        return film;
      })
      return {
          ...state,
          list: updatedlist,
          total: state.total + action.payload.data.cost
      }
    }

    case DECREASE_COUNT_CART: {

      //var1 IGOR       ВАЖНО!!! action.payload = id                              //хз?????????????????????
      // const film = state.list.find((film) => film.id === action.payload);
      // let updatedlist;
      // if (film.count === 1) {
      //   updatedlist = state.list.filter((film) => film.id !== action.payload);
      // } else {
      //   updatedlist = state.list.map((film) => {
      //     if (film.id === action.payload) {
      //       return {
      //         ...film,
      //         count: film.count - 1,
      //       };
      //     }

      //     return film;
      //   });
      // }

      // return {
      //   ...state,
      //   list: updatedlist,
      //   total: updatedlist.reduce((total, film) => {
      //     return (total += film.data.cost * film.count);
      //   }, 0),
      // };

      //var2 SERGEY     ВАЖНО!!! action.payload = film
      if (action.payload.count >= 2) {
        const updatedlist = state.list.map(film => {
          if (film.data.id === action.payload.id) {
            film.count -= 1;
          }
          return film;
        })
        return {
            ...state,
            list: updatedlist,
            total: state.total - action.payload.data.cost
        }
      }
    }
    default:
      return state
  }
}