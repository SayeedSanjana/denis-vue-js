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
        parseJwt(token) {
            // console.log(token);
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
            c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            const payload = JSON.parse(jsonPayload);
            return payload.sub;
            // this.uid = payload.sub

          
        },
        
    },
});



