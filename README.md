![Logo of Magma](https://magma-assets.s3.eu-west-3.amazonaws.com/banner_magma.png)

Magma enables campuses to attract top new students by leveraging their communities' network through a referral program app. <https://magma.app>

# Magma-widget

This repository contains all the instructions for the widget(s) integration.
![Button-presentation](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction6.png)

## Integrate the widget to any website

1. at the end of the \<head> tag (just before \</head>) add the following line:

 ⚠️ If you have setup your campaign:
> - **before September 2022**
```html
<script src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget.min.js" type="text/javascript"></script>
```
> - **after September 2022**, your identifier is your campaign identifier.
```html
<script src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget-v3.min.js" type="text/javascript"></script>
```

![Head-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction1.png)

2. where you want to embed the widget, add the following line.

```html
<magma-widget identifier="xxxx"></magma-widget>
```

![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction2.png)

3. replace "xxxxx" with "identifier_we_have_provided_you".
To find YOUR organization identifier, please refer to the information provided during the setup with Magma. ⚠️ If you have setup your campaign:
```html
<magma-widget identifier="identifier_we_have_provided_you"></magma-widget>
```

![Identifier-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction3.png)

4. it's done! You now have a button accessible by your website's visitors :)
![Button-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction5-exemple.png)
![Window-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction4.png)

## More options

### Chatbot behaviour

💡 If you want to use the widget with a chatbot behaviour, add **"fab"** as shown below

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

The language dynamically displayed in the button will depend on the user's language.
![label-language-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-option-label-language.png)

## Credits

Magma's widget tool is owned and maintained by Magma S.A.S. If you have any problems, you can contact us directly to hi@magma.app or chat with us on [Magma](https://www.magma.app/).
