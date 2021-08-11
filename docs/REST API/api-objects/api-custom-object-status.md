---
title: "Custom object status"
slug: "/api/custom-object-status"
hidden: false
createdAt: "2018-07-31T10:13:43.779Z"
updatedAt: "2021-02-26T11:56:47.776Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you need more statuses than just booked and free, you can use this API call to change the status of a seat, table or booth to your own custom status.



<Tabs 
  groupId="serverside-code-samples"
  defaultValue="shell"
  values={[
{ label: 'Text', value: 'shell', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='shell'>

```shell
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/change-object-status

POST https://api-{region}.seatsio.net/events/{eventKey}/actions/change-object-status?expand=objects

```

</TabItem>
<TabItem value='php'>

```php
// No ticket types
$seatsioClient->events->changeObjectStatus("event1", ["A-3", "A-5"], "myCustomStatus");

// Ticket types
$seatsioClient->events->changeObjectStatus(
  "event1",
  [
    ["objectId" => "A-3", "ticketType" => "adult"],
    ["objectId" => "A-5", "ticketType" => "child"]
  ],
  "myCustomStatus"
);
```

</TabItem>
<TabItem value='csharp'>

```csharp
// No ticket types
Client.Events.ChangeObjectStatus("event1", new [] { "A-3", "A-5" }, "myCustomStatus");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
Client.Events.ChangeObjectStatus("event1", new [] { object1, object2 }, "myCustomStatus");
```

</TabItem>
<TabItem value='java'>

```java
// No ticket types
client.events.changeObjectStatus("event1", Arrays.asList("A-3", "A-5"), "myCustomStatus");

// Ticket types
ObjectProperties object1 = new ObjectProperties("A-3", "adult");
ObjectProperties object2 = new ObjectProperties("A-5", "child");
client.events.changeObjectStatus("event1", Arrays.asList(object1, object2), "myCustomStatus");
```

</TabItem>
<TabItem value='python'>

```python
# No ticket types
client.events.change_object_status("event1", ["A-3", "A-5"], status="myCustomStatus")

# Ticket types
object1 = ObjectProperties("A-3", ticket_type="adult")
object2 = ObjectProperties("A-5", ticket_type="child")
client.events.change_object_status("event1", [object1, object2], status="myCustomStatus")

```

</TabItem>
<TabItem value='ruby'>

```ruby
# No ticket types
client.events.change_object_status('event1', ['A-3', 'A-5'], 'myCustomStatus')

# Ticket types
object1 = {:objectId => 'A-3', :ticketType => 'adult'}
object2 = {:objectId => 'A-5', :ticketType => 'child'}
client.events.change_object_status('event1', [object1, object2], 'myCustomStatus')

```

</TabItem>
<TabItem value='javascript'>

```javascript
// No ticket types
await client.events.changeObjectStatus('eventKey', ['A-3', 'A-5'], 'myCustomStatus');

// Ticket types
let object1 = {objectId: 'A-3', ticketType: 'adult'};
let object2 = {objectId: 'A-5', ticketType: 'child'};
await client.events.changeObjectStatus('eventKey', [object1, object2], 'myCustomStatus');

```

</TabItem>
</Tabs>





:::info Note
All seats (or tables, booths or GA places) passed in to this API will be considered as "used seats" for [pricing purposes](https://www.seats.io/pricing).
:::



## Request



```javascript
// No ticket types
{
    'objects': ['A-3', 'A-5'],
    'status': 'myCustomStatus'
}

// Ticket types
{
    'objects': [
        {'objectId': 'A-1', 'ticketType': 'adult'},
        {'objectId': 'A-2', 'ticketType': 'child'}
    ],
    'status': 'myCustomStatus'
}
```


* **objects**: an array of object ids to release
* **status**: the status you want to assign to an object
* **holdToken** *(optional)*: the hold token must be supplied when you want to make sure that the same person that made the hold confirms his booking.
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api/detailed-reports#detailed-report-by-order-id) later on.
* **keepExtraData** *(optional)*: boolean. If set to true, the existing extra data doesn't get cleared
* **channelKeys** <i>(optional)</i>: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** <i>(optional)</i>: if true, the status change call succeeds, even if the objects belong to a channel. Useful inside a back office application, in which the user is allowed to book any seat - no matter the channel.
Should not be used in combination with `channelKeys`.

## Response

*** Without expand=objects ***
204 - No Content

*** With expand=objects ***
200 - ok



<Tabs 
  defaultValue="json"
  values={[
{ label: '', value: 'json', },
{ label: '', value: 'json', },
{ label: '', value: 'json', },
{ label: '', value: 'json', },
{ label: '', value: 'json', },
{ label: '', value: 'json', },
]}>
<TabItem value='json'>

```javascript
{
  "A-3": {
    "label": "A-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "Row A",
        "type": "row"
      },
    },
    "ids": {
      "own": "3",
      "parent": "A"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false,
    "leftNeighbour": "A-2",
    "rightNeighbour": "A-4",
    "entrance": "Blue"
  }
}
```

</TabItem>
<TabItem value='json'>

```javascript
{
  "T1-3": {
    "label": "T1-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "Table T1",
        "type": "table"
      },
    },
    "ids": {
      "own": "3",
      "parent": "T1"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false
  }
}
```

</TabItem>
<TabItem value='json'>

```javascript
{
  "STA-A-3": {
    "label": "STA-A-3",
    "labels": {
      "own": {
        "label": "3",
        "type": "seat"
      },
      "parent": {
        "label": "Row A",
        "type": "row"
      },
      "section": "Stalls"
    },
    "ids": {
      "own": "3",
      "parent": "A",
      "section": "STA"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "seat",
    "section": "STA",
    "entrance": "Red",
    "isAccessible": true,
    "isCompanionSeat": false,
    "hasRestrictedView": false
  }
}
```

</TabItem>
<TabItem value='json'>

```javascript
{
  "B1": {
    "label": "B1",
    "labels": {
      "own": {
        "label": "B1",
        "type": "booth"
      }
    },
    "ids": {
      "own": "B1"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "booth"
  }
}
```

</TabItem>
<TabItem value='json'>

```javascript
{
  "T1": {
    "label": "T1",
    "labels": {
      "own": {
        "label": "T1",
        "type": "table"
      }
    },
    "ids": {
      "own": "T1"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "table"
  }
}
```

</TabItem>
<TabItem value='json'>

```javascript
{
  "GA1": {
    "label": "GA1",
    "labels": {
      "own": {
        "label": "General Admission 1",
        "type": "generalAdmission"
      }
    },
    "ids": {
      "own": "GA1"
    },
    "status": "myCustomStatus",
    "categoryLabel": "Ground Floor",
    "categoryKey": "4",
    "forSale": true,
    "objectType": "generalAdmission"
  }
}
```

</TabItem>
</Tabs>



* **objects**: JSON object that contains detailed information about the objects
