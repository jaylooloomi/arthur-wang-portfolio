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
    }
  ]
};
