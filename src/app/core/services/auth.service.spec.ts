import { AuthService } from './auth.service';

describe('AuthService without the TestBed', () => {
  const service = new AuthService();

  it('should be logged out', () => {
    expect(service.isLoggedIn).toBeFalsy();
  });

  it('should be logged in', () => {
    const spy = spyOn(service, 'login');
    service.login();
    expect(spy).toHaveBeenCalled();
  });

  it('should be logged in', () => {
    service.login();
    service.logout();
    expect(service.isLoggedIn).toBeFalsy();
  });
});
