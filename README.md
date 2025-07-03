# React Test Project

このプロジェクトは、Reactを使用したシンプルなカウンターアプリとTodoリストアプリケーションです。

## 機能

- **カウンターアプリ**: +1/-1ボタンでカウントを増減
- **Todoリスト**: タスクの追加、完了チェック、削除機能
- **レスポンシブデザイン**: TailwindCSSを使用したモダンなUI

## 技術スタック

- React 18
- Vite
- TailwindCSS
- ESLint

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run preview` - ビルドしたアプリのプレビュー
- `npm run lint` - ESLintによるコードチェック

## プロジェクト構造

```
test-project/
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```
