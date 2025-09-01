// src/components/AccountTopCard.test.tsx
import { render, screen } from "@testing-library/react";
import { AccountTopCard } from "./AccountTopCard";

describe("AccountTopCard", () => {
  it("氏名・口座番号・残高が表示される", () => {
    render(
      <AccountTopCard
        name="山田 太郎"
        accountNumber="1234567"
        balance={50000}
      />
    );

    // 氏名
    expect(screen.getByText("山田 太郎")).toBeInTheDocument();

    // 口座番号
    expect(screen.getByText(/口座番号：1234567/)).toBeInTheDocument();

    // 残高（通貨フォーマットは環境依存するので部分一致で）
    expect(
      screen.getByText((content) => content.includes("50,000"))
    ).toBeInTheDocument();
  });

  it("avatarUrl が指定されていれば画像を表示する", () => {
    render(
      <AccountTopCard
        name="鈴木 花子"
        accountNumber="7654321"
        balance={1000}
        avatarUrl="https://example.com/avatar.png"
      />
    );

    const img = screen.getByRole("img", { name: "鈴木 花子 のアイコン" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.png");
  });

  it("avatarUrl が指定されていなければイニシャルを表示する", () => {
    render(
      <AccountTopCard
        name="佐藤 次郎"
        accountNumber="1111111"
        balance={2000}
      />
    );

    // イニシャル "佐次" が表示されるはず（全角でもOK）
    const avatar = screen.getByLabelText("佐藤 次郎 のアイコン");
    expect(avatar).toHaveTextContent("佐次");
  });
});
