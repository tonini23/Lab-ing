import { Request, Response } from "express"
import { setUser, User } from "../utils/auth"
import { connection } from "../utils/db"
import bycrypt from "bcrypt"

export const register = async (req: Request, res: Response) => {
  // Estrae username e password dal body della richiesta

  const { username, password } = req.body

  const [rows] = await connection.execute(`SELECT username FROM users WHERE 
  username=?`, [username])

  if(Array.isArray(rows) && rows.length > 0){
    res.status(400).send("Username già in uso")
    return
  }

  const passwordHash = await bycrypt.hash(password, 10)
  // Inserisce l'utente nel database
  await connection.execute("INSERT INTO users (username, password) VALUES (?, ?)", 
    [username, passwordHash,])

  // Estrae i dati del nuovo utente
  const [users] = await connection.execute(
    "SELECT id, username, role FROM users WHERE username=?",
    [username]
  )
  const userData = (users as User[])[0]

  setUser(req, res, userData)

  res.json({ message: "Registrazione effettuata con successo" })
}

export const login = async (req: Request, res: Response) => {
  // Estrae username e password dal body della richiesta
  const { username, password } = req.body

  // Esegue la query al database per ottenere i dati dell'utente in base allo username
  const [users] = await connection.execute(
    "SELECT * FROM users WHERE username=?",
    [username]
  )
  if(!Array.isArray(users) || users.length == 0){
    res.status(400).send("Credenziali errate")
    return
  }

  const user = users[0] as any

  const correcrPassword = bycrypt.compare(password, user.password)
  if(!correcrPassword){
    res.status(400).send("Credenziali errate")
    return
  }

  delete user.password

  res.json({ message: "Login effettuato con successo" })
}

export const logout = async (req: Request, res: Response) => {
  res.json({ message: "Logout effettuato con successo" })
}

export const getProfile = async (req: Request, res: Response) => {
  res.json({})
}
