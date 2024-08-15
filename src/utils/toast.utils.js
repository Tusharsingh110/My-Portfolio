export const getToastStyle = (type) => {
    type = type.toLowerCase();
    switch (type) {
        case 'success':
            return 'bg-success-100 border border-success-500 text-success-700';
        case 'error':
            return 'bg-error-100 border border-error-500 text-error-700';
        case 'warning':
            return 'bg-warning-100 border border-warning-500 text-warning-700';
        case 'info':
            return 'bg-info-100 border border-info-500 text-info-700';
        default:
            return 'bg-default-100 border border-default-500 text-default-700';
    }
};
