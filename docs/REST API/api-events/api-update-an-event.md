---
title: "Update an event"
slug: "/api/update-an-event"
hidden: false
createdAt: "2018-08-02T09:57:30.397Z"
updatedAt: "2021-02-05T06:59:12.710Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';




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
POST https://api-{region}.seatsio.net/events/{eventKey}
```

</TabItem>
<TabItem value='php'>

```php
// updating chart key
$seatsioClient->events->update("event34", "newChartKey");

// updating event key
$seatsioClient->events->update("event34", null, "newEventKey");

// updating table booking config
$seatsioClient->events->update(
  "event34", null, null,
  TableBookingConfig::custom(["T1" => "BY_TABLE", "T2" => "BY_SEAT"])
);

// assigning a social distancing ruleset key
$seatsioClient->events->update("event34", null, null, null, "newSocialDistancingRulesetKey");

// removing the social distancing ruleset key
$seatsioClient->events->update("event34", null, null, null, "");
```

</TabItem>
<TabItem value='csharp'>

```csharp
// updating chart key
Client.Events.Update("event34", "newChartKey", null);

// updating event key
Client.Events.Update("event34", null, "newEventKey");

// updating table booking config
Client.Events.Update(
  "event34", null, null,
  new Dictionary<string, string> {{"T1", "BY_TABLE"}, {"T2", "BY_SEAT"}}
);

// assigning a social distancing ruleset key
Client.Events.Update("event34", null, null, null, "newSocialDistancingRulesetKey");

// removing the social distancing ruleset key
Client.Events.Update("event34", null, null, null, "");
```

</TabItem>
<TabItem value='java'>

```java
// updating chart key
client.events.update("event34", "newChartKey", null);

// updating event key
client.events.update("event34", null, "newEventKey");

// updating table booking config
client.events.update(
  "event34", null, null,
  TableBookingConfig.custom(ImmutableMap.of("T1", BY_TABLE, "T2", BY_SEAT))
);

// assigning a social distancing ruleset key
client.events.update("event34", null, null, null, "newSocialDistancingRulesetKey");

// removing the social distancing ruleset key
client.events.update("event34", null, null, null, "");
```

</TabItem>
<TabItem value='python'>

```python
# updating chart key
client.events.update("event34", chart_key="newChartKey")

# updating event key
client.events.update("event34", event_key="newEventKey")

# updating table booking config
client.events.update("event34", table_booking_config=TableBookingConfig.custom({"T1": "BY_TABLE", "T2": "BY_SEAT"}))

# assigning a social distancing ruleset key
client.events.update("event34", social_distancing_ruleset_key="newSocialDistancingRulesetKey")

# removing the social distancing ruleset key
client.events.update("event34", social_distancing_ruleset_key="")
```

</TabItem>
<TabItem value='ruby'>

```ruby
# updating chart key
client.events.update key: "event34", chart_key: "newChartKey"

# updating event key
client.events.update key: "event34", event_key: "newEventKey"

# updating table booking config
client.events.update key: "event34", table_booking_config: Seatsio::TableBookingConfig::custom({'T1' => 'BY_TABLE', 'T2' => 'BY_SEAT'})

# assigning a social distancing ruleset key
client.events.update key: "event34", social_distancing_ruleset_key: "newSocialDistancingRulesetKey"

# removing the social distancing ruleset key
client.events.update key: "event34", social_distancing_ruleset_key: ""
```

</TabItem>
<TabItem value='javascript'>

```javascript
// updating chart key
await client.events.update('eventKey', 'newChartKey');

// updating event key
await client.events.update('eventKey', null, 'newEventKey');

// updating table booking config
await client.events.update(
  'eventKey', null, null,
  TableBookingConfig.custom({ T1: 'BY_TABLE', T2: 'BY_SEAT' })
);

// assigning a social distancing ruleset key
await client.events.update('eventKey', null, null, null, 'newSocialDistancingRulesetKey');

// removing the social distancing ruleset key
await client.events.update('eventKey', null, null, null, '');
```

</TabItem>
</Tabs>





```javascript
{
    "chartKey": "newChartKey",
    "eventKey": "newEventKey",
    "tableBookingConfig": {
      "mode": "CUSTOM",
      "tables": {
      	"T1": "BY_TABLE",
      	"T2": "BY_SEAT",
      	"T3": "BY_TABLE"
      }
    },
    "socialDistancingRulesetKey": "newSocialDistancingRulesetKey"
}
```

All fields are optional. If, for example, you don't specify an eventKey, the key of the event is not modified.

Have a look at the docs for [creating an event](/docs/api/create-an-event) to know how tableBookingConfig works.

socialDistancingRulesetKey is the UUID which identifies a social distancing ruleset. You can get that key by [retrieving the chart](/docs/api/retrieve-a-chart) for the event.

By passing in the empty string as socialDistancingRulesetKey, you remove the social distancing ruleset from the event.

```shell
curl https://api-{region}.seatsio.net/events/event34 \
-u aSecretKey: -X POST -H 'Content-Type: application/json' -d '{"chartKey": "4250fffc-e41f-c7cb-986a-2c5e728b8c28"}'
```


**Response**

```javascript
{
    "id": 168,
    "key": "newEventKey",
    "tableBookingConfig": {
      "mode": "CUSTOM",
      "tables": {
      	"T1": "BY_TABLE",
      	"T2": "BY_SEAT",
      	"T3": "BY_TABLE"
      }
    },
    "chartKey": "newChartKey",
    "supportsBestAvailable": true,
    "forSaleConfig": {
        "forSale": false,
        "objects": ["section1"],
        "categories": []
    },
    "channels": [
      {
        "name": "Channel 1",
        "key": "8950dddc-e51f-c7cb-986a-2c5e728b8c21",
        "color": "#aaaaaa",
        "objects": ["A-1", "A-2"]
      }
    ],
    "socialDistancingRulesetKey": "newSocialDistancingRulesetKey",
    "createdOn": "2017-03-05T10:58:44.715Z",
    "updatedOn": "2017-04-05T10:58:44.615Z"
}

```

