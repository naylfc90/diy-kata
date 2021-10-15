// getPerson iterates through object and finds employee who matches name search
// this method returns the object so when return getPerson.role is run it just
// returns the employees role
const getEmployerRole = (employeeName, employees) => {
  const getRole = employees.find(employee => employee.name === employeeName);
  return getRole.role;
};

module.exports = getEmployerRole;