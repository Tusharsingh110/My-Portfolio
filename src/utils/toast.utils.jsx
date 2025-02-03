export const getToastStyle = (type) => {
    type = type.toString().toLowerCase();
    switch (type) {
        case 'success':
            return 'border-2 border-success-500 text-success-700';
        case 'error':
            return 'border-2 border-error-500 text-error-700';
        case 'warn':
            return 'border-2 border-warn-500 text-warn-700';
        case 'info':
            return 'border-2 border-info-500 text-info-700';
        default:
            return 'border-2 border-default-500 text-default-700';
    }
};


export const getToastCloseButtonBorder= (type) => {
    type = type.toString().toLowerCase();
    switch (type) {
        case 'success':
            return 'border border-success-500';
        case 'error':
            return 'border border-error-500';
        case 'warn':
            return 'border border-warn-500';
        case 'info':
            return 'border border-info-500';
        default:
            return 'border border-default-500';
    }
}