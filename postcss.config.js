let environment = {
    plugins: [
        require('tailwindcss')("./tailwind.config.js"),
        require('autoprefixer'),
    ],
}

if(process.env.NODE_ENV !== undefined && process.env.NODE_ENV.trim() === 'production') {
    environment.plugins.push(
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/**/*.html'
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] 
        })
    )
}

module.exports = environment;