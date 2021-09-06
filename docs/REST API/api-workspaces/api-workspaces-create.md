---
title: "Create a workspace"
slug: "/api/workspaces-create"
hidden: false
createdAt: "2020-02-27T22:00:24.623Z"
updatedAt: "2020-07-03T16:00:35.910Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdminKeyAuth from '../snippets/admin-key-auth.md';

Creates a workspace. Only the name is required.

<AdminKeyAuth />

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
POST https://api-{region}.seatsio.net/workspaces
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->create("a workspace");
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.Create("a workspace);

```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.create("a workspace");
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.create("a workspace")
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.create name: "a workspace"
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.create('a workspace');

```

</TabItem>
</Tabs>





```javascript
{
    "name": "a workspace",
    "isTest": false
}
```

* **name**: the name of the workspace. Can be any string (including spaces or special characters)
* **isTest**: optional. Defaults to false.

```shell
curl -X POST https://api-{region}.seatsio.net/workspaces \
-u anAdminKey: -X POST -H 'Content-Type: application/json' -d '{"name": "a workspace"}'
```



```javascript
{
    "id": 169,
    "name": "a workspace",
    "key": "18725661-36d6-4755-905a-28ce82d0c2d5",
    "secretKey": "7c647eed-0880-4118-9459-82757579703e",
    "isDefault": true,
    "isTest": false,
    "isActive": true
}

```

