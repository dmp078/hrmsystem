export interface IauthState {
  token: string | null;
}

export interface IcaseActions {
  SET_AUTH: string;
  REMOVE_AUTH: string;
}
