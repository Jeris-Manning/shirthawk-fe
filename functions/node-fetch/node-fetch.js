const fetch = require('node-fetch')
exports.handler = async function () {
  try {
    const response = await fetch('https://shirthawk.herokuapp.com/api/designs/', {
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const res = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: res.data }),
    }
  } catch (error) {
    console.log(error) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
