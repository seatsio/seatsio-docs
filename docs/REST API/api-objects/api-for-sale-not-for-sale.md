---
title: "For sale / not for sale"
slug: "/api/for-sale-not-for-sale"
hidden: false
createdAt: "2018-08-01T12:57:08.200Z"
updatedAt: "2021-02-24T09:25:01.403Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sometimes you don't want ticket buyers to be able to choose from all seats in a venue. 

For example:

* the event organizer decides to sell tickets through multiple ticketing companies. You're selling tickets for Section A, and your competitor is selling tickets for Section B. You want all seats in Section B to be visible but unselectable for your customers.
* you receive seat availability data through a ticket broker. Other ticketing companies are selling tickets for the same event. The broker sends you a list of seats that are available. 
* you don't want to sell all sections in a large venue right away, but only after a number of seats have been sold in other sections.

In those cases, you can use the 'for sale' and 'not for sale' API calls to mark sections, rows, seats or categories as for sale or not for sale, without having to change the status of those individual seats. Doing so is much more convenient and faster than sending status changes in batch.

You can embed the [event manager](/docs/event-manager/introduction) to allow your admin users to modify the for sale configuration.

:::caution 
Note that ’for sale and ‘not for sale’ do not replace seat bookings. Each time you assign a seat to someone, you must also use our status change API, otherwise the availability management will not work properly. One of the reasons is that changes made by ‘for sale’ and ‘not for sale’ don’t support live updates, so they are not pushed to all ticket buyers. As a result, ticket buyers may not see the correct availability information unless there is also the correct status change API call.

In effect, it is a condition of use of seats.io that there is a strict mirroring between assigning a seat and a /change-object-status or /book API call. Breach of this would constitute a breach of our [terms of use](https://www.seats.io/legal/terms).

There’s a rate limit of 10 calls per event per day on the for sale/not for sale API calls, which means you’ll get an error if you try more often.
See below for more info.
:::



:::info Tip This endpoint does not validate whether or not seats exist. This is intentional.
This means you can mark seats as not-for-sale even before they are created. This allows you to add extra seats to a chart, that are immediately unavailable for sale: just mark them as not-for-sale first, then draw them on the seating chart.
:::



## Mark objects as not-for-sale

This API call marks the passed in objects and categories as not for sale, while marking all other objects as for sale.



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
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/mark-as-not-for-sale
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->markAsNotForSale("event34", ["section1", "section2"], ["category1", "category2"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.MarkAsNotForSale("event34", new [] { "section1", "section2" }, new [] { "category1", "category2" });
```

</TabItem>
<TabItem value='java'>

```java
client.events.markAsNotForSale("event34", Arrays.asList("section1", "section2"), Arrays.asList("category1", "category2"));
```

</TabItem>
<TabItem value='python'>

```python
client.events.mark_as_not_for_sale("event34", objects=["section1", "section2"], categories=["category1", "category2"])
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.mark_as_not_for_sale key: 'event34', objects: ['section1', 'section2'], categories: ["category1", "category2"]
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.markAsNotForSale('eventKey', ['section1', 'section2'], ['category1', 'category2']);
```

</TabItem>
</Tabs>



**Request**

```javascript
{
    "objects": ["section1", "section2"],
    "categories": ["category1", "category2"]
}
```

* **objects**: optional array of strings. Can contain section labels, row labels, table labels, booth labels, GA area labels or seat labels.
* **categories** optional array of strings. Can contain category keys or labels.

Only objects that satisfy 'objects' or 'categories' will become unselectable. All other objects are selectable, unless their status is not equal to 'free'.

**Examples**

To mark all objects that are either inside 'section1' or that have 'category1' as not for sale:

```javascript
{
    "objects": ["section1"],
    "categories": ["category1"]
}
```


To mark seat A-1 and A-2 as not for sale:

```javascript
{
    "objects": ["A-1", "A-2"]
}
```


To mark all seats in row A as not for sale:

```javascript
{
    "objects": ["A"]
}
```


**Example request**

```shell
curl https://api-{region}.seatsio.net/events/event34/actions/mark-as-not-for-sale \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"objects": {"section1"}}'
```

**Response**

```javascript
{
    "rateLimitRemainingCalls": 9,
    "rateLimitResetDate": "2021-10-01T23:00:00Z"
}
```

:::caution Warning
There's a rate limit of 10 calls per day per event. If that rate limit if reached, a 429 (Too Many Requests) is returned. The Retry-After header indicates how many seconds you have to wait before trying again.
:::



## Mark objects as for sale

This API call marks the passed in objects and categories as for sale, while marking all other objects as not for sale.



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
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/mark-as-for-sale
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->markAsForSale("event34", ["section1", "section2"], ["category1", "category2"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.MarkAsForSale("event34", new [] { "section1", "section2" }, new [] { "category1", "category2" });
```

</TabItem>
<TabItem value='java'>

```java
client.events.markAsForSale("event34", Arrays.asList("section1", "section2"), Arrays.asList("category1", "category2"));
```

</TabItem>
<TabItem value='python'>

```python
client.events.mark_as_for_sale("event34", objects=["section1", "section2"], categories=["category1", "category2"])
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.mark_as_for_sale key: 'event34', objects: ['section1', 'section2'], categories: ["category1", "category2"]
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.markAsForSale('eventKey', ['section1', 'section2'], ['category1', 'category2']);
```

</TabItem>
</Tabs>




**Request**

```javascript
{
    "objects": ["section1", "section2"],
    "categories": ["category1", "category2"]
}
```

* **objects**: optional array of strings. Can contain section labels, row labels, table labels, booth labels, GA area labels or seat labels.
* **categories** optional array of strings. Can contain category keys or labels.

Only objects that satisfy 'objects' or 'categories' will become selectable (and bookable). All other objects are not selectable, and trying to book them results in a bad request.

Note that even though object is marked for sale, it's still not selectable if its status is not free.

**Examples**

To mark all objects for sale that are either inside 'section1' or that have 'category1':

```javascript
{
    "objects": ["section1"],
    "categories": ["category1"]
}
```


To mark seat A-1 and A-2 for sale:

```javascript
{
    "objects": ["A-1", "A-2"]
}
```

To mark all seats in row A for sale:

```javascript
{
    "objects": ["A"]
}
```


**Example request**

```shell
curl https://api-{region}.seatsio.net/events/event34/actions/mark-as-for-sale \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"objects": {"section1"}}'
```

**Response**

```javascript
{
    "rateLimitRemainingCalls": 9,
    "rateLimitResetDate": "2021-10-01T23:00:00Z"
}
```

:::caution Warning
There's a rate limit of 10 calls per day per event. If that rate limit if reached, a 429 (Too Many Requests) is returned. The Retry-After header indicates how many seconds you have to wait before trying again.
:::



## Mark all objects as for sale

This API call marks all objects as for sale, which means resetting the list of objects and categories that were previously passed in by mark-as-for-sale or mark-as-not-for-sale.



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
POST https://api-{region}.seatsio.net/events/{eventKey}/actions/mark-everything-as-for-sale
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->markEverythingAsForSale("event34");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.MarkEverythingAsForSale("event34");
```

</TabItem>
<TabItem value='java'>

```java
client.events.markEverythingAsForSale("event34");
```

</TabItem>
<TabItem value='python'>

```python
client.events.mark_everything_as_for_sale("event34")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.mark_everything_as_for_sale key: 'event34'
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.markEverythingAsForSale('eventKey');
```

</TabItem>
</Tabs>



**Example request**

```shell
curl https://api-{region}.seatsio.net/events/event34/actions/mark-everything-as-for-sale \
-u aSecretKey: -X POST
```

**Response**

204 - No Content




## Rate limiting

The above API endpoints are rate limited: you can only call it 10 times per 24 hours.  

Of course, this rate limit applies **per event**: If you have used up all 10 saves for event A, you will still be able to change the for-sale configuration for event B. 


![Screenshot 2019-06-14 11.39.51.png](/img/readme/Screenshot-2019-06-14-11.39.51.png)

If that limit of 10 is reached, a 429 (Too Many Requests) is returned. 
The `Retry-After` header indicates how many seconds you have to wait before trying again.



:::info An exception
If you **only** mark seats as for-sale, that were previously marked as not-for-sale, the call is not counted for the rate limit. 

In other words: you can always change the for-sale configuration of an event to open up more seats for sale. 

This allows you to start sales with just a portion of your floor plan as available, and then to gradually open up the rest of the seats.
:::

So this operation will count for the rate limit: 

![Screenshot 2019-06-14 11.46.56.png](/img/readme/Screenshot-2019-06-14-11.46.56.png)

And this will **not** count for the rate limit: 




![Screenshot 2019-06-14 11.47.09.png](/img/readme/Screenshot-2019-06-14-11.47.09.png)

