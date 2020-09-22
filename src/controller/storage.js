const addData = (title, data) => localStorage.setItem(title, data)

const readData = (title) => localStorage.getItem(title)

export default { addData, readData }
