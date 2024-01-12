import HttpService from '@core/services/http/http.service';
import { LoginResponse, SignUpRequest } from '@app/types';

class _AuthService {
  public login(email: string, password: string) {
    return HttpService.post<LoginResponse>('/auth/login', {
      body: {
        email,
        password,
      },
    });
  }

  public signUp(signUpRequest: SignUpRequest) {
    return HttpService.post<LoginResponse>('/accounts', {
      body: { ...signUpRequest },
    });
  }
}

const AuthService = new _AuthService();

export default AuthService;
