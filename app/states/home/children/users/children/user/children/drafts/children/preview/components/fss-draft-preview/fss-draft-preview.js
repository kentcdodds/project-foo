// import is converted by babel into CommonJS
// from there Webpack takes over and resolves
// these dependencies...

// angular's easy. That'd be in our node_modules
import angular from 'angular'

// `utils/translations` is a little more interesting, we can
// tell Webpack to treat the `shared` directories
// like they're `node_modules` directories, so CommonJS
// require statements (what this will be transpiled into)
// will be resolved to the closest `utils/translations`
// module in either the `shared` or `node_modules` directory
// (in this case, it'll be a `shared` directory)
// doing this means we don't have to do crazy relative
// path stuff for things that are shared accross the
// application. #solid
import translations from 'utils/translations'

// same goes for other shared dependencies
import fssPostTitleDirective from 'directives/fss-post-title'

// now this is interesting... importing a css file?!
import styles from './fss-draft-preview.css'

// this one's just a normal relative require
import i18n from './i18n'
const translate = translations(i18n)

const directiveName = 'fssDraftPreview'

export default directiveName

angular
  .module(directiveName, [
    fssPostTitleDirective,
  ])
  .directive(directiveName, fssDraftPreview)

function fssDraftPreview() {
  return {
    restrict: 'E',
    template: `
      <div>
        <div class="${styles.greeting}">{{vm.greeting}}</div>
        <fss-post-title title="vm.draft.title"></fss-post-title>
      </div>
    `,
    scope: {
      draft: '=',
    },
    controllerAs: 'vm',
    bindToController: true,
    controller: FssDraftPreviewCtrl,
  }

  // @ngInject
  function FssDraftPreviewCtrl() {
    const vm = this

    vm.greeting = translate('hello', {name: vm.draft.authorName})
  }
}

// ok ok ok... I know what some of you are thinking
// But this is actually very powerful
// First off though, let's address the fear you're having.
// I promise that there is 0 chance you'll be shipping these
// tests off to production as long as you run your build with
// NODE_ENV=production. When that's the case, webpack knows
// to not resolve this dependency and the file is not loaded
// and this block of code is actually eliminated.
//
// When running your tests, you'll set NODE_ENV=test and webpack
// will resolve this dependency and pass along the angular module name
// which the test will use to bootstrap. It's very amazingly awesome
/* istanbul ignore next */
if (process.env.NODE_ENV === 'test') {
  require('./fss-draft-preview.test')(directiveName)
}

