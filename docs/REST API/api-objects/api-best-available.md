---
title: "Best Available"
slug: "/api/best-available"
hidden: false
createdAt: "2018-08-01T12:42:25.055Z"
updatedAt: "2021-02-26T11:57:09.285Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Don't want ticket buyers to select their seats? That's possible by passing in `bestAvailable` when booking (or holding) objects. Seats.io will then automatically book (or hold) available objects that are closest to the focal point.

## The best available seat algorithm

seats.io uses an algorithm to determine which are the best available seats at any given moment. The algorithm itself is not configurable, but you can limit the possible results via input parameters such as the number of seats to select and the category or categories the resulting seats need to belong to. 

The best available seats are determined in a number of steps. If a step in the algorithm does not result in a solution (i.e. available seats are found), the algorithm tries the following step , until a solution is found, or until there are no more steps to perform. In that case no solution is found. 

The best available objects (seats/tables/booths/GA Places/...) are determined as follows: 

1. The algorithm selects a group of seats that are on the same row, are located next to each other and leave no orphan seats. From all the possible solutions, it selects the one that is closest to the focal point. 
2. If no solution is found in step 1, the algorithm selects a group of seats that are on the same row and next to each other, possibly leaving orphan seats. Again, if there are multiple solutions, it selects the one that’s closest to the focal point.
3. Then, the algorithm simply selects the required number of seats that are closest to the focal point, without taking into consideration whether or not they’re on the same row. The algorithm makes sure to not leave people sitting alone, unless there's really no other option.
4. If still no solution was found, the algorithm tries to select seats over different sections
5. Up until this point, only seats (either at a table or in a row) were taken into account. If no solution has been found yet, this step will select the best available booths or tables. Of course, tables will only be selected if they are selectable, i.e. if they are bookable by table. Tables where only the individual seats are selectable will not be taken into account in this step. 
6. And finally, as a last step, the general admission (GA) areas are scanned for free spots, as always starting with the one closest to the focal point. 
7. If, at this point, there is no solution, then the API returns 400 Bad Request.

Some notes: 
* The above algorithm will never ever select seats (or GA places or tables or booths) that do not belong to one of the categories that are passed in as a parameter. This means you can use categories as a filter, to bypass steps in the algorithm.  
An example. Suppose your chart contains both GA areas and seats in blocks of rows. And to simplify, let’s assign “Category A” to all seats, and “Category B” to all General Admission areas. In this case, you can select the best available GA places, even if there are plenty of free seats left, simply by instructing the Best Available algorithm to only select places in Category B, which effectively bypasses step 1-4 of the algorithm. 
* The algorithm will always select just a single GA. For example, it will *not* select GA1 and GA2 if 2 places are selected, and both GA1 and GA2 have a single place left. 
* Currently, the best available algorithm does not select seats across sections.  

## How to use it





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

POST https://api-{region}.seatsio.net/events/{eventKey}/actions/book

POST https://api-{region}.seatsio.net/events/{eventKey}/actions/hold
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->events->changeBestAvailableObjectStatus("event1", 10, "myCustomStatus", ["balcony", "stalls"]);

$seatsioClient->events->bookBestAvailable("event1", 10, ["balcony", "stalls"]);

$seatsioClient->events->holdBestAvailable("event1", 10, holdToken, ["balcony", "stalls"]);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Events.ChangeObjectStatus("event1", new BestAvailable(10, new [] { "balcony", "stalls" }, "myCustomStatus");
                                              
Client.Events.Book("event1", new BestAvailable(10, new [] { "balcony", "stalls" });
                   
Client.Events.Hold("event1", new BestAvailable(10, new [] { "balcony", "stalls" }, holdToken);
```

</TabItem>
<TabItem value='java'>

```java
client.events.changeObjectStatus(
  "event1", 
  new BestAvailable(10, Arrays.asList("balcony", "stalls")), 
  "myCustomStatus"
);

client.events.book(
  "event1", 
  new BestAvailable(10, Arrays.asList("balcony", "stalls")) 
);

client.events.hold(
  "event1", 
  new BestAvailable(10, Arrays.asList("balcony", "stalls")),
  holdToken
);
```

</TabItem>
<TabItem value='python'>

```python
client.events.change_best_available_object_status("event1", 
    number=10, 
    categories=["balcony", "stalls"], 
    status="myCustomStatus")

client.events.book_best_available("event1", 
    number=10, 
    categories=["balcony", "stalls"])

client.events.hold_best_available("event1", 
    number=10,
    holdToken,
    categories=["balcony", "stalls"])
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.events.change_best_available_object_status 'event1', 10, nil, categories: ['balcony', 'stalls'], status: 'myCustomStatus'

client.events.book_best_available 'event1', 10, categories: ['balcony', 'stalls']

client.events.hold_best_available 'event1', 10, holdToken, categories: ['balcony', 'stalls']
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.events.changeBestAvailableObjectStatus('eventKey', 10, 'myCustomStatus', ['balcony', 'stalls']);

await client.events.bookBestAvailable('eventKey', 10, ['balcony', 'stalls']);

await client.events.holdBestAvailable('eventKey', 10, holdToken, ['balcony', 'stalls']);


```

</TabItem>
</Tabs>





## Request



```javascript
{
    "bestAvailable": {
        number: 2,
        categories: ["balcony", "stalls"],
        extraData: [{"userId": "123"}, {"userId": "456"}],
        ticketTypes: ["adult", "child"]
    }
}
```



```javascript
// Temporarily holding best available seats
{
    "bestAvailable": {
        number: 2
    },
    "holdToken": "wvXbB9MlHt"
}
```



```javascript
// Finding best available objects within channel
{
    "bestAvailable": {
        number: 2
    },
    "channelKeys": ["28378c14-ae6a-46a4-ada4-9c745a45e018"]
}
```

* **bestAvailable.number** the number of objects to book (required)
* **bestAvailable.categories** optional array of categories from which the best available objects should be picked. Can be either category keys or category labels.
* **bestAvailable.extraData** optional array of [extraData](#core-resources-objects-extra-data) elements. The first extraData element gets assigned to the first best available object, the second extraData element to the second best available object and so on. That's why the number of extraData elements must match the number of requested objects.
* **bestAvailable.ticketTypes** optional array of ticket type strings. The first ticket type gets assigned to the first best available object, the second ticket type to the second best available object and so on. That's why the number of ticket types must match the number of requested objects.
* **holdToken** <i>(optional)</i>: the hold token must be supplied when temporarily holding best available objects.
* **orderId** *(optional)*: an order id, defined by yourself, to be able to [retrieve the objects IDs per order](/docs/api/detailed-reports#detailed-report-by-order-id) later on.
* **keepExtraData** *(optional)*: boolean. If set to true, the existing extra data doesn't get cleared
* **channelKeys** <i>(optional)</i>: an array of channel key strings. The best available algorithm will only look for objects within those channels. Pass in `NO_CHANNEL` to allow finding best available objects without a channel.
* **ignoreChannels** <i>(optional)</i>: if true, the best available algorithm searches across all channels.
Should not be used in combination with `channelKeys`.

## Response

200 OK: if everything went ok and the best available seats were booked/held/changed status. 
400 Bad Request: if there were not enough available seats, if there was no focal point specified on the seating chart, or for other reasons. Check the response body for details. 

```javascript
{
    "objects": ["A-1", "A-2"],
  	"objectDetails": {
      "A-3": {
        "label": "A-1",
        "labels": {
          "own": {
            "label": "1",
            "type": "seat"
          },
          "parent": {
            "label": "Row A",
            "type": "row"
          },
        },
        "ids": {
          "own": "1",
          "parent": "A"
        },
        "status": "booked",
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
      },
      ...
    }
    "nextToEachOther": true
}
```


* **objects**: array of strings, containing the labels of the objects that were chosen as best available
* **objectDetails**: same as in the [change object status response](/docs/api/custom-object-status#section-response).
* **nextToEachOther**: boolean that indicates if the best available seats are next to each other. When the algorithm picks booths or tables, nextToEachOther is not present in the response.




:::caution Warning
Note that for now, bestAvailable cannot be used when booking objects in multiple events at once (season tickets).
:::

