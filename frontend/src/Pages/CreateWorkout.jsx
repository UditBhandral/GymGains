import { useState } from "react";
import "./CreateWorkout.css";

function CreateWorkout() {
    const muscleGroup = ['Chest','Back','Legs','Arms','Bicep','Tricep'];

    const [selected, setSelected] = useState("");
    const [title, setTitle] = useState("");
    const [currentWorkout, setCurrentWorkout] = useState([]);
    const [allWorkouts, setAllWorkouts] = useState([]);

    const titleMap = {
        Chest: "Chest Workout 💪",
        Back: "Back Workout",
        Legs: "Leg Day 🦵",
        Arms: "Arms Workout",
        Bicep: "Bicep Pump",
        Tricep: "Tricep Power"
    };

    const loadWorkout = () => {
        switch (selected) {
            case 'Chest': return ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'];
            case 'Back': return ['Pull Ups', 'Deadlift', 'Lat Pulldown'];
            case 'Legs': return ['Squats', 'Lunges', 'Leg Press'];
            case 'Arms': return ['Push Ups', 'Dips'];
            case 'Bicep': return ['Barbell Curl', 'Hammer Curl'];
            case 'Tricep': return ['Tricep Pushdown', 'Overhead Extension'];
            default: return [];
        }
    };

    const handleWorkout = (workout) => {
        if (currentWorkout.includes(workout)) return;
        setCurrentWorkout((prev) => [...prev, workout]);
    };

    const handleSave = () => {
        if (!title || currentWorkout.length === 0) return;

        const newWorkout = {
            title,
            workouts: currentWorkout
        };

        setAllWorkouts((prev) => [...prev, newWorkout]);

        // Reset
        setTitle("");
        setCurrentWorkout([]);
        setSelected("");
    };

    const workouts = loadWorkout();

    return (
        <div className="container">
            <h2>Create Workout</h2>

            {/* Title */}
            <input
                type="text"
                placeholder="Workout Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            {/* Select */}
            <select
                value={selected}
                onChange={(e) => {
                    const value = e.target.value;
                    setSelected(value);
                    setCurrentWorkout([]);

                    // Auto title
                    setTitle(titleMap[value] || "");
                }}
            >
                <option value="">Select Muscle Group</option>
                {muscleGroup.map((muscle, index) => (
                    <option key={index} value={muscle}>
                        {muscle}
                    </option>
                ))}
            </select>

            {/* Workout Cards */}
            <ul className="workout-list">
                {selected === "" ? (
                    <p className="placeholder">Select a muscle group</p>
                ) : (
                    workouts.map((workout, index) => {
                        const isSelected = currentWorkout.includes(workout);

                        return (
                            <li
                                key={index}
                                className={`card ${isSelected ? "selected" : ""}`}
                                onClick={() => handleWorkout(workout)}
                            >
                                {workout}
                            </li>
                        );
                    })
                )}
            </ul>

            {/* Current Workout */}
            <h3>Current Workout</h3>
            <ul className="created-list">
                {currentWorkout.length === 0 ? (
                    <p className="placeholder">No workouts selected</p>
                ) : (
                    currentWorkout.map((workout, index) => (
                        <li key={index} className="created-card">
                            {workout}
                        </li>
                    ))
                )}
            </ul>

            {/* Save */}
            <button onClick={handleSave}>Save Workout</button>

            {/* Saved Workouts */}
            <h3>Saved Workouts</h3>
            {allWorkouts.length === 0 ? (
                <p className="placeholder">No saved workouts</p>
            ) : (
                allWorkouts.map((w, index) => (
                    <div key={index} className="workout-block">
                        <h4>{w.title}</h4>
                        <ul>
                            {w.workouts.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default CreateWorkout;