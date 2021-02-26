function getStudentForCreation(request) {
    return {
        studentName: request.studentName,
        studentGradeLevel: request.studentGradeLevel,
        studentUniversityName: request.studentUniversityName,
        studentPhoneNumber: request.studentPhoneNumber,
        studentEmail: request.studentEmail,
        studentAddress: request.studentAddress,
        studentCity: request.studentCity,
        studentState: request.studentState,
        studentCountry: request.studentCountry
    };
}

function getStudentForUpdate(request) {
    return {
        studentName: request.studentName,
        studentGradeLevel: request.studentGradeLevel,
        studentUniversityName: request.studentUniversityName,
        studentPhoneNumber: request.studentPhoneNumber,
        studentEmail: request.studentEmail,
        studentAddress: request.studentAddress,
        studentCity: request.studentCity,
        studentState: request.studentState,
        studentCountry: request.studentCountry
    };
}

function parseStudentEntityToDTO(entity) {
    return {
        studentName: entity.studentName,
        studentGradeLevel: entity.studentGradeLevel,
        studentUniversityName: entity.studentUniversityName,
        studentPhoneNumber: entity.studentPhoneNumber,
        studentEmail: entity.studentEmail,
        studentAddress: entity.studentAddress,
        studentCity: entity.studentCity,
        studentState: entity.studentState,
        studentCountry: entity.studentCountry
    };
}

module.exports = {
    getStudentForCreation: getStudentForCreation,
    getStudentForUpdate: getStudentForUpdate
};