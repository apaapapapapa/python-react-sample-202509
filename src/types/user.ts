export type AccountNumber = string; // TODO: 将来 branded type にしてもOK

export interface User {
  name: string;
  accountNumber: AccountNumber;
  balance: number; // 残高は bigint にする選択肢もある
  avatarUrl?: string;
}
