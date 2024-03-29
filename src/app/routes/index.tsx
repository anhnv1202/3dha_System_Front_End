import { PATHS } from '@app/common/constants';
import Category from '@app/pages/category/category.page';
import ChangePassword from '@app/pages/change-password/change-password.page';
import Confirm from '@app/pages/confirm/confirm.page';
import ForgotPassword from '@app/pages/forgot-password/forgot-password.page';
import Homepage from '@app/pages/home-page/home-page.page';
import { Login } from '@app/pages/login/login.page';
import Register from '@app/pages/register/register.page';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATHS.CHANGE_PASSWORD, element: <ChangePassword /> },
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.HOMEPAGE, element: <Homepage /> },
  { path: PATHS.DEFAULT, element: <Homepage /> },
  { path: PATHS.CATEGORY, element: <Category /> },
  { path: PATHS.CONFIRM, element: <Confirm /> },
];

export default routes;
