import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound  = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <nav aria-label="主要ナビゲーション" className="flex gap-4 p-4 bg-gray-100">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
          About
        </NavLink>
      </nav>

      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<div className="p-6">アプリの説明ページ</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
