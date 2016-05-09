## MJ-HERO

<!--[if mso]>
  <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td style="font-size:0px; line-height:0px; mso-line-height-rule:exactly;">
<![endif]-->
<!--[if mso]>
  <v:image xmlns:v="urn:schemas-microsoft-com:vml" croptop="0" cropbottom="0" style="width:600px; height:245px; position:absolute; top:0; left:0; border:0; z-index:-3;" src="http://i.imgur.com/lHOvxs4.jpg" />
<![endif]-->
<div style="margin:0 auto;max-width:600px;">
  <table cellpadding="0" cellspacing="0" style="width:100%;">
    <tbody>
      <tr style="vertical-align:top;">
        <td height="245" style="background-repeat:no-repeat;vertical-align:top;background:#2a3448 url(http://i.imgur.com/lHOvxs4.jpg) no-repeat center center / cover;padding-top:20px;padding-left:0;padding-right:0;padding-bottom:0;background-position:center center;"
          background="http://i.imgur.com/lHOvxs4.jpg">
          <!--[if mso]>
            <table border="0" cellpadding="0" cellspacing="0" align="left" width="370" style="width:370px;"><tr><td style="padding:0;background-color:#ffffff;">
          <![endif]-->
          <div class="mj-hero-content" style="float:left;margin:0px;width:370px;background-color:#ffffff;">
            <table cellpadding="0" cellspacing="0" style="width:100%;margin:0px;">
              <tbody>
                <tr>
                  <td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;">
                    <table style="width:100%;margin:0px;">
                      <tbody>
                        <tr>
                          <td style="word-break:break-word;font-size:0px;padding:10px 25px;text-align:left;">
                            <div style="cursor:auto;color:#000000;font-family:Helvetica;font-size:13px;line-height:22px;">
                              Hello World !
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--[if mso]>
            </table>
          <![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!--[if mso]>
  </td></tr></table>
<![endif]-->

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
      <mj-hero>
  </mj-body>
</mjml>

```
Display a section with a background image and some content inside (mj-text, mj-button, mj-image ...)

The height attribute is required only for the fixed-height mode
The background position does not work in mode fluid-height and on outlook.com
For better result we encourage you to use a background image with a 600px width

attribute           | unit                                | description                                                          | default value
--------------------|-------------------------------------|----------------------------------------------------------------------|--------------
mode                | fluid-height/fixed-height           | choose if the height is fixed based on the height attribute or fluid | fluid-height
height              | px                                  | hero section height                                                  | 0px
background-width    | px                                  | width of the image used                                              | 0px
background-height   | px                                  | height of the image used                                             | 0px
background-url      | url                                 | background url                                                       | n/a
background-color    | color formats                       | hero color                                                           | n/a
background-position | top/center/bottom left/center/right | background image position                                            | center center
padding             | px                                  | supports up to 4 parameters                                          | 0px
padding-top         | px                                  | top offset                                                           | 0px
padding-right       | px                                  | right offset                                                         | 0px
padding-left        | px                                  | left offset                                                          | 0px
padding-bottom      | px                                  | bottom offset                                                        | 0px
