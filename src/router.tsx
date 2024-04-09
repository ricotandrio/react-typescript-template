// this file is the main router of the application

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import App from "@pages/App";
import { isUserLoggedIn } from "@redux/user/userThunks";
import { selectIsLoading, selectUserError } from "@redux/user/userSelectors";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // https://stackoverflow.com/questions/66086422/getting-ts-error-with-redux-dispatch-action-property-does-not-exist-on-type
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectUserError);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<h1>404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;