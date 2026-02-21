export const initialState = ["Buy Milk", "Learn React"];
export function reducer(state = initialState, action) {
  if (action.type == "ADDTODO") {
    return [...state, action.payload];
  }
}
