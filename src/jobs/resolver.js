export default handleFn => {
    return (req, res, next) => {
        return Promise
            .resolve(handleFn(req, res, next))
            .catch(error => next(error))
    }
}