import Scanner from "../components/Scanner";
import "../scanner.css";

export default function Page() {
    return (
        <div className="scannerPage">
            <div className="scannerCard">
                <h1>Attendance Scanner</h1>
                <p>Scan Student Barcode to Mark Attendance</p>

                <Scanner />
            </div>
        </div>
    );
}