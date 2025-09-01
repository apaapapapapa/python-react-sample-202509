import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-100 p-6">
      <div className="rounded-2xl bg-white p-8 shadow ring-1 ring-black/5 text-center">
        <h1 className="text-2xl font-bold mb-2">404 Not Found</h1>
        <p className="text-slate-600 mb-4">お探しのページは見つかりませんでした。</p>
        <Link to="/" className="text-emerald-700 underline">トップへ戻る</Link>
      </div>
    </div>
  );
}
