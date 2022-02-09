const Plugin3 = {
    install: (app) => {
        app.config.globalProperties.$bonjour = () => {
            return 'Bonjour'
        }
    }
}