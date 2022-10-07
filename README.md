![Logo of Magma](https://magma-assets.s3.eu-west-3.amazonaws.com/banner_magma.png)


# Magma widget

This repository contains all the instructions for the widget(s) integration.
![Button-presentation](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-image.png)

# Table of Contents
1. [How integrate the widget (after September 2022)](#current-version)
2. [More options](#more-options)
2. [[Legacy] how integrate the widget (before September 2022)](#Legacy-version)
<br>
## Integrate the widget on any website  <a name="current-version"></a>

1. at the end of the `<head>` tag (just before `\</head>`) add the following line:

```html
<script src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget-v3.min.js" type="text/javascript"></script>
```

![Head-step](https://magma-assets.s3.eu-west-3.amazonaws.com/script+head+v3.png)

2. where you want to embed the widget, add one of the 2 following lines.

If you have set multiple campaigns on your admin dashboard, you should add the following line

```html
<magma-widget identifier-organization="xxxx"></magma-widget>
```

If you have set only one campaign on your admin dashboard or if you want to directly redirect to a campaign, you should add the following line
```html
<magma-widget identifier-campaign="xxxx"></magma-widget>
```

![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/v3+with+identifier.png)

3. replace "xxxxx" with the organization identifier or the campaign identifier
To find YOUR organization/campaign identifier, please refer to the information on you admin dashboard. If you can't find it, please contact us.
```html
<magma-widget identifier-organization="YOUR_IDENTIFIER"></magma-widget>
```
```html
<magma-widget identifier-campaign="YOUR_IDENTIFIER"></magma-widget>
```
![Identifier-step](https://magma-assets.s3.eu-west-3.amazonaws.com/v3+final+identifier.png)
<br>

4. it's done! You now have a button accessible by your website's visitors :)
![Button-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction5-exemple.png)
![Window-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction4.png)

<br>
## More options <a name="more-options"></a>

### Chatbot behavior

💡 If you want to use the widget with a chatbot behavior, add **"fab"** as shown below

```html
<magma-widget identifier="xxxx" fab></magma-widget>
```

![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction2-fab.PNG)

Then, add the line just before the end of the body tag. \
⚠️ Be careful, do not add the line into a div, as precised into the above screenshot.
![fab-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-option-1-exemple.png)

### Change button label

You can change the default label for the button by adding the **name** attribute as shown in the example below

```html
<magma-widget identifier="xxxx" name="My custom label"></magma-widget>
```

You can also manage the language by adding special attributes **name**-*"the language local"*.
For now we support french (fr) and english (en). See example below

```html
<magma-widget identifier="xxxx" name-fr="Mon label personnalisé" name-en="My custom label"></magma-widget>
```


## [Legacy] how integrate the widget (before September 2022) <a name="Legacy-version"></a>

1. at the end of the `<head>` tag (just before `\</head>`) add the following line:

```html
<script src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget.min.js" type="text/javascript"></script>
```

![Head-step](https://magma-assets.s3.eu-west-3.amazonaws.com/script+head+legacy.png)

2. where you want to embed the widget, add the following line.

```html
<magma-widget identifier="xxxx"></magma-widget>
```

![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/v2+with+identifier.png)

3. replace "xxxxx" with the identifier provided during the setup with Magma. If you can't find it, please contact us.
```html
<magma-widget identifier="YOUR_IDENTIFIER"></magma-widget>
```

![Identifier-step](https://magma-assets.s3.eu-west-3.amazonaws.com/v3+with+identifier.png)

4. it's done! You now have a button accessible by your website's visitors :)
![Button-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction5-exemple.png)
![Window-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction4.png)

## Credits

Magma's widget tool is owned and maintained by Magma S.A.S. If you have any problems, you can contact us directly to [hi@magma.app](mailto:hi@magma.app) or chat with us on [Magma](https://www.magma.app/).
