import registerState from 'registerState'
import stateUtils from 'utils/stateUtils'
import children from './children'


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
    // the children will be registered states
    // the registerState abstraction will take
    // those states and append this state's `name`
    // to their own name. This in essence makes
    // the filesystem and the URL map perfectly
    children,
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



