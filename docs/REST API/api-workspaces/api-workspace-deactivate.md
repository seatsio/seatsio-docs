---
title: "Deactivate workspace"
slug: "/api/workspace-deactivate"
hidden: false
createdAt: "2020-07-03T15:59:00.375Z"
updatedAt: "2020-07-03T16:03:30.262Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdminKeyAuth from '../snippets/admin-key-auth.md';

Workspaces are either active or inactive. All API calls on inactive workspaces fail (except for the one that activates the workspace again). That includes creating charts, creating events and booking seats. An inactive workspace is completely disabled.

The call that lists workspaces returns both active and inactive ones. 

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
POST https://api-{region}.seatsio.net/workspaces/{key}/actions/deactivate
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->deactivate($key);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.Deactivate(key);

```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.deactivate(key);
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.deactivate(key)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.deactivate key: key
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.deactivate(key);

```

</TabItem>
</Tabs>





```shell
curl -X POST https://api-{region}.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5/actions/deactivate \
-u anAdminKey: -X POST
```

**Response**

204 - No Content
