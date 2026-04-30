# 無人軍團 / 新書發表暨簽名會

《無人軍團》新書發表暨簽名會 — Anduril 風格的活動報名網站。
純靜態 HTML/CSS/JS，無外部框架，部署在 GitHub Pages。

🌐 線上預覽：
- 個人：<https://dahowwang.github.io/anduril/>
- 公司：<https://mixxintw.github.io/vibe_anduril/>

---

## 設計風格

模仿美國國防新創 [Anduril Industries](https://www.anduril.com/) 的官網語彙，呈現「軍工科技 × 矽谷質感」的視覺：

- 🎨 **配色**：純黑底 `#050505` + 警示黃 `#FEF209`（書封同色）+ 暖白 bone `#d8d6cf`
- 🔤 **字型**：Inter Tight（英）／ JetBrains Mono（mono／technical readout）／ Noto Sans TC（中）
- 📐 **造型**：銳角無圓角、滿版區塊、12 欄 grid、`+` 列表符號、技術座標 readout
- ⚡ **動效**：脈動定位點、即時 UTC clock、scroll-trigger fade（克制不浮誇）
- 🌑 **暗色**：dark mode 預設，反差克制、加大 letter-spacing 製造排版感

---

## 三個頁面

### 1. `index.html` — 首頁

從上到下分為 9 個區塊：

| 區塊 | 內容 |
|---|---|
| **StatusBar** | 品牌標 + 即時 UTC clock + 活動編號（每秒更新） |
| **Hero** | 主視覺：技術座標、`無人[軍團]` 大字、副標、Venue/Capacity/Duration spec bar、CTA、書封含十字準星 |
| **/01 BRIEF** | 三幕書介：21/24 歲節奏鉤（amber bold）→ 短橫線 → 台灣連結 → 黃色立邊 pull quote → 收尾。右側 stat bar：21 歲 / $60B / 7 年 |
| **/02 SPEAKERS** | 與會嘉賓：Fox 蕭上農 + 韓嵩齡（圓形大頭照） |
| **/03 SCHEDULE** | 6 段時間軸：13:30 報到 → 14:00 致詞 → 14:30 Fox 主講 → 15:30 Q&A → 15:50 簽書會 → 16:35 自由交流 |
| **/04 ALLOCATION** | 票券：套票 NT$799（含書）/ 單人票 NT$499，兩張並排、各限 30 席 |
| **/05 LOCATION** | 場地：Tempo House Restaurant & Bar — Google Maps 真實地圖 + 暗色濾鏡 + 自製黃色脈動定位點 + 技術座標 readout |
| **CTA** | Final Call：`便宜、大量、AI 自主` 大字 + 報名 / 回頂 |
| **Footer** | 4 欄：品牌 / EVENT / VENUE / CONTACT |

### 2. `checkout.html` — 報名頁

兩欄式佈局：左主欄表單、右側 sticky 訂單摘要。

**`/01 選擇票種`**
- 兩張票卡並排，每張卡內附 +/- 數量選擇器（上限 30 張）
- 數量 > 0 時亮黃框 + amber 漸層
- 支援 URL 預選：`?t=bundle` 自動把套票數量設為 1

**`/02 個人資料`**
- 姓名 / 手機（09 開頭 10 碼）/ Email / 備註
- 即時格式驗證：失焦時紅框 + 錯誤訊息

**`/03 發票資訊`**
- Segmented switch：`[電子發票]` ↔ `[公司發票]`
- 電子發票：手機載具（OPTIONAL，格式 `/ABC1234`）
- 公司發票：統一編號（8 碼）+ 公司抬頭
- 切換時欄位整組換掉，不會兩種同時顯示

**同意條款 + 送出**
- 全部檢查通過才能 enable 送出按鈕
- 點擊後模擬 0.8s 處理 → 自動 redirect 到 `thanks.html`

**右側 sticky 訂單摘要**
- 活動日期 / 時間 / 場地 / 地址
- 多筆 line items（套票 × N / 單人票 × N）
- 小計加總、TOTAL 用 amber 黃色強調

### 3. `thanks.html` — 感謝頁（金流回流）

預期是金流串接後，付款完成導回網站的目標頁。
URL 接收參數：`?order=DL-2026-XXX&bundle=2&admission=1`

**頁面內容**
- ✓ 黃色 success mark + 「感謝你的報名」
- 訂單編號 pill（amber 框）
- 雙卡：
  - `/01 EVENT 活動資訊` — 日期 / 報到 / 開始 / 場地 / 地址
  - `/02 ORDER 訂單明細` — 從 URL 解出張數、自動算小計與總計
- `/03 BEFORE YOU COME 行前提醒` — 4 條：QR Code / 報到時段 / 自備書 / 客服信箱
- CTA：**加入 Google 行事曆**（自動產生 calendar template URL，2026-05-17 13:30 ~ 17:00 Taipei）+ 回首頁

---

## 檔案結構

```
.
├── index.html           # 首頁
├── checkout.html        # 報名表單頁
├── thanks.html          # 報名成功 / 金流回流頁
├── style.css            # 全站共用樣式（design tokens + 三頁版型）
├── script.js            # 共用：即時 UTC clock
├── assets/
│   ├── book-cover.png   # 書封
│   ├── speaker-fox.jpg  # Fox 蕭上農
│   └── speaker-han.jpg  # 韓嵩齡
└── .claude/skills/
    └── anduril-style.md # Anduril 風格 skill 規範
```

---

## 活動資訊

| 項目 | 內容 |
|---|---|
| **日期** | 2026-05-17（日） |
| **報到** | 13:30 開放 |
| **開始** | 14:00 |
| **結束** | 16:50 |
| **場地** | Tempo House Restaurant & Bar |
| **地址** | 台北市中山區建國北路二段 12 號 |
| **席次** | 限定 60 席（套票 30 / 單人 30） |
| **票價** | 套票 NT$799（含書）/ 單人 NT$499 |

---

## 技術

- **純靜態**：HTML / CSS / JS，無 framework、無 build step
- **字體**：Google Fonts（Inter Tight、JetBrains Mono、Noto Sans TC）
- **地圖**：Google Maps `output=embed` iframe（座標定位、無 API key）+ CSS filter 暗化
- **部署**：GitHub Pages（main branch / root）
- **本機預覽**：`python3 -m http.server 8780` 然後 <http://localhost:8780/>

## 作者 / 出版社

- 作者：**Fox 蕭上農**（科技觀察家）
- 出版：**寫樂文化**
- 客服：[service@mixxin.tw](mailto:service@mixxin.tw)
