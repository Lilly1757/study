export async function getFood() {
  const response = await fetch("https://learn.codeit.kr/8778/foods");
  const body = await response.json();
  return body;
}
