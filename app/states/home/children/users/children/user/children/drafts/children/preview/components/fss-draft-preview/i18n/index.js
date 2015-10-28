export default {
  // yes, here we are requiring files using CommonJS modules
  // but wait... what's that `.hson` extension???
  // you'll thank me later: http://npm.im/hanson
  // we can teach webpack how to convert this to
  // a JavaScript object we'll use for translations
  en: require('./en.hson'),
  fr: require('./fr.hson'),
}

