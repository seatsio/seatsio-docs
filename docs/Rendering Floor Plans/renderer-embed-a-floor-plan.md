---
title: "Embed a floor plan in your page"
slug: "/renderer/embed-a-floor-plan"
hidden: false
createdAt: "2018-08-03T06:50:06.440Z"
updatedAt: "2020-08-31T10:50:36.479Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You have created a seating chart, and you've created an event for it. Great, you’re ready to show the seating chart to your users.

To do this, you need to: 

1. add an empty div to your page and give it an id. `chart` is an excellent choice.
2. load `chart.js` from our CDN. The URL depends on the region of your account:
   
    - `https://cdn-eu.seatsio.net/chart.js` (Europe)
    - `https://cdn-na.seatsio.net/chart.js` (North America)
    - `https://cdn-sa.seatsio.net/chart.js` (South America)
    - `https://cdn-oc.seatsio.net/chart.js` (Oceania)
   
3. create a new `seatsio.SeatingChart` object, configure it and call its `render()` method

So in short: just copy & paste this code snippet and adapt it to your needs: 

```html
<div id="chart"></div>
<script src="https://cdn-{region}.seatsio.net/chart.js"></script>
<script>
    new seatsio.SeatingChart({
        divId: 'chart',
        workspaceKey: 'your workspace key',
        event: 'your event key'
    }).render();
</script>
```



:::info 
To make clientside integration easier, we've developed wrapper libraries for a number of popular frameworks and tools:  

* *React*: https://github.com/seatsio/seatsio-react 
* *React-native*: https://github.com/seatsio/seatsio-react-native
* *Android*: https://github.com/seatsio/seatsio-android
* *iOS*: https://github.com/seatsio/seatsio-ios

*TypeScript* types are available here: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/seatsio
:::

In the rest of the documentation, code examples will be presented in interactive code editors like the one below.     
Feel free to play around! 

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/xjmk1g36/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

