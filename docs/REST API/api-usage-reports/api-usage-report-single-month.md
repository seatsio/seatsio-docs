---
title: "Usage details for a single month"
slug: "/api/usage-report-single-month"
hidden: false
createdAt: "2019-05-28T13:31:15.295Z"
updatedAt: "2020-12-29T07:33:51.721Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdminKeyAuth from '../snippets/admin-key-auth.md';

Report with number of used seats in a certain month. The numbers are aggregated per workspace, per chart and per event.

<AdminKeyAuth />

```
GET /reports/usage/month/{month}
```

E.g. `/reports/usage/month/2018-09`

```javascript
[
  {
    workspace: 3432427,
    usageByChart: [
      {
        chart: {
          name: "My venue",
          key: "8303dc3f-c3b7-4416-973b-631057d311de"
        },
        usageByEvent: [
          {
            event: {id: 12, key: "AA3334"},
            numUsedObjects: 163,
            numFirstBookings: 177,
            numFirstBookingsOrSelections: 163,
            numGASelectionsWithoutBooking: 0,
            numNonGASelectionsWithoutBooking: 3,
            numObjectSelections: 158
          }
        ]
      }
    ]
  },  
  {
    workspace: 3432428,
    usageByChart: [
      {
        chart: {
          name: "Super Dome",
          key: "0303dc3f-c3b7-4416-973b-631057d311de"
        },
        usageByEvent: [
          {
            event: {id: 125121, key: "E350804"},
            numUsedObjects: 163,
            numFirstBookings: 177,
            numFirstBookingsOrSelections: 163,
            numGASelectionsWithoutBooking: 0,
            numNonGASelectionsWithoutBooking: 3,
            numObjectSelections: 158
          },
          {
            event: {id: 125122, key: "E350305"},
            numUsedObjects: 63,
            numFirstBookings: 77,
            numFirstBookingsOrSelections: 63,
            numGASelectionsWithoutBooking: 2,
            numNonGASelectionsWithoutBooking: 5,
            numObjectSelections: 156
          }
        ]
      },
      {
        chart: {
          name: "Another Super Dome",
          key: "6303dc3f-c3b7-4416-973b-631057d311df"
        },
        usageByEvent: [
          {
            event: {id: 1251, key: "E350204"},
            numUsedObjects: 1,
            numFirstBookings: 17,
            numFirstBookingsOrSelections: 1,
            numGASelectionsWithoutBooking: 0,
            numNonGASelectionsWithoutBooking: 0,
            numObjectSelections: 256
          }
        ]
      }
    ]
  }
]
```

