const Plugin1 = {
    install: (app) => {
        app.mixin({
            mounted() {
                console.log('monté')
            }
        })
    }
}