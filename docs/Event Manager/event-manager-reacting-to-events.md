---
title: "Reacting to events"
slug: "/event-manager/reacting-to-events"
hidden: false
createdAt: "2018-07-27T12:11:00.583Z"
updatedAt: "2021-02-26T13:33:17.319Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### onChartRendered: (chart) => {}
Fired after the seating chart is fully rendered. The rendered chart is passed in as a parameter.

### onChartRenderingFailed: (chart) => {}
Fired when there's an error when rendering the chart.
The event manager object is passed in as a parameter, to allow you to destroy it if needed.

### onObjectSelected: (selectedObject) => {}
Fired when an object (seat, table, etc) gets selected.

### onObjectDeselected: (deselectedObject) => {}
Fired when an object (seat, table, etc) gets de-selected.

### onObjectClicked: (clickedObject) => {}
Fired when the user clicks or taps on an object (seat, table, etc). Note that this event will be fired even if the object is not selectable.

### onFullScreenOpened: () => {}
Fired when the user clicks the fullscreen button. 

### onFullScreenClosed: () => {}
Fired when the user closes the fullscreen view. 

### onSubmitSucceeded: () => {}
Fired when the event manager state is successfully saved on the seats.io servers: e.g. when the user clicks the 'Apply changes' button (any mode), when the user adds a new channel (in `manageChannels` mode).

### onSubmitFailed: () => {}
Fired when the event manager failed to save its state on the seats.io servers: e.g. when the user clicks the 'Apply changes' button (any mode) but the operation failed. 


:::info Object Properties
Some of these callbacks take a bookable object (i.e. a seat, a table, a booth)  as a parameter.

To see the different properties available on these objects, please refer to [Renderer Object Properties](/docs/renderer/object-properties).
:::

