# クイズアプリ（React × TypeScript）

ReactとTypeScriptを使って作成した、4択クイズ形式のWebアプリです。  
学習の一環として、JavaScript版で作ったアプリをTypeScriptに書き換えることで、型定義やコンポーネント設計の理解を深めました。

---

## 🔎 アプリ概要

- クイズに答えて正解数を集計
- 全問回答後に結果画面に遷移
- 回答結果に応じて紙吹雪アニメーションを表示
- スタート時・終了時に演出を加えてUXを強化
- 「最初からやり直す」ボタンあり

---

## 🛠 使用技術

- React（v19）
- TypeScript（v5）
- Vite（v7）
- React Router DOM（v6）
- react-confetti

---

## 📁 ディレクトリ構成（一部抜粋）
```plaintext
src/
├── App.tsx
├── main.tsx
├── const.ts
├── data/
│ └── QuizData.ts // クイズの問題データ
├── Pages/
│ ├── StartPage.tsx
│ ├── QuizPage.tsx
│ └── ResultPage.tsx
├── components/
│ ├── Button/
│ ├── Display/
│ └── Result/
└── Loading/
├── StartLoading.tsx
└── EndLoading.tsx
```


## 🚀 起動方法（ローカル環境）
```bash
git clone https://github.com/HIR109/react-quiz.git
cd react-quiz
npm install
npm run dev
```

## ✨ 主な実装・技術ポイント
- useState, useEffect, useNavigate を活用した状態管理とページ遷移
- コンポーネント単位でCSSモジュールを適用し、見通しの良いUI設計を実現
- TypeScriptを導入し、Propsの型定義（例：children, onClick など）を徹底
- JavaScript → TypeScript へのリファクタを通じて、型安全性と可読性を向上


## バージョン管理について
| バージョン | 内容                |
| ----- | ----------------- |
| v1    | JavaScript版で初期実装  |
| v2    | TypeScriptに全面書き換え |


## 今後追加したい機能
- クイズのカテゴリ分けや難易度選択
- クイズデータを外部APIから取得
- 正答数に応じたメッセージ分岐
- スマホ対応（レスポンシブデザイン）

## 👤 制作者情報
- MERA HIROKI（フロントエンドエンジニアを目指して独学中）
- GitHub：[@HIR109](https://github.com/HIR109)