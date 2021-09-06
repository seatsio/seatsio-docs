---
title: "Usage summary for all months"
slug: "/api/usage-report-all-months"
hidden: false
createdAt: "2019-05-28T13:25:56.119Z"
updatedAt: "2019-06-03T14:02:51.546Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdminKeyAuth from '../snippets/admin-key-auth.md';

Report with number of used seats, aggregated per month.

<AdminKeyAuth />

```
GET /reports/usage
```

```javascript
[
  {
    month: { month: 10, year: 2018 },
    numUsedObjects: 31633,
    numFirstBookings: 8775,
    numFirstBookingsByStatus: {booked: 8100, reserved: 675},
    numFirstBookingsOrSelections: 31633
  },
  {
    month: { month: 11, year: 2018 },
    numUsedObjects: 87678,
    numFirstBookings: 5742,
    numFirstBookingsByStatus: {booked: 3245},
    numFirstBookingsOrSelections: 87678
  },
]
```

