---
title: "Authentication"
slug: "/api/authentication"
hidden: false
createdAt: "2018-07-30T18:27:03.091Z"
updatedAt: "2020-09-29T09:39:59.250Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Intro

When calling the seats.io API, you need to authenticate yourself. To do so, you must include a secret API key in the request.

That secret key can be either

- your [company admin key](https://app.seats.io/company-settings), which grants you permission to make any request, across workspaces (e.g. listing all workspaces).
- or: a [secret workspace key](https://app.seats.io/workspace-settings), which allows you to make requests that operate within a workspace (e.g. booking a seat in that workspace).

:::danger Your secret keys carry many privileges, so it's very important to keep them to yourself!
* Never push a secret key to public repositories on GitHub, BitBucket or the likes.
* Never call the seats.io API from the client's browser (e.g. using `$.ajax`), as this will require you to publicly expose your secret key.
:::

Authentication to the API is performed via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). You should provide the secret key as the username value.
You do not need to provide a password, and if you do, we'll ignore it.

Our [API client libraries](/docs/api/client-libraries) take care of HTTP Basic Auth under the hood.

## Examples

<Tabs
groupId="serverside-code-samples"
defaultValue="php"
values={[
{ label: 'cURL', value: 'curl', },
{ label: 'PHP', value: 'php', },
{ label: 'C#', value: 'csharp', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
{ label: 'Javascript', value: 'javascript', },
]}>

<TabItem value='curl'>

```shell
# for calls within a workspace (e.g. booking a seat)
curl -u <workspace secret key>: https://api-{region}.seatsio.net/charts

# for calls not specific to a workspace (e.g. listing all workspaces)
curl -u <company admin key>: https://api-{region}.seatsio.net/workspaces

# for calls within a workspace (e.g. booking a seat)
# AND calls not specific to a workspace (e.g. listing all workspaces)
curl -u <company admin key>: -H "X-Workspace-Key: <workspace public key>" https://api-{region}.seatsio.net/workspaces
```

</TabItem>
<TabItem value='php'>

```php
use Seatsio\Region;
use Seatsio\SeatsioClient;

// for calls within a workspace (e.g. booking a seat)
$client = new SeatsioClient(Region::EU(), <WORKSPACE SECRET KEY>);

// for calls not specific to a workspace (e.g. listing all workspaces)
$client = new SeatsioClient(Region::EU(), <COMPANY ADMIN KEY>);

// for calls within a workspace (e.g. booking a seat)
// AND calls not specific to a workspace (e.g. listing all workspaces)
$client = new SeatsioClient(Region::EU(), <COMPANY ADMIN KEY>, <WORKSPACE PUBLIC KEY>);
```

</TabItem>
<TabItem value='csharp'>

```csharp
using SeatsioDotNet;

// for calls within a workspace (e.g. booking a seat)
var client = new SeatsioClient(Region.EU, "<WORKSPACE SECRET KEY>");

// for calls not specific to a workspace (e.g. listing all workspaces)
var client = new SeatsioClient(Region.EU, "<COMPANY ADMIN KEY>");

// for calls within a workspace (e.g. booking a seat)
// AND calls not specific to a workspace (e.g. listing all workspaces)
var client = new SeatsioClient(Region.EU, "<COMPANY ADMIN KEY>", "<WORKSPACE PUBLIC KEY>");
```
</TabItem>
<TabItem value='java'>

```java
import seatsio.SeatsioClient;
import seatsio.Region;

// for calls within a workspace (e.g. booking a seat)
SeatsioClient client = new SeatsioClient(Region.EU, "<WORKSPACE SECRET KEY>");

// for calls not specific to a workspace (e.g. listing all workspaces)
SeatsioClient client = new SeatsioClient(Region.EU, "<COMPANY ADMIN KEY>");

// for calls within a workspace (e.g. booking a seat)
// AND calls not specific to a workspace (e.g. listing all workspaces)
SeatsioClient client = new SeatsioClient(Region.EU, "<COMPANY ADMIN KEY>", "<WORKSPACE PUBLIC KEY>");
```

</TabItem>
<TabItem value='python'>

```python
import seatsio

# for calls within a workspace (e.g. booking a seat)
client = seatsio.Client(seatsio.Region.EU(), secret_key="my-workspace-secret-key") 

# for calls not specific to a workspace (e.g. listing all workspaces)
client = seatsio.Client(seatsio.Region.EU(), secret_key="my-company-admin-key") 

# for calls within a workspace (e.g. booking a seat)
# AND calls not specific to a workspace (e.g. listing all workspaces)
client = seatsio.Client(seatsio.Region.EU(), secret_key="my-company-admin-key", workspace_key="my-workspace-public-key") 
```

</TabItem>
<TabItem value='ruby'>

```ruby
require 'seatsio'

# for calls within a workspace (e.g. booking a seat)
client = Seatsio::Client.new(Seatsio::Region.EU(), "my-workspace-secret-key")

# for calls not specific to a workspace (e.g. listing all workspaces)
client = Seatsio::Client.new(Seatsio::Region.EU(), "my-company-admin-key")

# for calls within a workspace (e.g. booking a seat)
# AND calls not specific to a workspace (e.g. listing all workspaces)
client = Seatsio::Client.new(Seatsio::Region.EU(), "my-company-admin-key", "my-workspace-public-key")
```

</TabItem>
<TabItem value='javascript'>

```javascript
import { SeatsioClient, Region } from 'seatsio'

// for calls within a workspace (e.g. booking a seat)
let client = new SeatsioClient(Region.EU(), <WORKSPACE SECRET KEY>)

// for calls not specific to a workspace (e.g. listing all workspaces)
let client = new SeatsioClient(Region.EU(), <COMPANY ADMIN KEY>)

// for calls within a workspace (e.g. booking a seat)
// AND calls not specific to a workspace (e.g. listing all workspaces)    
let client = new SeatsioClient(Region.EU(), <COMPANY ADMIN KEY>, <WORKSPACE PUBLIC KEY>)
```

</TabItem>
</Tabs>

## Raw HTTP

When doing raw HTTP calls, you need to set a header called "Authorization". It's value should be “Basic x”, where x is your secret key with a colon, base64 encoded. 

So:

Steps|Example|
---|---|
1. Take your workspace secret key or company admin key|550e8400-e29b-41d4-a716-446655440000|
2. append a colon (:)|550e8400-e29b-41d4-a716-446655440000:|
3. base64-encode it|NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==|
4. put it in an Authorization header|Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg==|

```shell
curl https://api-{region}.seatsio.net/charts -H "Authorization: Basic NTUwZTg0MDAtZTI5Yi00MWQ0LWE3MTYtNDQ2NjU1NDQwMDAwOg=="
```

### Using the company admin key

When using the company admin key, you can specify the workspace the request applies to. To do so, pass in the `X-Workspace-Key` header. That header should contain the public workspace key.

If you don't provide the `X-Workspace-Key` header, API calls with the company admin key operate on the default workspace for your company.

```shell
curl -u 550e8400-e29b-41d4-a716-446655440000: -H "X-Workspace-Key: c49fe901-c35b-4d5a-a0cf-2b4c6124738b" https://api-{region}.seatsio.net/charts
```
