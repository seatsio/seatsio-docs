---
title: "Reacting to events"
slug: "/chart-manager/reacting-to-events"
hidden: false
createdAt: "2020-06-19T08:02:55.035Z"
updatedAt: "2021-02-26T13:35:40.211Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### onChartRendered: (chart) => {}
Fired after the seating chart is fully rendered. The rendered chart is passed in as a parameter.

### onChartRenderingFailed: (chart) => {}
Fired when there's an error when rendering the chart.
The chart manager object is passed in as a parameter, to allow you to destroy it if needed.

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
Fired when the chart manager state is successfully saved on the seats.io servers: e.g. when the user clicks the 'Apply changes' button, or when the user creates a new ruleset, deletes a ruleset, etc. 

### onSubmitFailed: () => {}
Fired when the chart manager failed to save its state on the seats.io servers: e.g. when the user clicks the 'Apply changes' button but the operation failed. 


:::info Object Properties
Some of these callbacks take a bookable object (i.e. a seat, a table, a booth)  as a parameter.

To see the different properties available on these objects, please refer to [Renderer Object Properties](/docs/renderer/object-properties).
:::

