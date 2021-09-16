---
title: "features"
slug: "/embedded-designer/configuration-features"
hidden: false
createdAt: "2018-08-21T13:02:56.568Z"
updatedAt: "2021-02-08T13:35:34.543Z"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Type**: object  

By passing in a `features` object, you can control the availability (enabled/disabled) and behaviour (read-only vs editable) of features.

## Enabled vs disabled

Enabled features have a button in the toolbar, disabled features are not visible to your users. 

To control which features are available to your users, you have two options: either you have all features enabled by default and disable some, or you disable all features by default and explicitly enable those you want enabled. The difference between these options is that in the former case, new features will automatically be available to your users. In the latter, new features won't be available until you explicitly enable them.

Features that can be enabled/disabled are: 

* `nodes` (node tool)
* `labeling` (labeling tool)
* `focalPoint` (focal point tool)
* `rows` (rows tool)
* `tables` (tables tool)
* `booths` (booths tool)
* `generalAdmissionAreas` (general admission tool)
* `shapes` (shapes tool)
* `texts` (texts tool)
* `sections` (sections tool)
* `icon` (icons tool)
* `images` (images tool)
* `viewFromYourSeat`
* `firstTimeTutorial`
* `backgroundImage`
* `referenceChart`
* `categoryList`
* `objectProperties` (properties of selected objects on the right (row curve, number of seats at a table etc.))
* `contextActions` (buttons on the top right (flip, duplicate, delete))
* `publishedSectionLabel`: if disabled, this makes the label field for sections and GA areas read-only. There are 2 exceptions: the label is always editable for charts without events, and for sections or GA areas you just added (in the current designer session).
* `publishing`: if disabled, the 'publish' button is not visible. Recommended if you want to publish through our API from within your own application.
    
To have all features enabled by default, and disable some, you need to pass in features.disabled, like so:

```javascript
 features: {
     disabled: ['focalPoint', 'backgroundImage', 'rows', 'booths', 'tables']
 }
```

To have all features disabled by default, and enable just some, you use features.enabled instead, like so: 

```javascript
features: {
    enabled: ['rows', 'booths', 'tables', 'texts', 'sections']
}
```

Note that 


:::caution Note
You need to choose one of both: `features.disabled` cannot be used together with `features.enabled`. Doing so will result in a JavaScript error.
:::



## Read-only

Some features' behavior can be made read-only: they are visible, but not editable. These features are:
 
* **chartName**: The chart name is visible, but it's not editable by the user. This is useful if you want to manage chart names in your own web application (by using the seats.io API).
* **categoryList**: In category mode, the user can assign existing categories to seats and other objects, but the category list itself is not editable: categories can't be added or deleted, nor can category labels or colors be edited. This does mean you'll have to manage categories from your own application. [This article](http://support.seats.io/en/articles/2107508-manage-categories-from-your-app) explains in detail how to do just that.  

```javascript
features: {
    readOnly: ['chartName', 'categoryList']
}
```



:::info Tip
`features.enabled` and `features.disabled` can be used together with `features.readOnly` without any problem.
:::

