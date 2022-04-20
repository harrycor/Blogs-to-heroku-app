export interface ICredsFound {
  userid: number;
  email: string;
  password: string;
  banned: 0 | 1;
  _created: Date;
}
