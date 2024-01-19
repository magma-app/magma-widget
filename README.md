![Logo of Magma](public/logo.png)

# Magma widget

This repository contains all the instructions for the widget(s) integration.

# Table of Contents

1. [How integrate the widget (after January 2023)](#current-version)
2. [Implementing the block integration](#block)
3. [Credits](#credits)

## 1. Integrate the widget on any website <a name="current-version"></a>

1. at the end of the `<head>` tag (just before `</head>`) add the following line:

```html
<script
  src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget/initializer.js"
  async
></script>
```

2. at the begining of your `<body>` tag, add one of the 2 following lines.

If you have set multiple campaigns on your admin dashboard, you should add the following line

```html
<script>
  window.magma_app = [
    {
      type: "organizationUuid",
      uuid: "xxxx",
      integrationUuid: "xxxx",
    },
  ];
</script>
```

If you have set only one campaign on your admin dashboard or if you want to directly redirect to a campaign, you should add the following line

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "xxxx",
      integrationUuid: "xxxx",
    },
  ];
</script>
```

3. replace "xxxxx" with the organization uuid or the campaign uuid
   > To find YOUR organization/campaign uuid and your integration uuid, please refer to the information on you admin dashboard. If you can't find it, please contact us.

```html
<script>
  window.magma_app = [
    {
      type: "organizationUuid",
      uuid: "YOUR_ORGANIZATION_UUID",
      integrationUuid: "YOUR_INTEGRATION_UUID",
    },
  ];
</script>
```

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "YOUR_CAMPAIGN_UUID",
      integrationUuid: "YOUR_INTEGRATION_UUID",
    },
  ];
</script>
```

4. you want to add different multiple widgets on the same page, by doing the following:

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "YOUR_CAMPAIGN_UUID",
      integrationUuid: "FIRST_INTEGRATION_UUID",
    },
    {
      type: "campaignUuid",
      uuid: "YOUR_CAMPAIGN_UUID",
      integrationUuid: "SECOND_INTEGRATION_UUID",
    },
    {
      type: "campaignUuid",
      uuid: "YOUR_CAMPAIGN_UUID",
      integrationUuid: "THIRD_INTEGRATION_UUID",
    },
    // and so on...
  ];
</script>
```

4. it's done! Now your campaigns are accessible to your website's visitors :)

## 2. Implementing the block integration <a name="block"></a>

![Block Integration](public/block.png)

For embedding the Magma Widget, you'll need to designate a specific area of your webpage. This area is marked by a container element, such as a `div`, with a specific `id` attributed to it. Follow the steps below:

1. Inside your `<body>` HTML tag, where you want the block integration to appear, insert an empty `div` element with the `id="magma-widget_block"`

```html
<div id="magma-app_block" style="width: 100%; height: 350px;"></div>
```

2. Ensure that this `div` is not nested within other elements that might restrict its size or visibility.

3. The widget is designed to be responsive, adapting to the size of its container `div`. It is recommended to set an appropriate width and height to suit the layout of your page.

> Responsiveness: a breakpoint is set at 768px width; the widget UI will adjust for optimal display on mobile devices versus larger screens as follows:

> ![Block Mobile Integration](public/block_mobile.png)

## 3. Credits <a name="credits"></a>

Magma's widget tool is owned and maintained by Magma S.A.S. If you have any problems, you can contact us directly to [hi@magma.app](mailto:hi@magma.app) or chat with us on [Magma](https://www.magma.app/).
