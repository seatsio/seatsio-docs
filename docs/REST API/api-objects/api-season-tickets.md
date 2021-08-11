---
title: "Season tickets"
slug: "/api/season-tickets"
hidden: false
createdAt: "2018-08-01T12:52:04.225Z"
updatedAt: "2020-10-05T10:15:17.605Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sometimes you need to change the status of objects for a whole bunch of events at once. A good example is when selling season tickets: the season ticket holder books a seat for all the events of the season.

Seats.io takes care of the all-or-nothing aspect of season tickets: either booking succeeds for all events, or it doesn't succeed for any of them. So prefer doing a single change status call with a number of events as parameter, instead of changing the object status for each event individually.

:::info Note
calling this API will be considered as a "booking" for each event in the season for [pricing purposes](https://www.seats.io/pricing).
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
POST https://api-{region}.seatsio.net/seasons/actions/change-object-status
POST https://api-{region}.seatsio.net/seasons/actions/book
POST https://api-{region}.seatsio.net/seasons/actions/release
POST https://api-{region}.seatsio.net/seasons/actions/hold
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->changeObjectStatus(["event1", "event2", "event3"], ["A-3", "A-5", "A-7"], "myCustomStatus");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.ChangeObjectStatus(new [] { "event1", "event2", "event3" }, new [] { "A-3", "A-5", "A-7"  }, "myCustomStatus");
```

</TabItem>
<TabItem value='java'>

```java
client.events.changeObjectStatus(Arrays.asList("event1", "event2", "event3"), Arrays.asList("A-3", "A-5", "A-7"), "myCustomStatus");
```

</TabItem>
<TabItem value='python'>

```python
client.events.change_object_status(
    ["event1", "event2", "event3"], 
    ["A-3", "A-5", "A-7"],
    status="myCustomStatus")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.change_object_status(['event1', 'event2', 'event3'], ['A-3', 'A-5', 'A-7'], 'myCustomStatus')
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.changeObjectStatus(['event1Key', 'event2Key', 'event3Key'], ['A-3', 'A-5', 'A-7'], 'myCustomStatus');
```

</TabItem>
</Tabs>





## Request



```javascript
{
    'objects': ['A-3', 'A-5', 'A-7'],
    'events': ['event1', 'event2', 'event3'],
    'status': 'myCustomStatus'
}
```

* **objects**: an array of object ids to release
* **events**: an array of event keys
* **status**: the status you want to assign to an object
* **holdToken** <i>(optional)</i>: the hold token must be supplied when you want to make sure that the same person that made the hold confirms his booking.
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api/detailed-reports#detailed-report-by-order-id) later on.
* **keepExtraData** *(optional)*: boolean. If set to true, the existing extra data doesn't get cleared
* **channelKeys** <i>(optional)</i>: an array of strings, i.e. the channel keys of the channel(s) to which the objects belong. If omitted, and the objects to be booked are assigned to a channel, the request will fail with 400 Bad request. Pass in `NO_CHANNEL` as channel key to allow objects without a channel.
* **ignoreChannels** <i>(optional)</i>: if true, the booking call succeeds, even if the booked objects belong to a channel. Useful inside a back office application, in which the user is allowed to book any seat - no matter the channel.
  Should not be used in combination with `channelKeys`.
* **ignoreSocialDistancing** <i>(optional)</i>: if true, social distancing rules are not checked for this booking.

## Response

204 - No Content
