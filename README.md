# ENGLISH VERSION 
![Logo of Magma](public/logo.png)

# Magma integrations

This repository contains all the instructions to integrate of a **widget**, **banner** or **block**

# Table of Contents

1. [Different types of integration](#different-integration)
2. [Implementing the integration you want on any website](#current-version)
3. [Implementing the block integration](#block)
4. [Credits](#credits)

## 1. Different types of integration <a name="different-integration"></a>

We have created 3 types of integration. The widget, the banner and the block.

TODO: add photo + link to pages with the integration

> You can choose to integrate only one of them or all, it's up to you. In the rest of the documentation we'll show you how to integrate them into your website.

## 2. Implementing the integration you want on any website <a name="current-version"></a>

### 1. Add the main script 

at the end of the `<head>` tag (just before `</head>`) add the following line:

```html
<script
  src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget/initializer.js"
  async
></script>
```

### 2. Set the following script in your `<body>` tag

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

### 3. replace "xxxx" with the campaignUuid and the integrationUuid
   > To find YOUR campaignUuid and your integrationUuid, please refer to the information on you [admin dashboard](https://admin.magma.app/). If you can't find it, please contact us directly to [hi@magma.app](mailto:hi@magma.app) or chat with us on [Magma](https://www.magma.app/).

- Sign-in to specific campaign (`type: "campaignUuid"`)

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

### 4. Extra step for the block integration
![Block Integration](public/block.png)
If you want to integrate the block, you'll need to designate a specific area of your webpage. This area is marked by a container element, such as a `div`, with a specific `id` attributed to it.
Inside your `<body>` HTML tag, where you want the block integration to appear, insert an empty `div` element with the `id="magma-app_block"`

```html
<div id="magma-app_block" style="width: 100%; height: 350px;"></div>
```


### 5. (optional) Add multiple integrations on the same page

If you want to add multiple integrations, you can update the previous sscript and add information inside, just as follow:

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "FIRST_CAMPAIGN_UUID",
      integrationUuid: "FIRST_INTEGRATION_UUID",
    },
    {
      type: "campaignUuid",
      uuid: "SECOND_CAMPAIGN_UUID",
      integrationUuid: "SECOND_INTEGRATION_UUID",
    },
    // and so on...
  ];
</script>
```

It's done! Now your campaigns are accessible to your website's visitors :)

## Implementing the block integration <a name="block"></a>

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


# VERSION FRANÇAISE
![Logo de Magma](public/logo.png)

# Widget Magma

Ce dépôt contient toutes les instructions pour l'intégration du(des) widget(s).

# Table des matières

1. [Comment intégrer le widget (après janvier 2024)](#version-actuelle)
2. [Implémentation de l'intégration en bloc](#bloc)
3. [Crédits](#credits)

## 1. Intégrer le widget sur n'importe quel site <a name="version-actuelle"></a>

1. À la fin de la balise `<head>` (juste avant `</head>`), ajoutez la ligne suivante :

```html
<script
  src="https://cdn.jsdelivr.net/gh/magma-app/magma-widget@latest/src/widget/initializer.js"
  async
></script>
```

2. Au début de votre balise `<body>`, ajoutez l'une des deux lignes suivantes.

Si vous souhaitez laisser le candidat choisir la campagne à laquelle il souhaite participer, utilisez la ligne suivante :

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

Si vous avez défini une seule campagne sur votre [tableau de bord administrateur](https://admin.magma.app/) ou si vous souhaitez rediriger directement vers une campagne, ajoutez la ligne suivante :

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

3. Remplacez "xxxxx" par l'UUID de l'organisation ou de la campagne.
   > Pour trouver votre UUID d'organisation/campagne et votre UUID d'intégration, veuillez vous référer aux informations sur votre [tableau de bord administrateur](https://admin.magma.app/). Si vous ne pouvez pas le trouver, veuillez nous contacter directement à [hi@magma.app](mailto:hi@magma.app) ou discuter avec nous sur [Magma](https://www.magma.app/).

- Connectez-vous à une campagne spécifique (`type: "campaignUuid"`)

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "VOTRE_UUID_CAMPAGNE",
      integrationUuid: "VOTRE_UUID_INTEGRATION",
    },
  ];
</script>
```

- Laissez le candidat choisir la campagne à laquelle il souhaite s'inscrire (`type: "organizationUuid"`)

```html
<script>
  window.magma_app = [
    {
      type: "organizationUuid",
      uuid: "VOTRE_UUID_ORGANISATION",
      integrationUuid: "VOTRE_UUID_INTEGRATION",
    },
  ];
</script>
```

4. Si vous souhaitez ajouter plusieurs widgets différents sur la même page, faites ce qui suit :

```html
<script>
  window.magma_app = [
    {
      type: "campaignUuid",
      uuid: "PREMIER_UUID_CAMPAGNE",
      integrationUuid: "PREMIER_UUID_INTEGRATION",
    },
    {
      type: "campaignUuid",
      uuid: "DEUXIEME_UUID_CAMPAGNE",
      integrationUuid: "DEUXIEME_UUID_INTEGRATION",
    },
    {
      type: "organizationUuid",
      uuid: "VOTRE_UUID_ORGANISATION",
      integrationUuid: "TROISIEME_UUID_INTEGRATION",
    },
    // et ainsi de suite...
  ];
</script>
```

4. C'est fait ! Maintenant, vos campagnes sont accessibles aux visiteurs de votre site web :)

## 2. Implémentation de l'intégration en bloc <a name="bloc"></a>

![Intégration en bloc](public/block.png)

Pour intégrer le Widget Magma, vous devrez désigner une zone spécifique de votre page Web. Cette zone est marquée par un élément conteneur, tel qu'une balise `div`, avec un `id` spécifique qui lui est attribué. Suivez les étapes ci-dessous :

1. À l'intérieur de votre balise `<body>` HTML, où vous souhaitez que l'intégration en bloc apparaisse, insérez un élément `div` vide avec l'`id="magma-widget_block"`

```html
<div id="magma-app_block" style="width: 100%; height: 350px;"></div>
```

2. Assurez-vous que ce `div` n'est pas imbriqué dans d'autres éléments qui pourraient restreindre sa taille ou sa visibilité.

3. Le widget est conçu pour être réactif, s'adaptant à la taille de son conteneur `div`. Il est recommandé de définir une largeur et une hauteur appropriées pour s'adapter à la mise en page de votre page.

> Réactivité : un point de rupture est défini à une largeur de 768 pixels ; l'interface utilisateur du widget s'ajustera pour un affichage optimal sur les appareils mobiles par rapport aux écrans plus grands comme suit :

> ![Intégration mobile en bloc](public/block_mobile.png)

## 3. Crédits <a name="credits"></a>

L'outil de widget de Magma est détenu et maintenu par Magma S.A.S. Si vous rencontrez des problèmes, vous pouvez nous contacter directement à [hi@magma.app](mailto:hi@magma.app) ou discuter avec nous sur [Magma](https://www.magma.app/).

