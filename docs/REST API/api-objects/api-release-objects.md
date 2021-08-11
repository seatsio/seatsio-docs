---
title: "Release objects"
slug: "/api/release-objects"
hidden: false
createdAt: "2018-07-31T09:11:57.723Z"
updatedAt: "2021-02-26T11:55:27.063Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Changes the object status to 'free'. Free seats are selectable on a rendered chart.

:::info Note
releasing objects can also be used to cancel objects that are [temporarily held](/docs/api/temporarily-hold-objects) .
:::





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
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/release

POST https://api-{region}.seatsio.net/events/{eventKey}/actions/release?expand=objects
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->release("event1", ["A-3", "A-5"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.Release("event1", new [] { "A-3", "A-5" });
```

</TabItem>
<TabItem value='java'>

```java
client.events.release("event1", Arrays.asList("A-3", "A-5"));
```

</TabItem>
<TabItem value='python'>

```python
client.events.release("event1", ["A-3", "A-5"])
```

</TabItem>
<TabItem value='ruby'>

```ruby
seatsio.events.release('event1', ['A-3', 'A-5'])
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.release('eventKey', ['A-3', 'A-5']);
```

</TabItem>
</Tabs>





## Request



```javascript
{
    'objects': ['A-3', 'A-5']
}
```

* **objects**: an array of object IDs to release
* **holdToken** *(optional)*: the hold token must be supplied when you want to make sure that the same person that made the hold releases the objects.
* **keepExtraData** *(optional)*: boolean. If set to true, the existing extra data doesn't get cleared
* **channelKeys** <i>(optional)</i>: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects to be released are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** <i>(optional)</i>: if true, the release call succeeds, even if the released objects belong to a channel. Useful inside a back office application, in which the user is allowed to release any seat - no matter the channel.
Should not be used in combination with `channelKeys`.

## Response

*** Without expand=objects ***
204 - No Content

*** With expand=objects ***
200 - ok



```javascript
{
  "objects": {
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
      "status": "free",
      "categoryLabel": "Ground Floor",
      "categoryKey": "4",
      "ticketType": "adult",
      "orderId": "order1",
      "forSale": true,
      "objectType": "seat",
      "leftNeighbour": "A-2",
      "rightNeighbour": "A-4",
      "entrance": "Blue"
    },
    "A-5": {
      "label": "A-5",
      "labels": {
        "own": {
          "label": "5",
          "type": "seat"
        },
        "parent": {
          "label": "Row A",
          "type": "row"
        },
      },
      "ids": {
        "own": "5",
        "parent": "A"
      },
      "status": "free",
      "categoryLabel": "Ground Floor",
      "categoryKey": "4",
      "ticketType": "adult",
      "orderId": "order1",
      "forSale": true,
      "objectType": "seat",
      "leftNeighbour": "A-4",
      "rightNeighbour": "A-6",
      "entrance": "Blue"
    }
  }
}
```

