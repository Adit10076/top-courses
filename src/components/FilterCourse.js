function FilterCourse({ id, title, changeCourses , selectedId }) {
    return (
            <button onClick={(event) => {
            event.preventDefault()
            changeCourses(title);
        }} className="btn-white">{title}</button>
    );
}
export default FilterCourse;