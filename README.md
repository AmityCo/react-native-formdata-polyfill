# React native's formData polyfill.

## What is it?

When using with axios, react-native lacks of necessary `FormData.prototype.getParts` function.

## How to use it?
 
```
npm install @amityco/react-native-formdata-polyfill
or
yarn add @amityco/react-native-formdata-polyfill
```

```javascript
3. import polyfill from "@amityco/react-native-formdata-polyfill"
5. polyfill()
```

That's all!
