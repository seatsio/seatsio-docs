---
title: "objectTooltip"
slug: "/renderer/config-objecttooltip"
hidden: false
createdAt: "2018-08-03T09:26:15.684Z"
updatedAt: "2020-07-09T20:31:29.385Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  
**Default**:  
```javascript
{
    showActionHint: true,
    showAvailability: false,
    showCategory: true,
    showLabel: true,
    showPricing: true,
    showUnavailableNotice: true,
    stylizedLabel: true,
    confirmSelectionOnMobile: "auto"
}
```

<!-- ![tooltip-configs@2x.gif](/img/readme/tooltip-configs@2x.gif) -->

<img src="/img/readme/tooltip-configs@2x.gif" alt="Various tooltip configurations" width="215" />

Allows to toggle on or off some features of the cursor tooltip, displayed when hovering objects when using pointing devices like a mouse, or when tapping on an object on touch devices.

Parameters that aren't passed will use their default values instead.

The supported parameters are:

- `showActionHint` - **Default: true.** If true, a "Click to select" or "Click to deselect" message will be displayed on bookable objects when selection is allowed.
- `showAvailability` - **Default: false.** If true, the amount of available seats of the section or general admission will be displayed.
- `showCategory` - **Default: true.** If true, the object's category color and name will be displayed.
- `showLabel` - **Default: true.** If true, the section name, row number and/or seat number of the object will be visible. If false, no labeling will be shown.
- `showPricing` - **Default: true.** If true, the price range of the object's category will be visible.
- `showUnavailableNotice` - **Default: true.** If true, a notice will be displayed on the tooltip if the object is unavailable.
- `stylizedLabel` - **Default: true.** If true, a labels will be displayed in a hierarchy-based styling, improving readability. If false, labels will be displayed as flat text.
- `confirmSelectionOnMobile` - **Boolean. Default: auto.** If `true`, a popup will show up when selecting an object on mobile containing the same information as the desktop tooltip, seen on hover. A button must be pressed to confirm the selection. If `false`, selection is done instantly but no information regarding the object is shown to the user. If unset, it will automatically attempt to show it unless an `onObjectClicked` parameter is passed in.

<iframe width="100%" height="580" src="//jsfiddle.net/seatsio/kt2xuf5m/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>