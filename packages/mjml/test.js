var mjml = require('./lib/index')

// console.log(
mjml.mjml2html(`
  <mjml>
    <content>
      <mj-body>
        <mj-quote
          author="POOL, DEAD (aka DEADPOOL)"
          image-href="http://i.imgur.com/0OR13om.jpg"
          border="2px solid #e04343">
          You might wonder: why the red suit? Well, it’s so the bad guys can’t see me bleed!
        </mj-quote>
      </mj-body>
    </content>
  </mjml>
`, { beautify: true })
// )
