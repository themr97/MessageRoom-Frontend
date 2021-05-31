const WEB_URL = "http://localhost:1337";

export async function apiCall(path: string, payload: { [key: string]: any }) {
  const res = await fetch(`${WEB_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(payload),
  }).then((t) => t.json());

  return res;
}
