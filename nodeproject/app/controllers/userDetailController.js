function userDetailController(req) {
    const defaultResponse = require('../helper/defaultResponseHelper');
    return ({
        login: async (res) => {
            try {
                await axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
                        // console.log(response);
                    res.status(200).json(defaultResponse.createSuccessResponse("200", "success", response.data));
                }).catch(function (error) {
                    res.status(400).json(defaultResponse.createErrorResponse(process.env.errorStatus, "error", error.message));
                });

            } catch (e) {
                res.status(400).json(defaultResponse.createErrorResponse(process.env.errorStatus, "error", e.message));
            }
        }
    })

}
module.exports=userDetailController;