import { useReducer, useEffect } from 'react';
import { initialState, homeReducer} from "../reducers/homeReducer";

function useHomepageAPI() {
        //getTitles
    const [state, dispatch] = useReducer(homeReducer, initialState);
    const { title, search, page } = state;

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
          .then((res) => res.json())
          .then((data) => {
            // setTitles(data.titles);
            dispatch({ type: "SET_TITLES", payload: data.titles});
          });
      }, []);

      //fetch data from the server
      useEffect(() => {
        fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
          // .then((res) => res.json())
          // .then((data) => {
          //   setTitles(data.titles);
          });
      }, [title, search, page]);
      
      return {dispatch, state};
}

export default useHomepageAPI;