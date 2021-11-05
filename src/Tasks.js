const Tasks = ({tasks}) => {
    return (
        <div className='Tasks'>

            {tasks.map((elt) => (
                <div className="card border-primary mb-3" style={{backgroundImage: `url(${elt.background})`}}>
                    <div className="card-header d-flex text-center">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-remove"></i>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{elt.title}</h4>
                        <p className="card-text">{elt.description}</p>
                        <alert className='alert alert-info'>
                            <i className="fa fa-clock-o"></i>
                            {elt.end_time}
                        </alert>
                    </div>
                </div>
            ))}

            
        </div>
    )
}

export default Tasks
