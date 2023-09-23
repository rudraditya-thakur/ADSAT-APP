import React, { useEffect, useState, useRef } from "react";

// Define the extractBracketedStrings function
function extractBracketedStrings(logMessage) {
	const bracketedStrings = [];
	let currentString = "";
	let bracketCount = 0;

	for (let i = 0; i < logMessage.length; i++) {
		const char = logMessage[i];

		if (char === "[") {
			bracketCount++;
		} else if (char === "]" && bracketCount > 0) {
			bracketCount--;
			if (bracketCount === 0) {
				bracketedStrings.push(currentString);
				currentString = "";
			}
		}

		if (bracketCount > 0) {
			currentString += char;
		}
	}

	return bracketedStrings;
}

const AppWs = () => {
	const [isPaused, setPaused] = useState(false);
	const [logs, setLogs] = useState([]);
	const ws = useRef(null);

	useEffect(() => {
		ws.current = new WebSocket("ws://localhost:8000/stream-logs");

		ws.current.onopen = () => {
			console.log("WebSocket opened");
		};

		ws.current.onclose = () => {
			console.log("WebSocket closed");
		};

		return () => {
			if (ws.current) {
				ws.current.close();
			}
		};
	}, []);

	useEffect(() => {
		if (!ws.current) return;

		ws.current.onmessage = (e) => {
			if (!isPaused) {
				const logLine = e.data;
				setLogs((prevLogs) => [...prevLogs, logLine]);
			}
		};
	}, [isPaused]);

	const handleTogglePause = () => {
		setPaused(!isPaused);
	};

	const clearLogs = () => {
		setLogs([]);
	};

	// Filter logs to only include those with bracketed strings
	const filteredLogs = logs.filter(
		(log) => extractBracketedStrings(log).length > 0
	);

	return (
		<div className="dark:text-white min-h-screen p-2 rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Malware Detection Log Viewer</h1>
			<div className="mb-4">
				<button
					onClick={handleTogglePause}
					className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-2 py-1 mr-2"
				>
					{isPaused ? (
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 inline-block mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 1a9 9 0 100 18 9 9 0 000-18zM6 9a1 1 0 112 0v2a1 1 0 11-2 0V9zm6-2a1 1 0 00-1-1H9a1 1 0 100 2h2a1 1 0 001-1z"
									clipRule="evenodd"
								/>
							</svg>
							Resume
						</span>
					) : (
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 inline-block mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M4.293 3.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
							Pause
						</span>
					)}
				</button>
				<button
					onClick={clearLogs}
					className="bg-red-500 hover:bg-red-600 text-white rounded-full px-2 py-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3 inline-block mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Clear Logs
				</button>
			</div>
			<div className="log-container">
				<table className="min-w-full">
					<thead>
						<tr>
							<th className="px-2 py-1">Date and Time</th>
							<th className="px-2 py-1">File</th>
							<th className="px-2 py-1">Risk Level</th>
						</tr>
					</thead>
					<tbody>
						{filteredLogs.map((log, index) => {
							const logParts = log.split(" - ");
							const dateAndTime = logParts[0];
							const fileAction = logParts[1];
							const bracketedStrings = extractBracketedStrings(fileAction);
							let riskLevel = "None";
							let riskLevelColor = "text-green-500"; // Default color for "None"
                            let riskText = "None";

							// Check if bracketed strings contain a risk level and set the color accordingly
							if (bracketedStrings.length > 0) {
								riskLevel = bracketedStrings[0];
								switch (riskLevel) {
									case "[Not a PE":
										riskText = "None";
										riskLevelColor = "text-green-500";
										break;
									case "[Low":
										riskText = "Low";
										riskLevelColor = "text-yellow-500";
										break;
									case "[Medium":
										riskText = "Medium";
										riskLevelColor = "text-orange-500";
										break;
									case "[High":
										riskText = "High";
										riskLevelColor = "text-red-500";
										break;
									case "[Severe":
										riskText = "Severe";
										riskLevelColor = "text-darkred-500";
										break;
									default:
										riskLevelColor = "text-green-500"; // Default color for "None"
								}
							}

							return (
								<tr key={index}>
									<td className="px-2 py-1 font-light">{dateAndTime}</td>
									<td className="px-2 py-1 font-light">{fileAction}</td>
									<td className={`px-2 py-1 font-semibold ${riskLevelColor}`}>{riskText}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AppWs;
