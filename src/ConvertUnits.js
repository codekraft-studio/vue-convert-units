import convert from 'convert-units'

function buildString({res, suffix, short}) {
  if (typeof res === 'object') {
    suffix = short
      ? res.units
      : res.val > 1
        ? res.plural
        : res.singular
    res = res.val
  }
  return `${res} ${suffix}`
}

function conv({
  value,
  from,
  to,
  suffix,
  short,
  options
}) {
  const method = (to === 'best')
    ? 'toBest'
    : 'to'
  let res = ''
  try {
    res = convert(value).from(from)[method](to)
    res = buildString({res, suffix, short})
  } catch (e) {
    if (options.showErrors) {
      res = e.message
    }
  }
  return res
}

export default {
  install(Vue, options = {}) {
    options = Object.assign({
      showErrors: false
    }, options)

    // Expose convert method
    Vue.prototype.$convert = convert

    Vue.filter('convert', (value, from, to, opt = null) => {
      if (!value)
        return
      const opts = {value, from, to, options}
      if (to === 'best')
        opts.short = opt
      else
        opts.suffix = opt
      return conv(opts)
    })
  }
}
