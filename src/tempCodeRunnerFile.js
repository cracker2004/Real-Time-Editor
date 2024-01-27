app.use(express.static('build'));
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})