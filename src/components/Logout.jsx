export default function LogoutUser({ setToken }) {

    return (
        <button
            onClick={() => {
                localStorage.removeItem("token");
                setToken("");
            }}
        >
            Log Out
        </button>

    );
}