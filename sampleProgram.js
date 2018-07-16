const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.karvymfs.com/platformservice/')
  .type('#txtEmail', 'thota.harshit@gmail.com')
  .type('#txtPANNo', 'BAZPT9623A')
  .type('#txtPassword', 'BAZPT9623A')
  .type('#txtRePassword', 'BAZPT9623A')
  .click('#btnGenerate')
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })