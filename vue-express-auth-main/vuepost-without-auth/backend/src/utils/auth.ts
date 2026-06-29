import strict from "assert/strict"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

// Campi da inserire nell'access token
export interface User {
  id: number
  username: string
  role: "admin" | "user"
}

// Utilizzare una variabile d'ambiente per il secret in progetti reali!
// E anche un secret più complesso.
const JWT_SECRET = "foo"
const COOKIE_NAME = "vuepost-access-token"

/**
 * Codifica l'utente in un access token e lo imposta come cookie.
 * Usato in fase di registrazione e login.
 */
export const setUser = (req: Request, res: Response, user: any) => {
  //crea token dal payload
  const acessToken = jwt.sign(user, JWT_SECRET, {expiresIn: "1 day"})
  res.cookie(COOKIE_NAME, acessToken, {
    maxAge:86400000, //1 giorno
    httpOnly: true,
    sameSite: "strict",
    //secure: true
  })

}

/**
 * Decodifica e verifica l'access token, restituendo l'utente.
 * Usato per verificare se l'utente ha effettuato il login.
 */
export const getUser = (req: Request, res: Response) => {
  const accessToken = req.cookies[COOKIE_NAME]
  
  if(!accessToken) return null


  try{
  const user = jwt.verify(accessToken, JWT_SECRET) as User
  } catch{
    return null
  }
}

/**
 * Cancella il cookie contente l'access token.
 * Usato per effettuare il logout.
 */
export const unsetUser = (req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME)
}
