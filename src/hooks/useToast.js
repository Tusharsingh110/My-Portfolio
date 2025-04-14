import { useToastDispatchContext } from "../contexts/ToastProvider";

export function useToast() {
    // Get the dispatch function from the context
    const dispatch = useToastDispatchContext();

    // Function to add a toast
    /**
     * Function to add a toast
     * @param {string} type - Type of the toast (e.g., 'success', 'error')
     * @param {string} message - The message to display
     * @param {number} [duration=5000] - Duration in milliseconds before the toast disappears
     */
    function toast(type, message, duration = 5000) {
        const id = Date.now(); // Unique ID for the toast
        dispatch({
            type: "ADD_TOAST",
            toast: {
                type, // Type of the toast (e.g., success, error)
                message, // The message to display
                id, // Unique identifier for the toast
            }
        });

        // Set a timeout to automatically delete the toast after the duration
        setTimeout(() => {
            dispatch({
                type: "DELETE_TOAST",
                id
            });
        }, duration);

    }

    return toast; // Return the toast function to be used in components
}
