/**
 *
 * @param {obj} - That is being checked for being empty
 * @returns {boolean}
 */
export default function isEmpty(obj) {
    return !Object.keys(obj).length > 0;
}
