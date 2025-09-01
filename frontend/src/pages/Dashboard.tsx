import React from "react";
import { AccountTopCard } from "../components/AccountTopCard";

export default function Dashboard() {
  const user = { name: "サンプル 氏名", accountNumber: "0000000", balance: 50_000 };
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <section className="w-full max-w-md rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur-sm">
        <AccountTopCard {...user} />
      </section>
    </main>
  );
}
