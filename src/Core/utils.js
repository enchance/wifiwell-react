import settings from "./settings";


/**
 * Converts a string to title case with exceptions
 * @param str           String to convert
 * @param exc           Disregard these words except if it's the first word
 * @returns {string}
 */
export const titleCase = (str, exc=[]) => {
    // Init
    let excluded = [...exc, 'a', 'the', 'for', 'or', 'to', 'on']

    if(!str) {
        return ''
    }

    return str.split(' ').map((word, idx) => {
        if(!excluded.includes(word) || !idx) {
            return word[0].toUpperCase() + word.substr(1).toLowerCase()
        }
        return word.toLowerCase()
    }).join(' ')
}

/**
 * Flatten an array of objects such as the routes.js route config using a key of your choosing.
 * Used mainly for flattening a routes config before generating the routes.
 * @param arr   The array of objects to flatten
 * @param key   The key which holds more objects.
 * @returns {Array} Flattened list
 */
export const flatten = (arr, key='nested') => {
    return arr ? arr.reduce((result, item) => [
        ...result,
        {...item},
        ...flatten(item[key])
    ], []) : [];
}

/**
 * Outputs text to the console showing which state/prop changed which caused the update.
 * For use in componentDidUpdate() only and must be in DEBUG mode.
 * @param Object
 * @param props         Current props
 * @param state         Current state
 * @param prevProps     Previous props
 * @param prevState     Previous state
 * @param debug         Use only in debug mode
 */
export const track_updates = (Object, props, state, prevProps, prevState, debug=settings.DEBUG) => {
    if(debug) {
        Object.entries(props).forEach(([key, val]) =>
            prevProps[key] !== val && console.log(`Prop '${key}' changed`)
        );
        if (state) {
            Object.entries(state).forEach(([key, val]) =>
                prevState[key] !== val && console.log(`State '${key}' changed`)
            );
        }
    }
}