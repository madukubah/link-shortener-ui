/* eslint-disable  no-unused-vars */
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import queryClient from '@app/utils/clientProvider';
import {QueryClientProvider} from 'react-query';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Register from '@modules/register/Register';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import {useWindowSize} from '@app/hooks/useWindowSize';
import {calculateWindowSize} from '@app/utils/helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setWindowSize} from '@app/store/reducers/ui';

import Dashboard from '@pages/Dashboard';
import LinkPage from '@app/pages/LinkPage';
import Profile from '@pages/profile/Profile';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/register" element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/forgot-password" element={<PublicRoute />}>
            <Route path="/forgot-password" element={<ForgetPassword />} />
          </Route>
          <Route path="/recover-password" element={<PublicRoute />}>
            <Route path="/recover-password" element={<RecoverPassword />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Main />}>
              <Route path="/all-link" element={<LinkPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<LinkPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
