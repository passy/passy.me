Known Issues
============

* Page content is fetched twice, because I want the page to load w/o JS, but
  Angular loads it on top. Possible solutions: Ditch ng-view completely as it
  doesn't really add that much; implement a smarter ng-view that only replaces
  content on demand.

* Menu doesn't expand. Possible solution: Getting my lazy ass up and implement
  it.
