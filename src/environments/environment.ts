// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase :  {
        apiKey: 'AIzaSyB0y9ajYpMuLnUj3rUO7h93azc_UmBY1YM',
        authDomain: 'my-blog-fec10.firebaseapp.com',
        databaseURL: 'https://my-blog-fec10.firebaseio.com',
        projectId: 'my-blog-fec10',
        storageBucket: 'my-blog-fec10.appspot.com',
        messagingSenderId: '89847446687'
    }
};
