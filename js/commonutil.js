export function isArrayLike(o) {
    if (typeof o === 'object' &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&// length是整数
        o.length < 4294967296  // Math.pow(2,32)
    ) {
        return true;
    } else {
        return false;
    }
}
 