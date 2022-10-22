export default function LogoutUser({ setToken }) {

    return (
        <button
            onClick={() => {
                localStorage.removeItem("token");
                setToken("");
                if (setToken === "") {
                    button.display = 'block';
                }
            }}
        >
            Log Out
        </button>

    );
}