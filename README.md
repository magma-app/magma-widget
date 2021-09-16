![Logo of Magma](https://magma-assets.s3.eu-west-3.amazonaws.com/banner_magma.png)

Magma enables campuses to attract top new students by leveraging their communities' network through a referral program app. http://magma.app

# Magma-widget
This repository contains all the scripts for the widget(s)

## Integrate the widget to any website
1. at the end of the \<head> tag (just before \</head>) add the following line:
```html
<script src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget/src/widget.min.js" type="text/javascript"></script>
```
![Head-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction1.png)

2. where you want to embed the widget, add the following line.
```html
<magma-widget identifier="xxxx"></magma-widget>
```
![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction2.png)

3. replace "xxxxx" with "identifier_we_have_provided_you". 
To find YOUR identifier, please refer to the information provided during the setup with Magma.
```html
<magma-widget identifier="identifier_we_have_provided_you"></magma-widget>
```
![Identifier-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction3.png)


## Credits
Magma's widget tool is owned and maintained by Magma SAS. If you have any problems, you can contact us directly to hi@magma.app or chat with us on [Magma](https://www.magma.app/).
