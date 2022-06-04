import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  //어플리케이션에서 사용자가 로그인, 로그아웃을 하는 것을 관리함
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubAuthProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  } // can't understand well

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleAuthProvider;
      case 'Github':
        return this.githubAuthProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
