---
title: "How to embed the Event Manager"
slug: "/event-manager/how-to-embed"
hidden: false
createdAt: "2018-07-27T11:35:01.450Z"
updatedAt: "2020-09-02T09:26:53.821Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To show the event manager to your admins or box office managers, you need to do the following:

1. add an empty div to your page and give it an id (‘event-manager’ is a good choice)
2. load `chart.js` from our CDN. The URL depends on the region of your account:
   
    - `https://cdn-eu.seatsio.net/chart.js` (Europe)
    - `https://cdn-na.seatsio.net/chart.js` (North America)
    - `https://cdn-sa.seatsio.net/chart.js` (South America)
    - `https://cdn-oc.seatsio.net/chart.js` (Oceania)
   
3. create a new `seatsio.EventManager` object, configure it and call its `render()` method

So in short: just copy & paste this code snippet and adapt it to your needs.

```html
<div id="event-manager"></div>

<script src="https://cdn-{region}.seatsio.net/chart.js"></script>
<script>
    new seatsio.EventManager({
        divId: 'event-manager',
        secretKey: 'your workspace secret key', // never expose the secret key on a public web page!
        event: 'your event key',
        mode: 'manageForSaleConfig' // 'manageObjectStatuses' or 'manageForSaleConfig'. More to follow.
    }).render();
</script>
```



:::info A special note to React, Angular and Android users
The easiest way to show the event manager is to use the official wrapper packages: 

* **React**: https://github.com/seatsio/seatsio-react
* **Angular**: https://github.com/seatsio/seatsio-angular
* **Android**: https://github.com/seatsio/seatsio-android
* **TypeScript**: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio
:::

