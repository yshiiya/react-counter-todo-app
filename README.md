# React Counter & Todo App

シンプルで美しいReactアプリケーション。カウンター機能とTodoリスト機能を搭載したモダンなWebアプリです。

## 🌐 Live Demo

[Live Demo on Vercel](https://react-counter-todo-app.vercel.app) ← 本番環境で動作中！

## ✨ 機能

- **カウンターアプリ**: +1/-1ボタンでカウントを増減
- **Todoリスト**: タスクの追加、完了チェック、削除機能
- **レスポンシブデザイン**: TailwindCSSを使用したモダンなUI
- **PWA対応**: モバイルデバイスでの最適化

## 🛠️ 技術スタック

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **Code Quality**: ESLint

## 🚀 ローカル開発

### 前提条件
- Node.js 18以上
- npm または yarn

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/test-project.git
cd test-project

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを確認できます。

## 📝 利用可能なスクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run preview` - ビルドしたアプリのプレビュー
- `npm run lint` - ESLintによるコードチェック

## 📁 プロジェクト構造

```
test-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Counter.jsx      # カウンターコンポーネント
│   │   └── TodoList.jsx     # Todoリストコンポーネント
│   ├── App.jsx              # メインアプリケーション
│   ├── main.jsx             # エントリーポイント
│   └── index.css            # TailwindCSSスタイル
├── index.html               # HTMLテンプレート
├── package.json             # 依存関係管理
├── vite.config.js           # Vite設定
├── tailwind.config.js       # TailwindCSS設定
└── vercel.json              # Vercel設定
```

## 🎨 スクリーンショット

### デスクトップ版
![Desktop View](./screenshots/desktop.png)

### モバイル版
![Mobile View](./screenshots/mobile.png)

## 🔧 カスタマイズ

このアプリは以下の機能を簡単に追加できるように設計されています：

- ローカルストレージによるデータ永続化
- ダークモード
- 多言語対応
- アニメーション効果
- 新しいコンポーネントの追加

## 📄 ライセンス

MIT License

## 🤝 貢献

プルリクエストや Issue の作成を歓迎します！

---

**作成者**: Claude & MCPツール  
**バージョン**: 1.0.0  
**最終更新**: 2025年7月3日
