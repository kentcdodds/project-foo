import registerState from 'registerState'
import stateUtils from 'utils/stateUtils'

import fssDraftListDirective from './components/fss-draft-list'

export default registerState({
  url: '/drafts',
  template: `
    <fss-draft-list drafts="vm.drafts"></fss-draft-list>
    <ui-view></ui-view>
  `,
  data: {
    dependencies: [
      fssDraftListDirective,
    ],
  },
  resolve: {
    // this the "params" talked about here would include
    // the user. So the resolveResourceWithParams function
    // should return a function which makes an $http call
    // to something like /users/:userId/drafts/
    // where :userId comes from the $stateParams
    drafts: stateUtils.resolveResourceWithParams('drafts'),
  },
})



