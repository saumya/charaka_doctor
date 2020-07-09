//
const apiObj = {
    endpoint : 'http://localhost:3000/api',
    version : '/v1',
    /* =============================== POST ================================== */
    post: {
        loginDoctor: '/loginDoctor',
        create_prescription : '/createPrescription/',
    },
    /* =============================== PUT ================================== */
    put: {
        update_doctor : '/updateDoctor/',
        update_schedule : '/updateSchedule/',
    },
    /* =============================== DELETE ================================== */
    delete: {},
    /* =============================== GET ================================== */
    get: {
        all_schedules_by_doctor_id : '/getSchedulesByDoctorId/',
    }
}
export default apiObj