export async function getFood(order='createdAt') {
  const query = `order=${order}`
  const response = await fetch(`https://learn.codeit.kr/8778/foods?${query}`);
  const body = await response.json();
  return body;
}
