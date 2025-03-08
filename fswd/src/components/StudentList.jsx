const StudentDetails = ({name,rollNum})=>{
    return(
        <div className="Student-card">
        <h1>{name}</h1>
        <h1>{rollNum}</h1>
        </div>
    )
}

export default StudentDetails;