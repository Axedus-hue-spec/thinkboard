export function formateDate(date) {
    return date.toLocaleString('en-US', {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
};