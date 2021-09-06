---
title: "Regenerate secret key of workspace"
slug: "/api/workspaces-regenerate-secret-key"
hidden: false
createdAt: "2020-04-26T22:22:47.954Z"
updatedAt: "2020-04-27T10:28:22.904Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AdminKeyAuth from '../snippets/admin-key-auth.md';

The secret key of a workspace should be kept secret at all times. If it does get compromised, you can generate a new one.

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
POST https://api-{region}.seatsio.net/workspaces/{key}/actions/regenerate-secret-key
```

</TabItem>
<TabItem value='php'>

```php
$seatsioClient->workspaces->regenerateSecretKey($key);
```

</TabItem>
<TabItem value='csharp'>

```csharp
Client.Workspaces.RegenerateSecretKey(key);

```

</TabItem>
<TabItem value='java'>

```java
client.workspaces.regenerateSecretKey(key);
```

</TabItem>
<TabItem value='python'>

```python
client.workspaces.regenerate_secret_key(key)
```

</TabItem>
<TabItem value='ruby'>

```ruby
client.workspaces.regenerate_secret_key key: key
```

</TabItem>
<TabItem value='javascript'>

```javascript
await client.workspaces.regenerateSecretKey(key);

```

</TabItem>
</Tabs>



* **name**: the name of the workspace. Can be any string (including spaces or special characters)

```shell
curl -X POST https://api-{region}.seatsio.net/workspaces/18725661-36d6-4755-905a-28ce82d0c2d5/actions/regenerate-secret-key \
-u anAdminKey: -X POST
```

**Response**

```javascript
{
  secretKey: "79425661-36d6-4755-905a-28ce82d0c8c1"
}
```

