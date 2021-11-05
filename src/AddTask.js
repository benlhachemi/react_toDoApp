const AddTask = () => {
    return (
        <div>
            <form className = 'form form-group'>
                <input type="text" className="form-control mb-3" placeholder="Task Title..." required></input>
                <input type="text" className="form-control mb-3" placeholder="Task Description..." required></input>
                <input type="text" className="form-control mb-3" placeholder="Background image" required></input>
                <input type="time" className="form-control mb-3" placeholder="Task End Date..." required></input>
            </form>
            <button className = 'btn btn-success'>Add Task</button>
            <hr />
        </div>
    )
}

export default AddTask
