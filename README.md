## 基于 Vue 的 numpicker

## Install
```shell
npm i wc-numpicker --save-dev

```

## Usage
```javascript
import wcNumpicker from 'wc-numpicker'
import 'wc-numpicker/style.css'
Vue.use(wcNumpicker);
```

```html
<wc-numpicker v-model="num" :max="10" :min="1"/>
```


## Config
```shell
v-model="check"	获取当前 checkbox 的状态, Boolean
max	设置当前 picker 允许的最大值
min	设置当前 picker 允许的最小值
```
