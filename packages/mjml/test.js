var mjml = require('./lib/index')

console.log(mjml.mjml2html(`
  <mjml>
    <content>
      <mj-body>
        <mj-quote image-href="">

        </mj-quote>
      </mj-body>
    </content>
  </mjml>
`, { beautify: true }))
