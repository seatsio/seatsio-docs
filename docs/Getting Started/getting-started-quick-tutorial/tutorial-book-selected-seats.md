---
title: "7. Book selected seats"
slug: "/tutorial/book-selected-seats"
hidden: false
createdAt: "2018-08-21T09:35:42.604Z"
updatedAt: "2018-11-19T06:35:27.895Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

So you've shown your ticket buyer a floor plan, they selected the seats they wish. Now it's time to actually book them, so that they become unavailable for selection for the next ticket buyer that comes along. 

You do this by calling the [book objects endpoint](/docs/api/book-objects) of the Seats API. 
Here are some examples using the respective [API Client libraries](/docs/api/client-libraries) you can use:

<Tabs 
  groupId="serverside-code-samples"
  defaultValue="php"
  values={[
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='php'>

```php
use Seatsio\Region;
use Seatsio\SeatsioClient;

$seatsioClient = new SeatsioClient(Region::EU(), <WORKSPACE SECRET KEY>); // You can find this key at https://app.seats.io/workspace-settings
$seatsioClient->events->book("event1", ["A-3", "A-5", "A-7"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
using SeatsioDotNet;

var Client = new SeatsioClient(Region.EU, "<WORKSPACE SECRET KEY>"); // You can find this key at https://app.seats.io/workspace-settings
Client.Events.Book("event1", new [] { "A-3", "A-5", "A-7" });
```

</TabItem>
<TabItem value='java'>

```java
import seatsio.SeatsioClient;
import seatsio.Region;

SeatsioClient client = new SeatsioClient(Region.EU, "<WORKSPACE SECRET KEY>");  // You can find this key at https://app.seats.io/workspace-settings
client.events.book("event1", Arrays.asList("A-3", "A-5", "A-7"));
```

</TabItem>
<TabItem value='python'>

```python
import seatsio

client = seatsio.Client(seatsio.Region.EU(), secret_key="my-workspace-secret-key") # You can find this key at https://app.seats.io/workspace-settings
client.events.book("event1", ["A-3", "A-5", "A-7"])
```

</TabItem>
<TabItem value='ruby'>

```ruby
require 'seatsio'

client = Seatsio::Client.new(Seatsio::Region.EU(), "my-workspace-secret-key") # You can find this key at https://app.seats.io/workspace-settings
client.events.book('event1', ['A-3', 'A-5', 'A-7'], '8AWOqZZTz5')
```

</TabItem>
<TabItem value='javascript'>

```javascript
import { SeatsioClient, Region } from 'seatsio'

let client = new SeatsioClient(Region.EU(), <WORKSPACE SECRET KEY>) // You can find this key at https://app.seats.io/workspace-settings
client.events.book('eventKey', ['A-3', 'A-5', 'A-7']);
```

</TabItem>
</Tabs>

### Seats held by the ticket buyer

If the seats are held (i.e. you passed in `session` when rendering the chart), you need to include the hold token when booking the seats.
seats.io verifies whether the seats were held by that token, to prevent other ticket buyers from snatching them.

<Tabs
groupId="serverside-code-samples"
defaultValue="php"
values={[
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>
<TabItem value='php'>

```php
$seatsioClient->events->book("event1", ["A-3", "A-5", "A-7"], "8AWOqZZTz5");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.Book("event1", new [] { "A-3", "A-5", "A-7" }, "8AWOqZZTz5");
```

</TabItem>
<TabItem value='java'>

```java
client.events.book("event1", Arrays.asList("A-3", "A-5", "A-7"), "8AWOqZZTz5");
```

</TabItem>
<TabItem value='python'>

```python
client.events.book("event1", ["A-3", "A-5", "A-7"], "8AWOqZZTz5")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.book('event1', ['A-3', 'A-5', 'A-7'], '8AWOqZZTz5')
```

</TabItem>
<TabItem value='javascript'>

```javascript
client.events.book('eventKey', ['A-3', 'A-5', 'A-7'], '8AWOqZZTz5');
```

</TabItem>
</Tabs>

## When should I book?
The answer is simple and complex at the same time: "whenever is appropriate in your sales flow". 

For example, you could call the seats.io API to book seats right before you collect their payment. Or you could pre-book some seats for VIPs before you even open up ticket sales.

For a more in-depth discussion on this topic, check [this page](http://support.seats.io/integrating-seats-io/when-should-i-book-my-seats).

## Live updates

Whenever you change availability for a seat, we will push out this change to everyone who has the floor plan for your event open in their browser, in near real-time.

In other words: you can look at the seats on a floor plan as a collection of on/off switches, controllable via the REST API. You decide when you switch seats on and off, and by doing so, everyone who is looking at the floor plan will see the availability changes happening live.


## Custom statuses
There's more than just 'booking' a seat. You can use your own statuses (i.e. other than *BOOKED*) as well, read more [here](/docs/api/custom-object-status).
