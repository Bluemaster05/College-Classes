// Name: Logan Garder
// Class: CPTR-456 Advanced Web Programming
// Date:10-2-2024
// Honor Statement: I have neither given nor received any unauthorized help on this lab. [X]

/************************** INSTRUCTIONS **************************

In this lab, you'll be working with the JavaScript Array API to become more familiar with handling 
advanced array operations. Each of the functions you implement will, necessarily, use one of the following
JavaScript array methods:

* filter
* map
* reduce
* sort

Please do not implement those operations by hand - use the built-in methods.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!! YOU SHOULD NOT USE ANY MANUAL LOOPS IN THIS ASSIGNMENT !!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
You shouldn't want the extra work, and I don't want to give you a zero 💀💻. 

The function definitions and Intellisense comments should provide you with
enough information to get started, but make sure to write tests, as you only
get three tries to pass my unit tests.

*/


/************** TYPE DEFINITIONS - DO NOT MODIFY **************

@typedef User
@property {string} firstName 
@property {string} lastName
@property {boolean} isAdmin
@property {number} salary

@typedef {User & {fullName: string}} UpdatedUser

*/

/************************ IMPLEMENTATIONS ************************/

/**
 * Returns users whose salary is within the offset (inclusive) of the group average.
 * @param {Array<User>} users An array containing user objects.
 * @param {number} offset A numeric offset that defines the range from the average salary.
 * @returns {Array<User>} An array of users matching the offset criteria.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
 *   { firstName: 'David', lastName: 'Davis', isAdmin: true, salary: 70000 }
 * ];
 * 
 * const offset = 5000;
 * const result = removeOutliers(users, offset);
 * console.log(result);
 * 
 * Output:
 * [
 *  { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *  { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ]
 */
 const removeOutliers = (users, offset) => {
    const totalSum = users.reduce((sum, user) => {
        return sum + user.salary
    }, 0)
    const avg = totalSum / users.length
    const maxSalary = avg + offset
    const minSalary = avg - offset
    const usersInRange = users.filter(user => user.salary >= minSalary && user.salary <=maxSalary)
    return usersInRange
}

/**
 * Compresses all the users into a single semicolon-separated string.
 * @param {Array<User>} users An array containing user objects.
 * @returns {string} A stringified, semicolon-separated version of all the users.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ];
 * 
 * const result = compress(users);
 * console.log(result);
 * 
 * Output:
 * "Alice Smith is not an admin and makes $50000 annually;Bob Johnson is an admin and makes $55000 annually;Charlie Brown is not an admin and makes $60000 annually;"
 */
const compress = (users) => {
    
    // const userStringList = users.map((user) => {
    //     let adminOutput = ""
    //     if (user.isAdmin === false){
    //         adminOutput = "not "
    //     }
    //     return `${user.firstName} ${user.lastName} is ${adminOutput}an admin and makes $${user.salary} annually;`
    // })
    // const compressed = userStringList.join('')
    
    const compressed  = users.reduce((bigString, user) => {
        let adminOutput = ""
        if (user.isAdmin === false){
            adminOutput = "not "
        }
        return bigString + `${user.firstName} ${user.lastName} is ${adminOutput}an admin and makes $${user.salary} annually;`
    }, '')

    return compressed
}


/**
 * Adds a full name property to all users.
 * @param {Array<User>} users An array containing user objects.
 * @returns {Array<UpdatedUser>} The updated users with a `fullName` property added.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 }
 * ];
 * 
 * const result = reformat(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
 * ]
 */
const reformat = (users) => {
    if (users.length === 0){
        return []
    }
    const reformatedUsers = users.map((user) => {
        return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`
        }
    })
    return reformatedUsers
}

/**
 * Sorts the users (ascending) by their salaries.
 * @param {Array<User>} users An array containing user objects.
 * @returns {Array<User>} The sorted users array.
 * 
 * @example
 * const users = [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 }
 * ];
 * 
 * const result = salarySort(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 50000 },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 55000 },
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 60000 }
 * ]
 */
const salarySort = (users) => {
    const usersCopy = [...users]   
    const sortedList = usersCopy.sort((user1, user2) =>  user1.salary - user2.salary )
    return sortedList
}



/**
 * Sorts the users (ascending ASCII) by their full name.
 * @param {Array<User>} users - An array containing user objects.
 * @returns {Array<UpdatedUser>} - The sorted users array.
 * 
 * @example
 * const users = [
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 }
 * ];
 * 
 * const result = fullNameSort(users);
 * console.log(result);
 * 
 * Output:
 * [
 *   { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000, fullName: 'Alice Smith' },
 *   { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000, fullName: 'Bob Johnson' },
 *   { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000, fullName: 'Charlie Brown' }
 * ]
 */
const fullNameSort = (users) => {
    let usersCopy = [...users]
    usersCopy = reformat(usersCopy)
    usersCopy.sort((user1, user2) => {
        if (user1.fullName === user2.fullName) {
            return 0
        }
        else if (user1.fullName > user2.fullName) {
            return 1
        }
        else if(user1.fullName < user2.fullName) {
            return -1
        }
    })
    return usersCopy
}

console.log(fullNameSort([
    { firstName: 'Charlie', lastName: 'Brown', isAdmin: false, salary: 60000 },
    { firstName: 'Alice', lastName: 'Smith', isAdmin: false, salary: 50000 },
    { firstName: 'Bob', lastName: 'Johnson', isAdmin: true, salary: 55000 }
]))


/* DO NOT MODIFY */
export {
    removeOutliers,
    compress,
    reformat,
    salarySort,
    fullNameSort,
}

fwkjbwekfjbwewfjbjwefkjkbwefkjk