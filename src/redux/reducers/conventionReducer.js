const convention = (state = [], action) => {
    switch (action.type) {
      case 'SET_CONVENTION':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default convention;