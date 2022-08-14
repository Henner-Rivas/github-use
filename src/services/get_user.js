const api = "https://api.github.com/users/";

export async function get_user(userInput) {
  const response = await fetch(`${api}${userInput}`, {
    method: "GET",
  });

  const payload = response.json();

  return payload;
}
