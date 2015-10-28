import registerState from 'registerState'
import stateUtils from 'utils/stateUtils'
import fssUnicornsModule from 'services/fssUnicorns'

import fssDraftPreviewDirective from './components/fss-draft-preview'

export default registerState({
  url: '/preview/:draftId',
  template: `
    <fss-draft-preview draft="vm.draft" class="vm.fssUnicorns.className">
    </fss-draft-preview>
  `,
  // notice the lack of a controller the registerState abstraction
  // will create one for you and add the resolves and data.inject
  // properties automatically. Then you can reference these in the
  // (tiny) template.
  data: {
    dependencies: [
      // registerState will create an angular module for you.
      // Place dependencies in here that you want added
      // to that module
      fssDraftPreviewDirective,
      fssUnicornsModule,
    ],
    // because we don't need to create a controller ourselves
    // but still need to ocassionally access services (not resolves)
    // registerState will take this and add it to our controller
    // instance so we can reference it in our (tiny) template
    inject: ['fssUnicorns']
  },
  resolve: {
    // this is a really common use-case
    // (resolve an ID from the URL into an object)
    // good to create an abstraction for doing this
    draft: stateUtils.resolveParam('draftId'),
  },
})



