---
title: "Configuring the Event Manager"
slug: "/event-manager/configuring"
hidden: false
createdAt: "2018-07-27T11:38:28.723Z"
updatedAt: "2021-02-26T13:31:42.027Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## divId
**Type**: string

The id of the div on your page in which you want seats.io to render the event manager.

Either pass in `divId` or `container`, but not both.

```javascript
divId: 'chart-manager'
```

## container
** Type**: Element

The parent [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) in which the event manager gets rendered.

Either pass in `container` or `divId`, but not both.

```javascript
container: document.getElementById('chart')
```

## secretKey
**Type**: string  
The secret key of a workspace

:::danger Important
Never expose this secret key on a public web page! Only use the event manager behind a login wall.
:::

```javascript
secretKey: 'my secret key'
```

## event
**Type**: string  

The key of the event for which you want to render the event manager.

```javascript
event: 'smallTheatreEvent1'
```

## events
**Type**: string[]  

The keys of the events for which you want to render the event manager. Only `manageObjectStatuses` mode supports `events`.

## mode
**Type**: string  

Can be either:

- `'manageObjectStatuses'`: to book and release seats.
- `'manageForSaleConfig'`: to mark seats as [for sale / not for sale](/docs/api/for-sale-not-for-sale).
- `'manageTableBooking'`: to indicate which tables are bookable as a whole, and which ones are bookable by seat.
- `'manageChannels'`: to manage the list of channels for the event, and to assign objects to channels.
- `'select'`: to allow a user to select objects, without any call to action. Best paired with configuration parameters detailed in [Reacting to events](http://localhost:3000/docs/event-manager/reacting-to-events).

## language
**Type**: string  

Currently supported languages are:
- `'nl'` – Dutch
- `'en'` – English
- `'de'` – German
- `'pt'` – Portuguese
- `'es'` – Spanish
- `'fr'` – French

## messages
**Type**: object  

The messages parameter allows you to change all kinds of texts that are displayed on the chart: section labels, tooltip texts, static text objects ... you name it.
Just pass in an object with the original texts as keys, and the translations as values.
For a more detailed explanation, check [this page](http://support.seats.io/integrating-seats-io/multi-language-i18n-support).

## tooltipInfo
**Type**: function(object)  
**Return**: string

A function whose result will be displayed as extra information on the cursor tooltip.
See [https://docs.seats.io/docs/renderer-config-tooltipinfo](/docs/renderer/config-tooltipinfo) for more info.

## showFullScreenButton
**Type**: boolean  

Whether to show the full screen button or not. Defaults to true.

## fitTo
**Type**: string  

Whether to adapt to the container div width, or to its width and height.

See [https://docs.seats.io/docs/renderer-config-fitto](/docs/renderer/config-fitto)

## objectColor
**Type**: function(object, defaultColor, extraConfig)
**Default**: depends on the event manager mode (e.g. in `manageChannels` mode, a seat gets the color of its assigned channel)

A function that determines the object color. 

See [https://docs.seats.io/docs/renderer/config-objectcolor](/docs/renderer/config-objectcolor)
