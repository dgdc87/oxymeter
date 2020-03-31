const Router = require('express-promise-router')
const db     = require('../db')

const router = new Router()
module.exports = router

//TODO: checks params and filter in case that is missing access_token
// and filter stranger things as NaN
router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.query(`INSERT INTO data (spo2, ppm, batt, sensor_id) VALUES (${req.body.spo2}, ${req.body.ppm}, ${req.body.batt}, ${id})`, null)
    const resp = await db.query('SELECT * FROM data WHERE 1=1', null)
    resp.rows.forEach((row) =>{
        console.log(row)
    })
    res.send('ok')
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
})
