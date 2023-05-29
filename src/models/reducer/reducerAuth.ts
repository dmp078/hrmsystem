export interface IauthState {
  token: string | null;
  email: string | null;
  username: string | null;
  department: string | null;
  id: number | null;
}

export interface IcaseActions {
  SET_AUTH: string;
  REMOVE_AUTH: string;
}
