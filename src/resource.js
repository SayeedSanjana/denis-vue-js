export default Object.freeze({
    methods: {
        objectMap(target, source) {
            if (typeof target === "object" && typeof source === "object") {
                Object.keys(target).forEach(
                    (prop) => (target[prop] = source[prop])
                );
                return target;
            }
            // throw new Error("objectMap only supports type object");
        },
    },
});