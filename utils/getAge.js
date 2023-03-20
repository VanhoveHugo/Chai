const getAge = (date) => {
    const birthdate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) age--;
    return age;
}

module.exports = getAge;