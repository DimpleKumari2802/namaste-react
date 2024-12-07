A collection of notes and resources from the "Namaste React" series to help learn and practice React.js.

#Parcel
- Created Dev Build
- Then creates Local Server
- Host our application to the server
- Automatically refersing the page also - Known as HMR
- HMR -> Hot Module Replacement
- Parcel keep a track of all the files which we are updating
    - How Parcel does that?
        - Parcel uses File Watching Algorithm (written in C++) 
        - File Watching Algorithm keeps track of all the files which are getting updated in real time and it then tells the server to reload

- Everytime we save our changes build is done
    - Sometimes we notice that build time gets reduced, this is because Parcel is also Caching the files to give faster Build
    - Parcel does the Caching in the .parcel-cache folder

- Image Optimization
- When we do  Production build - Parcel will minify all the files, It buldle all files - Bundler
- Also compress the files ( removing whitespaces, minifying the code)
- Consistent Hashing
- Code Splitting
    When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!

    Code splitting is also supported for CSS. If you import CSS from your JavaScript, a sibling CSS bundle will be produced and loaded in parallel with the JS bundle.

- Differential Bundling
    - When our app is hosted, our app can be opened inside chrome, mobilePohone, Edge, Firefox. So Parcel take cares of all that, to makesure our app works well accross all the platforms and also supports older Browsers by doing Differential Bundling.

- Diagnostic
- Error Handling
    - Better error Suggestions
- Host our app in to HTTPs
- Tree Shaking
    remove unused code
- Different build for Dev and Production

