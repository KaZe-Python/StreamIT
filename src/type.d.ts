interface IChildrenProps {
  children: React.ReactNode;
}

interface IClassNames{
  classes: []
}

interface IAuthContext {
  auth: boolean;
  login: () => void;
  signup: () => void;
  logout: () => void;
}