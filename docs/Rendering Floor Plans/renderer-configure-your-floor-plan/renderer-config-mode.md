---
title: "mode"
slug: "/renderer/config-mode"
hidden: false
createdAt: "2018-08-03T12:05:27.222Z"
updatedAt: "2018-08-03T13:23:40.073Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: string  
**Default**: 'normal'  

This parameter supports the following values:

* `normal`: the default setting. Objects are selectable, and zooming and panning are enabled
* `static`: objects are not selectable, but zooming and panning is enabled
* `print`: objects are not selectable and zooming and panning is disabled
* `spotlight`: highlights objects passed as selected, dimming all others. Navigation controls are enabled but selection is disabled.


## Spotlight mode

You can use this mode to highlight seats for the user, while dimming the rest of the chart. Other seats will be greyed out and their tooltips will not be displayed.

In this mode interaction is disabled and session cannot be started nor continued.

In order to mark which seats should be displayed as selected, you may:
- Set the [selectedObjects](/docs/renderer/config-selectedobjects/) configuration parameter.
- Use the [chart.selectObjects()](/docs/renderer/chart-properties-chartselectobjects/) and [chart.deselectObjects()](/docs/renderer/chart-properties-chartdeselectobjects/) methods.