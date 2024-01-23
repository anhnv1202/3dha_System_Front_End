import { PATHS } from '@app/common/constants';
import Category from '@app/pages/category/category.page';
import ChangePassword from '@app/pages/change-password/change-password.page';
import Confirm from '@app/pages/confirm/confirm.page';
import CourseDetail from '@app/pages/course-detail/course-detail.page';
import ForgotPassword from '@app/pages/forgot-password/forgot-password.page';
import Homepage from '@app/pages/home-page/home-page.page';
import { Login } from '@app/pages/login/login.page';
import Register from '@app/pages/register/register.page';
import ChangePasswordProfile from '@app/pages/user-info/change-password.page';
import EditProfile from '@app/pages/user-info/edit-profile.page';
import { ProtectedRoute } from '@core/guard/auth.guard';
import { RouteObject } from 'react-router-dom';
export const routesForNotAuthenticatedOnly = [
  { path: PATHS.REGISTER, element: <Register /> },
  { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATHS.CHANGE_PASSWORD, element: <ChangePassword /> },
  { path: PATHS.LOGIN, element: <Login /> },
  { path: PATHS.CONFIRM, element: <Confirm /> },
];

export const routesForPublic = [
  { path: PATHS.HOMEPAGE, element: <Homepage /> },
  { path: PATHS.DEFAULT, element: <Homepage /> },
  { path: PATHS.CATEGORY, element: <Category /> },
];

export const routesForAuthenticatedOnly = [
  {
    path: PATHS.DEFAULT,
    element: <ProtectedRoute />,
    children: [
      { path: PATHS.EDIT_PROFILE, element: <EditProfile /> },
      { path: PATHS.CHANGE_PASSWORD_PROFILE, element: <ChangePasswordProfile /> },
    ],
  },
];
