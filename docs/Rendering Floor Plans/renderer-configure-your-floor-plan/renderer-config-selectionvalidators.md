---
title: "selectionValidators"
slug: "/renderer/config-selectionvalidators"
hidden: false
createdAt: "2018-08-03T12:04:00.243Z"
updatedAt: "2021-01-29T08:10:45.700Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## selectionValidators

**Type**: array  
**Default**: []  

```javascript
selectionValidators: [
    {type: 'noOrphanSeats'},
    {type: 'consecutiveSeats'},
]
```

Selection validators run every time a seat is selected or deselected. They check whether there are no orphan seats, and/or whether all selected seats are consecutive (meaning: next to each other and in the same category).

If the selection is valid, [onSelectionValid](/docs/renderer/events-onselectionvalid) is triggered. If not, [onSelectionInvalid](/docs/renderer/events-onselectioninvalid) is triggered. 

A typical way to use this is to disable the checkout button on your form and to show a warning when onSelectionInvalid is triggered.



## selectionValidators.noOrphanSeats

```javascript
selectionValidators: [
    {type: 'noOrphanSeats'}
]
```

Checks for orphan seats. An orphan is a single seat that's left open.

![orphan.png](/img/readme/orphan.png)

There's one exception: near the end of the sales, when the venue is almost completely sold-out, we allow single empty seats in some cases. E.g. in the example below, the ticket buyer has to leave an empty seat if he wants 2 seats. In  that case, we don't consider the empty seat an orphan:

![Screenshot 2020-01-29 at 10.27.16.png](/img/readme/Screenshot-2020-01-29-at-10.27.16.png)

### mode

You can make the orphan seats validator less restrictive by passing in `mode: 'lenient'`:

```javascript
selectionValidators: [
    {type: 'noOrphanSeats', mode: 'lenient'}
]
```

In lenient mode, single empty seats are not considered orphans if there's no other way than to leave an empty seat in the current 'block'. Meaning: in the current group of selectable seats that are next to each other:

![Screenshot 2020-01-29 at 10.31.01.png](/img/readme/Screenshot-2020-01-29-at-10.31.01.png)

The default mode is 'strict'.

![Screenshot 2020-01-29 at 10.34.24.png](/img/readme/Screenshot-2020-01-29-at-10.34.24.png)

### social distancing

When you apply a social distancing ruleset with disabled seats to the sides, we automatically enable the orphan seats validator. If you want to disable it, you can do so by passing in

```javascript
selectionValidators: [
    {type: 'noOrphanSeats', enabled: false}
]
```

### highlight

By default, orphans are highlighted by an exclamation mark, and are colored red. If you prefer this doesn't happen, pass in `highlight: false`.

```javascript
selectionValidators: [
    {type: 'noOrphanSeats', highlight: false}
]
```

## selectionValidators.consecutiveSeats

Checks for seats that are not on the same row or not next to each other. Also, it checks for seats that don't have the same category.

This validator doesn't show errors on the chart, but it invokes [onSelectionInvalid](/docs/renderer/events-onselectioninvalid).

```javascript
selectionValidators: [
    {'type': 'consecutiveSeats'}
]
```
