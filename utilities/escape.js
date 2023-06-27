const escape = function (str) {
    // eslint-disable-next-line no-useless-escape
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

module.exports = escape;
