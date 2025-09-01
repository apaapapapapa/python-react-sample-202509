import React from "react";

// 通貨フォーマッタ（JPY, 小数なし）
const formatYen = (value: number) =>
  new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits: 0,
  }).format(value);

// プロップスの型は「type」「interface」の中に定義する
export type AccountTopProps = {
  name: string;
  accountNumber: string;
  balance: number;
  avatarUrl?: string;
};

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={`${name} のアイコン`}
        className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }
  const initials = name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      aria-label={`${name} のアイコン`}
      className="h-16 w-16 rounded-full grid place-items-center bg-emerald-200 text-emerald-900 font-bold ring-2 ring-white shadow"
    >
      {initials}
    </div>
  );
}

export function AccountTopCard({
  name,
  accountNumber,
  balance,
  avatarUrl,
}: AccountTopProps) {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <div className="flex items-center gap-4">
        <Avatar name={name} avatarUrl={avatarUrl} />
        <div className="min-w-0">
          <p className="text-lg font-semibold text-slate-900 truncate">{name}</p>
          <p className="mt-1 text-sm text-slate-600">口座番号：{accountNumber}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
          <span aria-hidden> </span>
          <span className="tracking-wide">預金残高</span>
        </div>
        <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-right text-xl font-semibold text-slate-900 shadow-inner">
          {formatYen(balance)}
        </div>
      </div>
    </div>
  );
}
