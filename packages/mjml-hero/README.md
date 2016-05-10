## MJ-HERO

<p align="center">
<img src="https://cloud.githubusercontent.com/assets/1830348/15142959/a4fb9d08-16a7-11e6-8870-848374248c26.png" style="width: 600px;" />
</p>

<p align="center">
<img src="https://cloud.githubusercontent.com/assets/1830348/15142998/d95a4342-16a7-11e6-9719-95d16b8224b7.png" style="width: 600px;" />
</p>

``` html

<mjml>
  <mj-body>
    <mj-container>
      <mj-hero
       mode="fixed-height"
       height="265px"
       background-width="600"
       background-height="265px"
       background-url="http://i.imgur.com/lHOvxs4.jpg"
       background-position="center center"
       background-color="#2a3448"
       padding="20px">
        <mj-hero-content
           width="370px"
           align="left"
           background-color="#ffffff">
           <mj-text font-family="Helvetica" align="left">
             Hello World !
           </mj-text>
         </mj-hero-content>
      </mj-hero>
    </mj-container>
  </mj-body>
</mjml>

```
Display a section with a background image and some content inside (mj-text, mj-button, mj-image ...)

<aside class="notice">
The height attribute is required only for the fixed-height mode

The background position does not work in mode fluid-height and on outlook.com

For better result we encourage you to use a background image with a 600px width and always specify a fallback background color, in case the user email client does not support background images.
</aside>

attribute           | unit                                | description                                                          | default value
--------------------|-------------------------------------|----------------------------------------------------------------------|--------------
mode                | fluid-height/fixed-height           | choose if the height is fixed based on the height attribute or fluid | fluid-height
height              | px                                  | hero section height                                                  | 0px
background-width    | px                                  | width of the image used                                              | 0px
background-height   | px                                  | height of the image used                                             | 0px
background-url      | url                                 | absolute background url                                              | n/a
background-color    | color                               | hero background color                                                | #ffffff
background-position | top/center/bottom left/center/right | background image position                                            | center center
padding             | px                                  | supports up to 4 parameters                                          | 0px
padding-top         | px                                  | top offset                                                           | 0px
padding-right       | px                                  | right offset                                                         | 0px
padding-left        | px                                  | left offset                                                          | 0px
padding-bottom      | px                                  | bottom offset                                                        | 0px
