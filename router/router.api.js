const express = require('express');
const router = express.Router();

router.get('/timestamp/:date_string*?', function (req, res) {
    const { date_string } = req.params;
    const date = date_string ? !date_string.match(/\W/) ? new Date(parseInt(date_string)) : new Date(date_string) : new Date();
    if (isNaN(date.getTime())) res.json({ error: date.toString() })
    else res.json({ unix: date.getTime(), utc: date.toUTCString() })
})

module.exports = router;