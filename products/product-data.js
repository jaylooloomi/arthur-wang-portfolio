window.PORTFOLIO_DATA = {
  "products": [
    {
      "id": "i-want-to-sleep",
      "name": "i-want-to-sleep",
      "category": "AI 開發",
      "badge": "開源",
      "order": 1,
      "description": "你安心休息，讓 AI 接手開發、測試與改善，醒來檢閱成果。",
      "tags": [
        "AI 代理",
        "自動開發",
        "夜間接手"
      ],
      "image": "products/i-want-to-sleep-marketplace-v2.png",
      "githubUrl": "https://github.com/jaylooloomi/i-want-to-sleep",
      "downloadUrl": null,
      "platform": "macOS、Linux；Windows 可透過 WSL／Git Bash 使用",
      "features": [
        "指定接手時長與工作重點，延續對話中的未完成工作。",
        "持續研究、實作與測試，將變更留在獨立分支供檢閱。",
        "整理成果與審閱文件，回來後掌握完成內容與待確認事項。"
      ],
      "scenarios": [
        "睡前把尚未完成的功能交給 AI，隔天再集中審閱。",
        "午休、通勤或外出期間，讓 AI 處理範圍明確的收尾工作。"
      ],
      "steps": [
        "依 README 安裝對應的 Claude Code 或 Codex 外掛，完成必要設定。",
        "在專案裡交代接手時間與目標，例如接手 3 小時、優先改善效能。",
        "回來後檢閱成果文件、測試與分支差異，再決定合併。"
      ],
      "requirements": "Claude Code ≥ 2.1.139 或 Codex CLI ≥ 0.122，另需 git、bash、Python 3.8+；完整設定請依 README。",
      "notes": "自動執行需要適當的 Agent 權限與持續運作的電腦；產出仍由你檢閱。此產品是開發外掛，不是獨立桌面 App。",
      "gallery": [
        {
          "image": "products/sources/sleep-reference.png",
          "caption": "README 原始宣傳插畫：日間交接與夜間開發情境，非實際介面。"
        },
        {
          "image": "products/i-want-to-sleep.png",
          "caption": "保留的第一版情境插畫，參考 README 原圖生成，非實際介面。"
        }
      ],
      "highlight": "設定接手時間，讓 AI 持續開發，回來一次檢閱分支與測試成果。"
    },
    {
      "id": "i-want-to-duck-meeting",
      "name": "Duck Meeting",
      "category": "生產力",
      "badge": "開源",
      "order": 2,
      "description": "留下會議逐字稿與錄音，讓 AI 整理重點、決議與待辦。",
      "tags": [
        "會議紀錄",
        "語音轉文字",
        "AI 摘要"
      ],
      "image": "products/i-want-to-duck-meeting-marketplace-v2.png",
      "githubUrl": "https://github.com/jaylooloomi/i-want-to-duck-meeting",
      "downloadUrl": "https://github.com/jaylooloomi/i-want-to-duck-meeting/releases/latest",
      "platform": "Windows 10／11 x64",
      "features": [
        "保存會議音訊與逐字稿，支援 Google Meet、Teams 與現場麥克風記錄情境。",
        "在本機工作區回看逐字稿、錄音與歷史會議，核對發言來源。",
        "沿用已登入的 Codex 或 Claude Code，根據逐字稿整理摘要、決議與行動事項。"
      ],
      "scenarios": [
        "專案討論時專心參與，會後回查重要發言與決策。",
        "將現場會議的中文錄音整理成可追蹤的待辦。"
      ],
      "steps": [
        "從 GitHub Releases 下載 Windows 安裝程式，選擇 Codex／Claude Code 整合。",
        "開啟新的 Agent 對話，貼上會議連結，依提示完成登入、授權與加入。",
        "結束記錄後請 Agent 整理會議，檢查逐字稿來源與待辦。"
      ],
      "requirements": "安裝版限 Windows x64，需另外安裝 Google Chrome 及本機 Codex 或 Claude Code；Claude 整合需要 claude CLI。",
      "notes": "Teams 自動加入與原生字幕流程在 README 仍標示待實際驗收；部分工作區改善只在原始碼分支、未包含於 v0.3.4 安裝版。錄音與本機辨識不需額外語音 API 金鑰，摘要仍由你選用的 AI 服務處理。",
      "gallery": [
        {
          "image": "products/sources/meeting-screenshot.png",
          "caption": "README 實際工作區截圖，使用合成會議資料；功能以所安裝版本為準。"
        },
        {
          "image": "products/sources/meeting-reference.png",
          "caption": "README 原始宣傳插畫，非實際介面。"
        },
        {
          "image": "products/i-want-to-duck-meeting.png",
          "caption": "保留的第一版情境插畫，參考 README 原圖生成，非實際介面。"
        }
      ],
      "highlight": "免額外 API Token，沿用已登入的 Codex／Claude Code 整理逐字稿與會議重點。"
    },
    {
      "id": "quota-pebble",
      "name": "Quota Pebble",
      "category": "桌面工具",
      "badge": "開源",
      "order": 3,
      "description": "掌握多個 AI 服務的剩餘額度與使用節奏，讓桌面小夥伴陪你工作。",
      "tags": [
        "額度監控",
        "桌面工具",
        "AI 服務"
      ],
      "image": "products/quota-pebble-marketplace-v2.png",
      "githubUrl": "https://github.com/jaylooloomi/quota-pebble",
      "downloadUrl": "https://github.com/jaylooloomi/quota-island/releases/latest",
      "platform": "Windows x64、macOS Apple Silicon／Intel",
      "features": [
        "在小巧桌面浮島中，分別查看 Claude、Codex、Gemini／Antigravity 額度。",
        "切換剩餘、已用與使用節奏，參考重置時間及可調整的保留額度。",
        "選擇桌面夥伴、調整位置與顯示內容，也可收合或隱藏至系統匣。"
      ],
      "scenarios": [
        "同時訂閱多個 AI 工具，想快速確認哪個服務還有額度。",
        "在重置前安排工作量，讓使用節奏更有餘裕。"
      ],
      "steps": [
        "依 README 的 Releases 入口下載適合 Windows 或 Mac 的版本。",
        "完成對應服務登入與本機 CLI 設定，連接想監看的帳號。",
        "選擇顯示的服務與桌面夥伴，依需要查看剩餘額度或 Pacing。"
      ],
      "requirements": "Claude 與 Codex 額度來源需要對應官方 CLI 及登入狀態；Gemini／Antigravity 依本機服務與帳號設定。",
      "notes": "圖中百分比是示範資料；Pacing 是使用規劃建議，不是服務商強制的每日額度。多帳號各自顯示，不合併加總。下載入口依 README 指向 quota-island Releases。",
      "gallery": [
        {
          "image": "products/sources/quota-screenshot.png",
          "caption": "README 實際 Windows App 截圖，隔離 demo 模式與示範額度。"
        },
        {
          "image": "products/sources/quota-reference.png",
          "caption": "README 實際精簡浮島與章魚夥伴，額度為示範資料。"
        },
        {
          "image": "products/quota-pebble.png",
          "caption": "保留的第一版情境插畫，參考 README 原圖生成，非實際介面。"
        }
      ],
      "highlight": "Claude、Codex、Gemini／Antigravity 額度，一個桌面浮島就能掌握。"
    },
    {
      "id": "before-you-do",
      "name": "before-you-do",
      "category": "生產力",
      "badge": "開源",
      "order": 4,
      "description": "快速加入常用 AI 指令，打包文字、圖片與檔案，讓提問更完整。",
      "tags": [
        "快捷指令",
        "提示詞",
        "素材整理"
      ],
      "image": "products/before-you-do-marketplace-v2.png",
      "githubUrl": "https://github.com/jaylooloomi/before-you-do",
      "downloadUrl": "https://github.com/jaylooloomi/before-you-do/releases/latest",
      "platform": "Windows x64；macOS Apple Silicon／Intel 版本待硬體驗證",
      "features": [
        "以 Alt+H 選擇常用指令片段，放開修飾鍵後貼入目前對話。",
        "集中整理任務文字、截圖、影片與檔案，編號排序並打包匯出。",
        "常用素材可存成獨立素材包，透過本機儲存延續工作內容。"
      ],
      "scenarios": [
        "經常重複輸入先規劃、測試修改或避免無關重構等提醒。",
        "回報問題時，需要一次交付多張截圖、錄影與清楚的重現說明。"
      ],
      "steps": [
        "下載對應版本；Windows 解壓完整 ZIP，保留 DLL 並啟動程式。",
        "設定常用片段，在 AI 對話按 Alt+H 選擇並貼上指令。",
        "在 Materials 加入文字與附件，排序後匯出素材包，檢查再自行送出。"
      ],
      "requirements": "Windows 需要 WebView2 Runtime；Mac 使用 Option 修飾鍵，截圖需 macOS 14+ 與螢幕擷取權限，錄影目前限 Windows。",
      "notes": "資料儲存在本機，不需要 API 金鑰；程式不會自動替你送出訊息。macOS 版本尚待硬體驗證，且未簽章／公證。",
      "gallery": [
        {
          "image": "products/sources/before-screenshot.png",
          "caption": "README 原始 Materials 工作區截圖，展示示範任務素材與匯出。"
        },
        {
          "image": "products/sources/before-reference.png",
          "caption": "README 原始宣傳插畫：常用指令與任務素材打包。"
        },
        {
          "image": "products/before-you-do.png",
          "caption": "保留的第一版情境插畫，參考 README 原圖生成，非實際介面。"
        }
      ],
      "highlight": "免 API 金鑰，Alt+H 快貼常用指令，任務素材也能在本機打包。"
    },
    {
      "id": "just-build-it",
      "name": "just-build-it",
      "category": "AI 開發",
      "badge": "開源",
      "order": 5,
      "description": "讓 AI 持續打造可獨立開關與刪除的功能，再由你挑選留下。",
      "tags": [
        "自動開發",
        "功能探索",
        "模組化"
      ],
      "image": "products/just-build-it-marketplace-v2.png",
      "githubUrl": "https://github.com/jaylooloomi/just-build-it",
      "downloadUrl": null,
      "platform": "macOS、Linux；Windows 可透過 WSL／Git Bash 使用",
      "features": [
        "在指定時間與範圍內持續研究需求並實作功能，累積可試用的成果。",
        "先量測耦合與界線，保護核心程式，讓新增功能可獨立開關與移除。",
        "留下 CATALOG 功能目錄，由你逐一試用、保留或刪除。"
      ],
      "scenarios": [
        "想在週末或額度重置前，探索專案還能增加哪些功能。",
        "對既有系統不敢大幅修改，希望新增功能能隨時關閉與移除。"
      ],
      "steps": [
        "依 README 安裝 Claude Code 或 Codex 外掛與必要環境。",
        "先執行 measure only 檢查專案邊界，再設定時間與 scope。",
        "完成後開啟 CATALOG 逐項試用，留下需要的功能並刪除其餘項目。"
      ],
      "requirements": "Claude Code ≥ 2.1.139 或 Codex CLI ≥ 0.122，另需 git、bash、Python 3.8+。",
      "notes": "README 註明 Codex 支援已移植，但尚未完成實地驗證。若目標是完成既有對話工作，README 建議改用 i-want-to-sleep。此產品是開發外掛，不是獨立 App。",
      "gallery": [
        {
          "image": "products/sources/build-reference.png",
          "caption": "README 原始宣傳插畫：計時開發、功能開關與可移除模組，非實際介面。"
        },
        {
          "image": "products/just-build-it.png",
          "caption": "保留的第一版情境插畫，參考 README 原圖生成，非實際介面。"
        }
      ],
      "highlight": "每個新功能都能獨立開關與移除，先試用，再決定留下。"
    },
    {
      "category": "生產力",
      "badge": "私有專案",
      "license": null,
      "sourceLabel": "私有專案 · 本機部署",
      "githubUrl": "https://github.com/jaylooloomi/marketplace-contract-ocr-ai",
      "downloadUrl": null,
      "platform": "Docker Desktop（Linux containers）＋瀏覽器",
      "requirements": "需要私有 repo 存取權與 Docker Desktop（Linux containers）。依 README 設定 .env 與 DB_PASSWORD，以 docker compose up -d --build 啟動；首次建置需下載 OCR 模型。",
      "imageCaption": "產品功能示意插畫，非實際介面截圖。",
      "imageAlt": "產品功能示意插畫",
      "sourceCommit": "350907b7f698f2f19783155e5827511d41f84b85",
      "id": "contract-redact",
      "name": "隱約處理",
      "description": "逐項確認文件中的敏感資訊，補上手動遮蔽，再建立新的遮蔽 PDF。",
      "highlight": "保留原檔，人工覆核後另建遮蔽 PDF；通過輸出驗證才開放下載。",
      "tags": [
        "PDF 遮蔽",
        "敏感資訊",
        "人工覆核"
      ],
      "features": [
        "以本機 OCR 與規則偵測敏感資訊候選，逐項確認、略過或復原，並可手動框選。",
        "原頁預覽與遮蔽清單對照，保留人工判定與輸出紀錄。",
        "另建影像式遮蔽 PDF；通過輸出驗證且未失效的版本才可下載，原始檔不被覆寫。"
      ],
      "scenarios": [
        "分享合約或文件前，逐頁核對需要遮蔽的姓名、公司與敏感欄位。",
        "自動候選不完整或掃描品質不佳時，回看原文並補上手動遮蔽。"
      ],
      "steps": [
        "依 README 啟動完整本機服務，開啟 http://127.0.0.1:8380 並使用「示範登入」。",
        "進入「隱約處理」上傳 PDF，完成分析後逐項覆核；需要時手動框選。",
        "待確認項目清零後進入最終檢查，建立新 PDF，確認驗證通過後下載。"
      ],
      "notes": "目前為私有專案的本機示範版本，使用開發用替代身分，並非正式 Google 登入。偵測基於本機 OCR 與規則，未接入 LLM；沒有候選不代表沒有敏感資訊，輸出前仍需人工核對。",
      "gallery": [
        {
          "image": "products/sources/contract-redact-screenshot.png",
          "caption": "Repo 實際隱約處理審核畫面；使用合成測試文件，非真實客戶資料。"
        }
      ],
      "order": 6,
      "image": "products/contract-redact.png"
    },
    {
      "category": "生產力",
      "badge": "私有專案",
      "license": null,
      "sourceLabel": "私有專案 · 本機部署",
      "githubUrl": "https://github.com/jaylooloomi/marketplace-contract-ocr-ai",
      "downloadUrl": null,
      "platform": "Docker Desktop（Linux containers）＋瀏覽器",
      "requirements": "需要私有 repo 存取權與 Docker Desktop（Linux containers）。依 README 設定 .env 與 DB_PASSWORD，以 docker compose up -d --build 啟動；首次建置需下載 OCR 模型。",
      "imageCaption": "產品功能示意插畫，非實際介面截圖。",
      "imageAlt": "產品功能示意插畫",
      "sourceCommit": "350907b7f698f2f19783155e5827511d41f84b85",
      "id": "contract-signback",
      "name": "回簽比對",
      "description": "對照核准原稿與回簽件，從差異清單、頁面配對一路核對到雙方原文。",
      "highlight": "把回簽變更連回原文證據，區分真正差異、預期填寫與仍需追問的項目。",
      "tags": [
        "回簽比對",
        "原文證據",
        "審閱紀錄"
      ],
      "features": [
        "上傳核准原稿與回簽件，透過差異清單和頁面配對確認變更、缺頁或多頁。",
        "查看雙方原文片段與頁面證據，對照差異後再儲存人工判定及備註。",
        "以確認差異、預期填寫、誤報、無法判定或需追問記錄覆核；未解項保留可見。"
      ],
      "scenarios": [
        "收到客戶回簽件後，核對是否修改條文或新增、移除頁面。",
        "掃描件或重新排版造成判讀疑慮時，回看雙方原頁並留下待追問事項。"
      ],
      "steps": [
        "依 README 啟動本機服務並示範登入，進入「回簽比對」。",
        "分別上傳核准原稿與回簽件，等候 OCR／比對後開啟差異清單。",
        "逐項查看雙方證據、儲存判定與備註，從審閱紀錄回查；未解項繼續追蹤。"
      ],
      "notes": "目前為私有專案的本機示範版本；本機 OCR 與規則比對，未接入 LLM。回簽報告仍在規劃中，沒有可下載的回簽報告。未偵測差異只涵蓋可判讀範圍，不代表文件完全相同，也不驗證簽名真偽。",
      "gallery": [
        {
          "image": "products/sources/contract-signback-screenshot.png",
          "caption": "Repo 實際回簽比對差異審閱畫面；使用合成測試文件，非真實客戶資料。"
        }
      ],
      "order": 7,
      "image": "products/contract-signback.png"
    },
    {
      "category": "生產力",
      "badge": "私有專案",
      "license": null,
      "sourceLabel": "私有專案 · 本機部署",
      "githubUrl": "https://github.com/jaylooloomi/marketplace-contract-ocr-ai",
      "downloadUrl": null,
      "platform": "Docker Desktop（Linux containers）＋瀏覽器",
      "requirements": "需要私有 repo 存取權與 Docker Desktop（Linux containers）。依 README 設定 .env 與 DB_PASSWORD，以 docker compose up -d --build 啟動；首次建置需下載 OCR 模型。",
      "imageCaption": "產品功能示意插畫，非實際介面截圖。",
      "imageAlt": "產品功能示意插畫",
      "sourceCommit": "350907b7f698f2f19783155e5827511d41f84b85",
      "id": "contract-quote",
      "name": "合約對核准報價",
      "description": "以最後核准報價為基準，核對正式合約的品項、金額、付款與交貨條件。",
      "highlight": "差異欄位可定位雙方原文，連同核准依據與人工判定保存為獨立 JSON 報告。",
      "tags": [
        "報價核對",
        "欄位比對",
        "JSON 報告"
      ],
      "features": [
        "明確指定最後核准報價與正式合約，搭配核准單號、核准人與日期保留比較依據。",
        "按品項、付款、交貨等欄位查看差異，定位雙方原頁與證據，保留低信心及不可直接比較狀態。",
        "儲存人工判定、備註與歷程，建立含文件版本、未解項與 SHA-256 的獨立 JSON 報告。"
      ],
      "scenarios": [
        "正式合約送簽前，核對品項、數量、單價與核准報價是否有落差。",
        "需回查商務條件來源或交接覆核工作時，保留證據、判定與報告版本。"
      ],
      "steps": [
        "依 README 啟動本機服務並示範登入，進入「合約對核准報價」。",
        "分別上傳最後核准報價及正式合約，填入核准依據後開始分析。",
        "從差異表查看原文證據並逐項判定，保存 JSON 報告，核對未解項與檔案雜湊。"
      ],
      "notes": "目前為私有專案的本機示範版本，以本機 OCR 與規則解析，未接入 LLM。未填核准單號時顯示「基準未確認」；保存報告不等於覆核完成，也不代表系統代為核准合約。",
      "gallery": [
        {
          "image": "products/sources/contract-quote-screenshot.png",
          "caption": "Repo 實際品項差異表與原文證據畫面；使用合成測試文件，非真實客戶資料。"
        }
      ],
      "order": 8,
      "image": "products/contract-quote.png"
    }
  ]
};
