import { Request, Response } from "express"
import { connection } from "../utils/db"
import { getUser } from "../utils/auth"

export const getAllPosts = async (req: Request, res: Response) => {
  const [posts] = await connection.execute(
    `SELECT posts.id as id, content, publishedAt, username
     FROM posts
     LEFT OUTER JOIN users ON posts.authorId=users.id
     ORDER BY publishedAt DESC`
  )
  res.json(posts)
}

export const createPost = async (req: Request, res: Response) => {

  //-------------------------------------------------------
  const user = getUser(req, res)
  if(!user){
    res.status(401).send("Questa operazione richiede l'autenticazione")
    return
  }
  //TODO CREARE STA ROBA CHE SI RIPETE IN UNA FUNZIONE


  await connection.execute("INSERT INTO posts (content, authorId) VALUES (?, ?)", [
    req.body.content,
    null,
  ])
  res.json({ success: true })
}

export const deletePost = async (req: Request, res: Response) => {

  const user = getUser(req, res)
  if(!user){
    res.status(401).send("Questa operazione richiede l'autenticazione")
    return
  }

  // Verifica che il post esista
  const [posts] = await connection.execute("SELECT * FROM posts WHERE id=?", [req.params.id])
  if (!Array.isArray(posts) || posts.length == 0) {
    res.status(404).send("Post non trovato.")
    return
  }

  const post = posts[0] as any // non usare any nel progettoooooooooooooooooooooooooooo 

  if (post.authorId !== user.id && user.role !== "admin") {
    res.status(403).send("Non sei autorizzato a cancellare questo post.")
    return
  }

  await connection.execute("DELETE FROM posts WHERE id=?", [req.params.id])
  res.json({ success: true })
}
