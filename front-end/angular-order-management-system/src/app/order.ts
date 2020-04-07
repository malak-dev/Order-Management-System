export interface Order {
  id: number;
  date: string;
  side: string;
  symbol: string;
  quantity: number;
  amount: number;
  status: string;
}
