![Logo of Magma](https://magma-assets.s3.eu-west-3.amazonaws.com/banner_magma.png)

Magma enables campuses to attract top new students by leveraging their communities' network through a referral program app. https://magma.app

# Magma-widget
This repository contains all the instructions for the widget(s) integration.
![Button-presentation](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction6.png)

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

💡 If you want to use the widget with a chatbot behaviour, add **"fab"** as shown below
```html
<magma-widget identifier="xxxx" fab></magma-widget>
```
![Line-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction2-fab.PNG)

Then, add the line just before the end of the body tag. \
⚠️ Be careful, do not add the line into a div, as precised into the above screenshot.

3. replace "xxxxx" with "identifier_we_have_provided_you". 
To find YOUR identifier, please refer to the information provided during the setup with Magma.
```html
<magma-widget identifier="identifier_we_have_provided_you"></magma-widget>
```
![Identifier-step](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction3.png)

4. it's done! You now have a button accessible by your website's visitors :)
![Button-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction5.png)
![Window-result](https://magma-assets.s3.eu-west-3.amazonaws.com/widget-instruction4.png)


## Credits
Magma's widget tool is owned and maintained by Magma SAS. If you have any problems, you can contact us directly to hi@magma.app or chat with us on [Magma](https://www.magma.app/).
