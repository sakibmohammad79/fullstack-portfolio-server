import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const generateToken = (
  jwtPayload: JwtPayload,
  secret: Secret,
  expiresIn: string
) => {
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn: expiresIn,
  });
  return token;
};

const verifyToken = (token: string | undefined, secret: Secret) => {
  return jwt.verify(token as string, secret) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
