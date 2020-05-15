# Electron.js 程式範例集

本資料夾共有十幾個範例程式，由淺入深排列！

## 使用方式

1. 請先安裝好 electron.js 的執行環境。
	* 先安裝 node.js -- https://nodejs.org/en/
	* npm install -g electron
2. 想要執行哪個專案，就打下列指令
	* 指令： electron 《專案路徑》
	* 範例： electron 01-hello/a
3. 接著請點選該專案路徑，然後閱讀程式碼。
	* 範例： [01-hello/a](01-hello/a)

## 正確方式

```
PS D:\ccc\course\wp\code\10-electron> npm i -D electron@latest
npm WARN registry Using stale data from https://registry.npmjs.org/ because the host is inaccessible -- are you offline?
npm WARN registry Using stale data from https://registry.npmjs.org/ due to a request error during revalidation.

> core-js@3.6.5 postinstall D:\ccc\course\wp\code\10-electron\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> electron@8.2.3 postinstall D:\ccc\course\wp\code\10-electron\node_modules\electron
> node install.js

npm WARN saveError ENOENT: no such file or directory, open 'D:\ccc\course\wp\code\10-electron\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'D:\ccc\course\wp\code\10-electron\package.json'
npm WARN 10-electron No description
npm WARN 10-electron No repository field.
npm WARN 10-electron No README data
npm WARN 10-electron No license field.

+ electron@8.2.3
added 87 packages from 98 contributors and audited 104 packages in 80.77s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## 錯誤方式

安裝過程

```
PS D:\ccc> npm install -g electron   
C:\Users\user\AppData\Roaming\npm\electron -> C:\Users\user\AppData\Roaming\npm\node_modules\electron\cli.js

> core-js@3.6.5 postinstall C:\Users\user\AppData\Roaming\npm\node_modules\electron\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> electron@8.2.3 postinstall C:\Users\user\AppData\Roaming\npm\node_modules\electron
> node install.js

+ electron@8.2.3
added 87 packages from 98 contributors in 49.183s
```

然後就失敗了

```
PS D:\ccc\course\wp\code\10-electron\01-hello> electron a
electron : 因為這個系統上已停用指令碼執行，所以無法載入 C:\Users\user\AppData\Roaming\npm\electron.ps1 檔案。如需詳細資訊，請參閱 about_Exec
ution_Policies，網址為 https:/go.microsoft.com/fwlink/?LinkID=135170。  
位於 線路:1 字元:1
+ electron a
+ ~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```


## 參考程式

* https://electron.atom.io/
* https://electron-api-demos.githubapp.com/updates/ElectronAPIDemosSetup.exe
* https://github.com/electron/electron-quick-start
* https://github.com/electron/simple-samples
* https://github.com/electron/electron-api-demos
* https://github.com/hokein/electron-sample-apps
* https://github.com/sindresorhus/awesome-electron

