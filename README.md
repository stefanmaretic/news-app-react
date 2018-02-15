A React & Redux project intended to work somewhat like twitter.

The app is using news api (that's it's name...).

The user can search for topics (keywords) of a given subject and
gets returned the articles that should be most relevant to that
given keyword.

You can delete single articles.

Every search gets saved to tabs and the user can switch between them.
Also you can delete tabs with searches.

If the user leaves the page or refreshes the data will be persisted.

The state is handled by Redux, and libraries used are redux-thunk, redux-persist.