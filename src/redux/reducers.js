export default (state, action) => {
  switch (action.type) {
    case 'dialog':
      console.log('state dialog');
      return {
        dialog: action.payload
      };
    case 'projectName':
      console.log('state projectName');
      return {
        projectName: action.payload
      };
    default:
      console.log('state default');
      return state;
  }
};
