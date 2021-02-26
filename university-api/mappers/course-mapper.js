function getCourseForCreation(request) {
    return {
        courseTitle: request.courseTitle,
        courseDescription: request.courseDescription,
        coursePrice: request.coursePrice,
        courseRating: request.courseRating
    };
}

function getCourseForUpdate(request) {
    return {
        courseTitle: request.courseTitle,
        courseDescription: request.courseDescription,
        coursePrice: request.coursePrice,
        courseRating: request.courseRating
    };
}

module.exports = {
    getCourseForCreation: getCourseForCreation,
    getCourseForUpdate: getCourseForUpdate
};