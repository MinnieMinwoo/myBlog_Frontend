const getDate = (timestamp) => {
    var date = new window.Date(timestamp);
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return `${year}. ${month}. ${day}`;
};

export default getDate;
