```
.
├── TREE.md
└── app
    ├── index.js
    ├── shared
    │   ├── directives
    │   ├── filters
    │   ├── services
    │   └── utils
    │       ├── stateUtils
    │       │   ├── index.js
    │       │   ├── stateUtils.js
    │       │   └── stateUtils.test.js
    │       └── translations
    │           ├── index.js
    │           ├── translations.js
    │           └── translations.test.js
    └── states
        ├── home
        │   ├── children
        │   │   └── users
        │   │       ├── children
        │   │       │   └── user
        │   │       │       ├── children
        │   │       │       │   ├── drafts
        │   │       │       │   │   ├── children
        │   │       │       │   │   │   ├── edit
        │   │       │       │   │   │   │   └── components
        │   │       │       │   │   │   └── preview
        │   │       │       │   │   │       ├── components
        │   │       │       │   │   │       │   └── fss-draft-preview
        │   │       │       │   │   │       │       ├── fss-draft-preview.css
        │   │       │       │   │   │       │       ├── fss-draft-preview.js
        │   │       │       │   │   │       │       ├── fss-draft-preview.test.js
        │   │       │       │   │   │       │       ├── i18n
        │   │       │       │   │   │       │       │   ├── en.hson
        │   │       │       │   │   │       │       │   ├── fr.hson
        │   │       │       │   │   │       │       │   └── index.js
        │   │       │       │   │   │       │       └── index.js
        │   │       │       │   │   │       └── index.js
        │   │       │       │   │   ├── index.js
        │   │       │       │   │   └── shared
        │   │       │       │   ├── posts
        │   │       │       │   │   ├── children
        │   │       │       │   │   │   └── post
        │   │       │       │   │   │       └── components
        │   │       │       │   │   │           └── directives
        │   │       │       │   │   └── components
        │   │       │       │   │       ├── directives
        │   │       │       │   │       └── services
        │   │       │       │   ├── profile
        │   │       │       │   │   └── components
        │   │       │       │   │       └── directives
        │   │       │       │   └── settings
        │   │       │       │       └── components
        │   │       │       │           └── directives
        │   │       │       ├── components
        │   │       │       │   └── directives
        │   │       │       └── shared
        │   │       │           ├── directives
        │   │       │           │   └── fss-post-title
        │   │       │           │       ├── fss-post-title.css
        │   │       │           │       ├── fss-post-title.js
        │   │       │           │       ├── fss-post-title.test.js
        │   │       │           │       └── index.js
        │   │       │           ├── filters
        │   │       │           └── services
        │   │       └── components
        │   │           └── directives
        │   └── components
        │       ├── directives
        │       └── services
        └── login
            └── components
```

52 directories, 21 files
