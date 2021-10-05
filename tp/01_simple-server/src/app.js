import http from 'http'

/**
 * @type { import('http').RequestListener }
 */
async function dispatch(req, res) {
  req.setTimeout(100)
}

export default http.createServer(dispatch)
