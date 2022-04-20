import * as bcrypt from "bcrypt";

export function generateHash(password: string) {
  let salt = bcrypt.genSaltSync(12);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
}

export function compareHash(passwor: string, hashedPassword: string) {
  return bcrypt.compareSync(passwor, hashedPassword);
}
