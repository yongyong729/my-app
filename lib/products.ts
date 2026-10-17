
export type Product ={
    id : string;
    name : string;
    description : string;
    likes: number;
}

const Products : Product[] =[
    {id: "1",name: "머그컵",description:"나의 최애 머그컵",likes:3},
    {id: "2",name: "핸드폰",description:"그냥 핸드폰",likes:4},
    {id: "3",name: "연필",description:"그냥 연필",likes:5},
    {id: "4",name: "필통",description:"사실 필통안에 없음",likes:5},
    {id: "5",name: "노트",description:"노트 북",likes:5},
    {id: "6",name: "노트북",description:"노트북",likes:5}

]
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(700); // 실제 DB 조회를 흉내내는 지연 — loading.tsx가 보이는 이유
  return Products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(400);
  return Products.find((p) => p.id === id);
}

export async function likeProduct(id: string): Promise<number> {
  await delay(300);
  const product = Products.find((p) => p.id === id);
  if (!product) return 0;
  product.likes += 1;
  return product.likes;
}