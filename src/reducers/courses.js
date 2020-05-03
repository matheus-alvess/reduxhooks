const initial_state = {
  data: ['React Native', 'ReactJs', 'NodeJs'],
};
export default function courses(state = initial_state, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { data: [...state.data, action.title] };
    default:
      return state;
  }
}
