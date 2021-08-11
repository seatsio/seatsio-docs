---
title: "Extra data"
slug: "/api/extra-data"
hidden: false
createdAt: "2018-08-01T12:53:10.410Z"
updatedAt: "2019-08-21T09:28:02.829Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sometimes it's necessary to pass in some custom data when changing the object status. For example, you might need to store the name of the person that booked a seat, to use in the tooltip of a rendered chart.

:::caution Extra data is public data
When rendering your floor plan, anything you store in extra data is made available to the client through callbacks, such as [onObjectSelected](/docs/renderer/events-onobjectselected/), [objectColor](/docs/renderer/config-objectcolor/), and others.

Therefore, you should consider extra data to be **public data**, and never use it to store information that can identify individual users (names, emails, etc) in clear text. In general, technical identifiers without context are fine, as long as they can't be used to access sensitive data through other parts of your system.

In short: think twice about what you store in extraData :) 
:::

    
   
`/change-object-status`, `/book`, `/release` and `/hold` take an optional extraData object for each object ID in the request. `extraData` must be a JSON object with key value pairs, not a JSON primitive.

```javascript
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5', 'extraData': { 'userId': '123' }},
        { 'objectId': 'A-6', 'extraData': { 'userId': '456' }}
    ]
}
```





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
$objects = [
  ["objectId" => "A-5", "extraData" => ["userId" => "123"]],
  ["objectId" => "A-6", "extraData" => ["userId" => "456"]]
];
$seatsioClient->events->book("event1", $objects);
```

</TabItem>
<TabItem value='csharp'>

```csharp
var objects = new [] {
    new ObjectProperties("A-5", new Dictionary<string, object> {{"userId", "123"}}),
    new ObjectProperties("A-6", new Dictionary<string, object> {{"userId", "456"}})
};
Client.Events.Book("event1", objects);
```

</TabItem>
<TabItem value='java'>

```java
List<ObjectProperties> objects = Arrays.asList(
    new ObjectProperties("A-5", ImmutableMap.of("userId", "123")),
    new ObjectProperties("A-6", ImmutableMap.of("userId", "456"))
);
client.events.book("event1", objects);
```

</TabItem>
<TabItem value='python'>

```python
objects = [
    ObjectProperties("A-5", extra_data={"userId": "123"}),
    ObjectProperties("A-6", extra_data={"userId": "456"})
]
client.events.book("event1", objects)
```

</TabItem>
<TabItem value='ruby'>

```ruby
objects = [
  {:objectId => 'A-5', :extraData => {"userId": "123"}},
  {:objectId => 'A-6', :extraData => {"userId": "456"}}
]

client.events.book('event1', objects)
```

</TabItem>
<TabItem value='javascript'>

```javascript
let objects = [
  {'objectId' : 'A-5', 'extraData' : {'userId' : '123'}}, 
  {'objectId' : 'A-6', 'extraData' : {'userId' : '456'}}
];

await client.events.book('eventKey', objects);
```

</TabItem>
</Tabs>

When changing object status, `extraData` gets cleared. To avoid that, pass in the `keepExtraData` flag: 

```javascript
// /book, /release, /hold or /change-object-status
{
    'objects': [
        { 'objectId': 'A-5'},
        { 'objectId': 'A-6'}
    ],
    'keepExtraData': true
}
```






### Updating extra data
You can update extra data for objects without changing their status too. Check [https://docs.seats.io/docs/api-update-extra-data-for-an-object](/docs/api/update-extra-data-for-an-object) and [https://docs.seats.io/docs/api-update-extra-data-for-multiple-objects](/docs/api/update-extra-data-for-multiple-objects) for more information. 

