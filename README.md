# Vue 3 + Vite - Unnotech Frontend Engineer 徵才小專案

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/index.png?raw=true">

## 如何執行
`npm run start`

## 專案架構
- 使用 Vue3 + Composition Api

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/lib.png?raw=true" width="500px">

- main.js 為網頁進入點，全站共用的 Library 在此引入。

- 檔案切分為 views, router, component, style
> views 為網頁將會呈現的頁面。分為 BookList(書籍列表) , BookDetail(書籍詳細頁面), BookAdd(新增頁面)。

> router 為 Vue Router 4, 設定全站的路由及命名。

> component 切分為 Api, global。

> Api 獨立一隻檔案作為管理，利用 axios 去管理 api

1. 透過 axios.create 去創造一個實體，再利用變數去接這個實體。

2. 在透過這個變數的實體去做get或是post，然後在 export 出去給外面的 js 去 import 。

> global 拆分存放上方 Nav。

> style 使用 Tailwind, 並使用 Tailwind plugin: line-clamp, forms。

## Book List

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/index.png?raw=true" width="500px">

- 進入頁面後直接載入 Api 看到畫面。

## Book Detail

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/read.png?raw=true" width="500px">
- Detail 頁面替換另一個 Nav, 由於是查看詳細頁面, 一進入時設定為 readonly。

> 使用 props 將 Detail 頁面上的 Data 傳入至上方 Nav, 以便讀取到 Title。

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/put.png?raw=true" width="500px">
- 點擊右上方的編輯 icon, 可開啟修改畫面, 修改完成後在 patch 至資料庫做更新。

> Detail 頁面預先設定 readonly, Nav 上使用 emit 將 readonly 改為 false 開啟編輯畫面。
`const readonly = ref(true);` 

- 左上方 Back 回到上一頁。

`@:click="$router.back"`

## Book Add

<img src="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/add.png?raw=true" width="500px">
<img src ="https://github.com/jssanji03/vue-project/blob/master/public/tempPic/put-2.png?raw=true" width="500px">


- 使用 vee-validate 做驗證有沒有值, 有值就跳出 Success！ 並轉跳頁面至 list。

## Library

`"tailwindcss": "^3.2.4"`

> 可以更靈活的客製樣式, 需要用到的 plugin 在掛載, 有用到的 css 才會被編譯, 避免檔案過大。

`"vee-validate": "^4.7.4"`

> 有多國語系, 可自訂規則, 網路上最多人使用之套件。

`"axios": "^1.3.2"`

> 支援Promise API, 可攔截請求與回應, 轉換請求與回應的數據

## 專案過程中之難點

由於使用框架的時間還並不長久，先前只寫過一些 Vue2 Vue3, 利用此次小專案機會, 使用工具書以及網路查詢前輩的寫法,
自己練習 Vue3 + Composition Api, 由於不熟悉因此花了比較久的時間, 有些像是 Nav、Button 應該可以再製作成 Components。

tailwind 也是不久前才自學有接觸, 搭配 Vue 安裝時,似乎因為 node.js 版本問題, 因此環境安裝了好多次ＸＤ

程式碼部分, 可以有更好的寫法, 以及邏輯需要再更加明確, 由於不夠熟悉先以畫面呈現為主, 後續再來持續補強。
感謝經由貴公司的此次機會, 了解自己該加強的部分, 除了需要前輩的指點外, 也會持續練習尋找解決方法增進自己。

謝謝指教！



