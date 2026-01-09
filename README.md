# 〜北海道 小樽〜 都や - Webサイト

北海道産の高品質な乾燥なまこを産地直送でお届けする都やの公式Webサイトです。

## 🌐 公開URL
- **本番サイト**: [www.leaders-co.jp](https://www.leaders-co.jp)

## 🛠 技術スタック

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **国際化**: react-i18next (日本語/中文/English)
- **Hosting**: GitHub Pages

## 📁 プロジェクト構成

```
src/
├── components/
│   └── feature/
│       ├── Header.tsx      # ヘッダーコンポーネント
│       └── Footer.tsx      # フッターコンポーネント
├── pages/
│   ├── home/
│   │   └── page.tsx        # ホームページ
│   ├── profile/
│   │   └── page.tsx        # プロフィールページ
│   ├── contact/
│   │   └── page.tsx        # お問い合わせページ
│   └── NotFound.tsx        # 404ページ
├── i18n/
│   ├── index.ts           # i18n設定
│   └── local/
│       ├── ja/common.ts   # 日本語翻訳
│       ├── zh/common.ts   # 中国語翻訳
│       └── en/common.ts   # 英語翻訳
└── router/
    ├── config.tsx         # ルート定義
    └── index.ts           # ルーターセットアップ
```

## 🚀 開発環境セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール
```bash
# リポジトリのクローン
git clone https://github.com/LeapForHP/Miyakoya.git
cd leaders

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## 📝 開発手順

### 1. コード修正
- React コンポーネントの編集
- スタイルの変更（Tailwind CSS）
- 翻訳テキストの更新（`src/i18n/local/*/common.ts`）

### 2. 開発環境での確認
```bash
npm run dev
```

### 3. ビルド・デプロイ

#### **重要**: コード修正後は必ずこの手順を実行

```bash
# 1. プロジェクトをビルド（docsフォルダに出力）
npm run deploy

# 2. 変更をステージング
git add .

# 3. コミット
git commit -m "サイト内容を更新"

# 4. リモートにプッシュ
git push
```

**約1-2分後に本番サイトが更新されます。**

## 🌍 多言語対応

### 対応言語
- 🇯🇵 日本語 (デフォルト)
- 🇨🇳 中国語
- 🇬🇧 英語

### 翻訳テキストの追加・修正

**日本語**:
```typescript
// src/i18n/local/ja/common.ts
export const common = {
  hero: {
    title: "新しいタイトル"
  }
}
```

**中国語**:
```typescript
// src/i18n/local/zh/common.ts  
export const common = {
  hero: {
    title: "新标题"
  }
}
```

**英語**:
```typescript
// src/i18n/local/en/common.ts
export const common = {
  hero: {
    title: "New Title"
  }
}
```

### 翻訳の使用方法

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  
  return (
    <h1>{t('hero.title')}</h1>
  );
}
```

## 🔧 よく使うコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run deploy` | ビルド + GitHub Pages準備 |
| `npm run preview` | ビルド結果のプレビュー |

## 📂 重要なファイル

### 設定ファイル
- `vite.config.ts` - Vite設定
- `tailwind.config.ts` - Tailwind CSS設定
- `tsconfig.json` - TypeScript設定

### デプロイ関連
- `docs/` - GitHub Pagesで配信されるファイル
- `docs/CNAME` - 独自ドメイン設定
- `docs/404.html` - SPA用404ハンドラー

## 🚨 トラブルシューティング

### サイトが更新されない場合
1. `npm run deploy` が正常に完了したか確認
2. `git push` が成功したか確認
3. 1-2分待ってからブラウザをリフレッシュ
4. ブラウザキャッシュをクリア

### 言語切り替えが保持されない場合
- React Routerの`<Link>`コンポーネントを使用（`<a>`タグは使わない）
- 言語設定はlocalStorageに保存されます

### ビルドエラーの場合
```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install

# キャッシュをクリア
rm -rf docs
npm run deploy
```

## 📞 お問い合わせ

技術的な質問やサポートが必要な場合は、開発チームまでお問い合わせください。

---

**最終更新**: 2026年1月9日