import moment from 'moment'

function getObjectPropertyValueByKey(obj: any, key: string): any | undefined {
  const map = new Map(Object.entries(obj))
  if (obj.hasOwnProperty(key) && map) {
    return map.get(key)
  }
}

/**
 * Generates unique ID for give prefix.
 * @param {string} prefix Prefix for generated ID
 * @returns {boolean}
 */
function getUniqueIdWithPrefix(prefix: string | undefined): string {
  const result = Math.floor(Math.random() * new Date().getTime()).toString()
  if (!prefix) {
    return result
  }

  return `${prefix}${result}`
}

function getUniqueDPXId(prefix: string | undefined): string {
  const code = Math.floor(Math.random() * new Date().getTime())
    .toString()
    .slice(0, 6)
  const codeyear = moment(new Date(), 'DD/MM/YY').format('YYMM')

  const result = `${codeyear}-${code}`
  if (!prefix) {
    return result
  }

  return `${prefix}${result}`
}

/* eslint-disable no-useless-escape */
function stringSnakeToCamel(str: string): string {
  return str.replace(/(\-\w)/g, function (m) {
    return m[1].toUpperCase()
  })
}

function toJSON(value: string | JSON): JSON | undefined {
  if (typeof value !== 'string') {
    return value
  }

  if (!value) {
    return undefined
  }

  // ("'" => "\"");
  const result = value
    .toString()
    .split('')
    .map((el) => (el !== "'" ? el : '"'))
    .join('')
  var jsonStr = result.replace(/(\w+:)|(\w+ :)/g, function (matched) {
    return '"' + matched.substring(0, matched.length - 1) + '":'
  })
  try {
    return JSON.parse(jsonStr)
  } catch {
    return undefined
  }
}

export {
  getObjectPropertyValueByKey,
  getUniqueIdWithPrefix,
  getUniqueDPXId,
  stringSnakeToCamel,
  toJSON,
}
