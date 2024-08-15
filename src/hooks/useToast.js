import { useToastDispatchContext } from "../contexts/ToastProvider";

export function useToast() {
    // Get the dispatch function from the context
    const dispatch = useToastDispatchContext();

    // Function to add a toast
    function toast(type, message) {
        const id = Date.now(); // Unique ID for the toast
        dispatch({
            type: "ADD_TOAST",
            toast: {
                type, // Type of the toast (e.g., success, error)
                message, // The message to display
                id // Unique identifier for the toast
            }
        });
    }

    return toast; // Return the toast function to be used in components
}
