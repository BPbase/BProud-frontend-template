# 規範

不使用高深的技巧、直覺的寫法、減少依賴為最高原則，  
達成方便維護、交接、提升容錯。

# 檔案、管理與 Cascade Layers

為了降低依賴 SASS/SCSS 且只支援於主流現代瀏覽器，使用純 CSS 編寫，  
搭配 CSS Variables 與 使用巢狀寫法方便維護。

使用 Cascade Layers 輔助權重區別。  
@layer reset, ui, vendor, variations, utilities, print;  
基本概念為絕對不能被覆蓋掉的樣式放後面圖層。

一般被視為 global 的 css，請寫入 ui.css 或 @import 到 ui layer。

Component 一般來說是不應該被更動且獨立的，所以 Component 的 css 應該被放入到 /components 自己的檔案或資料夾裡，非必要請不要建立一個 components 的＠layer。  
除非是打包時，Component 裡的 CSS 沒有應用到，這時才把它搬到 ＠layer(components)。

另外請注意寫在 Component 的 CSS Variables 需有預設值，以防沒有設定 CSS Variables，  
也就是說，Component 的 CSS Variables 預設值，避免再使用 CSS Variables 代替，才能達到獨立性以及重用性。  
例如：請寫 color: var(--color, red); 不要寫 color: var(--color, var(--color-default));

如果需要修改第三方原始檔，則請複製原始碼至 vendor.css 裡修改，例如改變第三方的 font-size ，從 px 改成相對單位，以符合臺灣無障礙規定。如果只是想引入第三方 css，請建立一個檔案並 @import 放入 vendor layer 中，以便以圖層方式管理 css。

variations 則是撰寫覆蓋第三方的 css，例如您想改變一個第三方的樣式。

utilities 為最小單位，基本都只有一個 css 屬性，因為其絕對不能再被覆蓋的特性，所以排在最後面，優先權較高。

print 因為是獨立且不可被覆蓋，所以也是放後面。

# 顏色

### oklch(l c h)

基底顏色使用 --color-XXX 命名，且內容只寫 l c h 三個數字。  
應用的地方，則命名 --容器或功能-屬性 命名，盡量白話容易理解，例如 --table-th-bg。  
在 .table 時就可以寫css 就應用成

```
table {
  th {
    background-color: oklch(var(--table-th-bg));
  }
}
```

之後想再改變透明度： oklch(var(--table-th-bg) / 0.5);  
如果之後支援，則可以 oklch(from var(--table-th-bg) l c h);  
也就是基於 --table-th-bg 三個數字，取代成 l c h 三個數字，不想被取代的，就寫原來的字母。
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch

```
oklch(from var(--table-th-bg) l c h);
oklch(from var(--table-th-bg) 0.2 0.5 h);  /* h 不變 */
```

# CSS 註解 Style

    /*************************
      區塊說明
    *************************/
    空一行
    .selector {
      .selector {
      }
      .selector {
      }
    }
    空一行
    .selector {
      .selector {
      }
      .selector {
      }
    }
    空一行
    空一行
    /*************************
      區塊說明
    *************************/
    空一行
    ...

# 特別注意

因為 @media 不能使用 CSS Variables，故 breakpoint 請至 variables.css 裡參照使用真正的數值。  
通常 breakpoint 也不太會變，所以可以就先這樣處理即可。
