# dev.to-Blog-Component

This component fetches article data from dev.to, and without having to rebuild the site, shows all current and updated articles of a user.

This component was made for Gatsby, however with a few tweaks it could be used with most any framework.

If you are using with Gatsby, make sure to copy the gatsby-node.js, this gets run at build time and allows @reach/router to do make the pages using /blog/*.

Due to CDN caching, you will likely see a delay when making a post on dev.to. You can check your response header to see the age of your current fetched response, each response will not cache longer than 24 hours.
