export const $fetch = async (url: string) => {
  if (url == "/api/articoli") return (await import("./assets/articoli.json")).default
  if (url == "/api/articoli/2") return (await import("./assets/articoli.json")).default.slice(0, 2)
  if (url == "/api/autori") return (await import("./assets/autori.json")).default
  if (url.startsWith("/api/articolo")) {
    const res = (await import("./assets/articoli.json")).default
    const id = +(url.split("/").pop() ?? "0")
    console.log(res, id)
    return res.filter(a => a.idarticolo == id)
  }
  return []
}
