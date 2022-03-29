### Pixellating Images using Nextjs and Cloudinary

## Introduction

This article demonstrates how to use Nextjs and Cloudinary to create an image pixellation transformation.  
Cloudinary will enable us to achieve pixelation programmatically without designer apps using its own [SDK](https://cloudinary.com/documentation/cloudinary_sdks)  tool.

## Codesandbox

Check the final demo on [Codesandbox](/).
<CodeSandbox
title="mergevideos"
id=" "
/>

You can also find  the github repositoryusing [Github](/).

## Prerequisites

Entry-level javascript and React/Nextjs knowledge.


## Cloudinary

[Cloudinary](https://cloudinary.com/?ap=em)  reffers to  an end-to-end image- and video-management tool for various websites and mobile applications. It constitutes a wide range of services including online storage, image and video manipulations and optimizations e.t.c.
In this article , we explore one of cloudinary's transformation capabilities, that is, the image pixelation feature. 

For more on cloudinary's comprehensive APIs and administration capabilities, explore the following [link](https://cloudinary.com/documentation/react_image_transformations).

Let's begin!

## Project Setup

Create a new nextjs project using `npx create-next-app pixelate`  in your terminal.
Head to the directory using `cd pixelate`.

We will handle all our code in the `pages/index` directory. 

## Dependancies

In order to create a cloudinary transformation, we need to import the `@cloudinary/url-gen` package, then pass the transformed image object to th `cldImg` attribute in your `advancedImage` component. The `advancedImage` component renders the image on your website.

Begin by installing the package dependancies

```
npm install @cloudinary/url-gen @cloudinary/react
```

Import them in the `pages/index` component. 

```
"pages/index"

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
```
For our transformations, we will require the `fill` and the `pixelate` action. Add them to your imports like below

```
"pages/index"

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

import { fill } from "@cloudinary/url-gen/actions/resize";
import { pixelate } from "@cloudinary/url-gen/actions/effect";

```

With our imports ready, we can begin working on the root function. 
Start by creating a cloudinary instance and setting your cloud name

```
"pages/index"

  const sample = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

```

Next we include our image object. In our case, we will instanciate a Cloudinary image object using `docs/models`
I'll create two of them: 

    -`original` => Shows the original image version
    -`pixelated` => Shows the pixelated version of original image.


At this point, we can transform our image.  The prixellation effect very simple. Select the image you want to transform. In our case `pixelated`. Then add the transformation using the effect method. 

```
"pages/index"

pixelated.effect(pixelate(10))
```

We will also resize our images at this point. Use the following code to resize the images

```
"pages/index"

 original.resize(fill().width(300).height(300));
  pixelated.resize(fill().width(300).height(300));
```

We are ready to dender our components.
Add the code below in the return statement

```
    <div className="container">
      <h1>Pixellating Images using Nextjs and Cloudinary</h1>
      <div className="row">
        <div className="column">
          <AdvancedImage className="image" cldImg={original} type="fetch" />
        </div>
        <div className="column">
          <AdvancedImage className="image" cldImg={pixelated} type="fetch" />
        </div>
      </div>
    </div>
```

The code above will render the components in two separated columns of a single row. The view will be like follows:

![complete UI](https://res.cloudinary.com/dogjmmett/image/upload/v1648544697/sample_s6vdnz.png "complete UI")

For more on the UI css features check the github repo provided at the start of the project. 

That completes the project. Ensure to explore this article to enjoy the experience . 
Happy coding!