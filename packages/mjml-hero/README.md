## MJ-HERO

<p align="center">
<img src="" style="width: px; padding: px;" />
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

For better result we encourage you to use a background image with a 600px width and always specified a background color by default in case of the user mail client does not support background image.
</aside>

attribute           | unit                                | description                                                          | default value
--------------------|-------------------------------------|----------------------------------------------------------------------|--------------
mode                | fluid-height/fixed-height           | choose if the height is fixed based on the height attribute or fluid | fluid-height
height              | px                                  | hero section height                                                  | 0px
background-width    | px                                  | width of the image used                                              | 0px
background-height   | px                                  | height of the image used                                             | 0px
background-url      | url                                 | absolute background url                                              | n/a
background-color    | color formats                       | hero background color in hexadecimal format                          | n/a
background-position | top/center/bottom left/center/right | background image position                                            | center center
padding             | px                                  | work the same way as the CSS property padding                        | 0px
padding-top         | px                                  | self explanatory                                                     | 0px
padding-right       | px                                  | self explanatory                                                     | 0px
padding-left        | px                                  | self explanatory                                                     | 0px
padding-bottom      | px                                  | self explanatory                                                     | 0px
