import React from 'react'

const PendingTasks = ({pendingTasks}) => {
    return (
        <div>
            <h3 className="pending-tasks-text">Pending Tasks: {pendingTasks}</h3>
        </div>
    )
}

export default PendingTasks
