---
title: Changelog
hide_table_of_contents: true
---
### Version 445 - 04/08/2021
- event manager: dialogs now work again in latest Chrome version (v92)
- web app: account activation links never expire

### Version 444 - 02/07/2021
- renderer: removed "powered by seats.io" logo on watermarked charts (i.e. free accounts)

### Version 443 - 01/07/2021
- API/renderer: social distancing ruleset that disables seats in front and behind now works properly on curved or segmented rows

### Version 442 - 28/06/2021
- API: improved performance of booking calls when the event has a social distancing ruleset that disables seats on nearby rows
- webapp: showing object labels in chart preview now works properly on charts with tables 

### Version 441 - 23/06/2021
- renderer/event manager: multi-select now works on mobile

### Version 440 - 21/06/2021
- API: improved performance of booking calls when the event has a social distancing ruleset that disables seats to the sides

### Version 439 - 14/06/2021
- designer: bug fix: category color picker is shown on top of background image control, instead of underneath
- renderer: bug fix: rounded rectangles with a very large corner radius are now rendered properly

### Version 438 - 10/06/2021
- API/renderer: on rectangular tables with seats on just one side, the first and last seats are not considered neighbours for social distancing or best available purposes
- designer: bug fix: it's now possible to choose a shape type on Firefox 

### Version 437 - 09/06/2021
- event manager: bug fix: objects could not be selected on mobile

### Version 436 - 07/06/2021
- renderer: bug fix: when invoking `chart.listSelectedObjects()`, `selectedTicketType` now contains the proper ticket type for GAs (instead of always the last selected one)

### Version 435 - 03/06/2021
- renderer: added [report by selectability](https://docs.seats.io/docs/renderer/chart-properties-chartgetreportbyselectability)
- event manager: error messages can now get translated

### Version 434 - 02/06/2021
- API: added `ids` property on reports, which contains the technical labels of the object, its parent row or table, and its section.
- API: bug fix: `labels` property in reports now contains the displayed section label instead of the technical label
- renderer: bug fix: when the 'session expired' dialog is shown, resizing the chart does not cause the dialog to close

### Version 433 - 26/05/2021
- renderer: bug fix: `tooltipInfo` wasn't formatting text properly (e.g. bold or italic)

### Version 432 - 25/05/2021
- renderer: bug fix: category filter is visible again on small screens

### Version 431 - 19/05/2021
- renderer: added onFilteredCategoriesChanged callback
- renderer: bug fix: on mobile, ticket buyers were not able to select seats marked as orphan

### Version 430 - 17/05/2021
- API: new accounts have a rate limit of 100 concurrent requests: https://docs.seats.io/docs/api/rate-limit
- webapp: inactive workspaces are shown separately from the active ones
- renderer: bug fix: `chart.resetView()` now zooms all the way out on multi-floor charts

### Version 429 - 12/05/2021
- designer: bug fix: category color picker was shown behind the category list when there were many categories
- event manager: tweaked tooltip for `manageChannels` mode

### Version 428 - 11/05/2021
- API: added calls to fetch active or inactive workspaces

### Version 427 - 07/05/2021
- designer: uploaded images are now shrunk to 2048x2048 (if they were bigger than that)
- event manager: bug fix: number of places assigned to channel doesn't include deleted objects 

### Version 426 - 06/05/2021
- designer: added "fixed occupancy" and "variable occupancy" areas: they have a capacity (just like a general admission area), but can be booked by a single ticket buyer.
- API: improved performance of calls that change object status
- renderer: fixed bug in tooltip on `leaf` preset

### Version 425 - 04/05/2021
- renderer: new and improved tooltip layout
- API: hold token IDs are now much shorter, to be able to store them more efficiently. This is enabled by default for new signups. If you're an existing customer, we recommend you enable this setting as well: https://app.seats.io/company-settings
- event manager now shows the number of places assigned to a channel

### Version 424 - 26/04/2021
- API: event and chart reports contain the distance to the focal point for each object 

### Version 423 - 23/04/2021
- renderer: add support for Nunito Sans font
- API: added chart and event reports by object type

### Version 422 - 21/04/2021
- API: improved performance of chart and event reporting calls (especially for large charts)
- designer: improved row labeling UI

### Version 421 - 15/04/2021
- API: improved performance of calls that book multiple GA places
- API: improved performance of reporting call, when many places in a GA area are held

### Version 420 - 07/04/2021
- renderer: added `object.isInChannel()` method
 
### Version 419 - 02/04/2021
- renderer: `numberOfPlacesToSelect` now works properly for GAs that are bookable as a whole
- renderer: no more console warning when using the category filter
- API: best available algorithm selects multiple blocks of seats, if the event has a fixed social distancing ruleset, and a single block doesn't fit the request. E.g. if 4 best available seats are requested, the algorithm now finds 2 blocks of 2 seats.

### Version 418 - 30/03/2021
- API: performance enhancements when changing object status for events with many seats not for sale, or many seats in channels
- API: chart reports expose `bookAsAWhole` flag for tables
- renderer: exposed `bookAsAWhole` property on GAs

### Version 417 - 30/03/2021
- renderer: chart functions such as `chart.findObject` now return a promise, so there's no need to pass in callbacks 
- renderer: calling `changeConfig` on an invisible chart in Firefox doesn't lead to an error anymore
- event manager: when managing object statuses, seats disabled by social distancing within a channel are shown properly

### Version 416 - 24/03/2021
- renderer: big charts (1000s of places) with many booked seats load faster
- renderer: `maxSelectedObjects` per ticket type now plays nicely with GAs that are bookable as a whole

### Version 415 - 19/03/2021
- renderer: performance improvements for large events with social distancing enabled
- event manager: `objectColor()` can now be passed in
- website: added media kit

### Version 414 - 12/03/2021
- new signups can choose the region in which they would like to store their data. Currently supported regions are Europe, North America, South America and Oceania. 

### Version 413 - 11/03/2021
- designer: bug fix: background image was counted twice when calculating total image size

### Version 412 - 04/03/2021
- renderer: new parameter `showSectionContents`. Can be set to `auto`, `always` and `onlyAfterZoom`
- designer: tweaked reference chart calibration wizard
- webapp: bug fix: on Windows, some dropdowns (e.g. the one to select a social distancing ruleset) contained invisible text.

### Version 411 - 20/02/2021
- renderer: `chart.selectObjects()` and `chart.deselectObjects()` now play nice with group selection. E.g. if you pass in `numberOfPlacesToSelect: 5` to the chart, `chart.selectObjects(['A-1'])` will select 5 seats.

### Version 410 - 12/02/2021
- renderer: `maxSelectedObjects` now supports a combination of categories/ticket types AND a max total
- API: best available algorithm prefers selecting a single bookable GA instead of multiple
- web app: chart preview page now contains checkboxes to show row, seat and other object labels

### Version 409 - 10/02/2021
- designer: bug fix: smoothening a selection of segmented and straight rows resulted in an error.
- API: bug fix: best available algorithm doesn't select partial GAs that are bookable as a whole anymore

### Version 408 - 09/02/2021
- designer: you can now set the seat count for a row. This changes the number of seats without changing the row length (in pixels).

### Version 407 - 29/01/2021
- event manager: `manageObjectStatuses` mode now supports multiple events

### Version 406 - 27/01/2021
- renderer: seat, table and booth labels now have the same size as in the designer
- API: chart and event reports now contain the `bookAsAWhole` flag for GAs

### Version 405 - 11/01/2021
- designer: row drawing tool works by click-dragging (in addition to click-move-click) 

### Version 404 - 07/01/2021
- renderer: added a subtle seat hover/highlight scale effect

### Version 403 - 06/01/2021
- renderer: new `onSessioninitialized` event gets fired when a session is started or continued ([docs](https://docs.seats.io/docs/renderer-events-onsessioninitialized)). 

### Version 402 - 04/01/2021
- API: fix for race condition, which caused the best available call to return an error 500 in some cases

### Version 401 - 29/12/2020
- designer: reference chart wizard now supports curved rows

### Version 400 - 28/12/2020
- API: added [deep summary event reports](https://docs.seats.io/docs/api-deep-summary-reports)

### Version 399 - 21/12/2020
- designer: sides of polygons can now be dragged

### Version 398 - 11/12/2020
- API: added `ignoreSocialDistancing` flag to status change calls

### Version 397 - 09/12/2020
- designer: segmented rows can be smoothened

### Version 396 - 04/12/2020
- renderer: GAs that are bookable as a whole now respect `maxSelectedObjects`

### Version 395 - 25/11/2020
- designer: new tool, to draw rows consisting of multiple segments
- renderer: added `inputDevice` parameter, to force the chart to be rendered in touch mode
- event manager: GA areas that are bookable as a whole can now be booked with one click in the event manager

### Version 394 - 23/11/2020
- renderer: bug fix: in events with a social distancing ruleset, the leftmost and rightmost seats within a category are never considered orphans. This fixes a bug, causing a companion seat to not be selectable, if it had a different category than the accessible seat next to it.
- renderer: if `maxSelectedObjects` is set per ticket type or per category on an event with a fixed ruleset, the `maxSelectedObjects` is ignored. All objects are selectable.
- designer: we now prevent drawing tables without seats, or GA areas with a capacity of 0.
- designer: added `mode` parameter, to render the designer read-only

### Version 393 - 17/11/2020
- web app: some renderer features can now be disabled or enabled from the company settings page (https://app.seats.io/company-settings). As of now: multi-select and whether to show the fullscreen button.
- renderer: charts with a legend and a custom font (configured through the `style` parameter) now always zoom in properly to a section.
- designer: outline of rows within a section takes row labels into account.

### Version 392 - 16/11/2020
- renderer: multi-select now plays nicely with social distancing
- renderer/event manager: tweaked styling of buttons

### Version 391 - 13/11/2020
- social distancing: added rule to enable or disable blocking diagonal seats on rows in front and behind. Up until now, this was enabled automagically when blocking 2 or more seats to the sides (with "disable seats in front and behind" enabled).
- renderer: improved look and feel of the category filter. Items feel more clickable now.

### Version 390 - 10/11/2020
- API: best available algorithm tries to not leave people sitting alone
- renderer: added Kurdish language support
- renderer: tweaked styling of category filter

### Version 389 - 05/11/2020
- renderer/event manager: layout fixes for right-to-left languages
- API: call that creates multiple events supports `tableBookingConfig`. `tableBookingModes` and `bookWholeTables` are now deprecated.

### Version 388 - 30/10/2020
- renderer: added `showSectionOverlayPricing` parameter. When enabled, prices are shown on top of sections
- API: chart report supports `bookWholeTables=chart`, to use the table booking settings defined on the chart
- API: calls to create or update events support a `tableBookingConfig`. `tableBookingModes` and `bookWholeTables` are now deprecated.

### Version 387 - 29/10/2020
- designer: tables can be made bookable as a whole from within the designer (so not only from within the event manager)
- renderer: improved multi-select performance when a social distancing ruleset is applied to the event

### Version 386 - 27/10/2020
- renderer: capacity is shown for GAs that are bookable as a whole
- designer: prevent creation of very tiny polygons (which are most likely drawn by accident)
- event manager: multi-select can be used when manually disabling seats for social distancing

### Version 385 - 22/10/2020
- designer/renderer: GA areas can be made "bookable as a whole", to force ticket buyers to select all places.
- renderer: new parameter `selectableObjects`, which is an array of object labels that should be selectable (even though their status is not 'free').

### Version 384 - 21/10/2020
- renderer: for new signups, objects get deselected if holding them fails
- renderer: fixed `chart.pulse()`

### Version 383 - 20/10/2020
- renderer: added support for ticket type descriptions

### Version 382 - 19/10/2020
- social distancing: new "one group per table" rule. When enabled, all non-booked seats on a table are left empty.
- event manager: admin can book seats, even if they are disabled by social distancing rules.
- renderer: when tapping on a seat that's not selectable because it would leave orphans, nearby seats that are selectable start pulsing

### Version 381 - 13/10/2020
- renderer: `channels` list accepts the special channel key `NO_CHANNEL`. If you pass in that key, objects that are not assigned to a channel become selectable.
- API: booking calls support `NO_CHANNEL` in their channels list
- renderer: `changeConfig` accepts a list of `channels`
- renderer: added `legend.hideCategoryName` flag to hide the category name in the legend (and only show pricing)
- renderer: clicking on a seat in multi-select mode selects that seat
- event manager: bug fix: number of remaining saves is properly updated in `manageForSaleConfig` mode
 
### Version 380 - 12/10/2020
- renderer: bug fix: closed multi-select menu doesn't block interactions with the chart
- API: bug fix: held seats are never considered disabled by social distancing rules, when passing in the proper hold token when booking 
- designer: bug fix: no error when curving a row with 1 seat

### Version 379 - 09/10/2020
- designer: curving tool now spreads out seats evenly on their curve

### Version 378 - 07/10/2020
- social distancing: new rule that limits the maximum occupancy for a venue (e.g. 'at most 50 people' or 'venue at most 30% filled'.

### Version 377 - 06/10/2020
- event manager fires `onSubmitSucceeded` and `onSubmitFailed` events when saving
- renderer: made it clearer in tooltip when seat is left open for social distancing
- renderer/event manager: holding down shift switches to multi-select mode (when `multiSelectEnabled: true`)

### Version 376 - 03/10/2020
- added event report byChannel

### Version 375 - 30/09/2020
- chart manager: improved performance of manually disabling seats
- renderer: clearer object tooltip message when max selected objects has been reached

### Version 374 - 29/09/2020
- chart manager: added button to duplicate a social distancing ruleset
- renderer: no hand cursor when hovering unselectable objects

### Version 373 - 23/09/2020
- renderer/API: even when "disable seats front and behind" is set as a social distancing rule, groups can now sit on adjacent rows. This was not possible before.

### Version 372 - 21/09/2020
- chart manager: social distancing ruleset key is now shown in the list of rulesets

### Version 371 - 18/09/2020
- designer: seats and booths now support a displayed label
- renderer: fixed SecurityError that was thrown in Android WebView when DOM storage is not enabled

### Version 370 - 17/09/2020
- renderer: improved Estonian translations

### Version 369 - 17/09/2020
- designer: various performance improvements
- api: we now allow `null` as `socialDistancingRulesetKey` when updating an event

### Version 368 - 16/09/2020
- designer: increased default row spacing
- designer: tables and rows now support a displayed label
- designer: Safari bug fix: the "take the 60 second tour" dialog is only shown the first time you open the designer

### Version 367 - 15/09/2020
- renderer: moved minimap from top right to bottom right
- event manager: fixed dark mode styling of channels tool
- renderer: number of remaining places for GA is shown on mobile (if `showAvailability: true`)

### Version 366 - 02/09/2020
- created TypeScript definitions for renderer, designer, event manager and chart manager: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio
- renderer: bug fix: socially distanced seats are shown properly after status changes

### Version 365 - 01/09/2020
- social distancing: you can now choose between fixed and rule-based group layout. Fixed group layout means that you manually indicate which seats are left empty. When the ticket buyer clicks on a seat, all adjacent seats are selected.

### Version 364 - 31/08/2020
- event manager now supports the `fitTo` parameter
- designer: bug fix: clicking to place the focal point didn't always work

### Version 363 - 19/08/2020
- event manager & renderer: new selection tools for multiple seat selection. Enabled by default on the event manager, only enabled on renderer if `multiSelectEnabled: true`

### Version 362 - 17/08/2020
- renderer: bug fix: social distancing + hiding full rows using `isObjectVisible` on a chart containing sections without a category would break rendering.  

### Version 361 - 14/08/2020
- event manager: bug fix: Objects not marked on Rulesets Editor enable/disable modes if some of the marked objects are deleted/renamed

### Version 360 - 12/08/2020
- event manager: better help text, indicating what "Manually enable/disable seats" actually does
- renderer: bugfix: CategoryFilter legend menu no longer clickable when hidden

### Version 359 - 29/07/2020
- API: best available call now supports ticket types
- renderer: fixed `Maximum call stack size exceeded` error that occurred on some charts with social distancing enabled

### Version 358 - 28/07/2020
- renderer: added `object.inSelectableChannel` property: https://docs.seats.io/docs/renderer-object-properties-inselectablechannel

### Version 357 - 27/07/2020
- API: call that changes object statuses in batch (https://docs.seats.io/docs/api-change-object-status-in-batch) now supports channel keys (and `ignoreChannels`)
- web app: it's now possible to change the default workspace
- designer: bug fix: round tables can now be placed on top of an image

### Version 356 - 24/07/2020
- renderer: added padding around chart
- API: added channels support to best available calls
- API: added `ignoreChannels` flag to calls that change object status

### Version 355 - 22/07/2020
- API: bug fix: finding best available places now works properly on multi-floor charts, when not all places are on the same floor

### Version 354 - 20/07/2020
- web app: social distancing rulesets are now copied when copying a chart from one workspace to another
- event manager: bug fix: booking and releasing seats now works properly for events with channels

### Version 353 - 16/07/2020
- renderer: bug fix: channels now play nicely with sessions

### Version 352 - 14/07/2020
- designer: better indication of which rows are outside section boundaries
- renderer/API: only rows that are actually in front of or behind another row are considered when "disable seats front and behind" is enabled as a social distancing rule
- renderer: bug fix: `seat.disabledBySocialDistancingRules` now works properly with dynamic social distancing

### Version 351 - 06/07/2020
- renderer: seats to the left and to the right of a selected seat are highlighted, so it's clear they'll be kept empty for social distancing
- web app: company admins can deactivate (and activate) workspaces

### Version 350 - 03/07/2020
- API / web app: when copying a chart, social distancing rulesets are copied as well 

### Version 349 - 02/07/2020
- web app: added button to regenerate the admin key for a company

### Version 348 - 01/07/2020
- event manager / chart manager: added French translations
- designer: removed "disabled by social distancing rules" checkbox for seats. Disabling seats should be done through the chart manager instead of through the designer. 

### Version 347 - 30/06/2020
- renderer - social distancing algorithm: the number of seats that get disabled on rows in front and behind is now dependent on the number of seats that are disabled to the sides. 

### Version 346 - 22/06/2020
- API: new event report `bySelectability`: https://docs.seats.io/docs/api-summary-reports#summary-report-by-selectability
- API: added `isDisabledBySocialDistancing` and `isSelectable` properties to objects in the event reports

### Version 345 - 18/06/2020
- released dynamic social distancing feature: http://support.seats.io/en/articles/4173258-creating-and-applying-social-distancing-rules

### Version 344 - 06/05/2020
- designer: seats can be disabled because of social distancing rules
- designer: increased maximum distance between seats and rows

### Version 343 - 27/04/2020
- API: added call to regenerate the secret key of a workspace

### Version 342 - 06/04/2020
- renderer: preview image is shown while loading the chart

### Version 341 - 27/03/2020
- renderer: selected objects are indicated more clearly on multi-floor charts
- renderer: bug fix: start over button was too close to the session expired dialog
- renderer: `showPricing: false` now works for interactive sections

### Version 340 - 26/03/2020
- event manager: it's now allowed to pass in `showFullScreenButton`, `onFullScreenOpened` and `onFullScreenClosed`
- web app: users can change their e-mail address

### Version 339 - 25/03/2020
- API bugfix: fix potential deadlock in call that changes object statuses in batch
- designer: category name automatically gets focus when creating a new category
- renderer: show accessible, companion seat and restricted view icons on non-bookable table seats 
- renderer and Event Manager: performance improvements when mult-selecting seats

### Version 338 - 25/03/2020
- web app: status changes list now shows the order ID.

### Version 337 - 23/03/2020
- renderer: exposed accessible, restrictedView, companionSeat, displayObjectType and viewFromSeatUrl properties on objects that are available in callbacks 
- designer: Hotkeys to switch to a floor no longer interfere with tab switching in Chrome

### Version 336 - 20/03/2020
- renderer: fixed visual glitch with category filter color samples on Safari
- renderer: improved performance by caching colors smarter 
- designer: when creating categories, the name input field gets focus automatically to prevent hotkey presses
- event manager: alwaysShowSectionContents is on by default for all Event Manager modes
- API: best available seat algorithm supports mult-floor seating charts now

### Version 335 - 17/03/2020
- designer: new help menu to show hotkey overview and restart the intial tutorial
- designer bugfix: Using Cut (⌘X) on rows no longer leaves labels behind

### Version 334 - 13/03/2020
- designer: improved seat labelling tool. When multiple rows are selected, applying a direction to the seat labelling works in a consistent way.

### Version 333 - 10/03/2020
- designer: added hand tool, to easily navigate within a chart. Especially useful if you don't have a Trackpad.
- designer: when adding text, you can start typing immediately
- renderer: bug fix: navigation within the minimap was broken
- renderer: smoother panning and zooming on large charts 

### Version 332 - 06/03/2020
- renderer: bug fix: no more NS_ERROR_FAILURE when rendering charts in a hidden container div in Firefox.
- renderer: bug fix: held seats would sometimes not get selected when rendering a chart with `session: 'manual'`

### Version 331 - 04/03/2020
- web app: company admins can change the name of a workspace from the workspace settings page

### Version 330 - 03/03/2020
- web app: company admins can now cancel pending invitations
- web app/API: renamed "main workspace" to "default workspace"
- renderer: bug fix: added scroll bar to category filter, when the chart has many categories and the chart embed is small

### Version 329 - 02/03/2020
- renderer: bug fix: when switching table booking modes, previous bookings are applied. E.g.: if a table is booked, switching to 'book by seat' still shows all seats as booked.
- renderer: bug fix: pulsing objects works properly
- API: added call to [change object statuses in batch](https://docs.seats.io/docs/api-change-object-status-in-batch)

### Version 328 - 28/02/2020
- renderer: tweaked layout of ticket type selection dialog. Price is now shown in a separate column.
- web app: default workspace is displayed on company settings page

### Version 327 - 27/02/2020
- renderer: category picker for small embeds does not show pricing anymore
- renderer: object label is shown in all modals

### Version 326 - 21/02/2020
- renderer: improved rendering speed in IE11

### Version 325 - 18/02/2020
- renderer: improved performance by doing API calls in parallel

### Version 324 - 13/02/2020
- renderer: made seats bigger, so they're more easily selectable

### Version 323 - 10/02/2020
- event manager: bug fix: marking seats as not for sale works properly on multi-floor charts

### Version 322 - 10/02/2020
- renderer: when passing in ticketListings, sections that have the same label are highlighted and selected as a whole.

### Version 321 - 07/02/2020
- designer: display image size when a single image is selected
- renderer: wait until chart is initialized and rendererd, before executing chart functions (e.g. chart.changeConfig(...)). 
- renderer: added warning for deprecated holdOnSelect configuration parameter, which has been replaced by '[session](https://docs.seats.io/docs/renderer-config-session)'
- renderer: better Danish translations

### Version 320 - 03/02/2020
- web app: company admins can change the role of team members, from admin to non-admin or vice-versa
- web app: removed subaccounts screen, since it's no longer needed. Subaccounts are replaced by users + workspaces.

### Version 319 - 30/01/2020
- web app: company admins can invite non-admins. Non-admins have access to 1 or more workspaces.
- renderer: tweaked selected objects aura, so that non-selected seats still appear to be selectable (instead of being greyed-out).

### Version 318 - 29/01/2020
- renderer: orphan seats selection validator now allows leaving a single empty seat at the end of sales, to avoid people not being able to select seats
- renderer: orphan seats selection validator can run in lenient mode, which allows single empty seats in some cases
- renderer: tweaked tooltip positioning to avoid unnecessary chart panning on mobile

### Version 317 - 28/01/2020
- renderer: places that are held through a server-side API call are selected on the chart, without having to reload the chart. Note: does not work for multi-level pricing yet.
- designer: fixed some German translations

### Version 316 - 24/01/2020
- web app: switched from subaccounts to workspaces
- API: we generate a name for a workspace when you don't pass in a name
- renderer: bug fix: panning the chart at the initial zoom level scrolls the host page on iOS13

### Version 315 - 21/01/2020
- renderer: fixed bug that caused icons to disappear near the edge of a chart

### Version 314 - 02/01/2020
- designer: made validation error and warnings easier to discern for color blind users
- renderer: increased contrast of spinner on dark backgrounds

### Version 313 - 20/12/2019
- web app: you can now invite users that already have a seats.io account to join your team

### Version 312 - 11/12/2019
- designer: you can now enter a "displayed section label" for seats, booths and tables

### Version 311 - 10/12/2019
- renderer: deprecated `holdOnSelect` parameter, replaced it by `session`
- renderer: bug fix: shape labels are now positioned correctly

### Version 310 - 09/12/2019
- renderer: tooltips are shown when tapping an object on mobile in static chart mode

### Version 309 - 06/12/2019
- designer: added tool to draw a block of intertwined rows

### Version 308 - 29/11/2019
- event manager: fixed missing texts on buttons and modals
- renderer: fixed bug that caused the chart to disappear after selecting seats and going back to the floors overview (on multifloor charts)

### Version 307 - 28/11/2019
- designer: designerKey is now deprecated when embedding the designer. Use the secretKey instead.

### Version 306 - 26/11/2019
- designer: improved performance for charts with lots of row labels or texts

### Version 305 - 25/11/2019
- renderer: tweaked shadows and size of zoom out and full screen buttons to better fit the host page

### Version 304 - 22/11/2019
- designer: leading and trailing spaces are trimmed from object labels (sections, seats, rows etc)

### Version 303 - 21/11/2019
- renderer: improved floor selection on multifloor charts

### Version 302 - 14/11/2019
- event manager: bug fix: increasing the number of booked places in GA areas works again

### Version 301 - 07/11/2019
- renderer: improved calculation of the category of sections: don't take into account categories that are completely unavailable. 

### Version 300 - 06/11/2019
- designer: bug fix: fixed redo for floor plans with visible left/right row labels

### Version 299 - 29/10/2019
- renderer: improved design of ticket type dialog, when only one ticket type is available

### Version 298 - 28/10/2019
- designer: bug fix: undoing an action on a multi-floor chart keeps the current floor active

### Version 297 - 21/10/2019
- renderer: chart fits to width (and not to height) when container div contains child elements that were not added by seats.io
- designer: bug fix: seat selection rectangle now resizes properly when zooming in or out

### Version 296 - 18/10/2019
- designer: seats can now be assigned a custom display type (e.g. stool or bench)

### Version 295 - 14/10/2019
- renderer: bug fix: number of held places in a GA area was not always passed correctly to the callbacks

### Version 294 - 11/10/2019
- renderer: bug fix: resizing a chart now works properly in all circumstances
- renderer: bug fix: on small screens, ticket types were not visible on charts with "view from your seat" images

### Version 293 - 09/10/2019
- renderer: fixed performance issue on IE11
- renderer: objects are selectable when they are as big as they needed to be before release 287
- renderer: bug fix: restored 3D effect on multi-floor charts with smoothened sections or GAs

### Version 292 - 08/10/2019
- renderer: added support for iPad OS
- renderer: bug fix: category filter was overlapping with the chart in some cases

### Version 291 - 07/10/2019
- designer: alt + scroll zooms in and out to the proper point in the designer
- renderer: bug fix: some seats had to be double-clicked before they could be selected

### Version 290 - 03/10/2019
- renderer: performance improvements smooth polygons

### Version 289 - 02/10/2019
- designer: added tool to select all objects of the same type

### Version 288 - 01/10/2019
- renderer: fixed performance issue when tapping on a seat
- designer: bug fix: redo action was not always available after undo

### Version 287 - 01/10/2019
- renderer: clicking on a chart only zooms in if nearby objects are too small to be selected

### Version 286 - 26/09/2019
- renderer: bug fix: ticket type selector now works fine on iOS 13.1
- designer: bug fix: rectangle section drawing tools works properly again
- designer: bug fix: copy-pasting polygonal GAs, sections are shapes does not leave dashed lines behind
- designer: bug fix: objects with categories with strings as key show up properly in the "chart capacity" modal

### Version 285 - 23/09/2019
- smooth polygons: sections, GA areas and shapes can be drawn using real curves. 
- designer bug fix: on long category lists, the color picker was sometimes shown behind the category list. Not any more. 
- renderer: view-from-seat images are now shown on the ticket type selector modal

### Version 284 - 16/09/2019
- event manager: added full screen button

### Version 283 - 13/09/2019
- designer/renderer: you can now design charts with multiple floors (e.g. for theatre layouts)

### Version 282 - 12/09/2019
- renderer: introduced full screen button
- renderer: `maxSelectedObjects: 0` does not allow any objects to be selected, instead of an unlimited number
- designer: added hotkey to make the reference chart visible or invisible

### Version 281 - 11/09/2019
- renderer: `resetView()` and `startNewSession()` reset the category filter to its initial state 

### Version 280 - 10/09/2019
- designer: category keys can be modified from within the designer

### Version 279 - 09/09/2019
- renderer: `onHoldTokenExpired` is fired even when the hold token expired message is disabled for the current user account

### Version 278 - 05/09/2019
- designer: table labels are taken into account when looking for duplicates
- designer: bug fix: 'straighten rows' tool never flips seat labels

### Version 277 - 02/09/2019
- Event Manager: fixed german translations
- Renderer bug fix: showing hand mouse pointer instead of arrow when hovering large sections and GA's 

### Version 276 - 02/09/2019
- renderer: fixed caching issue in IE11, causing object statuses not always being up to date

### Version 275 - 30/08/2019
- renderer: `changeConfig` accepts `pricing`
- renderer: bug fix: text that indicates how many GA places have been selected doesn't overflow the GA area any more (when that GA area is small)
- renderer: bug fix: pinch-to-zoom now works properly on iOS

### Version 274 - 26/08/2019
- API: whether a category is accessible can be set when creating or updating a chart

### Version 273 - 23/08/2019
- renderer/event manager: improved performance when alt-selecting objects

### Version 272 - 22/08/2019
- renderer/event manager: improved performance when shift-selecting objects

### Version 271 - 21/08/2019
- renderer: keep track of the 'current' section when panning a floor plan on mobile
- API: thumbnails are now actual png screenshots, not SVG approximations anymore
- renderer: hide selected objects aura while zooming in/out.
- designer bug fix: under certain conditions, *undo* would remove the reference image. Not anymore. 

### Version 270 - 20/08/2019
- API: strings are allowed as category keys, instead of just integers

### Version 269 - 19/08/2019
- API/web app: replaced SVG thumbnails by more realistic PNG thumbnails
- renderer: chart.js can be loaded by module loaders such as SystemJS

### Version 268 - 16/08/2019
- renderer: added `unavailableCategories`, `unavailableCategories` and `filteredCategories` to `changeConfig()`
- renderer: deprecated `setAvailableCategories()`, `setUnavailableCategories()` and `setFilteredCategories()`
- designer: bug fix: zooming in our out doesn't created a draft chart version (on some charts)

### Version 267 - 13/08/2019
- designer: multiple rows can be resized at once
- designer: added option to make table labels visible on rendered charts
- renderer: `zoomToSelectedObjects()` zooms in further on mobile
- renderer: bug fix: very high legend doesn't push chart out of bounds anymore

### Version 266 - 09/08/2019
- released iOS library: https://github.com/seatsio/seatsio-ios/

### Version 265 - 09/08/2019
- event manager: bug fix: confirmation button also works after the first time

### Version 264 - 06/08/2019
- renderer: bug fix: when ticket type selector contains many ticket types, a vertical scroll bar is shown
- renderer: bug fix: seats without category don't appear to be invisible when zoomed out

### Version 263 - 30/07/2019
- renderer: legend does not 'eat' vertical space on modal dialogs anymore
- designer: alignment options work better for single-seat rows  

### Version 262 - 29/07/2019
- designer: "Displayed type" now displays a list of suggestions
- renderer: Single ticket number selector is always shown in small format
- renderer: Category filter supports accessible and star-shaped categories
- designer bug fix: selecting the row tool now works instantly
- designer: preview button remains selected as long as the preview dialog is open
- renderer: tooltip no longer shows "Table" twice, which happened if the table label started with "Table ". Same for rows. 
- renderer bug fix: legend no longer breaks outside container with long category names
- renderer: row labels now properly support RTL languages 

### Version 261 - 24/07/2019
- designer: image file size no longer shown as `undefined` in inspector sheet
- renderer: alignment issues for RTL languages fixed
- designer: properly highlight images as they get selected 

### Version 260 - 19/07/2019
- designer: Don't cap reference image size anymore

### Version 259 - 19/07/2019
- designer bug fix:  consistent inspector sheet property animations
- designer bug fix: press/unpress for seats
- designer bug fix: copy-pasting seats now also takes into account companion seat and restricted view properties
- designer bug fix: create new category button is now shown below the color picker
- renderer: support for `colorScheme`, `colors`, `stylePreset` and `style`
- renderer: changed modal dialogs design slightly to be able to support styling  (e.g. ticket type selector) 

### Version 258 - 12/07/2019
- designer: embedded designer now correctly takes readOnly features into account (e.g. `categoryList`)
- renderer: modal windows (e.g. ticket type selector) do not unexpectedly move up and down on scroll anymore

### Version 257 - 11/07/2019
- designer: more intuitive category editor
- designer & renderer: reorder categories in the designer via drag & drop. Categories are shown in the legend follow that order. 
- designer bug fix: new tables now correctly show the default labels instead of red '?'
- designer bug fix: visibility flag on GA label now works consistently
- designer bug fix: visual order of objects stays the same now, even when dragging them around

### Version 256 - 08/07/2019
- renderer: number of selected places is shown inside a GA area
- renderer: bug fix: ticket quantity selector is not shown when clicking a non-selectable GA area on desktop
- renderer: bug fix: category filter didn't mark seats as 'filtered out' on all zoom levels
- renderer: bug fix: when an image is displayed on top of a section, clicking that section no longer hides the image

### Version 255 - 04/07/2019
- renderer: support for single-click multi-select
- renderer: don't automatically zoom on click, unless there is something meaningful to zoom into
- designer bug fix: floating dialog leaves dragging mode if the mouse leaves the window
- designer bug fix: preview window no longer "leaks" content over the borders
- renderer bug fix: category filter title box no longer moves after render

### Version 254 - 02/07/2019
- designer: shapes and images can be sent to back or to the front
- designer: bug fix: seat can now be marked as 'companion seat'
- event manager: added German and Spanish translations

### Version 253 - 25/06/2019
- renderer: warning is logged when `holdOnSelect` is enabled, but `holdOnSelectForGAs` is not
- renderer: bug fix: `chart.deselectCategories()` now deselects all selected GA places (in the supplied categories)
- designer: added rendering preview button
- designer: ungrouped selection tools (regular select, brush select and seat select)
- designer: bug fix: duplicate objects are now highlighted after copy-pasting
- designer: bug fix: copying booths now also copies the booth labels

### Version 252 - 17/06/2019
- renderer: on mobile, chart pans automatically when the tooltip overlaps an object
- renderer: improved view from seat on mobile
- renderer: bug fix: `maxSelectedObjects` now properly limits selection of GA areas when a category is passed in

### Version 251 - 05/06/2019
- event manager/API: we don't enforce a rate limit anymore when opening up new seats for sale - only when taking seats out of sale
- designer: bug fix: pressing delete when a table seat is selected caused an error
- designer: bug fix: clicking on the node tool when a rectangular GA area was selected caused an error

### Version 250 - 04/06/2019
- renderer: view from seat images are now shown on mobile (which was already the case on desktop)
- renderer: bug fix: unavailable GA area can not be selected on mobile
- designer: bug fix: unlabelled GA areas are now included in the total number of unlabelled objects
- designer: bug fix: object labels would sometimes be drawn on top of sections after exiting a section
- designer: various performance improvements, especially noticeable on large charts

### Version 249 - 03/06/2019
- designer: icons can be selected from a grid instead of from a dropdown
- designer: row labels are shown on the side instead of on top of the row
- renderer: if you don't assign a category to a section through the designer, the section category is derived from the category of the objects inside
- API: chart validation status can be included in the chart list 

### Version 248 - 27/05/2019
- event manager: `tooltipInfo` and `onObjectClicked` can be passed in
- designer: added icon tool
- designer: fixed error in Safari 10.1

### Version 247 - 15/05/2019
- designer/renderer: seats can be marked as companion seats
- designer: holding shift, cmd or ctrl allows adding and removing objects to/from a selection
- designer: bug fix: dotted outline did not match rotated objects
- renderer: price is not shown in tooltip if object is not selectable
- renderer: rendering a chart instead of an event works properly now

### Version 246 - 03/05/2019
- designer: increased max file size for images
- renderer: exposed status and extra data for each event that's passed in (in callbacks such as `onObjectSelected`)
- API: added `keepExtraData` flag to calls that change the object status. If set to `true`, the existing extra data doesn't get cleared

### Version 245 - 02/05/2019
- designer: view from seat images can now be defined for individual seats, instead of only for sections
- designer: when uploading an image, the file size gets optimised. If the image is higher or wider than 2048px, we shrink it
- designer: bug fix: holding shift while drawing a polygon now properly snaps to 45° angles

### Version 244 - 25/04/2019
- designer: ability to remove seats from the middle of a row
- renderer bug fix: throw proper error when something else than an array is passed in to `availableCategories` or `unavailableCategories` (e.g. null)
- renderer bug fix: no more error when a user clicks on a selected object aura
- designer bug fix: reference image is now properly shown even if there is no content
- designer bug fix: Delete/backspace key in Firefox now properly deletes selected objects
- bug fix: row labels are now properly displayed for single seat rows

### Version 243 - 23/04/2019
- renderer: the size of rendered charts is now capped to 4096px to prevent client browsers from exploding
- designer bug fix: chart name input gets saved on blur
- designer: brush select tool now works better with small rows of 1 and 2 seats

### Version 242 - 17/04/2019
- API: chart validation endpoints return a simpler json structure now
- renderer bug fix: `onObjectClicked` is fired correctly now in `static` mode
- designer and renderer bug fix: row labels are positioned correctly if the row has a curve
- designer bug fix: single-seat rows cannot be curved anymore

### Version 241 - 16/04/2019
- designer: seat labeling can now start from zero
- designer: bug fix: designer doesn't crash when opening a chart with single-seat rows that have a curve
- API: bug fix: event summary reports now return the correct number of GA places (instead of 1)

### Version 240 - 12/04/2019
- designer: added brush selection tool
- renderer:  bug fix: `objectLabel` and `objectIcon` both can be passed in again

### Version 239 - 05/04/2019
- renderer: added `categoryFilter`, so users can filter categories (price levels)
- renderer: bug fix: selecting 0 best available seats does not throw an error
- renderer: bug fix: passing in an empty array to maxSelectedObjects does not throw an error
- API: added call to validate a published or draft chart version

### Version 238 - 02/04/2019
- designer: warning when editing an object label on a published chart

### Version 237 - 29/03/2019
- renderer: fixed IndexSizeError in IE11 
- designer: visual feedback when designer fails to load (e.g. due to an invalid chart key)

### Version 236 - 25/03/2019
- renderer: no more rendering artefacts (grey lines) when hovering on object
- renderer: pinch-to-zoom via Trackpad on Mac does not zoom the host page
- event manager: allowed passing in `onObjectDeselected` callback
- API: added chart report by category key and by category label 

### Version 235 - 18/03/2019
- renderer: fixed issue on Safari/iOS that caused buttons on the host page to become disabled when swiping the chart
- renderer: `chart.setUnavailableCategories` and `chart.setAvailableCategories` don't deselect objects when their category is still available

### Version 234 - 13/03/2019
- API: fixed bug that caused simultaneous requests for best available GA places to fail

### Version 233 - 12/03/2019
- renderer: exposed parent type of seat (row vs table) in callbacks

### Version 232 - 04/03/2019
- renderer: added `chart.setAvailableCategories([...])` method and `availableCategories` parameter
- renderer: on mobile, tapping outside a tooltip closes the tooltip

### Version 231 - 28/02/2019
- renderer: created Android library: https://github.com/seatsio/seatsio-android

### Version 230 - 21/02/2019
- renderer: arrow on mobile tooltip is now always rendered correctly

### Version 229 - 15/02/2019
- renderer: zoom in and zoom out animation feels more natural
- renderer: section label doesn't disappear anymore on hover when alwaysShowSectionContents is enabled
- API: improved best available performance when many objects are marked as not for sale

### Version 228 - 13/02/2019
- renderer: improved rendering time + improved smoothness of zoom in and zoom out animations
- designer: switched to 'click-and-click' for drawing rows instead of 'click-and-drag'

### Version 227 - 06/02/2019
- renderer: confirmSelectionOnMobile can be activated when tooltipText or onObjectClicked is passed in. By default it's not activated if one of those callback is specified.
- renderer: icons within seats are rendered horizontally instead of at the angle of the row
- API: fixed bug in status changes sorting 

### Version 226 - 31/01/2019
- API: added `filter` query parameter to call that lists status changes
- API: adding `sort` query parameter to call that lists status changes
- API/renderer: best available algorithm selects seats over sections if no seats within a section could be found
- designer/renderer: for vertical rows, you can indicate if the row labels should face left or right
- designer/renderer: fixed differences in angle at which labels are drawn in the designer vs the renderer
- renderer: bug fix: 'book whole tables' now works properly for tables that have a section label
- renderer: bug fix: object borders don't fall off the screen anymore
- renderer: bug fix: on mobile, when the confirmation popup was open, it was still possible to select that seat if an other user booked that seat at the same time

### Version 225 - 21/01/2019
- API: call to change object status now returns extended information about the objects when when "expand=objects" is passed in as query parameter.
- API: call to change best available object status now returns extended information about the chosen objects

### Version 224 - 17/01/2019
- renderer: added showZoomOutButtonOnMobile parameter
- renderer: different ticket type selector is shown for GA areas, when invoking chart.selectObjects or object.select on GAs with ticket types, without passing in a ticket type

### Version 223 - 15/01/2019
- Legacy V1 API has been shut down

### Version 222 - 15/01/2019
- renderer: ticket type selection modal is shown when calling chart.selectObjects or object.select on objects with ticket types, without passing in a ticket type
- API: added call to create multiple events at once

### Version 221 - 09/01/2019
- designer: individual seats can be marked as wheelchair acessible, regardless of their category
- renderer: section category is shown in interactive section tooltip

### Version 220 - 08/01/2019
- renderer: changed styling of tooltips so they display long category names properly
- renderer: when a bookable table has at least one (previously) booked seat, it's not selectable. When a bookable seat belongs to a booked table, it's not selectable.
- renderer: we now allow passing in a ticket type label, in addition to the ticket type ID
- renderer: bug fix: best available algorithm did not select extra GA places when "clearSelection: false" was passed in
- renderer: bug fix: objectColor also applies to seats without a category
- API: bug fix: you're only allowed to release GA places you actually held.

### Version 219 - 07/01/2019
- renderer: GA areas are taken into account when requesting best available places in combination with hold on select
- renderer: object.select and object.deselect now take an optional ticket type parameter
- designer/renderer: section labels can be made invisible
- designer: previous scroll position and zoom level is restored when exiting a section
- designer: added flag to open the latest version of a chart (published or draft) when embedding the chart designer
- designer: bug fix: 'show labels' setting is applied when opening a chart
- API: bug fix: in some cases, the label for a booked objects was returned as empty string in the booing response

### Version 218 - 19/12/2018
- renderer: added pinch-to-zoom support for Desktop Safari
- renderer: ALT + double left click zooms out a notch 

### Version 217 - 13/12/2018
- API: general admission areas are considered when selecting best available places
- API: bug fix: seats or GA places that are not for sale are not considered when selecting best available places
- API: added filtering options when listing subaccounts
- renderer: bug fix: when chart.clearSelection() is invoked, the previously selected ticket types are passed on to onObjectDeselected
- renderer: when deselecting a GA place, the previously selected ticket type needs to be passed in. If not, no place gets deselected. Also, when selecting a seat or a GA place, a valid ticket type needs to be passed in (if multiple price levels are set for that object).

### Version 216 - 11/12/2018
- renderer: selecting an object is now a 2-step process on mobile. When tapping an object, a tooltip is shown. The tooltip contains a 'select' button. Clicking it selects the object.
- renderer: improved pinch-zooming performance
- renderer: bug fix: price is not shown on the selected seat tooltip when "showPricing: false" is passed in
- designer: created separate tools for drawing single rows and blocks of rows

### Version 215 - 05/12/2018
- renderer: added support for GA areas when selecting best available places
- renderer: switched to native scrolling when the chart is scrolled out of bounds, which should lead to a much smoother experience (especially on iOS). No need to pass in onScrolledOutOfBoundsVertically anymore.
- renderer: when alwaysShowSectionContents is set to true, clicking on the chart zooms in to that point, instead of focusing on the clicked section
- renderer: bug fix: checkmarks are shown again in selected GA areas and tables 
- designer: added 'displayed object type' input field for rows, e.g. to show a row as a couch instead in the tooltips
- designer: sections and GA areas on top of the reference chart are now translucent, so you can still see the image
- designer: various fixes to image objects
- event manager: bug fix: confirmation button now has the proper width, even on small charts

### Version 214 - 27/11/2018
- renderer: added support for scroll wheel zoom and pinch-to-zoom on desktop
- renderer: chart is rendered, even when connection to Ably fails when listening for expired hold tokens
- renderer: when hovering an interactive section, the tooltip contains the word 'Section'
- renderer: various translation fixes
- designer: bug fix: tables and table seats are assigned UUIDs again
- designer: placeholders for images inside sections are shown when section contents is visible in section overview mode 

### Version 213 - 23/11/2018
- renderer: added holdOnSelectForGAs rendering parameter so existing accounts can enable hold on select for GAs

### Version 212 - 22/11/2018
- renderer/API: general admission areas can now be held, just like seats. This is only enabled for new signups only currently - we'll add a toggle on the settings page to enable it for existing accounts
- designer: added option to increase or decrease seat spacing
- designer: bug fix: undo/redo now works properly
- event manager: improved look and feel of tables without category

### Version 211 - 20/11/2018
- renderer: new property on category to render all seats in that category as a star
- API: fixed performance issue with /charts/[chart key]?expand=events call

### Version 210 - 19/11/2018
- dashboard: replaced 'book whole tables' checkbox by link to event manager, which allows setting the table bookability mode on an individual table level
- dashboard: search queries in the API call history modal window can contain spaces
- designer: tools that space objects vertically or horizontally now make sure the spacing between all objects is equal, instead of aligning the objects on an invisible grid
- designer: state for some tools is saved and applied when opening another chart (or the same chart). This is the case for the translucent sections tool, snap to grid, view from seat and show labels tool. 
- designer: bug fix: when the caption of a shape is empty, nothing is shown on the rendered chart instead of 'null'
- renderer: made best available validation more strict
- renderer: 'session expired' dialog looks good even when the text is long (e.g. in French) 

### Version 209 - 15/11/2018
- API: bug fix: prevented seats in status booked to go to held again

### Version 208 - 14/11/2018
- event manager: added buttons to mark all tables as bookable by table or bookable by seat
- designer: added tool to draw rectangular or square sections
- designer: improved row snapping
- designer: bug fix: X button inside an input field now properly clears the text of the input
- renderer: bug fix: label of interactive section doesn't jump anymore when selecting the section
- renderer: improved contrast of table inside section

### Version 207 - 12/11/2018
- designer: added tools to align objects
- renderer: added Japanese language support
- renderer: improved contrast between non bookable table and background of page

### Version 206 - 08/11/2018
- designer bug fix: no more delay when clicking a palette color
- designer & API: added configurable validation rule to ensure a category is only applied to a single object type
- renderer: new sexy dark background mode
- API: queue concurrent GA bookings instead of throwing an error
- API: improved performance when booking best available seats, especially on very large charts

### Version 205 - 07/11/2018
- renderer: when hold token expires, a dialog is shown with a button to restart the session. Note: this feature is only active for accounts created after 07/11/2018
- designer: removed 'prefix' functionality when labeling objects (for newly created charts)
- designer: bug fix: paste button is enabled when something was copied to the clipboard, even when currently no objects are selected
- API: performance improvement for server side best available

### Version 204 - 31/10/2018
- renderer/designer: moved away from cdnjs to our own CDN to host JS libs and other static assets (for more reliability)
- renderer: deprecated showRowLabels in favour of configuring row labels through the designer, which is more flexible
- designer: copy-pasting happens in memory instead of in local storage when the latter if full
- designer/API: added optional validation for missing focal point in chart
- event manager: added a mode to manage table booking modes (by table or by seat)
- API: bug fix: fixed race condition that in some rare cases caused booked seats to become free again, if they were previously held 

### Version 203 - 29/10/2018
- renderer: non bookable tables are drawn in white again
- designer: added copy/paste functionality. Works within a chart, and over charts.
- designer: improved snapping when drawing sections
- designer: added option to hide the publish button
- designer: bug fix: automatic table radius now works properly
- designer: bug fix: after resizing a row with seats without category, the inspector shows the category picker when selecting seats

### Version 202 - 24/10/2018
- renderer: added chart.listSelectedObjects() method to retrieve the selected objects
- renderer: events can have some tables bookable as a whole, and other tables bookable by seat
- renderer: bug fix: general admission tooltip now shows the section label once instead of twice
- designer: label of general admission area is not editable when 'publishedSectionLabel' feature is disabled
- designer: warning when drawing outside section boundaries
- designer: seat label color adapts to category color
- designer: clicking the caption of a text object selects the whole text
- designer: added button (X) to clear an input field when it contains multiple values
- designer: bug fix: revived object prefix input field 
- designer: bug fix: tweaked seat label padding

### Version 201 - 16/10/2018
- designer: added option to have seat labeling end at a certain number (in addition to having it start at some value)
- designer: added 'section label' input field, to indicate an object's section on a chart without visible sections
- designer: reference chart wizard and first time tutorial can be closed by pressing ESC
- designer: bug fix: row spacing input field now displays the corect value
- renderer: pimped Danish translations
- API: chart reporting and event reporting calls return a "labels" property, that contains the displayed label of the object itself, its table or row (for seats), and the section

### Version 200 - 10/10/2018
- renderer: bug fix: prevented tooltips from being rendered off-screen when chart does not fully fit the screen
- designer: various performance tweaks
- API: default chart validation level is 'error' for new users
- API/designer: added validation rules for unlabeled sections, rows and tables
- API: limited max category key to 2^53-1 when creating or updating a chart (this is the max safe integer in JavaScript)

### Version 199 - 04/10/2018
- renderer: added option to not clear the current selection when selecting best available seats
- designer: improved section scaling control (changed to slider)
- designer: row prefix can be set when only a single row is selected
- designer: bug fix: color picker now accepts all valid hex colors
- designer: bug fix: arrows work properly on numeric input fields

### Version 198 - 02/10/2018
- designer: added option to skip letters I, O and Q when labeling rows
- designer: made width and height of elliptical shapes editable properties 
- designer: revamped row label position control
- designer: bug fix: chart categories are editable even when no objects are selected
- designer: bug fix: section nodes are hidden when changing the section scaling
- API: added chart reporting call
- renderer: warning is printed in console when hold token has expired or doesn't exist when rendering the chart

### Version 197 - 26/09/2018
- dashboard: chart validation settings can be configured on the settings page
- event manager: for sale config manager indicates how many calls are still available in a day
- API: increased rate limit of for sale/not for sale calls to 10 per day
- API: hold token calls return the expiration in seconds
- renderer/designer: bug fix: row labels for rows with only 1 seat are displayed properly

### Version 196 - 24/09/2018
- designer: when flipping a section, all of its contents are flipped as well
- designer bug fix: holding shift down now properly draws a 1:1 ratio circle
- designer bug fix: rectangle now properly anchors to starting position when holding shift down
- designer bug fix: Reference chart now takes section scaling into account
- designer: shape outlines inside sections are not shown when translucent sections are enabled
- designer: new feature flag to make technical section label read-only
- designer bug fix:  Fixed error when clicking Details on Duplicate objects

### Version 195 - 21/09/2018
- designer: replaced section scaling by slider that allows resizing one or a bunch of sections
- designer: in section overview mode, the contours of the contents of all sections are visible (aka 'section translucency')
- designer: added possibility to show row labels on rendered chart. Can be turned on or off per row (left, right, left and right or invisible).
- designer: seats can be marked as having 'restricted view'
- renderer: added parameter to turn on transparent backgrounds for tooltips
- renderer: bug fix: not only the first [br/] is converted to a line break
- dashboard: at most 15 events are shown per chart. Clicking on the 'more' button reveals them all.

### Version 194 - 13/09/2018
- designer: removed labeling tool. Individual seats can be labeled by selecting them and setting a label in the right-hand sidebar.
- designer: warning message when exiting a chart that contains errors (e.g. unlabelled seats)
- renderer: best available algorithm allows selecting seats by ticket type
- dashboard: API call history screen shows object labels, even if UUIDs were used when changing the object status

### Version 193 - 11/09/2018
- designer: shapes can have a label + icon (e.g. 'stage', 'exit', 'restroom')
- renderer: tweaked tooltips

### Version 192 - 06/09/2018
- renderer: added 'sectionCategory' property to section objects that are passed in to callbacks
- renderer: added `objectWithoutCategorySelectable` and `objectWithoutPricingSelectable` flags (which default to true)
- renderer: ticket types are passed in to onHoldSucceeded, onHoldFailed, onReleaseHoldSucceeded and onReleaseHoldFailed
- designer: improved tab order of input fields 

### Version 191 - 29/08/2018
- designer: added image tool
- designer: added align and spacing buttons for rows
- designer: made rectangular table layout more flexible
- API: added call to update the extra data for multiple objects in one go
- API: made it possible to pass in expiresInMinutes when creating a hold token
- API: status-changes call always returns the objectLabel, even if the object status was changed by uuid
- renderer: bug fix: even when sectionColor is passed in, the section background is gray when zoomed in 
- renderer: bug fix: removed incorrect "unsupported language" warning

### Version 190 - 28/08/2018
- designer: adding styling options for text (bold and italic)
- designer: bug fix: designer works fine even if local storage has been disabled in the browser
- event manager: added language parameter. Supported languages are English, Dutch and Portuguese for now.
- renderer: added 'categories' option, which allows overriding the list of categories that was set through the designer
- renderer: added 'objectCategories' option, which allows overriding the default object categories that were set through the designer
- renderer: selectedObjects option optionally takes ticket types
- renderer: added Norwegian translations

### Version 189 - 19/07/2018
- dashboard: seats can be booked and released from within the event details page
- dashboard: added form to change the password at https://app.seats.io/settings
- renderer: marked isObjectSelectable as deprecated
- event manager: improved styling of tooltips
- event manager: fixed bug that caused lasso-select to 'hang' sometimes (meaning: there was no way to exit it)

### Version 188 - 11/07/2018
- event manager: added option to book or release places in general admission areas
- designer: bug fix: background image can be removed if the link is broken
- designer: bug fix: when category list is made read-only, categories can still be applied to objects (but the categories themselves cannot be edited)
- renderer: bug fix: tooltips are layed out properly when using a right-to-left language (e.g. Hebrew or Arabic)

### Version 187 - 04/07/2018
- renderer: completely redesigned tooltips: https://blog.seats.io/tooltips-elegant-and-powerful-7c50077586f9

### Version 186 - 26/06/2018
- API: change object status call returns object entrance (if specified on the section the object belongs to)
- designer: fixed layout issue on small screens

### Version 185 - 20/06/2018
- designer: added support for letters as seat labels, both upper- and lowercase. 

### Version 184 - 01/06/2018
- renderer: added Catalan as a supported language
- renderer: bug fix: selection rectangle is shown when multi-selecting objects
- API: when booking best available seats, detailed labeling information is returned
- API: when booking seats, detailed labeling information can optionally be returned

### Version 183 - 23/05/2018
- renderer: improved rendering performance
- renderer: selected object auras indicate more clearly how many seats have been selected
- renderer: prevented zooming out further than the initial zoom level

### Version 182 - 17/05/2018
- event manager: added tool to book and release seats (https://www.seats.io/docs/event-manager)
- renderer: added lasso select tool that can be activated by holding down alt (if multi select is enabled) 
- renderer: bug fix: "allowOrphanSeats: false" did not play nicely with holdOnSelect

### Version 181 - 26/04/2018
- added tool for admin users: the Event Manager (https://www.seats.io/docs/event-manager)

### Version 180 - 16/04/2018
- renderer: legend colors take objectColor callback into account
- renderer: seat label is shown on price level selection popup

### Version 179 - 06/04/2018
- renderer: added chart.deselectCategories
- renderer: bug fix: chart.selectCategories now also selects seats inside sections

### Version 178 - 03/04/2018
- API: added event reporting summary calls: https://www.seats.io/docs/api-v2#core-resources-event-reports-summary-reports

### Version 177 - 28/03/2018
- designer: categories button is always visible, even when all features are disabled
- renderer: chart is passed as argument to onChartRenderingFailed
- renderer: warning when isObjectSelectable is implemented in a potentially slow way

### Version 176 - 19/03/2018
- designer: bug fix: clicking on 'save & exit' while the chart is still loading no longer clears the chart

### Version 175 - 13/03/2018
- renderer: improved multiselect: selection rectangle is shown while selecting
- renderer: improved multiselect: selected objects are highlighted more clearly
- renderer: improved multiselect: selected objects can be multi-deselected
- renderer: fixed performance issue on large charts

### Version 174 - 06/03/2018
- renderer: added 'selectionValidators' parameter, which allows enforcing consecutive seat selection and preventing orphan seats
- renderer: deprecated 'orphanSeats' parameter in favor of 'selectionValidators'

### Version 173 - 26/02/2018
- renderer: added Swedish language support

### Version 172 - 20/02/2018
- API: bug fix: fixed booking of best available tables
- renderer: chart zooms in to clicked point instead of to nearest section when clicking outside of a section
- designer: added button to uncategorize an object

### Version 171 - 09/02/2018
- renderer: fixed zooming bug on Android (Chrome) for sites that don't set the viewport width to the device width
- renderer: added object.pulse() to highlight an object

### Version 170 - 06/02/2018
- renderer: best available algorithm also takes booths into account

### Version 169 - 02/02/2018
- renderer: best available algorithm does not leave orphan seats anymore, unless absolutely necessary
- renderer: bug fix: clearSelection() does not trigger warnings about orphan seats anymore
- designer: warning about duplicate or unlabeled seats when publishing a chart
- designer: bug fix: long category keys do not overlap the edit category and delete category buttons anymore

### Version 168 - 29/01/2018
- designer: added German translation
- renderer: added onChartRenderingFailed callback
- renderer: clearSelection takes a success and error callback, which are triggered when releasing reserved seats succeeds or fails
- renderer: when rendering fails, a user-friendly error message is shown, and a retry button (in case there was a network issue)

### Version 167 - 19/01/2018
- web app: added much more detail to usage report at https://app.seats.io/reports
- renderer: removed old ticket selection popups, which were still shown when passing in tooltipStyle
- renderer: onBestAvailableSelected callback receives flag that indicates if selected seats are next to each other

### Version 166 - 18/01/2018
- renderer: added listCategories function which takes a callback that receives all chart categories
- renderer: added numSelected and selectionPerTicketType properties on GA areas

### Version 165 - 09/01/2018
- renderer: the default tooltip for unavailable objects includes the object's label
- designer: sections and GA areas can have a technical label (used when booking objects) and a display label (which is shown to ticket buyers)

### Version 164 - 08/01/2018
- renderer: check icon is shown on selected seats to improve ticket buyer UX.   

### Version 163 - 26/12/2017
- renderer: default to english language if an unsupported language parameter is passed in, instead of not rendering the floor plan

### Version 162 - 19/12/2017
- renderer: when section borders overlap, they're brought to the front on hover
- renderer: bug fix: popups are rendered properly, even when minimum font size has been set to the non-default value in Chrome
- designer: tweaked hover colors
- web app: proper error message is shown when trying to change the key of an event to one that already existed

### Version 161 - 13/12/2017
- designer: when labeling seats & rows using numbers, 0 is accepted as a value. 

### Version 160 - 06/12/2017
- renderer: GA labels are visible on GA areas inside sections

### Version 159 - 05/12/2017
- charts: categories can be made 'wheelchair-accessible' in the designer, meaning that a wheelchair icon is shown on rendered charts

### Version 158 - 04/12/2017
- API: added reporting call by section

### Version 157 - 28/11/2017
- designer: background images can be uploaded instead of having to provide a URL
- renderer: section labels colors contrast more with the section color, as to improve readability
- renderer: made section borders prettier
- renderer: HTML or JavaScript code inside object labels is properly escaped
- renderer: bug fix for reserved seats not always getting selected properly after reloading a page

### Version 156 - 22/11/2017
- renderer: bug fix: selected objects aura is not shown when selecting booths

### Version 155 - 21/11/2017
- renderer: sections are rendered with a nice border, section labels are rendered with a nice shadow
- renderer: added showActiveSectionTooltipOnMobile, showViewFromYourSeatOnMobile and showViewFromYourSeatOnDesktop toggles
- API: when booking best available objects, it's possible to let seats.io indicate if the chosen seats are next to each other

### Version 154 - 17/11/2017
- designer: order in which rows are labeled is now predictable (i.e. from first row to last)
- designer: row and section labels are applied when clicking on an other object or when clicking outside of the tooltip
- API: fixed encoding issue of extraData when returned in object-statuses call
- renderer: ticket type and GA quantity popups work well on small screens

### Version 154 - 14/11/2017
- renderer: charts have a minimum height of 300px, because they're not usable if they are smaller than that. Charts can still be rendered smaller than 300px by setting a small height on the chart div (not recommended)
- renderer: added onChartPublished callback
- renderer: small tweaks to new ticket type and GA quantity popups

### Version 153 - 12/11/2017
- renderer: restyled GA quantity selector and ticket type selector tooltips. Those are now modal popups.

### Version 152 - 09/11/2017
- renderer: objects that are passed to callbacks have a 'selectedTicketType' property (if a ticket type has been selected)

### Version 151 - 06/11/2017
- renderer: added Arabic (ar) and Hebrew (he) translations

### Version 150 - 06/11/2017
- dashboard: parent user can copy charts between subaccounts, from a subaccount to the parent account and from the parent account to a subaccount
- renderer: back button scrolls together with viewport, so it's visible even if the chart is partly out of the viewport
- renderer: when GA area is clicked, selected places counter does not automatically go to 1 anymore
- designer: performance improvements for big charts
- api: /changeExtraData allows extraData to be set for objects in status 'free'

### Version 149 - 30/10/2017
- renderer: orphan seats are properly detected when objects change status (e.g. when someone else books an object)

### Version 148 - 25/10/2017
- renderer: number of available seats is not shown anymore in section tooltip on mobile
- renderer: orphan seats warning is shown when chart.selectObjects() results in orphan seats

### Version 147 - 24/10/2017
- dashboard: parent user can pretend to be a subaccount by clicking on a subaccount in the subaccounts list of the dashboard.

### Version 146 - 24/10/2017
- renderer: added onReservationSucceeded, onUnreservationSucceeded and onUnreservationFailed callbacks
- renderer: chart does not pan when not zoomed in further than initial zoom level
- designer: duplicate seats message is shown when duplicate seats exist within different sections

### Version 145 - 19/10/2017
- renderer: improved rendering speed by doing calls to backend in parallel.
- renderer: new chart config parameter `orphanSeats` which supports a "warn" value. When active, exclamation marks will be displayed on orphan seats. `allowOrphanSeats` is still supported for backwards compatibility.
- renderer: new chart config parameter `onOrphanSeats` which takes a callback, triggered when orphan seats are detected if the orphanSeats config is set to "warn".
- renderer: fixed a rendering issue that would make some icons defined with the `objectIcon` chart config to look bigger than others.

### Version 144 - 18/10/2017
- renderer: ticket selection tooltip now updates reserved tickets count when selecting/deselecting objects with ticket types via the JavaScript API.
- renderer: selected objects are highlighted better on zoomed out charts that don't have sections
- API: extraData is allowed when releasing an object. If no extraData is passed in, the existing extra data is cleared.

### Version 143 - 13/10/2017
- renderer (mobile): tooltips that pop up when attempting to select unselectable seats now properly hide after panning.

### Version 142 - 11/10/2017
- designer: row curving now works when multiple 'blocks' of seats are selected
- designer: row curving now works for selected rows with varying number of seats (i.e. some rows shorter or longer)
- designer: section scale slider can be controlled at a higher precision than only at multiples of 10%
- renderer: added onReservationFailed callback

### Version 141 - 09/10/2017
- designer: batch-labeling rows always happens away from the top-left corner (and so doesn't look at the focal point anymore)  
- designer: added button to reverse row labels
- renderer: added zoomToSelectedObjects() function, which ... zooms in to the currently selected objects
- renderer: GA labels can be translated through the 'messages' parameter, just like sections
- renderer: improved the way in which selected seats within a section are visualized
- renderer: section and GA labels are drawn whitish or grayish, to give enough contrast with the background color
- renderer: selectObjects and deselectObjects take an optional ticketType parameter

### Version 140 - 02/10/2017
- designer: GA labels can be made smaller and bigger, and can be moved around just like section labels
- renderer: GA labels are shown if the 'Label shown?' checkbox in the designer is checked

### Version 139 - 18/09/2017
- designer: background image is shown when editing section contents

### Version 138 - 11/09/2017
- web app: switched to SVG for the chart thumbnails, so they look much sharper now. Also, seats inside sections are shown on thumbnails.

### Version 137 - 11/09/2017
- renderer: replaced zoom controls by a home button that's enabled when zoomed in

### Version 136 - 05/09/2017 
- dashboard: search box now also accepts event keys to search on

### Version 135 - 05/09/2017 
- renderer: View From Your Seat now works on mobile devices
- renderer: improved usability on mobile by adding a back button to zoom out when zoomed in
- renderer: when zoomed in on a section on mobile, contextual information is shown (section name, price, available seats)

### Version 134 - 29/08/2017 
- designer: "Save & Exit" button saves any changes that were not yet saved

### Version 133 - 21/08/2017 
- renderer bugfix: when GA capacity is changed, the change is reflected immediately and automatically on rendered charts

### Version 132 - 17/08/2017
- designer & renderer: added view-from-your-seat feature
- designer: more & better error messages when autosave fails for some reason

### Version 131 - 04/08/2017
- Renderer: bugfix: rendering big charts now works in Opera

### Version 130 - 11/07/2017
- Designer: added destroy method 

### Version 129 - 03/07/2017
- API: bugfix: call to update chart name and categories does not delete the selected object labeling algorithms

### Version 128 - 28/06/2017
- web app: proper error message when changing the event key to a key that already exists

### Version 121 - 20/06/2017
- API: improved performance of /linkChartToEvent and /linkChartToEvents calls

### Version 120 - 15/06/2017
- renderer: added Traditional Chinese and Simplified Chinese as supported languages

### Version 119 - 14/06/2017
- web app: you can now search charts by key
- API: added call to get the status of a single object

### Version 118 - 09/06/2017
- web app: usage report showed wrong months for customers in UTC-1 or lower (e.g. North and South America)

### Version 117 - 30/05/2017
- web app: seats.io dashboard is now paginated & searchable

### Version 116 - 30/05/2017
- renderer: row labels are rendered bigger when showRowLabels is enabled

### Version 115 - 12/05/2017
- renderer: libraries are fetched from a CDN to improve load times
- renderer: fixed race condition that prevented multiple charts to be rendered on the same page in some cases

### Version 114 - 11/05/2017
- designer: table label input field to edit individual table labels, when a single table is selected

### Version 113 - 10/05/2017
- renderer: static assets (JS, images, CSS) are edge cached by a CDN, so they're served from a location close to the end user

### Version 112 - 05/05/2017
- api: event details call indicates if best available is possible for the event (meaning: if there's a focal point defined on the chart linked to the event)
- renderer: bug fix: when chart scrolls out of bounds, host page scrolls. This did not work properly in all cases.

### Version 111 - 03/05/2017
- renderer: bug fix: background image with spaces is rendered correctly
- renderer: when objectIcon is passed in, seating chart waits for Font Awesome to be loaded before rendering. This fixes an issue where squares were sometimes shown instead of the actual icons.
- api: creating a reservation token always succeeds, even if the reservation period is set to exactly 2 hours

### Version 110 - 28/04/2017
- designer: when a single row is selected in labeling mode, row label input field is shown in popup menu
- designer: added French translation
- renderer: best available seat selector retries reserving seats when reservation failed

### Version 109 - 25/04/2017
- designer: fixed performance issue that occured when charts had 1000s of duplicate seats
- designer: improved performance and UX of labeling screen
- renderer: added canGASelectionBeIncreased callback, which determines if more GA places can be selected

### Version 108 - 21/04/2017
- designer: language can be set to English or Spanish when embedding the designer
- renderer: when selectBestAvailable is used, the selected seats are properly highlighted

### Version 107 - 20/04/2017
- API: added calls to create and update charts by providing name, venue type and categories

### Version 106 - 19/04/2017
- designer: sections can be flipped horizontally & vertically. Section content is flipped as well (just rows & text, not other objects).  
- designer: features can be made read-only or they can be disabled when embedding the designer
- designer: fixed error that was thrown when opening the chart designer in IE11 and older versions
- renderer: chart does not throw SecurityError because of unavailable sessionStorage when embedded in an iFrame

### Version 105 - 31/03/2017
- renderer: extraConfig can be updated by passing it to chart.changeConfig
- renderer: I18N: added support for Belarusian (be), Bulgarian (bg), Croatian (hr), Czech (cs), Greek (el), Hungarian (hu), Italian (it), Latvian (lv), Lithuanian (lt), Romanian (ro), Serbian (sr), Slovak (sk), Slovenian (sl), Turkish (tr) and Ukrainian (uk).    

### Version 104 - 15/03/2017
- dashboard optimization: chart thumbnails are lazily loaded 
- renderer: added legend.hidePricing parameter. Default value is false (so the pricing information is shown in the legend)

### Version 103 - 07/03/2017
- renderer: bugfix: charts are rendered properly when the container div has a min-height set
- renderer: changed styling of legend. It looks better now and is mobile-friendly.
- renderer: I18N - Finnish (fi) and Russian (ru)

### Version 102 - 03/03/2017
- renderer: lines between seats (aka 'row lines') are not shown by default. They can be enabled by passing showRowLines: true

### Version 101 - 03/03/2017
- renderer: added destroy method that cleans up a chart (rendered or not)

### Version 100 - 27/02/2017
- renderer: minimap is shown on charts with sections when less than two thirds of the chart is visible
- renderer: seat edges are rendered prettier when zoomed out
- renderer: bugfix: charts that are rendered in a container div with box-sizing: border-box are rendered properly
- renderer: bugfix: prices in legend are now formatted with provided priceFormatter
- renderer: bugfix: seats in a section are always shown when the user clicks on a section

### Version 99 - 24/02/2017
- designer: made row resize handles somewhat bigger
- renderer: chart is still rendered when background image fails to load
- renderer: charts are fully responsive. They repond to changes in width and height of the container div.

### Version 98 - 16/02/2017
- renderer: object.selected property is available for callbacks that are executed outside the iFrame (e.g. tooltipText)

### Version 97 - 16/02/2017
- dashboard: when you select a tag, that tag is remembered when editing a chart and going back. Or even when refreshing your browser.

### Version 96 - 15/02/2017
- designer: fixed bug that caused charts with sections to be skewed in some cases

### Version 95 - 10/02/2017
- renderer/designer: switched to Verdana as font for labels and tooltips
- API: new call to create reservation tokens; returns token, expiresAt and secondsUntilExpiration, instead of just the token

### Version 94 - 06/02/2017
- designer: objects and focal point can be moved using arrow keys
- renderer: I18N - Estonian

### Version 93 - 03/02/2017
- API: reservation tokens can be expired immediately
- dashboard: number of available places in GA areas are shown
- renderer: fixed rendering artefacts that appeared sometimes (especially on charts with sections)

### Version 92 - 27/01/2017
- Draft drawings are enabled for new users

### Version 89 - 16/01/2017
- designer: fixed bug that caused onChartCreated not being fired anymore

### Version 88 - 12/01/2017
- designer: added possibility to turn on draft charts in settings screen. When enabled, changes to charts are not immediately visible on rendered charts. They go to a special draft version, which can be published afterwards.

### Version 87 - 03/01/2017
- invoicing: when a whole table is booked, the number of seats at that table is added to the number of used objects

### Version 86 - 22/12/2016
- renderer: bugfix: objectIcon works on IE11 and older

### Version 85 - 21/12/2016
- renderer: bugfix: objectIcon works on Safari (desktop + mobile)

### Version 84 - 16/12/2016
- Added support for polygon general admission areas
- Section borders get category color, like seats   

### Version 83 - 15/12/2016
- renderer: legend texts are drawn in either black or white, depending on the category color for that legend item
- dashboard: status changes can be sorted by date properly
- api: booking best available seats, releasing them and then booking them again works. Previously you had to wait for about 10 seconds before booking again.
- designer: objects with corner radius = 0 are loaded correctly in the designer (instead of falling back to the default corner radius of 4)

### Version 82 - 08/12/2016
- dashboard: API call history time formatting fix 

### Version 81 - 02/12/2016
- designer: made categories of "rows with sections" template consistent with section labels

### Version 80 - 26/11/2016
- designer: increased max row curve to 30

### Version 79 - 24/11/2016
- renderer: improved tooltip positioning
- renderer: chart is rendered properly, even if 'third party content' is blocked by the browser

### Version 78 - 22/11/2016
- renderer: GA tooltips don't show availability info anymore by default. You can show availability info by implementing the [tooltipText](http://www.seats.io/docs/renderer#renderer-configuring-your-floor-plan-tooltiptext) callback.  

### Version 77 - 18/11/2016
- renderer bugfix: 0px section labels are actually not rendered anymore
- designer bugfix: in some rare cases, autolabeling resulted in number type labels, instead of strings. Not so anymore.  
- renderer: on renderer callbacks, you now have object.capacity, object.numBooked and object.numFree properties for general admission areas
- renderer: callbacks 'object' arguments now have a 'labels' property, that contains own, parent and section labels in separate properties
- renderer: GA tooltips show info about availability
- API: added call to extend reservation tokens
- fixed the [usage report](https://app.seats.io/reports) screen

### Version 76 - 09/11/2016
- designer: when using shift to draw straight section lines, snapping works as well
- designer: duplicated objects are positioned correctly

### Version 75 - 08/11/2016
- designer bugfix: releasing shift is handled correctly now

### Version 74 - 04/11/2016
- renderer: improved layout of multilevel pricing selector popups (except if you're using tooltipStyle, then the old layout is still being used)

### Version 73 - 28/10/2016
- renderer: added icon overlays for seats and other objects (see the [objectIcon](http://www.seats.io/docs/renderer#renderer-configuring-your-floor-plan-objecticon) callback)
- renderer: reduced number of http requests by combining js libs
- renderer: quickly reserving and unreserving a seat does not cause that seat to become selected suddenly

### Version 72 - 20/10/2016
- designer: background image url is not removed if the chart gets autosaved while loading the bg img
- API: better error messages when 400 bad request is returned because of illegal json body request
- renderer: added sectionColor callback, to support overriding over default section color
- renderer: bugfix: when rendering a chart for multiple events, reserveOnSelect caused a deselected seat to be automatically selected again
- renderer: chart is rendered even if Ably connection times out (which is used to receive realtime status updates)

### Version 71 - 12/10/2016
- renderer: tooltips in the bottom right corner don't overlap hovered seats anymore

### Version 70 - 12/10/2016
- renderer: orphan seats algorithm does not cause errors for tables and booths

### Version 69 - 8/10/2016
- designer: more flexibility for new labeling system ('start at' is free input field)
- designer: bugfix in labeling. ... 5, 3, 1, 2, 4, 6 ... now works properly
- renderer, orphan seat algo improvement: no single seats can be left open at the beginning or the end of a row. The minimum is two open seats.

### Version 68 - 30/09/2016
- renderer: added onScrolledOutOfBoundsVertically callback (e.g. for situations in which the seats.io iFrame is embedded inside another iFrame)
- renderer: new zoom control icons
- renderer: seats at tables get assigned a label automatically
- designer bugfix: labels shown in draw mode are rendered correctly when curving rows
- renderer: when onObjectSelected is called after a page refresh for seats that have been reserved before, the previously selected ticket type is passed as a parameter.
- renderer: all connected users are notified of changes in extraData (which can be passed when booking a seat)
- API: all calls support OPTIONS request (to enable CORS)

### Version 67 - 15/09/2016
- designer: improved labeling. Rows and seats can be labeled in batch.

### Version 66 - 14/09/2016
- dashboard: added page that shows used seats overview per user account
- designer: added categories to default chart with booths
- API: status changes for an event can be fetched through /api/event/{secretKey}/{eventKey}/statusChanges

### Version 65 - 01/09/2016
- internal change: switched from own Faye server to Ably for publishing of status changes

### Version 64 - 25/08/2016
- designer: added undo and redo buttons + keyboard shortcuts
- renderer: in case of multilevel pricing, min and max price for the seat are shown in the tooltip

### Version 63 - 19/08/2016
- renderer: price level can be selected when multi-selecting seats
- renderer: completed Spanish, German, French and Dutch translations
- renderer: number of available seats in section tooltip takes general admission areas inside sections into account
- designer: number of seats in total message takes general admission areas into account

### Version 62 - 29/07/2016
- renderer: maxSelectedObjects can be changed

### Version 61 - 09/07/2016
- renderer: section labels can be translated through the messages parameter

### Version 60 - 08/07/2016
- designer/renderer: fixed orphan seats detection for rectangular tables
- api: fixed server best available not always picking the right seats of tables

### Version 59 - 04/07/2016
- internal change: switched to own Faye server for pushing object status changes to connected clients
- renderer: fixed typo in Portugese translations

### Version 58 - 30/06/2016
- dashboard: added validation so that event keys are guaranteed to be unique

### Version 57 - 23/06/2016
- added support for season tickets: objects can be booked for multiple evens at once
- designer: entrance can be added to general admission areas

### Version 56 - 17/06/2016
- renderer: fixed issue with background images on HTTPS URLs
- designer: entrance can be added to sections
- API: added call to fetch object info (which contains only the section entrance for now)

### Version 55 - 09/06/2016
- designer: visual indication of duplicate seat labels
- API: improved performance of server side best available calls

### Version 54 - 09/06/2016
- renderer: fixed problem with multilevel pricing selector on iphone6 + mobile chrome

### Version 53 - 08/06/2016
- renderer: tweaked settings so that seats become selectable a bit sooner (Desktop only)
- renderer: exposed more data on section objects (useful in callbacks like tooltipText())

### Version 52 - 26/05/2016
- renderer: added translations for Danish
- designer: fixed bug with rounded corners

### Version 51 - 18/05/2016
- renderer: fixed pinch issue on iOS9.3

### Version 50 - 12/05/2016
- renderer: mode can be passed in: 'static', 'print' or 'normal'
- renderer: double clicking on an object selects it, instead of zooming in on the chart
- designer: added onChartUpdated callback for embedded designer
- API: added call te fetch event chart and book whole tables

### Version 49 - 28/04/2016
- API: status change calls (changeStatus, book, release etc.) can take bestAvailable
- API: reporting calls contain category of tables when book whole tables is activated for an event
- designer: in category mode, objects can be selected by clicking on them (and not only by drag and drop)
- renderer: bugfix for zoomEnabled config option

### Version 48 - 19/04/2016
- API: added calls to archive and unarchive charts
- API: added call to change the book whole tables property of an event
- renderer: bugfix: background rendering broken on charts with sections

### Version 47 - 14/04/2016
- renderer: bugfix: rendering broken on Safari

### Version 46 - 14/04/2016
- designer: label position is computed correctly for sections with (near) zero area
- renderer: added objectLabel for seats and booths
- renderer: bugfix: isObjectVisible can be used together with bookWholeTables
- renderer: bugfix: showRowLabels works with invisible rows

### Version 45 - 30/03/2016
- renderer: bugfix: onBestAvailableSelected callback was never triggered
- renderer: I18N - Polish
- renderer: bookWholeTables can be switched on/off even while sales are already running
- renderer: I18N - Portuguese

### Version 44 - 17/03/2016
- renderer: table can be selected by best available selector
- renderer: pricing can be passed in as a number + a price formatter function (to make sure min and max prices are determined correctly)

### Version 43 - 11/03/2016
- renderer: price can be passed in as number (for determining min and max)
- designer: label size, rotation and position are indicated

### Version 42 - 10/03/2016
- designer: section labels can be moved
- renderer: powered by message is shown under chart
- api: releasing a seat that is already free does not result in an error

### Version 41 - 29/02/2016
- objects in charts contain category key (in addition to category label)
- api: added reporting call by category key
- api: when booking GA tickets, the current capacity of the GA area is used for validation (and not the old one)

### Version 40 - 25/02/2016
- renderer/api: improved performance of call that fetches event data
- renderer: bugfix for IE10 and IE9

### Version 38 - 23/02/2016
- widget: when creating a chart through the widget, it's automatically linked to the event
- renderer: improved performance for large charts

### Version 37 - 23/02/2016
- renderer: improved zooming on mobile devices
- dashboard: newly created events are at the bottom of the list

### Version 36 - 19/02/2016
- renderer: reservation token is kept in session storage per chart, which allows multiple floor plans on the same page to use reserveOnSelect
- renderer: performance improvements for charts with lots of categories

### Version 35 - 10/02/2016
- renderer: zooming and panning did not work properly after changing orientation from portrait to landscape on mobile devices

### Version 34 - 01/02/2016
- renderer: row labels are rendered correctly
- designer: increased maximal zoomed out level

### Version 33 - 27/01/2016
- renderer: objectColor takes default color as second parameter
- renderer: objectCategory takes default category as third parameter
- renderer: chart takes extraConfig parameter, which is passed to callbacks
- renderer: price level selector is rendered centered on the clicked seat to make it more prominent
- renderer: no stuttering when scrolling out of bounds on iOS
- reservation period can be configured on admin screen of dashboard
- designer: improved feedback for auto saving
- designer/renderer: elements inside section with large label are positioned correctly

### Version 32 - 12/01/2016
- API: reporting calls also return extra data
- renderer: empty spaces can be prevented by passing allowOrphanSeats: false
- renderer: added onObjectClicked callback

### Version 31 - 12/01/2016
- renderer: reservation token is kept in memory when session storage is not available (e.g. Safari in private mode)
- renderer: reservation token can be passed as a parameter (e.g. after a page refresh when using Safari in private mode)
- API: object category in reporting calls is derived from section category

### Version 30 - 01/06/2016
- renderer: best available seats can be selected by calling a function on the rendered chart - selectBestAvailable(bestAvailableConfig)
- extra data (in JSON format) can be passed when booking objects

### Version 29 - 21/12/2015
- API: extended reporting: added object type of every object, and number of booked seats + capacity of GA area

### Version 28 - 21/12/2015
- designer bugfix: charts with one row cannot be curved or flipped
- renderer bugfix: impossible to select number of general admission tickets on mobile

### Version 27 - 18/12/2015
- designer bugfix: color chooser for categories now behaves correctly

### Version 26 - 11/12/2015
- added support for charts with sections (to enable very big charts to be drawn)
- renderer: minimap is shown when zoomed in on chart with sections
- renderer: added showMinimap parameter
- API: GZIP encoding can be enabled by passing Accept-Encoding: gzip as request header
- designer: background image can be made bigger or smaller

### Version 25 - 7/11/2015
- API: new chart name can be specified when copying a chart

### Version 24 - 6/11/2015
- designer: added onChartCreated callback to know the key of a newly created chart
- designer: forced category names to be unique
- bugfix: embedded designer did not work when user was not logged in
- bugfix: object tooltip in renderer is hidden when hovering out of the seating chart

### Version 23 - 22/10/2015
- New API calls for reporting

### Version 22 - 15/10/2015
- Best available seat selection: if not enough seats are available on a single row, seats over multiple rows get selected
- renderer: when multiSelectEnabled, maxSelectedObjects is taken into account

### Version 21 - 08/10/2015
- renderer: center of seat and table (x and y coordinates) are passed to the rendering callbacks
- renderer: isObjectSelectable takes the default selectability (true or false) as a second argument

### Version 20 - 05/10/2015
- designer: when creating a new chart, the user can choose between different types of venues. A default chart is shown based on the venue type, and inapplicable features are disabled
- designer/renderer: changed spinner so that it looks good on dark backgrounds
- designer: spaces in object labels are not converted to non breaking spaces anymore
- renderer: unavailableCategories and isObjectSelectable can be used together now
- designer: when clicking inside the background image input field, the background settings are not reset anymore
- technical: updated to Play! Framework 1.3.1 (Java 8 support)
- renderer: ticket types tooltip for general admission areas is scrollable when it contents is too high
- renderer: whitespace around seats is tappable (mobile) and clickable (desktop)
- renderer: on mobile, when tapping on a chart, the chart doesn't zoom in automatically
- renderer: added experimental feature to render row labels, which is disabled by default ('showRowLabels')

### Version 19 - 09/09/2015
- designer/api: each bookable object now has a label and a unique UUID. This UUID does not change when changing the label of an object. So you now have the choice: booking by label (which can change) or by UUID (which doesn't).
- chart designer is now embeddable by using javascript API
- API: thumbnails are available via the API now
- bugfix: general admission bookings incorrectly changed the number of available tickets of a general admission area
- bugfix: whitespace is not converted to non breaking space anymore in the designer
- users have a separate designer key for embedding the chart designer
- renderer: pricing configuration is validated before rendering.
- renderer: cursor indicates when chart is in zoomed out mode
- renderer: pricing configuration is validated
- renderer bugfix: scrollOnPan can be disabled on IE now
- renderer bugfix: charts don't auto-scroll on mobile iOS devices anymore

### Version 18 - 13/08/2015
- designer: blocks of rows can be drawn by click-dragging
- designer: selection mode is the default mode, not row mode
- renderer: added scrollOnPanEnabled (default: true)
- renderer: support for hiding bookable objects, via an isObjectVisible callback
- renderer: restyled legend
- renderer: a maximum number of tickets can be provided per ticket type (e.g. 3 adult, 2 child)
- bugfix: renderer dom elements are not selectable anymore
- bugfix: shapes with zero height or width cannot be drawn anymore in the designer
- bugfix: empty texts cannot be created anymore in the designer
- bugfix: objects with special UTF-8 characters in their name are handled correctly when their status changes in a rendered chart
- renderer: GA areas can be given multilevel pricing

### Version 17 - 08/06/2015
- added missing DB evolutions scripts (Docker)

### Version 16 - 04/06/2015
- renderer: added support for multiselect (using shift)
- renderer: added 'reserve on select' functionality (including timer to release reserved seats after 15 minutes).
- renderer: added objectCategory callback
- designer: improved performance for labels screen

### Version 15 - 07/05/2015
- added support for websockets to replace regular polling
- made seats a bit smaller on mobile
- bugfix: texts are rendered above everything else
- improvements for color and font size (static texts)
- legend: changed font and made legend buttons smaller
- bugfix: could not delete freshly drawn booths
- added support for selecting best available seat across multiple categories
- added support for selecting whole categories: chart.selectCategories(ids)
- zoom controls are customizable
- added priceLevelsTooltipMessage to chart renderer config

### Version 14 - 13/04/2015

### Version 13 - 13/04/2015
- split up call to get initial event data and subsequent calls for new bookings

### Version 12 - 26/03/2015
- thumbnails are cached, and rerendered when they're changed
- tooltip in chart renderer can by styled by passing in CSS styling through the tooltipStyle parameter
- added API call to copy charts
- rendered chart adapts to container div height if explicitly set - especially useful on mobile
- added 'showRowLines' config parameter (default = true). Set it to false to disable the connector lines that are drawn between seats of the same row.

### Version 11 - 20/02/2015
- 'status' and 'selectable' are available as properties of the object passed to the onObjectXXX callbacks in the chart renderer
- rectangular booths of different sizes can be drawn now
- autoZoom is configurable (can be disabled and autoZoomFactor can be set)
- added general admission areas

### Version 10 - 06/02/2015
- support for designing booth floor plans
- show object id in tooltip
- number of selected seats is shown when selecting rows or tables
- charts can be tagged to filter them in the dashboard

### Version 9 - 31/01/2015
- bugfix for Event.getNumberOfBookedSeats: seats that were once booked and then released were counted twice

### Version 8 - 29/01/2015
- When creating an event, you can choose if whole tables should be booked or table chairs
- Renamed 'seat' to 'object' (also in API parameters). E.g. onSeatSelected becomes onObjectSelected. The old callbacks still work though, for backwards compatibility
- onSelectedSeatBooked callback is now called when a selected seat gets booked by another user
- bugfix: fill color for tables without seats now works correctly

### Version 7 - 17/01/2015
- added api endpoint to retrieve seatIds + statuses
- when scrolling, when the upper or lower edge of a chart is reached, the host page scrolls
- added shapes fill color
- chart designer: rows can be resized
- tables are rendered in the same color as their seats

### Version 6 - 08/01/2015
- support for static shapes (circle and rectangle)

### Version 5 - 26/12/2014
- API calls send "Access-Control-Allow-Origin: *" CORS response header
- auto-select next row label in label mode when tabbing
- added isSeatSelectable parameter to the rendering configuration. isSeatSelectable must be a function, that takes a seat as a parameter and returns true if that seat is selectable. One could for example use the seat status to determine if it's selectable or not.
- seating charts can be archived when they're obsolete

### Version 4 - 08/12/2014
- added API call to change the status of a seat: /api/changeStatus. This allows for custom seat statuses, next to free and booked

### Version 3 - 02/12/2014
- focal point can be set to indicate which seats are best when using 'best available seating'
- thumbs on dashboard: moved phantomjs away from seatsio-core to a separate service.
- multiple charts can be rendered on the same page
- rectangular tables
- ability to specify the same rotation angle for tables
- static content gets cached until a new seats.io ### Version is deployed
- static content (e.g. stylesheets and css files) is gzipped to decrease loading times
- exposed select() and deselect() on seat object, so it can be used in config callbacks (e.g. onSeatSelected, onSeatDeselected, etc)

### Version 2 - 20/11/2014
- added option to specify memcached config when running seats.io as docker image
- labels can be shown on all screens (e.g. when choosing categories)
- label rotation equals row rotation
- added visual feedback (tooltip) when user taps an unselectable seat (mobile only)
- bugfix: section coloring when user has selected seats
- added sectionRenderingEnabled flag

### Version 1 - 06/11/2014
- bugfix: whitespaces in static texts are rendered properly
- row labels are displayed more clearly

### Version 0 - 6/11/2014
- seats.io as it exists on Thu 6 Nov 2014. the whole \#\!
